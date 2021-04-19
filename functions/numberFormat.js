export function formatNumber(num) {
  return num
    .toFixed(2) // always two decimal digits
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,") // use . as a separator
}
