const {test, describe} = require("node:test")
const assert = require("node:assert")
const reverse = require("../utils/for_testing").reverse
const average = require("../utils/for_testing").average

test('reverses a string', () => {
    const result = reverse("abc")
    assert.strictEqual(result, "cba")
})

test('reverse of react', () => {
    const result = reverse('react')
    assert.strictEqual(result, 'tcaer')
})

test('reverse of saippuakauppias', () => {
    const result = reverse('saippuakauppias')

    assert.strictEqual(result, 'saippuakauppias')
})

describe("average", () => {

    test('computes average of numbers', () => {
        const result = average([20, 30, 40])
        assert.strictEqual(result, 30)
    })

    test('computes average of numbers', () => {
        const result = average([])
        assert.strictEqual(result, 0)
    })
    test('computes average of numbers', () => {
        const result = average([1, 2, 3, 4, 5, 6])
        assert.strictEqual(result, 3.5)
    })

})
