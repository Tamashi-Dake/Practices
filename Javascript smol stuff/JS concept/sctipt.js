
// example
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

// Function 1
//  let order = (fruit_name, call_production) =>{

//     call_production();
//   };

  // Function 2 - Callback hell
// let production = () =>{

//     setTimeout(()=>{
//       console.log("production has started")
//       setTimeout(()=>{
//         console.log("The fruit has been chopped")
//         setTimeout(()=>{
//           console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
//           setTimeout(()=>{
//             console.log("start the machine")
//             setTimeout(()=>{
//               console.log(`Ice cream placed on ${stocks.holder[1]}`)
//               setTimeout(()=>{
//                 console.log(`${stocks.toppings[0]} as toppings`)
//                 setTimeout(()=>{
//                   console.log("serve Ice cream")
//                 },2000)
//               },1000)
//             },2000)
//           },1000)
//         },1000)
//       },2000)
//     },0)
  
//   };

//   promise version
  const order = ( time, work ) =>{
    return new Promise( ( resolve, reject )=>{ 
        if(false){
            setTimeout(()=>{
                resolve(work())
            },time)
        }
        else reject(console.log("rejected"))
    })
  } 
  
  // -> promise chain (better but not enough)
  const makeCream =()=>{
    // step 1
order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))

// step 2
.then(()=>{
    return order(0,()=>console.log('production has started'))
  })
  // step 3
  .then(()=>{
    return order(2000, ()=>console.log("Fruit has been chopped"))
  })
  // step 4
  .then(()=>{
    return order(1000, ()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
  })
  // step 5
  .then(()=>{
    return order(1000, ()=>console.log("start the machine"))
  })
  // step 6
  .then(()=>{
    return order(2000, ()=>console.log(`ice cream placed on ${stocks.holder[1]}`))
  })
  // step 7
  .then(()=>{
    return order(3000, ()=>console.log(`${stocks.toppings[0]} as toppings`))
  })
  // Step 8
  .then(()=>{
    return order(2000, ()=>console.log("Serve Ice Cream"))
  })
  .catch(()=>{
    console.log("something went wrong")
  })
  .finally(()=>{
    console.log("1 việc luôn sảy ra sau khi Promise")
  })
  }

//   Async/Await để thay thế promise chain
// có lẽ nên cải thiện cách diễn đạt, chứ cái này thành await chain cmnr ._.
  async function makeIceCream() {
      try {
        await order(2000, () => console.log(`${stocks.Fruits[0]} was selected`));
    
        await order(0, () => console.log('production has started'));
    
        await order(2000, () => console.log("Fruit has been chopped"));
    
        await order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`));
    
        await order(1000, () => console.log("start the machine"));
    
        await order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`));
    
        await order(3000, () => console.log(`${stocks.toppings[0]} as toppings`));
    
        await order(2000, () => console.log("Serve Ice Cream"));
      } catch (error) {
        console.log("Error:", error);
      } finally{
        console.log("1 việc luôn xảy ra")
     }
    }
//   trigger
// order(0,production)

// makeCream()

  makeIceCream();