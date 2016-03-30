bYearOptions = function() {
  let optionsArray = [];
  let thisYear = moment().format('YYYY');
  let beginYear = thisYear - 125;
  optionsArray.push({text: 'No sé', value: 5000});
  for (i= thisYear; i > beginYear; i--) {
    //var str = 'Num ' + i;
    optionsArray.push({text: i, value: i})
  }


  return optionsArray;
}
