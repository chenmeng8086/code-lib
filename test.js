// 伪数组
function test() {
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i])
    }

    const args = Array.from(arguments)
    args.forEach((el, index) => {
        console.log('index', el)
    })
}
// test(1, 2, 3)
// test(1, 2, 3, 4)

// 剩余参数
function test1(a, b, ...args) {
    console.log(a, b)
    console.log('args', args)
    args.forEach(el => {
        console.log('arg', el)
    })
}
// test1(1, 2, 3, 4, 5, 6)

// parseInt
/*
    1、作用：将字符串转换为符合设定进制的数字
    2、注：进制的取值范围为2～36，不在该范围内，将直接返回NaN
*/
function testParseInt() {
    const a = parseInt('12345', 2) // 字符串中属于二进制的为1，二进制1的结果为：1
    console.log('a', a)

    const arr = [1, 2, 3, 4, 5, 6]
    console.log('arr', arr.map(parseInt)) // parseInt 同时传入了value和index

    // 等价于
    const arr1 = arr.map((val, idx) => {
        return parseInt(val, idx)
    })

    console.log('arr1', arr1)
}
// testParseInt()

/*
    测试reduce
    reduce有4个参数，reduce()
*/
function testReduce() {
    const arr = [1, 2, 3, 4, 5, 6]
    const res = arr.reduce((total, num) => {
        return total + num
    })

    const arr1 = [
        {
            value: 1,
        }, {
            value: 2,
        }, {
            value: 3,
        }, {
            value: 4,
        },
    ]
    const res1 = arr1.reduce((total, num) => {
        return total + num.value
    }, 0)
    console.log('res1', res1);
}
// testReduce()