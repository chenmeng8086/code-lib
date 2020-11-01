const Mock = require('mockjs')
const genList = Mock.mock({
    'list|100': [{
        'name': '@cname'
    }]
})
console.log('genList', genList.list.length)

const dataDomain = [
    {
        name: '全部',
    },
    {
        name: '交易域',
    },
    {
        name: '电商域',
    },
]

console.log(dataDomain.map(it => it.name))
console.log(Mock.Random.integer(1, 5))
