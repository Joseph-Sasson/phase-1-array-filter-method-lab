// Code your solution here

//FIND AND FILTER ARE THE SAME JUST FIND WILL BRING ONLY THE FIRST MATCH AND FILTER WILL BRING ALL

// FROM LECTURE ON FILTERING
// const myFilter = (array, action) => {
//   let emptyArray = []
//   for (value of array){
//     if(action(value)===true){
//       emptyArray.push(value)
//     }
//   }
//   return emptyArray
// }

// const expensive = item => {
//   if(item.price > 30){
//     return true
//   }
// }
// console.log(myfilter(orders, expensive))

//FROM LECTURE USING .FILTER
// const cheap = orders.Filter(item => item.price < 30)
// console.log(cheap)

  function findMatching(drivers, name){
     return drivers.filter(function (driverName){
         return driverName.toUpperCase() === name.toUpperCase()
   })
 }

 // PASSES USING ARROW FUNCTIONS
// const findMatching = (drivers, name) => drivers.filter(driverName => driverName.toUpperCase() === name.toUpperCase())


function fuzzyMatch(drivers, name){
  let length = name.length
  return drivers.filter(function (driverName){
    return driverName.slice(0,length) === name
  })
}

function matchName(drivers, name){
  return drivers.filter(function(driver){
    return driver.name === name
  })
}