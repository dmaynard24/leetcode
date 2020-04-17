/**
 * @param {number[]} height
 * @return {number}
 */
const trap = function(height) {
  let amount = 0;

  const slopes = [height[0]];
  for (let i = 1; i < height.length; i++) {
    slopes.push(height[i] - height[i - 1]);
  }

  console.log(slopes.join(`,`));

  const peaks = [];
  if (slopes[0] > slopes[1]) {
    peaks.push(0);
  }
  for (let i = 1; i < slopes.length - 1; i++) {
    if (slopes[i - 1] < slopes[i] && slopes[i] > slopes[i + 1]) {
      peaks.push(i);
    }
  }
  if (slopes[slopes.length - 2] < slopes[slopes.length - 1]) {
    peaks.push(slopes.length - 1);
  }

  console.log(peaks);

  for (let i = 0; i < peaks.length - 1; i++) {
    const shortPeak = Math.min(height[peaks[i]], height[peaks[i + 1]]);
    for (let j = peaks[i] + 1; j < peaks[i + 1]; j++) {
      if (shortPeak - height[j] > 0) {
        amount += shortPeak - height[j];
      }
    }
  }

  return amount;
};

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // 6
// console.log(trap([0, 1, 0, 2])); // 1
// console.log(trap([2, 0, 2])); // 2
// console.log(trap([4, 2, 3])); // 1
// console.log(trap([5, 4, 1, 2])); // 1
// console.log(trap([2, 1, 0, 2])); // 3
console.log(trap([5, 2, 1, 2, 1, 5])); // 14
