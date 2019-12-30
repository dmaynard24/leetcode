// Implement strStr()

// Problem 28
// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
	if (needle.length == 0) {
		return 0;
	}

	for (let i = 0; i < haystack.length - needle.length + 1; i++) {
		if (haystack[i] != needle[0]) {
			continue;
		}

		if (needle.length == 1) {
			return i;
		}

		if (needle.length > 1) {
			let j = 1;
			while (j < needle.length) {
				if (haystack[i + j] != needle[j]) {
					break;
				}
				j++;
			}
			if (j == needle.length) {
				return i;
			}
		}
	}

	return -1;
};

module.exports = strStr;
