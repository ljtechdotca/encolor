export type AvailableColor =
  | "red"
  | "green"
  | "yellow"
  | "blue"
  | "magenta"
  | "cyan";

function encodeColor(code: string, input: string) {
  return `${code}${input}\x1b[0m`;
}

export const encolor: Record<AvailableColor, (input: string) => string> = {
  red: (input: string) => encodeColor("\x1b[31m", input),
  green: (input: string) => encodeColor("\x1b[32m", input),
  yellow: (input: string) => encodeColor("\x1b[33m", input),
  blue: (input: string) => encodeColor("\x1b[34m", input),
  magenta: (input: string) => encodeColor("\x1b[35m", input),
  cyan: (input: string) => encodeColor("\x1b[36m", input),
};
