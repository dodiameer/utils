export function randomNumber(min: number = 0, max: number = 100) {
  let result = Math.round(Math.random() * (max - min) + min);
  if (result > max) {
    result -= 1;
  }
  return result;
}
