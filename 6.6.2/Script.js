
const arr = [1, 2, 3, 1, 5, 4, 2, 3, 5, 'they', 'don\'t', 'know', 'that', 'we', 'know', 'that', 'they', 'know' ];

const uniqueArr = [];
for (let key of arr) {

    if (!uniqueArr.includes(key)) {
        uniqueArr.push(key)
    }
    else {}
    
}

console.log(uniqueArr)