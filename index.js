// Given two strings, write a function to determine if the second string is an anagram of the first.

// I will be using the frequency counter pattern to compare the two strings
const validAnagram = (string1, string2) => {
    // first I will check if both parameters passed to this function are strings
    // if not then return false 
    if (typeof string1 !== 'string' && string2 !== 'string') {
        return false;
    }
    // Next I will "split" the words into array's that I can use for my logic
    const string1Split1 = string1.split("");
    const stringSplit2 = string2.split("");

    // I will create two objects to store the items in each array to later compare.
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    //check what my output of my split strings
    // console.log('String1', string1Split1);
    // console.log('String2', stringSplit2);

    /* 
        I will create three for loops.

        - The first two for loops will will iterate over both string1Split1 
          string1Split2. 

        - The first for loop will add each value from stringSplit1 to the 
          empty object frequencyCounter1.

        - The second for loop will add values from 
          stringSplit2 to the empty object frequencyCounter2.

        - I will create a third for loop which will then 
          iterate over frequencyCounrter1 and compare the values in
          that object with frequencyCounrter2. 
    */

    for (let iterator = 0; iterator < string1Split1.length; iterator++) {

        let letter = string1Split1[iterator];

        /* 
            when this for loop runs this logic will add 1 to the number 
            of times the letter appears. which is stored in 
            the frequencyCounter1 object. (ex {a: 1} the first time then 
            {a: 2} given the string passed has more than one letter a's)

            1. first time it runs it will set the object up with keys 
                which will be each letter of the string and set their values
                to 0.
            2. The next times it runs it will add 1 to the number that is the value of each key 
                in the object if that letter appears more than once.
        */

        frequencyCounter1[letter] = (frequencyCounter1[letter] || 0) + 1

        // console.log('letter', letter)
    }
    // console.log('frequencyCounter1', frequencyCounter1)
    for (let iterator = 0; iterator < stringSplit2.length; iterator++) {
        let letter = stringSplit2[iterator];
        /* 
          when this for loop runs this logic will add 1 to the number 
          of times the letter appears. which is stored in 
          the frequencyCounter1 object. (ex {a: 1} the first time then 
          {a: 2} given the string passed has more than one letter a's)

          1. first time it runs it will set the object up with keys 
              which will be each letter of the string and set their values
              to 0.
          2. The next times it runs it will add 1 to the number that is the value of each key 
              in the object if that letter appears more than once.
      */

        frequencyCounter2[letter] = (frequencyCounter2[letter])
    }

    for (iterator = 0; iterator > frequencyCounter1.length; iterator++) {



        /* 
            iterate through the first frequencyCounter object and check if those values
            exist in the frequencyCounter2 object

            - if the value doesn't exist atl in frequencyCounter2 return false

            - If the current value doesnt match any of the values in frequencyCounter2
                return false

            - Outside of the if statement return true
        */

        if (!(frequencyCounter1[iterator] in frequencyCounter2)) {
            return false;
        }

        if (frequencyCounter1[iterator] !== frequencyCounter2[iterator]) {
            return false
        }

    }
    return true;

}

console.log(validAnagram('anagram', 'nagaram'));