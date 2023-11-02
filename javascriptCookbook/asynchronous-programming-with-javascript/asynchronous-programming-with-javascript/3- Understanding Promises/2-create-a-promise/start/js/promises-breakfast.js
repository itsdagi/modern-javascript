breakfastPromise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        const order = false;
        if(order){
            resolve('Take Order!')
        }
        else{
            reject('Take your cash')
        }
    },5000)
})

console.log(breakfastPromise)

breakfastPromise
.then(val => console.log(val))
.catch(err => console.log(err))