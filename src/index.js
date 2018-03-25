// @flow
export const double = (x: number): number => 2 * x;
export const doubleDouble = (x: number): number => double(double(x));
