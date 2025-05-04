"use client"

import React, {JSX, useEffect, useMemo, useRef, useState} from 'react';
import { useGesture } from '@use-gesture/react';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import {
    autoCalculateDomain,
    Interval, intervalToVector,
    scaleInterval
} from "@/shaders/utils";
import {GLSL_FOR_DOMAIN_COLORING} from "@/shaders/shaders";
import {useStore} from "@/zustand/store";
import MouseInfoPanel from "@/components/app/(graphing)/domain-coloring/MouseInfoPanel";
import {IUniform} from "three";


////////////////////////////////////////////////////////////////////////////////////////

const DEFAULT_INTERVAL: Interval = { min: -2, max: 2 };

const VERTEX_SHADER = `
    void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function useDomcolFragmentShader(code?: string): string {
    const graphSettings = useStore(store => store.graphSettings);

    return `
        bool showDarkGridLines = ${ graphSettings.showDarkGridLines };
        bool showLightGridLines = ${ graphSettings.showLightGridLines };
        bool isMinimalThemeEnabled = ${ graphSettings.isMinimalThemeEnabled };
    
        ${GLSL_FOR_DOMAIN_COLORING}
        
        uniform float screenWidth;
        uniform float screenHeight;
        uniform vec2 domainX, domainY;

        ${ code }

        void main() {
            vec2 z = vec2(
                mix(domainX.x, domainX.y, gl_FragCoord.x / (screenWidth * 2.0)),
                mix(domainY.x, domainY.y, gl_FragCoord.y / (screenHeight * 2.0))
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
    const {glsl: code} = useStore(state => state.parsedEquations);
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
    const [domainX, setDomainX] = useState<Interval>(DEFAULT_INTERVAL);
    const [domainY, setDomainY] = useState<Interval>(DEFAULT_INTERVAL);

    // screen size
    type Viewport = { width: number, height: number, pixelRatio: number };
    const [viewport, setViewport] = useState<Viewport>( { width: 0, height: 0, pixelRatio: 1 });

    /** Reference to the <div> wrapper */
    const containerRef = useRef<HTMLDivElement>(null);
    /** Reference to the shader material */
    const shaderRef = useRef<JSX.IntrinsicElements['shaderMaterial']>(null);

    ////////////////////////////////////////////////////////////////////////////////////////

    type DomainColoringUniforms = {
        screenWidth: IUniform<number>;
        screenHeight: IUniform<number>;
        domainX: IUniform<THREE.Vector2>;
        domainY: IUniform<THREE.Vector2>;
    }

    // Initial uniforms for the shader material.
    // Ignored after first render for interactivity purposes!
    // To access them later on, access them directly from the shader material.
    const uniforms = useMemo<DomainColoringUniforms>(() => ({
        screenWidth:  { value: viewport.width  },
        screenHeight: { value: viewport.height },
        domainX: { value: intervalToVector(domainX) },
        domainY: { value: intervalToVector(domainY) },
    }), [viewport, domainX, domainY]);

    ////////////////////////////////////////////////////////////////////////////////////////

    /**
     * Calculates the viewport's dimensions in pixels.
     * On the server (=SSR), returns 0x0 dimensions.
     */
    function updateViewport() {
        if (typeof window !== 'undefined') {
            setViewport({
                width: window.innerWidth,
                height: window.innerHeight,
                pixelRatio: window.devicePixelRatio
            });
        }
    }

    // update screen size + domain on every reload
    useEffect(() => {
        updateViewport();
        const {x: domX, y: domY} = autoCalculateDomain({width: viewport.width, height: viewport.height}, DEFAULT_INTERVAL, DEFAULT_INTERVAL);
        setDomainX(domX);
        setDomainY(domY);
    }, [requiresReload]);

    ////////////////////////////////////////////////////////////////////////////////////////

    // Gesture events to do things such as moving and zooming
    useGesture({
        /** Drags the plane around and 'moves' the domain of the plot */
        onDrag: dragProps => {
            if (shaderRef.current?.uniforms) {
                // ratio of (dy/dx of translation on the domain) and (dy/dx of the user's drag gesture)
                // ratio of 1.0 is probably ideal usability-wise
                const factor = 1.0;
                const [x, y] = dragProps.delta;
                const domX = {...domainX};
                const domY = {...domainY};
                const offsetX = x / viewport.width * (domX.min - domX.max) * factor;
                const offsetY = y / viewport.height * (domY.min - domY.max) * factor;
                domX.min += offsetX;
                domX.max += offsetX;
                domY.min -= offsetY;
                domY.max -= offsetY;
                setDomainX(domX);
                setDomainY(domY);
            }
        },
        /** Zooms the plot */
        onWheel: wheelProps => {
            if (shaderRef.current?.uniforms) {
                const fac = (wheelProps.event.deltaY > 0)? 1 + 0.04 : 1 - 0.04;
                const scaledX = scaleInterval(fac, domainX);
                const scaledY = scaleInterval(fac, domainY);
                setDomainX(scaledX);
                setDomainY(scaledY);
            }
        },
        onPinch: pinchProps => {
            if (shaderRef.current?.uniforms) {
                const scaleFactor = 0.035;
                const delta = pinchProps.delta[0];
                const fac =
                    (delta > 0)? 1 - scaleFactor :
                    (delta < 0)? 1 + scaleFactor : 1;
                const scaledX = scaleInterval(fac, domainX);
                const scaledY = scaleInterval(fac, domainY);
                setDomainX(scaledX);
                setDomainY(scaledY);
            }
        }
    }, { target: containerRef });


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
                            key={JSON.stringify(uniforms)}
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
            <MouseInfoPanel
                screen={viewport}
                domain={{ x: domainX, y: domainY }}
            />
        </>

    );
}

export default DomainColoringGL;