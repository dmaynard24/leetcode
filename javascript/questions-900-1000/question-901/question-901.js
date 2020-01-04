var StockSpanner = function() {
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
			let prevSpan = this.spans[i - 1];
			span += prevSpan;
			i -= prevSpan;
		}
	}

	this.spans.push(span);

	return span;
};

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

var S = new StockSpanner();
var param_1 = S.next(100);
var param_2 = S.next(80);
var param_3 = S.next(60);
var param_4 = S.next(70);
var param_5 = S.next(60);
var param_6 = S.next(75);
var param_7 = S.next(85);

console.log([param_1, param_2, param_3, param_4, param_5, param_6, param_7]);
