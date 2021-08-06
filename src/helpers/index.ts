export const emptyList = (size: number): number[] => Array.from(Array(size).keys());

export const sleep = (ms: number): Promise<null> => new Promise((resolve) => setTimeout(resolve, ms));
