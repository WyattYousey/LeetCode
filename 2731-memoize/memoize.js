/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {};
    return (...args) => {
        const strKey = JSON.stringify(args);
        if (cache[strKey] !== undefined) {
            return cache[strKey];
        }
        const result = fn.apply(this, args);
        cache[strKey] = result;

        return result;
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */