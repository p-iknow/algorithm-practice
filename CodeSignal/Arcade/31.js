function depositProfit(deposit, rate, threshold) {
  let year = 0;
  let ratio = 1 + rate / 100;
  while (deposit < threshold) {
    deposit *= ratio;
    year++;
  }
  return year;
}
depositProfit(20, 20, 50);
