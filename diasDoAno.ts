enum Month {
    JAN = 1, FEV, MAR, ABR, MAI, JUN, JUL, AGO, SET, OUT, NOV, DEZ
}

function getMonthDays(month: Month, year: number): number {
    let date = new Date(year, (month), 0).getDate()
    return date
}

function getYearDays(year: number): number {
    return year % 4 !== 0 ? 365 : 366
}


//--- TESTE
console.log(getYearDays(2016))
console.log(getYearDays(2020))
console.log(getYearDays(2021))
console.log(getYearDays(2022))