
const obj = {
    some: 'some',
    dom: 'text',
    arr: [1, 2, 3, 4, 5],
    tom: 'there'
};

const keyNames = ['some', 'dom', 'arr', 'tom'];
const arrValues = []

for (let key of keyNames) {
    if (typeof (obj[key]) === "object") {
        for (let value of Object.values(obj.arr)) {
            arrValues.push(value)
        }
    }
    else { arrValues.push(obj[key]); }
}

console.log(arrValues)
