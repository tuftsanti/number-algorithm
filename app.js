// INTEGER REVERSE
const reverseInt = num => {
    let sign = 'pos'
    if (Math.sign(num) < 0 ) {
        sign = 'neg';
        num = Math.abs(num)
    }
    newNum = parseInt(num.toString().split("").reverse().join(""));
    if (sign == 'neg') {
        newNum = -newNum
    }
    console.log(newNum)
}
// reverseInt(15)
// reverseInt(981)
// reverseInt(500)
// reverseInt(-15)
// reverseInt(-90)

// MAXCHAR
const maxChar = (str) => {
    let count = {};
    let max = 1;
    // let result = str[0]
    const spr = [...str]

    for (let i=0; i<spr.length; i++) {
        let num = spr[i]
        count[num] = count[num] ? count[num] + 1 : 1;
    }
    // console.log(count)
    console.log(Object.keys(count).reduce((current, next) => count[current] > count[next] ? current : next));
}
// maxChar("abcccccccd")
// maxChar("apple 1231111")
// maxChar("zzzzwwwww")

// return (
//     <div className="App">
//       <form>
//         <input type="text" name="integerReverse" placeholder="integer to reverse..."/>
//         <input type="submit">Submit</input>
//       </form>
//     </div>
//   )