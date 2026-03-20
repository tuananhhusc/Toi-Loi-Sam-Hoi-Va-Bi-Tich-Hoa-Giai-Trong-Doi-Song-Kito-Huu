export function isScrollingDown(currentY: number, lastY: number, threshold = 8): boolean {
  return currentY - lastY > threshold;
}

export function isScrollingUp(currentY: number, lastY: number, threshold = 8): boolean {
  return lastY - currentY > threshold;
}
