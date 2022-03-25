function* counter(value) 
{
    let step;
   
    while (true) 
    {
      step = yield ++value;
   
      if (step) 
      {
        value += step;
      }
    }
}
   
   const generatorFunc = counter(0);
   console.log(generatorFunc.next().value);  
   console.log(generatorFunc.next().value);   
   console.log(generatorFunc.next().value);   
   console.log(generatorFunc.next(10).value); 
   console.log(generatorFunc.next().value);   
   console.log(generatorFunc.next(10).value); 
   