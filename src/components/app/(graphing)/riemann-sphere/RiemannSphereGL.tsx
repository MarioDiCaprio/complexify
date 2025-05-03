"use client"

import React, {JSX, useEffect, useRef} from "react";
import {GLSL_FOR_DOMAIN_COLORING, GLSL_FOR_RIEMANN_SPHERE} from "@/shaders/shaders";
import {Box3, Color, DoubleSide, Euler, ShaderMaterial, Vector2, Vector3} from "three";
import {transformInterval} from "@/shaders/utils";
import TextLookingAtCamera from "./TextLookingAtCamera";
import {Canvas} from "@react-three/fiber";
import {OrbitControls} from "@react-three/drei";
import {useStore} from "@/zustand/store";


const RIEMANN_SPHERE_VERTEX_SHADER = `
    varying vec3 vertexCoord;
    
    void main() {
        vertexCoord = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function useRiemannSphereFragmentShader(): string {
    const {glsl: code} = useStore(state => state.parsedEquations);
    const graphSettings = useStore(state => state.graphSettings);

    return `
        bool showDarkGridLines = ${ graphSettings.showDarkGridLines };
        bool showLightGridLines = ${ graphSettings.showLightGridLines };
        bool isMinimalThemeEnabled = ${ graphSettings.isMinimalThemeEnabled };
        
        varying vec3 vertexCoord;
    
        ${GLSL_FOR_RIEMANN_SPHERE}

        ${ code }

        void main() {
            vec2 z = riemann_sphere(vertexCoord);
            
            gl_FragColor = domcol(plottedFunction(z));
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////

const DOMCOL_VERTEX_SHADER = `
    varying vec3 vertexCoord;
    
    void main() {
        vertexCoord = position;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
`;

function useDomcolFragmentShader(): string {
    const {glsl: code} = useStore(state => state.parsedEquations);

    const graphSettings = useStore(state => state.graphSettings);
    const riemannSphereSettings = useStore(state => state.riemannSphere);

    const opacity = riemannSphereSettings.domainColoring.opacity;

    return `
        bool showDarkGridLines = ${ graphSettings.showDarkGridLines };
        bool showLightGridLines = ${ graphSettings.showLightGridLines };
        bool isMinimalThemeEnabled = ${ graphSettings.isMinimalThemeEnabled };
        
        ${GLSL_FOR_DOMAIN_COLORING}
        
        varying vec3 vertexCoord;
        
        uniform vec2 planeXRange, planeYRange;
        uniform vec2 domainX, domainY;

        ${ code }
        
        float transformInterval(float value, vec2 from, vec2 to) {
            return (to.y - to.x) / (from.y - from.x) * (value - from.x) + to.x;
        }

        void main() {
            vec2 z = vec2(
                transformInterval(vertexCoord.x, planeXRange, domainX),
                transformInterval(vertexCoord.y, planeYRange, domainY)
            );

            gl_FragColor = domcol(plottedFunction(z));
            gl_FragColor.a = ${Number.isInteger(opacity)? opacity + '.' : opacity};
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////

const HELPER_COLOR_LIGHT = new Color('rgb(110, 110, 110)');
const HELPER_COLOR_DARK = new Color('rgb(66,66,66)');

const BOUNDING_BOX_MIN = new Vector3(-3, -1.5, -3);
const BOUNDING_BOX_MAX = new Vector3(3, 1.5, 3);
const BOUNDING_BOX = new Box3(BOUNDING_BOX_MIN, BOUNDING_BOX_MAX);
const BOUNDING_BOX_SIZE = BOUNDING_BOX.getSize(new Vector3);
const BOUNDING_BOX_HALF_SIZE = new Vector3().copy(BOUNDING_BOX_SIZE).divideScalar(2);

const AXIS_ORIGIN = BOUNDING_BOX_MIN;
const AXIS_CYLINDER_RADIUS = 0.005;

const AXIS_NUMBERS_SCALE = new Vector3(0.1, 0.1, 0.1);

const X_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(BOUNDING_BOX_HALF_SIZE.x, 0, 0));
const Z_AXIS_POSITION = new Vector3().copy(AXIS_ORIGIN).add(new Vector3(0, 0, BOUNDING_BOX_HALF_SIZE.z));

////////////////////////////////////////////////////////////////////////////////////////


const RiemannSphereGL: React.FC = () => {
    const riemannSphereSettings = useStore(state => state.riemannSphere);

    const domcolFragmentShader = useDomcolFragmentShader();
    const sphereFragmentShader = useRiemannSphereFragmentShader();

    ////////////////////////////////////////////////////////////////////////////////////////

    const domcolShaderRef = useRef<ShaderMaterial>(null);
    useEffect(() => {
        if (domcolShaderRef.current?.uniforms) {
            const domX: Vector2 = domcolShaderRef.current.uniforms['domainX'].value;
            const domY: Vector2  = domcolShaderRef.current.uniforms['domainY'].value;
            domX.x = riemannSphereSettings.domainColoring.settings.domain.x.min;
            domX.y = riemannSphereSettings.domainColoring.settings.domain.x.max;
            domY.x = riemannSphereSettings.domainColoring.settings.domain.y.min;
            domY.y = riemannSphereSettings.domainColoring.settings.domain.y.max;
        }
    }, [riemannSphereSettings]);

    ////////////////////////////////////////////////////////////////////////////////////////

    const xAxisNumbers: Array<JSX.Element> = [];
    const yAxisNumbers: Array<JSX.Element> = [];

    for (let i=0; i<=5; i++) {
        const dx = BOUNDING_BOX_SIZE.x / 5;
        let num = transformInterval(i*dx, {min: 0, max: BOUNDING_BOX_SIZE.x}, riemannSphereSettings.domainColoring.settings.domain.x);
        num = Math.round(num * 100) / 100;
        xAxisNumbers.push(
            <TextLookingAtCamera key={i} scale={AXIS_NUMBERS_SCALE} position={new Vector3(i*dx + BOUNDING_BOX_MIN.x, BOUNDING_BOX_MIN.y, BOUNDING_BOX_MIN.z - 0.4)}>
                { num }
                <meshBasicMaterial color="black" />
            </TextLookingAtCamera>
        );
    }

    for (let i=0; i<=5; i++) {
        const dz = BOUNDING_BOX_SIZE.z / 5;
        let num = transformInterval(i*dz, {min: 0, max: BOUNDING_BOX_SIZE.z}, riemannSphereSettings.domainColoring.settings.domain.y);
        num = Math.round(num * 100) / 100;
        yAxisNumbers.push(
            <TextLookingAtCamera key={i} scale={AXIS_NUMBERS_SCALE} position={new Vector3(BOUNDING_BOX_MIN.x - 0.4, BOUNDING_BOX_MIN.y, i*dz + BOUNDING_BOX_MIN.z)}>
                { num + ' ' }i
                <meshBasicMaterial color="black" />
            </TextLookingAtCamera>
        );
    }

    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-zinc-100 touch-none">
                <Canvas
                    gl={{ preserveDrawingBuffer: true }}
                    style={{ width: '100%', height: '100%', touchAction: 'none' }}
                    camera={{ fov: 75, position: [3, 2, 1]}}
                >

                    {/* Coordinate system axis */}
                    <group visible={riemannSphereSettings.domainColoring.visible && riemannSphereSettings.domainColoring.showAxes}>

                        {/* x-axis */}
                        <group visible={riemannSphereSettings.domainColoring.showAxes}>
                            <mesh position={X_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, Math.PI/2)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.x, 20, 3]} />
                                <meshBasicMaterial color="#000000" />
                            </mesh>
                            <group>
                                { xAxisNumbers }
                            </group>
                        </group>

                        {/* z-axis */}
                        <group visible={riemannSphereSettings.domainColoring.showAxes}>
                            <mesh position={Z_AXIS_POSITION} rotation={new Euler(Math.PI/2, 0, 0)}>
                                <cylinderGeometry args={[AXIS_CYLINDER_RADIUS, AXIS_CYLINDER_RADIUS, BOUNDING_BOX_SIZE.x, 20, 3]} />
                                <meshBasicMaterial color="#000000" />
                            </mesh>
                            <group>
                                { yAxisNumbers }
                            </group>
                        </group>

                    </group>

                    <OrbitControls dampingFactor={0.075} />

                    {/* The Riemann Sphere */}
                    <mesh>
                        <sphereGeometry attach="geometry" args={[1, riemannSphereSettings.geometry.subdivisions, riemannSphereSettings.geometry.subdivisions]} />
                        <shaderMaterial
                            attach="material"
                            needsUpdate={true}
                            vertexShader={RIEMANN_SPHERE_VERTEX_SHADER}
                            fragmentShader={sphereFragmentShader}
                            side={DoubleSide}
                        />
                    </mesh>

                    {/* Auxiliary Domain Coloring */}
                    <mesh visible={riemannSphereSettings.domainColoring.visible} rotation={[Math.PI/2, 0, 0]} position={[0, BOUNDING_BOX_MIN.y, 0]}>
                        <planeGeometry attach="geometry" args={[BOUNDING_BOX_SIZE.x, BOUNDING_BOX_SIZE.z, riemannSphereSettings.geometry.subdivisions, riemannSphereSettings.geometry.subdivisions]} />
                        <shaderMaterial
                            ref={domcolShaderRef}
                            attach="material"
                            needsUpdate={true}
                            uniformsNeedUpdate={true}
                            vertexShader={DOMCOL_VERTEX_SHADER}
                            fragmentShader={domcolFragmentShader}
                            uniforms={{
                                planeXRange:  { value: new Vector2(BOUNDING_BOX_MIN.x, BOUNDING_BOX_MAX.x) },
                                planeYRange:  { value: new Vector2(BOUNDING_BOX_MIN.z, BOUNDING_BOX_MAX.z) },
                                domainX: { value: new Vector2(-2, 2) },
                                domainY: { value: new Vector2(-2, 2) }
                            }}
                            transparent={true}
                            side={DoubleSide}
                        />
                    </mesh>

                    <gridHelper visible={!riemannSphereSettings.domainColoring.visible} args={[BOUNDING_BOX_SIZE.x, 6, HELPER_COLOR_LIGHT, HELPER_COLOR_DARK]} position={[0, BOUNDING_BOX_MIN.y, 0]} />
                </Canvas>
            </div>
        </>

    );
}


export default RiemannSphereGL;