export function randomNumber(min: number = 0, max: number = 100) {
  return Math.random() * (max - min) + min;
}
