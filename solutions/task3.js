let array = [
  { type: "A", value: "Tesla" },
  { type: "A", value: "GMC" },
  { type: "B", value: "KIA" },
  { type: "C", value: "Dodge" },
  { type: "C", value: "Ford" },

];

let newArr = [];

array.forEach(function (item) {
  let filtredArr = newArr.filter(function (val) {
    return val.type == item.type;
  });
  if (filtredArr.length) {
    let filtredArrIndex = newArr.indexOf(filtredArr[0]);
    newArr[filtredArrIndex].value = newArr[filtredArrIndex].value.concat(
      item.value
    );
  } else {
    if (typeof item.value == "string") item.value = [item.value];
    newArr.push(item);
  }
});

console.log(newArr);
