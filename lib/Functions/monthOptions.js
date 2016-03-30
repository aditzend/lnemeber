monthOptions = function() {
  let optionsArray = [];
  optionsArray.push({
    text: 'No sé',
    value: 12
  })
  for (i = 0; i < 12; i++) {
    //var str = 'Num ' + i;
    optionsArray.push({
      text: moment().month(i).format('MMMM'),
      value: i
    })
  }
  return optionsArray;
}
