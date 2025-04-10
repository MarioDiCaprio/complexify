"use client"

import React, {JSX, useEffect, useMemo, useRef, useState} from 'react';
import { useGesture } from '@use-gesture/react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {
    autoCalculateDomain,
    Interval,
    scaleInterval,
    useCombinedEditorInputIntoGLSL
} from "@/shaders/utils";
import {GLSL_FOR_DOMAIN_COLORING} from "@/shaders/shaders";
import {useStore} from "@/zustand/store";


////////////////////////////////////////////////////////////////////////////////////////

const DEFAULT_INTERVAL: Interval = { min: -2, max: 2 };

const VERTEX_SHADER = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function useDomcolFragmentShader(code: string): string {
    const graphSettings = useStore(store => store.graphSettings);

    return `
        bool showDarkGridLines = ${ graphSettings.showDarkGridLines };
        bool showLightGridLines = ${ graphSettings.showLightGridLines };
        bool isMinimalThemeEnabled = ${ graphSettings.isMinimalThemeEnabled };
    
        ${GLSL_FOR_DOMAIN_COLORING}
        
        uniform float screenWidth;
        uniform float screenHeight;
        uniform float pixelRatio;
        uniform vec2 domainX, domainY;

        ${ code }

        void main() {
            vec2 z = vec2(
                mix(domainX.x, domainX.y, gl_FragCoord.x / (screenWidth * pixelRatio)),
                mix(domainY.x, domainY.y, gl_FragCoord.y / (screenHeight * pixelRatio))
            );

            gl_FragColor = domcol(plottedFunction(z));
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////


/**
 * This component renders an OpenGL mesh using the Three library.
 * The component is a plane upon which is drawn the domain coloring
 * of a given complex function. For more information, refer to the
 * documentation under `DomainColoringOptions`.
 */
const DomainColoringGL: React.FC = () => {
    const code = useCombinedEditorInputIntoGLSL();
    const fragmentShader = useDomcolFragmentShader(code);
    const [requiresReload, setRequiresReload] = useState<boolean>(false);

    // force reload when code changes are detected
    useEffect(() => {
        setRequiresReload(true);
        setTimeout(() => {
            setRequiresReload(false);
        }, 200);
    }, [code, fragmentShader]);

    ////////////////////////////////////////////////////////////////////////////////////////

    // Domain to display, both on the x- and y-axis.
    const [{min: minX, max: maxX}, setDomainX] = useState<Interval>(DEFAULT_INTERVAL);
    const [{min: minY, max: maxY}, setDomainY] = useState<Interval>(DEFAULT_INTERVAL);

    // screen size
    type Viewport = { width: number, height: number, pixelRatio: number };
    const [viewport, setViewport] = useState<Viewport>( { width: 0, height: 0, pixelRatio: 1 });

    /** Reference to the <div> wrapper */
    const containerRef = useRef<HTMLDivElement>(null);
    /** Reference to the shader material */
    const shaderRef = useRef<JSX.IntrinsicElements['shaderMaterial']>(null);

    ////////////////////////////////////////////////////////////////////////////////////////

    // Initial uniforms for the shader material.
    // Ignored after first render for interactivity purposes!
    // To access them later on, access them directly from the shader material.
    const uniforms = useMemo<THREE.ShaderMaterial['uniforms']>(() => ({
        screenWidth:  { value: viewport.width  },
        screenHeight: { value: viewport.height },
        pixelRatio: { value: viewport.pixelRatio },
        domainX: { value: new THREE.Vector2(minX, maxX) },
        domainY: { value: new THREE.Vector2(minY, maxY) }
    }), [viewport, minX, maxX, minY, maxY]);

    /** Sets the shader material's uniforms */
    function setUniformDomain(domainX: Interval, domainY: Interval) {
        if (shaderRef.current?.uniforms) {
            const domX: THREE.Vector2 = shaderRef.current.uniforms['domainX'].value;
            const domY: THREE.Vector2  = shaderRef.current.uniforms['domainY'].value;
            domX.x = domainX.min;
            domX.y = domainX.max;
            domY.x = domainY.min;
            domY.y = domainY.max;
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Calculates the viewport's dimensions in pixels.
     * On the server (=SSR), returns 0x0 dimensions.
     */
    function updateViewport() {
        let newViewport: Viewport = { width: 0, height: 0, pixelRatio: 1 };
        if (typeof window !== 'undefined')
            newViewport = {
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: window.devicePixelRatio
            };
        setViewport(newViewport);
    }

    // update screen size + domain on every reload
    useEffect(() => {
        updateViewport();
        const {x: domainX, y: domainY} = autoCalculateDomain({width: viewport.width, height: viewport.height}, DEFAULT_INTERVAL, DEFAULT_INTERVAL);
        setDomainX(domainX);
        setDomainY(domainY);
    }, [requiresReload]);

    ////////////////////////////////////////////////////////////////////////////////////////

    // Gesture events to do things such as moving and zooming
    useGesture({
        /** Drags the plane around and 'moves' the domain of the plot */
        onDrag: dragProps => {
            if (shaderRef.current?.uniforms) {
                const factor = 1.5;
                const [x, y] = dragProps.delta;
                const domX = shaderRef.current.uniforms['domainX'].value;
                const domY = shaderRef.current.uniforms['domainY'].value;
                const offsetX = x / viewport.width * (domX.y - domX.x) * factor;
                const offsetY = y / viewport.height * (domY.y - domY.x) * factor;
                domX.x -= offsetX;
                // noinspection JSSuspiciousNameCombination
                domX.y -= offsetX;
                // noinspection JSSuspiciousNameCombination
                domY.x += offsetY;
                domY.y += offsetY;
            }
        },
        /** Zooms the plot */
        onWheel: wheelProps => {
            if (shaderRef.current?.uniforms) {
                const domX = shaderRef.current.uniforms['domainX'].value;
                const domY = shaderRef.current.uniforms['domainY'].value;
                const fac = (wheelProps.event.deltaY > 0)? 1 + 0.055 : 1 - 0.055;
                const scaledX = scaleInterval(fac, {min: domX.x, max: domX.y});
                const scaledY = scaleInterval(fac, {min: domY.x, max: domY.y});
                setUniformDomain(scaledX, scaledY);
            }
        },
        onPinch: pinchProps => {
            if (shaderRef.current?.uniforms) {
                const domX = shaderRef.current.uniforms['domainX'].value;
                const domY = shaderRef.current.uniforms['domainY'].value;
                const [pinchDX, pinchDY] = pinchProps.delta;
                const fac = (pinchDX + pinchDY > 0)? 1 + 0.055 : 1 - 0.055;
                const scaledX = scaleInterval(fac, {min: domX.x, max: domX.y});
                const scaledY = scaleInterval(fac, {min: domY.x, max: domY.y});
                setUniformDomain(scaledX, scaledY);
            }
        }
    }, { target: containerRef });

    // if a reload is needed (which it is, every time a re-render is needed)
    // briefly return nothing. Unmounting the canvas and then remounting it
    // forces it to reload.
    // TODO Find a better method, which is unknown as for now!
    if (requiresReload) {
        return (
            <></>
        );
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen touch-none"  ref={containerRef}>
                <Canvas gl={{ preserveDrawingBuffer: true }} style={{ width: '100%', height: '100%', touchAction: 'none' }}>
                    <mesh
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={[1, 1, 1]}
                    >
                        <planeGeometry attach="geometry" args={[100, 100]} />
                        <shaderMaterial
                            ref={shaderRef}
                            attach="material"
                            needsUpdate={true}
                            uniformsNeedUpdate={true}
                            uniforms={uniforms}
                            vertexShader={VERTEX_SHADER}
                            fragmentShader={fragmentShader}
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                </Canvas>
            </div>
        </>

    );
}

export default DomainColoringGL;