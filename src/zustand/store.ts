import {create} from "zustand/react";

import * as MathC from "@/shaders/complexMath";
import {parse} from "@/parser/complexify";
import ComplexifyParseError from "@/parser/errors/ComplexifyParseError";


export interface GraphSettings {
    showDarkGridLines: boolean;
    showLightGridLines: boolean;
    isMinimalThemeEnabled: boolean;
}

export interface DomainColoringSettings {
    domain: {
        x: { min: number; max: number };
        y: { min: number; max: number };
    };
}

export interface RiemannSphereSettings {
    geometry: {
        subdivisions: number;
    };
    domainColoring: {
        settings: DomainColoringSettings;
        visible: boolean;
        opacity: number;
        showAxes: boolean;
    }
}

export interface State {
    equations: string[];
    parsedEquations: {
        glsl?: string;
        js?: MathC.ComplexFunction;
        error?: ComplexifyParseError;
    };
    graphSettings: GraphSettings;
    domainColoring: DomainColoringSettings;
    riemannSphere: RiemannSphereSettings;
}

export interface Actions {
    setEquations(equations: string[]): void;
    setSettings(graphSettings?: GraphSettings, domainColoringSettings?: DomainColoringSettings, riemannSphereSettings?: RiemannSphereSettings): void;
}


function parseEquations(equations: string[]): State['parsedEquations'] {
    const eqationsStr = equations.filter(e => e).join(';');
    try {
        const [glsl, js] = parse(eqationsStr);
        return {
            glsl,
            js,
            error: undefined
        };
    } catch (e: unknown) {
        return {
            glsl: undefined,
            js: undefined,
            error: e as ComplexifyParseError
        }
    }
}

export const useStore = create<State & Actions>((set) => ({
    equations: ['@f(x) = x'],
    parsedEquations: parseEquations(['@f(x) = x']),
    graphSettings: {
        showDarkGridLines: true,
        showLightGridLines: true,
        isMinimalThemeEnabled: false
    },
    domainColoring: {
        domain: {
            x: { min: -2, max: 2 },
            y: { min: -2, max: 2 }
        }
    },
    riemannSphere: {
        geometry: {
            subdivisions: 100
        },
        domainColoring: {
            settings: {
                domain: {
                    x: { min: -2, max: 2 },
                    y: { min: -2, max: 2 }
                }
            },
            visible: true,
            opacity: 0.7,
            showAxes: true
        }
    },
    setEquations: (equations) => set(() => {
        return {
            equations,
            parsedEquations: parseEquations(equations)
        }
    }),
    setSettings: (graphSettings, domainColoringSettings, riemannSphereSettings) => set(() => {
        return {
            graphSettings: graphSettings,
            domainColoring: domainColoringSettings,
            riemannSphere: riemannSphereSettings,
        }
    })
}));