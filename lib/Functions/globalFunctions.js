dateOfBirth = function(bDay, bMonth, bYear) {

  var result;
  if ((bDay !== null) && (bMonth !== null)) {
    if ((bDay == '') || (bMonth == '')) {
      result = moment(sfsdfseff);
    };
    result = moment({
      year: bYear,
      month: bMonth,
      day: bDay
    });
  } else {

    result = null;
  };
  return result;

};
