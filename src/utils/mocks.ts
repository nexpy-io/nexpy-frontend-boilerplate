export const delayPromise = (amount = 400) =>
  new Promise(resolve => setTimeout(resolve, amount))
