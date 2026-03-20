export function calculateReadingProgress(scrollY: number, viewportHeight: number, fullHeight: number): number {
  const scrollable = fullHeight - viewportHeight;

  if (scrollable <= 0) {
    return 100;
  }

  const value = (scrollY / scrollable) * 100;
  return Math.max(0, Math.min(100, value));
}
