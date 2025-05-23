/**
 * Creates a string that represents a function with two arguments.
 * Since more than two arguments can be given, the remaining arguments
 * are nested inside the function. The result is a string that represents
 * the GLSL version of the expression.

 * Example: Parse the expression `2 + 4 + 6`
 * - start: `add(`
 * - delimiter: `, `
 * - end: `)`
 * - args: [2, 4, 6]
 * - result: `add(2, add(4, 6))`

 * @param start The starting expression
 * @param delimiter The separator for each element
 * @param end The ending expression
 * @param args An array of arguments for the function
 * @returns The equivalent string in GLSL
 */
export function group(start: string, delimiter: string, end: string, args: string[]): string {
    if (args.length == 1) {
        return args[0];
    }
    return start + args[0] + delimiter + group(start, delimiter, end, args.slice(1)) + end;
}

export function applyConvolutions<T>(args: T[], convolution: (a: T, b: T) => T): T {
    if (args.length == 1) {
        return args[0];
    }
    return convolution(args[0], applyConvolutions(args.slice(1), convolution));
}