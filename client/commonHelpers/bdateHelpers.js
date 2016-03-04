Template.registerHelper('isToday', function(birthStr) {
  var now = moment();
  var cuttedStr = birthStr.substring(4,10);
  var bDayStr = now.format("YYYY") + cuttedStr;
  var bDay = moment(bDayStr,"YYYY-MM-DD");

  if (bDay.isSame(now,'day')){
    return true;
  }else{
    return false;
  }
});

Template.registerHelper('calcNearest', function(birthStr) {
  var cuttedStr = moment(birthStr).format('MM-DD');
  //birthStr.substring(4,10);
  console.log(moment(birthStr).fromNow(true));

  var bDayStr = moment().format("YYYY") + cuttedStr;
  var actualYear = Number(moment().format("YYYY"));
  var prevBDayStr = ( actualYear - 1 ) + cuttedStr;
  var nextBDayStr = ( actualYear + 1 ) + cuttedStr;
  var actualBDay = moment(bDayStr,"YYYY-MM-DD");
  var prevBDay = moment(prevBDayStr, "YYYY-MM-DD");
  var nextBDay = moment(nextBDayStr,"YYYY-MM-DD");
  var bDay = actualBDay;//the birthday we are comparing to
  var imIn = 0;

  if (moment().format('MM') < 7){
    //we are between JAN and JUN
    if ( Math.abs(moment().diff(prevBDay,'days')) < Math.abs(moment().diff(actualBDay,'days')) ){
      bDay = prevBDay;//compare against last year's birthday
      imIn = 1;
    }else{
      bDay = actualBDay;//compare against this year's birthday
      imIn = 2;
    }
  }else{
    //we are between JUL and DEC
    if ( Math.abs(moment().diff(nextBDay,'days')) < Math.abs(moment().diff(actualBDay,'days')) ) {
      bDay = nextBDay;//compare against next year's birthday
      imIn = 3;
    }else{
      bDay = actualBDay;//compare against this year's birthday
      imIn = 4;
    }
  }
  //return bDay;
  Session.set('nearestBDay', bDay.format("YYYY-MM-DD"));
});

Template.registerHelper('whatDiff', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  return bDay.diff(moment(),'days');
});

Template.registerHelper('bDayClose', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  if ( bDay.diff(moment(),'days') == 6 ) {
    return bDay.format('[el ] dddd D');
  }else{
    return  bDay.calendar(null, {
              sameDay: '[hoy]',
              nextDay: '[en dos dias]',
              nextWeek: '[el ]dddd',
              lastDay: '[ayer]',
              lastWeek: '[el ] dddd',
            });
  }
});

Template.registerHelper('bDayPlain', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  //return bDay.format('DDMMM YY HH:mm:ss') + " faltan " + bDay.diff(moment(),'days') + "   .";
  return bDay.format('D MMM');
});

Template.registerHelper('bDayLong', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  return bDay.format('[el ] dddd, D [de] MMMM');
});

Template.registerHelper('isTomorrow', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  if( bDay.diff(moment(),'hours') < 24 && bDay.diff(moment(),'hours') > 0) {
    return true;
  }else{
    return false;
  }
});

Template.registerHelper('hasPassed', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");

  if ( bDay.isBefore(moment()) ) {
    return true;
  }else{
    return false;
  }
});

Template.registerHelper('inLessThanAWeek', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  if ( bDay.diff(moment(),'weeks') < 1 ) {
    return true;
  }else{
    return false;
  }
});

Template.registerHelper('inLessThanAMonth', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  if ( bDay.diff(moment(),'month') < 1 ) {
    return true;
  }else{
    return false;
  }
});
Template.registerHelper('wasYesterday', function() {
  if ( (moment().format( 'DD') - 1) == bDay.format( 'DD') ) {
    return true;
  }else{
    return false;
  }
});

Template.registerHelper('moreThanAWeekAgo', function() {
  var bDay = moment(Session.get('nearestBDay'),"YYYY-MM-DD");
  if ( moment().diff(bDay,'days') > 6 ) {
    return true;
  }else{
    return false;
  }
});

Template.registerHelper("age", function(b){
  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  //return  now.add(1,'year').diff(bDate,'years');
  return  now.diff(bDate,'years');

});
Template.registerHelper("newAge", function(b){
  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  return  now.add(1,'year').diff(bDate,'years');

});
