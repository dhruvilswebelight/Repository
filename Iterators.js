// ex 1

let ranks = ['A', 'B', 'C'];
for(let rank of ranks) {
    console.log(rank);
}

// ex 2

function makeIterator(array) {
    let nextIndex = 0
    return {
      next: function() {
        return nextIndex < array.length ? {
          value: array[nextIndex++],
          done: false
        } : {
          done: true
        };
      }
    };
  }
  
  const it = makeIterator(['yash', 'nirav']);

//   Iterator use- next() 
  
  console.log(it.next().value); 
  console.log(it.next().value); 
  console.log(it.next().done);  
  



 


