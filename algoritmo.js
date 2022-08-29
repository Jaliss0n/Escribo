var readline = require('readline');

function divisivel(num) {
    const n = parseInt(num)
    let total = 0

    for(let i = 0; i < n; i++) {
        if (!(i % 3) || !(i % 5)) {
            total += i
        }
    }
    return total
}


let terminal = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

terminal.question("Digite um valor\n", function(answer) {
    let resp = answer;
    console.log("\nA Resposta é '" + divisivel(resp)+ "'");
    terminal.close();
});
