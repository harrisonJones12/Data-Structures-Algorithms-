const validAnagram = (word1, word2) => {
    const frequencyCounterObj1 = {};
    const frequencyCounterObj2 = {};
  // frequency counter algo
  if(word1.length !== word2.length ){
    return false;
  }
    for (let letter of word1.split("")) {
      frequencyCounterObj1[letter] = (frequencyCounterObj1[letter] || 0 ) + 1
    }
  
  for (let letter of word2.split("")) {
      frequencyCounterObj2[letter] = (frequencyCounterObj2[letter] || 0 ) + 1
    }
  
  
  for (let value in frequencyCounterObj1 ) {

   if(frequencyCounterObj1[value] !== frequencyCounterObj2[value]) {
        return false;
   }
  }
    
    return true;
  
  };
  
  console.log(validAnagram("racecar","carrace"));