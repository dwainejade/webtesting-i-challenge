const enhancer = require('./enhancer.js');
// test away!

test("success", () => {
    const data = { enhancement: 1 }
    const res = enhancer.success(data)
    expect(res).toEqual({ enhancement: 2 })
    expect(data).toEqual({ enhancement: 1 })
})

test("fail", () => {
    const data = { enhancement: 14, durability: 10 }
    const res = enhancer.fail(data)
    expect(res).toEqual({ durability: 5, enhancement: 14 })
    expect(data).toEqual({ durability: 10, enhancement: 14 })
})

test("repair", () => {
    const data = { durability: 80 }
    const res = enhancer.repair(data)
    expect(res).toEqual({ durability: 100 })
    expect(data).toEqual({ durability: 80 })
})

test("get", () => {
    const data = { name: "Long Sword", enhancement: 1 }
    const res = enhancer.get(data)
    expect(res).toEqual({ name: "[+1] Long Sword", enhancement: 1  })
    expect(data).toEqual({ name: "Long Sword", enhancement: 1 })
})