enum unaryOps {
    sum = '+',
    subtract = '-',
    multiply = '*',
    divide = '/'
}


function operations(expression: string): string {
    const regexOp = /[\/ \+ \- \*]/gi
    const sinal = expression.match(regexOp)[0]
    switch (sinal) {
        case unaryOps.sum:
            return sum(expression)
            break
        case unaryOps.subtract:
            return subtract(expression)
            break
        case unaryOps.multiply:
            return multiply(expression)
            break
        case unaryOps.divide:
            return divide(expression)
            break
        default:
            return "error"
            break
    }
}

function operands(operands: string) {

    const lhs = parseInt(operands.split(" ")[1])
    const rhs = parseInt(operands.split(" ")[2])

    return { lhs: lhs, rhs: rhs }
}

function zeroHandleDivide(value: number) {
    if (value != 0)
        return true
    else
        return false
}

function sum(expression: string) {
    const values = operands(expression)
    return (values.lhs + values.rhs).toString()
}

function subtract(expression: string) {
    const values = operands(expression)
    return (values.lhs - values.rhs).toString()
}

function multiply(expression: string) {
    const values = operands(expression)
    return (values.lhs * values.rhs).toString()
}

function divide(expression: string) {
    const values = operands(expression)
    if (zeroHandleDivide(values.rhs)) {
        return (values.lhs / values.rhs).toString()
    }
    else
        return "erro"
}

// chamada geral
function calculate(expression: string): string {
    if (expression != '') {
        return operations(expression)
    }
}


//--- TESTS
console.log(calculate("+ 5 1"))
console.log(calculate("- 5 1"))
console.log(calculate("- -5 1"))
console.log(calculate("* 5 1"))
console.log(calculate("* 5 -10"))
console.log(calculate("/ 5 1"))
console.log(calculate("/ 5 0"))