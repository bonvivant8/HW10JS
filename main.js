const myArr = [1, 2, 3, 4, 5, 6, 7];


//myArr.splice(myArr.indexOf(5),1);
//console.log(myArr)
//
//
  //function myFunc(arr,el)
   // {
    //arr.splice(arr.indexOf(el),1);
    //console.log(arr)
   // }

    //myFunc(myArr,4)

const myFunc=(arr,el)=>arr.splice(arr.indexOf(el),1);

myFunc(myArr,5);

console.log(myArr)




