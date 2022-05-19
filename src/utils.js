import color from 'tinycolor2'

export function alpha(value, opacity) {
  return color(value)
    .setAlpha(opacity ?? 0.5)
    .toHex8String()
}

export function light(value, amount) {
  return color(value).lighten(amount).toHex8String()
}

export function bright(value, amount) {
  return color(value).brighten(amount).toHex8String()
}

export function desaturate(value, amount) {
  return color(value).desaturate(amount).toHex8String()
}
