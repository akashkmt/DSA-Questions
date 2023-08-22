// Link: https://leetcode.com/problems/add-binary/description/

var addBinary = function(a, b) {
    const aBin = `0b${a}`;
    const bBin = `0b${b}`;
    return (BigInt(aBin) + BigInt(bBin)).toString(2);
};

// for binary to number - using BigInt
// `0b` - prefix and a or b are binary strings
// toString(2) - for converting BigInt to String