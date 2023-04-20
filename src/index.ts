interface RGB {
  r: number;
  b: number;
  g: number;
}

export const encolor = {
  black: function (input: string) {
    return `\x1b[30m${input}\x1b[0m`;
  },
  red: function (input: string) {
    return `\x1b[31m${input}\x1b[0m`;
  },
  green: function (input: string) {
    return `\x1b[32m${input}\x1b[0m`;
  },
  yellow: function (input: string) {
    return `\x1b[33m${input}\x1b[0m`;
  },
  blue: function (input: string) {
    return `\x1b[34m${input}\x1b[0m`;
  },
  magenta: function (input: string) {
    return `\x1b[35m${input}\x1b[0m`;
  },
  cyan: function (input: string) {
    return `\x1b[36m${input}\x1b[0m`;
  },
  rgb: function (input: string, rgb: RGB) {
    const r = Math.min(255, Math.max(0, rgb.r));
    const g = Math.min(255, Math.max(0, rgb.g));
    const b = Math.min(255, Math.max(0, rgb.b));
    return `\x1b[38;2;${r};${g};${b}m${input}\x1b[0m`;
  },
  hex: function (input: string, hex: string) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return this.rgb(input, { r, g, b });
  },
};
