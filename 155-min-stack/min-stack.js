
var MinStack = function() {
    this.arr = [];
    this.arr2 = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
        this.arr.push(val);
        if(!this.arr2.length || val <= this.arr2[this.arr2.length-1]) {
            this.arr2.push(val);
        }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    if (this.arr.pop() === this.arr2[this.arr2.length-1]) {
        this.arr2.pop();
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr.length ? this.arr[this.arr.length-1] : -1;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.arr2.length ? this.arr2[this.arr2.length-1] : -1;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */