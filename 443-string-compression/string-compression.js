/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let read = 0;
    let write = 0;

    while (read < chars.length) {
        let currentChar = chars[read];
        let count = 0;

        // Count consecutive chars
        while (read < chars.length && chars[read] === currentChar) {
            read++;
            count++;
        }

        // Write character
        chars[write] = currentChar;
        write++;

        // Write count if > 1
        if (count > 1) {
            for (let digit of String(count)) {
                chars[write] = digit;
                write++;
            }
        }
    }

    return write;
};
