const StockSpanner = function() {
  this.prices = [];
  this.spans = [];
};

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
  this.prices.push(price);

  let span = 1;
  if (this.prices.length > 1) {
    let i = this.prices.length - 1;
    while (i >= 1 && this.prices[i - 1] <= price) {
      const prevSpan = this.spans[i - 1];
      span += prevSpan;
      i -= prevSpan;
    }
  }

  this.spans.push(span);

  return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * const obj = new StockSpanner()
 * const param1 = obj.next(price)
 */

const S = new StockSpanner();
const param1 = S.next(100);
const param2 = S.next(80);
const param3 = S.next(60);
const param4 = S.next(70);
const param5 = S.next(60);
const param6 = S.next(75);
const param7 = S.next(85);

/* eslint-disable-next-line */
console.log([param1, param2, param3, param4, param5, param6, param7]);
