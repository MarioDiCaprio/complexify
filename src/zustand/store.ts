import {create} from "zustand/react";


export interface State {
    equations: string[];
}

export interface Actions {
    setEquations(equations: string[]): void;
    pushEquation(equation: string): void;
    deleteEquation(index: number): void;
    updateEquation(index: number, equation: string): void;
}

export const useStore = create<State & Actions>((set) => ({
    equations: ['f(x) = x'],
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