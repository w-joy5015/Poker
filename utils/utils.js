const calculateHand = (arr) => {

  //Find if there more than one of a kind. Create an array in which the index will hold the number of other cards with the same value.
  let numOfInstances = [1, 1, 1, 1, 1]
  arr.forEach((card, idx)=>{
    let arrOfCards = arr.filter(current => current.value === card.value) //O(n) time is n^2 (loop within a loop)
    if (arrOfCards.length>numOfInstances[idx]){
      numOfInstances[idx] = arrOfCards.length
    }
  })
  if (numOfInstances.includes(4)){
    return "Four of a kind"
  }
  if (numOfInstances.includes(3) && numOfInstances.includes(2)){
    return "Full House"
  }
  if (numOfInstances.includes(3) && !numOfInstances.includes(2)){
    return "Three of a Kind"
  }
  if (numOfInstances.includes(2)){
    const numOfTwos = numOfInstances.reduce((acc, current)=> acc + current)
    if (numOfTwos > 7){
      return "Two Pair"
    } else {
      return "One Pair"
    }
  }

  // //parse out arr into numArr that has only numbers
  // const numArr = []
  // arr.forEach(card => {
  //   if(card.value==="KING"){
  //     numArr.push(13)
  //   }
  //   if(card.value==="QUEEN"){
  //     numArr.push(12)
  //   }
  //   if (card.value==="JACK"){
  //     numArr.push(11)
  //   }
  //   if (card.value==="ACE"){
  //     numArr.push(14)
  //   }
  //   if (card.value.length < 3) {
  //     const number = Number(card.value)
  //     numArr.push(number)
  //   }
  // });

  // //sort from high to low
  // const sortedArr = numArr.sort(function (a,b) {return a-b})

  // //find the highest subsequence within the array (for Flush or Straight)


  // //find if there are more than one of a kind
  // return(sortedArr)
  return "High Card"
}

module.exports = calculateHand
