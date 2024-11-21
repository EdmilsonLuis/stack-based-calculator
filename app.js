const table = {
    "^": { precedence: 4, associativity: 'right' },
    "*": { precedence: 3, associativity: 'left' },
    "/": { precedence: 3, associativity: 'left' },
    "+": { precedence: 2, associativity: 'left' },
    "-": { precedence: 2, associativity: 'left' },
}
/**
 * @param {Array<{type:"number"|"operator",value:String}>} tokens 
 */
function reverse(tokens) {
    const output = [];
    const op = [];

    console.log(tokens)

    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        if (t.type === "number") {
            output.push(t.value)
        }
        else if (t.type === "operator") {
            const last = op.at(op.length - 1);
            if (op.length > 0 &&
                (table[t.value].precedence < table[last].precedence
                    ||
                    (table[t.value].precedence === table[last].precedence && table[last].associativity === "left"))
            ) {
                output.push(op.pop())
            }
            op.push(t.value)
        }
        else { }
    }
    while (op.length > 0) {
        output.push(op.pop())
    }
    return output
}


/**
 * @param {string} text 
 * @returns 
 */
function tokenizer(text) {
    const re = /([0-9]*)/g
    return text.split(re)
        .filter(t => t.length > 0)
        .map((t) => {
            if (/[0-9]/g.test(t)) return { type: "number", value: Number(t) };
            else return { type: "operator", value: t }
        })
}

function calculate(tokens) {
    let output = []

    for (let i = 0; i < tokens.length; i++) {
        const t = tokens[i];
        let firstOut;
        let secondOut;

        switch (t) {
            case "+":
                output.push(output.pop() + output.pop())
                break;
            case "-":
                firstOut = output.pop();
                secondOut = output.pop();
                output.push(secondOut - firstOut)
                break;
            case "*":
                output.push(output.pop() * output.pop())
                break;
            case "^":
                firstOut = output.pop();
                secondOut = output.pop();
                output.push(secondOut ** firstOut)
                break;
            case "/":
                firstOut = output.pop();
                secondOut = output.pop();
                output.push(secondOut / firstOut)
                break;
            default:
                output.push(t)
                break;
        }
    }

    return output.pop()
}

const o1 = reverse(tokenizer("3-20*10^2"))
console.log(o1)
console.log(calculate(o1))