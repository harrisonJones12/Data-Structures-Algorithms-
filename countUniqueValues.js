const arr = [1,2,3,4,4,4,7,7,12,12,13];

const countUniqueValues = (values) => {

     // compare both values
    // if there is a match move the pointer B forward by one
    // if there are no matches move the pointer A forward by one 
    // store the matches in an array 
    // when there are no more matches return the array with saved matches
    // if there are no more matches return undefined or nothing.

    /* Create pointers one at the beginning of the array 
    and at the second element in the array.
    */  

let A = 0;
let B = values.indexOf(values[1]);


let numberOfUniqueValues = 0;
const 

for(let i = 0; i < values.length; i++) {

    if(values[A] !== values[B]) {
         B++
console.log("first if statement")
    } else if (values[A] === values[B]) {
        console.log("second if statement")
        numberOfUniqueValues++
    } else {
        A++  
        console.log("third if is running")
    }

}
console.log("numberOfUniqueValues", numberOfUniqueValues)
return numberOfUniqueValues
   
}

countUniqueValues(arr);