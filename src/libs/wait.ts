export function wait(timeout = Math.random() * 500) {
  return new Promise((resolve) => { setTimeout(resolve, timeout); });
}