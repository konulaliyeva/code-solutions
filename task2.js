const findPrefix = (array) => {
    if (array.length === 0) {
      return;
    }
    let result = "";
    for (let i = 0; i < array[0].length; i++) {
      if (array.every(x => x.charAt(i) === array[0][i])) {
        result += array[i].charAt(i);
      } else break;
    }
    if(result ===''){
        return false
    }
    return result;
  }

  console.log(findPrefix(["flower", "ana", "dido"]));
  console.log(findPrefix([ "alim", "alibali", "alisa"]));