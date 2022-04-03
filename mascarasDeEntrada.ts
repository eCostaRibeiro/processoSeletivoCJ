function maskCPF(value: string) {
    value = value.replace(/\D/g, "")

    if (value.length <= 11) {
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d)/, "$1.$2")
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2")
    }

    return value
}

function maskTelefone(value: string) {
    value = value.replace(/\D/g, "")

    if (value.length <= 10) {
        value = value.replace(/(\d)/, "($1")
        value = value.replace(/(\d{2})(\d)/, "$1) $2")
        value = value.replace(/(\d{4})(\d)/, "$1-$2")

    }

    return value
}





//--- TESTE
console.log(maskCPF(""))
console.log(maskCPF("1"))
console.log(maskCPF("12"))
console.log(maskCPF("1sfh23"))
console.log(maskCPF("1234"))
console.log(maskCPF("12345"))
console.log(maskCPF("123456"))
console.log(maskCPF("1234567"))
console.log(maskCPF("12345678"))
console.log(maskCPF("123456789"))
console.log(maskCPF("1234567890"))
console.log(maskCPF("12345678901"))
console.log(maskCPF("12345er678901"))




console.log(maskTelefone(""))
console.log(maskTelefone("1"))
console.log(maskTelefone("12"))
console.log(maskTelefone("1sfh23"))
console.log(maskTelefone("1234"))
console.log(maskTelefone("12345"))
console.log(maskTelefone("123456"))
console.log(maskTelefone("1234567"))
console.log(maskTelefone("12345678"))
console.log(maskTelefone("123456789"))
console.log(maskTelefone("1234567890"))
