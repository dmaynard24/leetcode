// Valid Parentheses

// Problem 20
// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:
// Input: "()"
// Output: true

// Example 2:
// Input: "()[]{}"
// Output: true

// Example 3:
// Input: "(]"
// Output: false

// Example 4:
// Input: "([)]"
// Output: false

// Example 5:
// Input: "{[]}"
// Output: true

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s == '') {
		return true;
	}

	if (s.length % 2 == 1) {
		return false;
	}

	let closeMap = {
		')': '(',
		']': '[',
		'}': '{'
	};

	if (closeMap[s[0]] !== undefined) {
		return false;
	}

	let openStack = [];
	for (let i = 0; i < s.length; i++) {
		let char = s[i];

		if (closeMap[char]) {
			if (openStack.pop() != closeMap[char]) {
				return false;
			}
		} else {
			openStack.push(char);
		}
	}

	return openStack.length == 0;
};

module.exports = isValid;
