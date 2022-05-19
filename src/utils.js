import color from "tinycolor2";

export function alpha(value, opacity) {
  return color(value)
    .setAlpha(opacity ?? 0.5)
    .toHex8String();
}
