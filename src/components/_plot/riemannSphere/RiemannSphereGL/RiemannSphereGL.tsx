import React, {useState} from "react";
import {Canvas} from '@react-three/fiber';
import {GLSL_FOR_RIEMANN_SPHERE} from "../../../../data/shaders";
import * as THREE from "three";
import {OrbitControls} from "@react-three/drei";
import RiemannSphereSettings from "../RiemannSphereSettings/RiemannSphereSettings";
import {OpenGLPlotAlgorithm} from "../../PlotContext";


////////////////////////////////////////////////////////////////////////////////////////

function createVertexShader(): string {
    return `
        varying vec3 vertexCoord;
        
        void main() {
            vertexCoord = position;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `;
}

function createFragmentShader(code: string): string {
    return `
        varying vec3 vertexCoord;
    
        ${GLSL_FOR_RIEMANN_SPHERE}

        ${ code }

        void main() {
            vec2 z = riemann_sphere(vertexCoord);
            
            gl_FragColor = domain_coloring(plottedFunction(z), colormode.x);
        }
    `;
}

////////////////////////////////////////////////////////////////////////////////////////

const HELPER_COLOR_LIGHT: THREE.Color = new THREE.Color('rgb(110, 110, 110)');
const HELPER_COLOR_DARK: THREE.Color = new THREE.Color('rgb(66,66,66)');

////////////////////////////////////////////////////////////////////////////////////////


const RiemannSphereGL: React.FC<OpenGLPlotAlgorithm> = ({ code, reload }) => {
    const [subdivisions, setSubdivisions] = useState<number>(100);

    const boundingBox = new THREE.Box3(
        new THREE.Vector3(-3, -1.5, -3),
        new THREE.Vector3(3, 1.5, 3)
    );

    // if a reload is needed (which it is, every time a re-render is needed)
    // briefly return nothing. Unmounting the canvas and then remounting it
    // forces it to reload.
    // TODO Find a better method, which is unknown as for now!
    if (reload) {
        return (
            <></>
        );
    }

    return (
        <>
            <div style={{ width: '100%', height: '100%', touchAction: 'none' }}>
                <Canvas
                    style={{ width: '100%', height: '100%', touchAction: 'none' }}
                    camera={{ fov: 75, position: [3, 2, 1]}}
                >

                    <box3Helper args={[boundingBox, HELPER_COLOR_LIGHT]} />
                    <gridHelper args={[boundingBox.getSize(new THREE.Vector3()).x, 6, HELPER_COLOR_LIGHT, HELPER_COLOR_DARK]} position={[0, boundingBox.min.y, 0]} />
                    <OrbitControls dampingFactor={0.075} />

                    <mesh
                        position={[0, 0, 0]}
                        rotation={[0, 0, 0]}
                        scale={[1, 1, 1]}
                    >
                        <sphereGeometry attach="geometry" args={[1, subdivisions, subdivisions]} />
                        <shaderMaterial
                            attach="material"
                            needsUpdate={true}
                            uniformsNeedUpdate={true}
                            vertexShader={ createVertexShader() }
                            fragmentShader={ createFragmentShader(code) }
                            side={THREE.DoubleSide}
                        />
                    </mesh>

                </Canvas>
            </div>

            <RiemannSphereSettings onSubdivisionsChange={setSubdivisions} />
        </>

    );
}


export default RiemannSphereGL;