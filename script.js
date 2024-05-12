
// Subtraction method for Roman numerals
// declare variables


const input = document.getElementById("number")
const button = document.getElementById("convert-btn")
const result = document.getElementById("output")




const RomanNumeralFunction = (num) => {


    if ( num > 3999) {
        result.innerText = "Please enter a number less than or equal to 3999"
        return
    }

    else if (num <= -1) {
        result.innerText = "Please enter a number greater than or equal to -1"
        return
    }

    else if (num === "") {
        result.innerText = "Please Enter a valid number"
        return
    }

    const romanToNm = { M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1 
}


let roman = ""

for ( key in romanToNm) {
    //console.log(key);
    //console.log(romanToNm[key])

    while (num >= romanToNm[key]){
        roman += key
        num -= romanToNm[key]
    }

}

result.innerText = `Your Roman Numeral is ${roman}`

setTimeout(function() {
    result.innerText =""
}, 5000)

}



button.addEventListener("click", () => 
{ RomanNumeralFunction(input.value)})

input.addEventListener("keypress",(hello) =>
{ if (hello.key === "Enter") {
    RomanNumeralFunction(input.value)
}})