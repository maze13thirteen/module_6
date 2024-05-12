
let field = "";

for (let index = 0; index <= 8; index++) {

    if (index % 2) {
        field = field + 'o'
    }
    else {
        field = field + 'x'
    }

    if (field.length === 3 || field.length === 7) {
        field = field + `\n`
    }

}

console.log(field)