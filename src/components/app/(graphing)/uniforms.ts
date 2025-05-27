import {IUniform} from "three";
import * as THREE from "three";


export interface FragmentShaderUniforms {
    [key: string]: IUniform;
}

///////////////////////////////////////////////////////////////////

export interface GraphSettingsUniforms extends FragmentShaderUniforms {
    showDarkGridLines: IUniform<boolean>;
    showLightGridLines: IUniform<boolean>;
    isMinimalThemeEnabled: IUniform<boolean>;
}

///////////////////////////////////////////////////////////////////

export interface DomainColoringUniforms extends GraphSettingsUniforms {
    screenWidth: IUniform<number>;
    screenHeight: IUniform<number>;
    domainX: IUniform<THREE.Vector2>;
    domainY: IUniform<THREE.Vector2>;
}

///////////////////////////////////////////////////////////////////

export interface RiemannSphereUniforms extends GraphSettingsUniforms {

}

export interface RiemannSphereDCUniforms extends GraphSettingsUniforms {
    opacity: IUniform<number>;
    domainX: IUniform<THREE.Vector2>;
    domainY: IUniform<THREE.Vector2>;
    planeXRange: IUniform<THREE.Vector2>;
    planeYRange: IUniform<THREE.Vector2>;
}
