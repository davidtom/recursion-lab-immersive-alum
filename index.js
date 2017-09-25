// Code your solution here!

function printString(string){
  // print first value of string
  console.log(string[0])

  // if there is more than one value in string, pass the rest to printString
  if (string.length > 1){
    let substring = string.substring(1, string.length)
    printString(substring)
  } else {
    return true
  }
}


function reverseString(str){
  // if str is only one character, return that character
  if (str.length==1){
    return str
  // else, return the last character of the string, plus the return value of this function called with the string minus the last character
  } else {
    return str.slice(-1) + reverseString(str.substring(0, str.length-1))
  }
}

function isPalindrome(str){
  // if the first and last char of string are the same, check its length
  if (str.slice(0,1) === str.slice(-1)){
    // if there are more than 2 chars in the string, call isPalindrome without the first and last chars
    if (str.length>2){
      return isPalindrome(str.slice(1,-1))
    // if there are less than 2 chars in the string, it must be a palindrome so return true
    } else {
      return true
    }
  // if none of the above are true, the string is not a palindrome: return false
  } else {
    return false
  }
}

function addUpTo(arr, counter){
  if(counter > 0){
    return arr[counter] + addUpTo(arr, counter-1)
  } else {
    return arr[counter]
  }
}


function maxOf(arr){
  // if the array length is greater than 1 compare the first and second values
  // of the array and remove the smaller value; then call the function again
  if (arr.length>1){
    if (arr[0] > arr[1]){
      arr.splice(1,1)
      return maxOf(arr)
    } else {
      arr.splice(0,1)
      return maxOf(arr)
    }
  // if the array's length is 0, return its value, as it must be the largest
  } else {
    return arr[0]
  }
}

function includesNumber(arr, num){
  if (arr.length > 1){
    if (arr[0] === num){
      return true
    } else {
      return includesNumber (arr.slice(1), num)
    }
  } else {
    return arr[0] === num
  }
}
