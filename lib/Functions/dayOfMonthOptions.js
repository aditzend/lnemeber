dayOfMonthOptions = function() {
  let optionsArray = [];
  optionsArray.push({
    text: "No sé",
    value: 0
  });
  for (i = 1; i < 32; i++) {
    //var str = 'Num ' + i;
    optionsArray.push({
      text: i,
      value: i
    })
  }
  return optionsArray;
}
