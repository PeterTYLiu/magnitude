export function formatNumber(num: number) {
  if (num < 2) return (num - 1).toFixed(2);
  if (num < 10) return (num - 1).toFixed(1);
  return (num - 1).toFixed(0).toLocaleString();
}
