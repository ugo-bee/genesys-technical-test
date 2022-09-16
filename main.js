function nth_most_rate(list,n){
    let unique_numbers_list = []
    const unique_numbers = list.filter((value,index,self)=> self.indexOf(value)===index)
      let unique_items_count =[]
  
      for (let i = 0; i < unique_numbers.length; i += 1) {
      const uniqueNumber = unique_numbers[i]
  
          const  count = list.filter(item => item == uniqueNumber).length
  
          unique_items_count.push({ uniqueNumber, count });
    }
  
      const arrangedByCount = unique_items_count.sort((first, second) => first.count - second.count);
      return arrangedByCount[n - 1].uniqueNumber;
}
  const list = [1, 1, 1, 2, 2, 5, 5, 6, 4, 4];
  const n = 1;
  console.log(nth_most_rate(list, n));