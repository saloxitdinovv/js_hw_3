let month = prompt('1-12')

if (month <=2 || month == 12) {
    alert("ЗИМА")
} else if (month <=5) {
    alert("ВЕСНА")
} else if (month <=8) {
    alert("ЛЕТО")
} else if (month <=11) {
    alert("ОСЕНЬ")
} else (
    alert("хз")
)

let decade = prompt('1-31')
 
if (decade <= 10) {
    alert('first')
} else if (decade > 10 && decade <= 20) {
    alert('second')
} else if (decade > 21 && decade <= 31) {
    alert('third')
}