import {create} from "zustand/react";


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
    graphSettings: GraphSettings;
    domainColoring: DomainColoringSettings;
    riemannSphere: RiemannSphereSettings;
}

export interface Actions {
    setEquations(equations: string[]): void;
    pushEquation(equation: string): void;
    deleteEquation(index: number): void;
    updateEquation(index: number, equation: string): void;
}

export const useStore = create<State & Actions>((set) => ({
    equations: ['@f(x) = x'],
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
    setEquations: (equations) => set(() => ({
        equations
    })),
    pushEquation: (latex) => set((state) => ({
        equations: [...state.equations, latex],
    })),
    deleteEquation: (index: number) => set((state) => ({
        equations: state.equations.toSpliced(index, 1),
    })),
    updateEquation: (index, latex) => set((state) => ({
        equations: state.equations.map((oldLatex, i) => i == index ? latex : oldLatex),
    })),
}));