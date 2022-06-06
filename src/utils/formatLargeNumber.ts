function numToSubstr(num: number): string {
  let str = num.toString().substring(0, 4);
  if (str[3] === ".") return str.substring(0, 3);
  return str;
}

export function formatLargeNumber(num: number): string | number {
  if (num < 1000) return num;
  if (num < 1000000) return num.toLocaleString();
  if (num < 1000000000) return numToSubstr(num / 1000000) + " million";
  if (num < 1000000000000) return numToSubstr(num / 1000000000) + " billion";
  if (num < 1000000000000000)
    return numToSubstr(num / 1000000000000) + " quadillion";
  if (num < 1000000000000000000)
    return numToSubstr(num / 1000000000000000) + " quintillion";
  return (num / 1000000000000000000).toFixed(0) + " sextillion";
}
