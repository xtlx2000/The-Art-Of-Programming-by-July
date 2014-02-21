/*
 * By Frederick-S
 * 2014-01-22
 */

// 1. 暴力移位法

/*
 * @param {String} s 待左旋转的字符串
 * @param {Number} m 左旋转的位数
 * @example 
 * var s = leftShift1('abcdef', 2);
 */
function leftShift1(s, m) {
    var arr = s.split(''), length = arr.length;

    m %= length;
    
    while (m--) {
        shiftHeadToEnd(arr, length);
    }

    return arr.join('');
}

/*
 * @param {Array} arr 待左旋转1位的数组 
 * @param {Number} 数组的长度
 * @example
 * shiftHeadToEnd(['a', 'b', 'c', 'd', 'e', 'f'], 6);
 */
function shiftHeadToEnd(arr, length) {
    var i = 0, c = arr[0], l = length || arr.length;

    for (; i < l - 1; i++) {
        arr[i] = arr[i + 1];
    }

    arr[i] = c;
}

// 2. 三步翻转法

/*
 * @param {String} s 待左旋转的字符串
 * @param {Number} m 左旋转的位数
 * @example 
 * var s = leftShift2('abcdef', 2);
 */
function leftShift2(s, m) {
    var arr = s.split(''), length = arr.length;

    m %= length;

    // 翻转 [0, ..., m - 1]
    reverse(arr, 0, m - 1);

    // 翻转 [m, ..., n - 1]
    reverse(arr, m, length - 1);

    // 翻转 [0, ..., n - 1]
    reverse(arr, 0, length - 1);

    return arr.join('');
}

/*
 * @param {Array} arr 待翻转的数组
 * @param {Number} start 数组翻转的起点
 * @param {Number} end 数组翻转的终点 (包含 end)
 * @example
 * reverse(['a', 'b', 'c', 'd', 'e', 'f'], 0, 2)
 */
function reverse(arr, start, end) {
    var c = '';

    while (start < end) {
        c = arr[start];
        arr[start++] = arr[end];
        arr[end--] = c;
    }
}

// 测试
// 1. 暴力移位法
console.log('暴力移位法：');
console.log('abcdef 左旋转 0 位变成： ' + leftShift1('abcdef', 0));
console.log('abcdef 左旋转 2 位变成： ' + leftShift1('abcdef', 2));
console.log('abcdef 左旋转 6 位变成 (等价于不变)： ' + leftShift1('abcdef', 6));
console.log('abcdef 左旋转 8 位变成 (等价于左旋转 2 位)： ' + leftShift1('abcdef', 8));
console.log('abcdef 左旋转 15 位变成 (等价于左旋转 3 位)： ' + leftShift1('abcdef', 15));

// 2. 三步翻转法
console.log('三步翻转法：');
console.log('abcdef 左旋转 0 位变成： ' + leftShift2('abcdef', 0));
console.log('abcdef 左旋转 2 位变成： ' + leftShift2('abcdef', 2));
console.log('abcdef 左旋转 6 位变成 (等价于不变)： ' + leftShift2('abcdef', 6));
console.log('abcdef 左旋转 8 位变成 (等价于左旋转 2 位)： ' + leftShift2('abcdef', 8));
console.log('abcdef 左旋转 15 位变成 (等价于左旋转 3 位)： ' + leftShift2('abcdef', 15));