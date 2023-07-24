module.exports = function check(str, bracketsConfig) {
    const stack = [];
    const openingBrackets = new Set(bracketsConfig.map(pair => pair[0]));
    const closingBrackets = new Set(bracketsConfig.map(pair => pair[1]));
    const matchingBrackets = Object.fromEntries(bracketsConfig);

    for (const char of str) {
        if (openingBrackets.has(char)) {
            if (closingBrackets.has(char) && stack[stack.length - 1] === char) {
                stack.pop();
            } else {
                stack.push(char);
            }
        } else if (closingBrackets.has(char)) {
            if (stack.length === 0 || matchingBrackets[stack[stack.length - 1]] !== char) {
                return false;
            }
            stack.pop();
        }
    }

    return stack.length === 0;
}
