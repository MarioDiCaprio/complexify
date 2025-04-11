export interface Complex {
    r: number;
    i: number;
}

export type ComplexFunction = (arg: Complex) => Complex;


export const ZERO: Readonly<Complex> = { r: 0, i: 0 };
export const ONE: Readonly<Complex> = { r: 1, i: 0 };
export const I: Readonly<Complex> = { r: 0, i: 1 };


export function arg(z: Complex): number {
    return Math.atan2(z.i, z.r);
}

export function abs(z: Complex): number {
    return Math.hypot(z.r, z.i);
}

export function add(x: Complex, y: Complex): Complex {
    return {
        r: x.r + y.r,
        i: x.i + y.i
    }
}

export function subtract(x: Complex, y: Complex): Complex {
    return {
        r: x.r - y.r,
        i: x.i - y.i
    }
}

export function multiply(x: Complex, y: Complex): Complex {
    return {
        r: x.r * y.r - x.i * y.i,
        i: x.i * y.r + x.r * y.i,
    }
}

export function divide(x: Complex, y: Complex): Complex {
    const denom = y.r * y.r + y.i * y.i;
    return {
        r: (x.r * y.r + x.i * y.i) / denom,
        i: (x.i * y.r - x.r * y.i) / denom,
    }
}

export function sin(z: Complex): Complex {
    return {
        r: Math.sin(z.r) * Math.cosh(z.i),
        i: Math.cos(z.r) * Math.sinh(z.i),
    }
}

export function cos(z: Complex): Complex {
    return {
        r: Math.cos(z.r) * Math.cosh(z.i),
        i: Math.sin(z.r) * Math.sinh(z.i),
    }
}

export function tan(z: Complex): Complex {
    return divide(sin(z), cos(z));
}

export function cot(z: Complex): Complex {
    return divide(ONE, tan(z));
}

export function sec(z: Complex): Complex {
    return divide(ONE, cos(z));
}

export function csc(z: Complex): Complex {
    return divide(ONE, sin(z));
}

export function cis(z: Complex): Complex {
    return add(cos(z), multiply(I, sin(z)));
}

export function pow(x: Complex, y: Complex): Complex {
    const alpha = arg(x);
    const r = abs(x);

    const p1 = multiply(
        { r: Math.pow(r, y.r), i: 0 },
        cis({ r: alpha * y.r, i: 0 })
    );
    const p2 = multiply(
        cis({ r: y.i * Math.log(r), i: 0 }),
        { r: Math.pow(Math.E, -alpha * y.i), i: 0 }
    );

    return multiply(p1, p2);
}

export function sqrt(z: Complex): Complex {
    return pow(z, { r: 0.5, i: 0 });
}

export function sinh(z: Complex): Complex {
    return divide(
        subtract(
            pow({ r: Math.E, i: 0 }, z),
            pow({ r: Math.E, i: 0 }, multiply({ r: -1, i: 0 }, z))
        ),
        { r: 2, i: 0 }
    );
}

export function cosh(z: Complex): Complex {
    return divide(
        add(
            pow({ r: Math.E, i: 0 }, z),
            pow({ r: Math.E, i: 0 }, multiply({ r: -1, i: 0 }, z))
        ),
        { r: 2, i: 0 }
    );
}

export function tanh(z: Complex): Complex {
    return divide(sinh(z), cos(z));
}

export function ln(z: Complex): Complex {
    return {
        r: Math.log(abs(z)),
        i: arg(z)
    }
}

export function log(z: Complex): Complex {
    return divide(ln(z), { r: 10, i: 0 })
}

export function re(z: Complex): Complex {
    return { r: z.r, i: 0 };
}

export function im(z: Complex): Complex {
    return { r: 0, i: z.i };
}