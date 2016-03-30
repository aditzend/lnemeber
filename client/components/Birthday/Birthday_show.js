Template.Birthday_show.onRendered(function() {


});


///////////////////////////////GLOBAL FUNCTIONS/////////////////////////////////////



var bDay = function(dateOfBirth) {

  var result;
  var now = moment();
  var actualBDay = moment(dateOfBirth).year(now.year());
  var prevBDay = moment(actualBDay).subtract(1, 'years');
  var nextBDay = moment(actualBDay).add(1, 'years');
  if (now.month() < 6) {
    if (Math.abs(now.diff(prevBDay, 'days')) < Math.abs(now.diff(actualBDay,
        'days'))) {
      result = prevBDay; //compare against last year's birthday
    } else {
      result = actualBDay; //compare against this year's birthday
    }
  } else {
    //we are between JUL and DEC
    if (Math.abs(now.diff(nextBDay, 'days')) < Math.abs(now.diff(actualBDay,
        'days'))) {
      result = nextBDay; //compare against next year's birthday
    } else {
      result = actualBDay; //compare against this year's birthday
    }
  }
  return result;

};

Template.Birthday_show.helpers({

  /* hasAge : function() {
      return (dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear).year() === 5000) ? false : true;//5000 means year of birth is unknown
    },*/
  test: function() {
    return dateOfBirth(this.bDay, this.bMonth, this.bYear);
  },
  validBDay: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);

    return (d.isValid()) ? true : false;

  },
  age: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var diff = moment().diff(d, 'years');
    var age = d.fromNow(true);
    return (!(d.year() == 5000) && diff >= 1) ? age : false;
  },
  newBorn: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var diff = moment().diff(d, 'years');
    var age = d.fromNow(true);
    return (!(d.year() == 5000) && diff < 1) ? age : false;
  },
  bornToday: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    //var age = moment().diff(d,'years');
    return (!(d.year() == 5000) && d.isSame(moment(), 'day')) ? true :
      false;
  },
  isToday: function() {
    var now = moment();
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    return ((now.month() === d.month()) && (now.date() === d.date())) ?
      true : false;
  },
  wasYesterday: function() {
    var now = moment();
    var yesterday = moment().subtract(1, 'days');
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    return ((now.month() === d.month()) && (yesterday.date() === d.date())) ?
      true : false;
  },
  hasPassed: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);

    var b = bDay(d);
    return (b.isBefore(moment(), 'day')) ? true : false;

  },
  moreThanAWeekAgo: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);

    var b = bDay(d);
    return (moment().diff(b, 'days') > 6) ? true : false;
  },
  isTomorrow: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    return (b.diff(moment(), 'hours') < 24 && b.diff(moment(), 'hours') >
      0) ? true : false;
  },
  inLessThanAWeek: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);

    var b = bDay(d);
    return (b.diff(moment(), 'weeks') < 1) ? true : false;
  },
  inLessThanAMonth: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    return (b.diff(moment(), 'months') < 1) ? true : false;
  },
  whatDiff: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    return b.diff(moment(), 'days');
  },
  bDayClose: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    if (b.diff(moment(), 'days') == 6) {
      return b.format('[el ] dddd D');
    } else {
      return b.calendar(null, {
        sameDay: '[hoy]',
        nextDay: '[en dos dias]',
        nextWeek: '[el ]dddd',
        lastDay: '[ayer]',
        lastWeek: '[el ] dddd',
      });
    }
  },
  bDayPlain: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    return b.format('D MMM');
  },
  bDayLong: function() {
    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    var b = bDay(d);
    return b.format('[el ] dddd, D [de] MMMM');
  },
  newAge: function() {

    var d = dateOfBirth(this.bDay, this.bMonth, this.bYear);
    //var lessYear =
    return (d.year() == 5000) ? false : moment().add(1, 'year').diff(d,
      'years');
  }



});
