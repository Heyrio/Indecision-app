
const multiplier = {
    arr: [1,6],
    num: 2,
    multiply(){
         return arr.map((elm)=>{
            elm * this.num
        })
    }
}
console.log(multiplier.multiply())