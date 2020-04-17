/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  let amount = 0;

  const peaks = new Map();

  // first height
  peaks.set(height[0], 0);

  // rest of heights
  for (let i = 1; i < height.length; i++) {
    if (height[i] > height[i - 1]) {
      // up slope
      const peaksEntries = Array.from(peaks.entries());
      let valley = height[i];
      for (let j = peaksEntries.length - 1; j >= 0; j--) {
        [k, v] = peaksEntries[j];
        const x = i - v - 1;
        if (k < height[i]) {
          amount += x * k;
          valley = Math.min(valley, k);
          peaks.delete(k);
        } else {
          amount += x * Math.min(k, height[i]) - valley;
          break;
        }
      }
      console.log(i, peaks.size, amount);
    }

    // cache peak heights
    peaks.set(height[i], i);
  }

  return amount;
};

// console.log(trap([0, 1, 0, 2])); // 1
// console.log(trap([2, 0, 2])); // 2
// console.log(trap([4, 2, 3])); // 1
// console.log(trap([5, 4, 1, 2])); // 1
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
