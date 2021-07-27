function earliestSpace(a, b, c){
    let result = a;
    let index = a.indexOf(" ");
    if(index > b.indexOf(" ")){
        result = b;
        index = b.indexOf(" ");
    }
    if(index > c.indexOf(" ")){
        result = c;
        index = c.indexOf(" ");
    }
    return result;
  }
  
  console.log(earliestSpace("This is a test", "Where it checks for spaces",
  "bla bla bla"));