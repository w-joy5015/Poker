const calculateHand = (arr) => {

  //--Find if there more than one of a kind--
  //Create an array in which the index will hold the number of other cards with the same value.
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

  //--check if there is a straight--
  let isConsecutive = true; //The loop on line 61 will change this to false if it's not a straight

  //parse out arr into numArr that has only numbers. Ace will be given a default value of 14
  const numArr = []
  arr.forEach(card => {
    if(card.value==="KING"){
      numArr.push(13)
    }
    if(card.value==="QUEEN"){
      numArr.push(12)
    }
    if (card.value==="JACK"){
      numArr.push(11)
    }
    if (card.value==="ACE"){
      numArr.push(14)
    }
    if (card.value.length < 3) {
      const number = Number(card.value)
      numArr.push(number)
    }
  });

  //Find the highest value card (in the case the hand is High Card)
  let highCard = 0
  numArr.map(current => {if(current > highCard){highCard=current}})
  switch(highCard){
    case 14:
      highCard = "Ace"
      break;
    case 13:
      highCard = "King"
      break;
    case 12:
      highCard = "Queen"
      break;
    case 11:
      highCard = "Jack"
      break;
  }

  //if there is a 2, convert the Ace into a 1 (in the case of five-high straight). Then sort from low to high
  if (numArr.includes(2) && numArr.includes(14)){
    const idxOfAce = numArr.findIndex(current => current === 14)
    numArr[idxOfAce] = 1;
  }
  const sortedArr = numArr.sort(function (a,b) {return a-b})

  for (let i=0; i<numArr.length-1; i++){
    const currentVal = sortedArr[i]
    const nextVal = sortedArr[i+1]
    if (currentVal !== nextVal - 1){
      isConsecutive = false;
    }
  }

  //--check if cards are all of the same suit--
  const isSameSuit = arr.every(current => current.suit === arr[0].suit)

  if(isSameSuit && isConsecutive){
    return "Straight Flush"
  }
  if(!isSameSuit && isConsecutive){
    return "Straight"
  }
  if(isSameSuit && !isConsecutive){
    return "Flush"
  }

  //if it fulfils none of the above, it must be a High Card
  return `High Card ${highCard}`
}

module.exports = calculateHand
