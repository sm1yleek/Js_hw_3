// for (let i = 0; i < 5; i++) {
//     let line = ''

//     for (let s = 0; s < 1; i++){
//         line += '_'
//     }
//     console.info(line)
// }

let steps = +promptVar('Har qanday sonni kiriting', /^\d+$/);
let indentSymbol = promptVar('Hohlagan belgingizni kiriting ! (masalan : - + = ', /^\S$/);
let finalSumbol = promptVar(' Kopaytiruv * belgisini yozing (ctrl + 8)', /^\S+$/);

for (let i = 0; i < steps; i++) {
    let row = indentSymbol.repeat(i) + finalSumbol;
    output(row);
}

function output(str) {
    console.info(str);

}

function promptVar(title, regexp) {
    let val = null;
    do {
        val = prompt(title);
    } while (!regexp.test(val));
    return val;
}
