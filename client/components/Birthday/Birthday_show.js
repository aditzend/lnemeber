Template.Birthday_show.onCreated( function() {
/*  var dateOfBirth;
  var bDay;//the nearest birthday
  var nearest;*/


/*  if (this.data.bDayOfMonth && this.data.bMonth && this.data.bYear) {
      dateOfBirth = moment({
        year:this.data.bYear,
        month:this.data.bMonth-1,
        day: this.data.bDayOfMonth
        });
    }else if(this.data.bDayOfMonth && this.data.bMonth && !this.data.bYear) {
      dateOfBirth = moment({
        year: 5000,
        month:this.data.bMonth-1,
        day: this.data.bDayOfMonth
        });
    }else {
      dateOfBirth = null;
    };

    var actualBDay = moment(dateOfBirth).year(now.year());
    var prevBDay = moment(actualBDay).subtract(1,'years');
    var nextBDay = moment(actualBDay).add(1,'years');





  if (now.month() < 6){
      if ( Math.abs(now.diff(prevBDay,'days')) < Math.abs(now.diff(actualBDay,'days')) ){
        bDay = prevBDay;//compare against last year's birthday
      }else{
        bDay = actualBDay;//compare against this year's birthday
      }
    }else{
      //we are between JUL and DEC
      if ( Math.abs(now.diff(nextBDay,'days')) < Math.abs(now.diff(actualBDay,'days')) ) {
        bDay = nextBDay;//compare against next year's birthday
      }else{
        bDay = actualBDay;//compare against this year's birthday
      }

  }

  console.log("////////////////////////" + this.data._id);
  console.log("actualBDay : " + actualBDay.format('DD.MM.YYYY'));
  console.log("prevBDay : " + prevBDay.format('DD.MM.YYYY'));
  console.log("nextBDay : " + nextBDay.format('DD.MM.YYYY'));
  console.log("bDay : " + bDay.format('DD.MM.YYYY'));
  console.log("now  date: " + now.date() );
  console.log("dateOfBirth date : " + dateOfBirth.date() );
  console.log("----------------------------------------------");

*/



  });



///////////////////////////////GLOBAL FUNCTIONS/////////////////////////////////////

var dateOfBirth = function (bDayOfMonth,bMonth,bYear) {

  var result;
  if ( bDayOfMonth &&  bMonth &&  bYear) {
      result = moment({
        year: bYear,
        month: bMonth-1,
        day:  bDayOfMonth
        });
    }else if( bDayOfMonth &&  bMonth && ! bYear) {
      result = moment({
        year: 5000,
        month: bMonth-1,
        day:  bDayOfMonth
        });
    }else {
      result = null;
    };
  return result;

};

var bDay = function (dateOfBirth) {

  var result;
  var now = moment();
  var actualBDay = moment(dateOfBirth).year(now.year());
  var prevBDay = moment(actualBDay).subtract(1,'years');
  var nextBDay = moment(actualBDay).add(1,'years');
  if (now.month() < 6){
      if ( Math.abs(now.diff(prevBDay,'days')) < Math.abs(now.diff(actualBDay,'days')) ){
        result = prevBDay;//compare against last year's birthday
      }else{
        result = actualBDay;//compare against this year's birthday
      }
    }else{
      //we are between JUL and DEC
      if ( Math.abs(now.diff(nextBDay,'days')) < Math.abs(now.diff(actualBDay,'days')) ) {
        result = nextBDay;//compare against next year's birthday
      }else{
        result = actualBDay;//compare against this year's birthday
      }
  }
  return result;

};

Template.Birthday_show.helpers({

/* hasAge : function() {
    return (dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear).year() === 5000) ? false : true;//5000 means year of birth is unknown
  },*/
  age : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var diff = moment().diff(d,'years');
    var age = d.fromNow(true);
    return (!(d.year() == 5000) && diff >= 1) ? age : false;
  },
  newBorn : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var diff = moment().diff(d,'years');
    var age = d.fromNow(true);
    return (!(d.year() == 5000) && diff < 1) ? age : false;
  },
  bornToday : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    //var age = moment().diff(d,'years');
    return ( !(d.year() == 5000) && d.isSame(moment(),'day') ) ? true : false;
  },
  isToday : function() {
    var now = moment();
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    return ( (now.month() === d.month()) && (now.date()===d.date()) ) ? true : false;
  },
  wasYesterday : function() {
    var now = moment();
    var yesterday = moment().subtract(1,'days');
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    return ( (now.month() === d.month()) && (yesterday.date()===d.date()) ) ? true : false;
  },
  hasPassed : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return (b.isBefore(moment(), 'day')) ? true : false;

  },
  moreThanAWeekAgo : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return ( moment().diff(b,'days') > 6) ? true : false;
  },
  isTomorrow : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return (b.diff(moment(), 'hours') <24 && b.diff(moment(),'hours') > 0) ? true : false;
  },
  inLessThanAWeek : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return (b.diff(moment(),'weeks') < 1 ) ? true : false;
  },
  inLessThanAMonth : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return ( b.diff(moment(),'months') < 1) ? true : false;
  },
  whatDiff : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return b.diff(moment(),'days');
  },
  bDayClose : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    if ( b.diff(moment(),'days') == 6 ) {
      return b.format('[el ] dddd D');
    }else{
      return  b.calendar(null, {
                sameDay: '[hoy]',
                nextDay: '[en dos dias]',
                nextWeek: '[el ]dddd',
                lastDay: '[ayer]',
                lastWeek: '[el ] dddd',
              });
    }
  },
  bDayPlain : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return b.format('D MMM');
  },
  bDayLong : function() {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    var b = bDay(d);
    return b.format('[el ] dddd, D [de] MMMM');
  },
  newAge : function () {
    var d = dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear);
    //var lessYear =
    return (d.year() == 5000) ? false : moment().add(1,'year').diff(d,'years');
  }







});
