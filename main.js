
/*
Given a list of integers, create a function that returns the nth-rarest item.
The funtion should be called nth_most_rate signature and its nth_most_rate signature(list,n),
Where list is the array of integers and n is the nth rarest item.
For Example in([5,4,5,4,5,4,4,5,3,3,3,2,2,1,5]),if 2 is supplied as n
the answer is 2 as 2 is the second rarest item.
*/





function nth_most_rate(list,n){
    // unique numbers
    const unique_numbers = list.filter((value,index,self)=> self.indexOf(value)===index)
      let unique_items_count =[]
    // count of  unique numbers
      for (let i = 0; i < unique_numbers.length; i += 1) {
      const uniqueNumber = unique_numbers[i]
  
          const  count = list.filter(item => item == uniqueNumber).length
  
          unique_items_count.push({ uniqueNumber, count });
    }
  
      const arrangedByCount = unique_items_count.sort((first, second) => first.count - second.count);
      return arrangedByCount[n - 1].uniqueNumber;
} 
    // Testing the code,to check if returns the nth_most_rate item
  const list = [5,4,5,4,5,4,4,5,3,3,3,2,2,1,5];
  const n = 2;
  console.log(nth_most_rate(list, n));