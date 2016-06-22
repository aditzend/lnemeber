///////////////////////////////GLOBAL FUNCTIONS/////////////////////////////////////



Template.Birthday_show.helpers({

  /* hasAge : function() {
      return (dateOfBirth(this.bDayOfMonth,this.bMonth,this.bYear).year() === 5000) ? false : true;//5000 means year of birth is unknown
    },*/


  validBDay(d) {
      return (d.isValid()) ? true : false;
    },
    age(d) {
      const diff = moment().diff(d, 'years');
      const age = d.fromNow(true);
      return (!(d.year() == 5000) && diff >= 1) ? age : false;
    },
    newBorn(d) {
      const diff = moment().diff(d, 'years');
      const age = d.fromNow(true);
      return (!(d.year() == 5000) && diff < 1) ? age : false;
    },
    bornToday(d) {
      //var age = moment().diff(d,'years');
      return (!(d.year() == 5000) && d.isSame(moment(), 'day')) ? true :
        false;
    },
    isToday(d) {
      const now = moment();
      return ((now.month() === d.month()) && (now.date() === d.date())) ?
        true : false;
    },
    wasYesterday(d) {
      const now = moment();
      const yesterday = moment().subtract(1, 'days');
      return ((now.month() === d.month()) && (yesterday.date() === d.date())) ?
        true : false;
    },
    hasPassed(b) {
      return (b.isBefore(moment(), 'day')) ? true : false;

    },
    moreThanAWeekAgo(b) {
      return (moment().diff(b, 'days') > 6) ? true : false;
    },
    isTomorrow(b) {
      return (b.diff(moment(), 'hours') < 24 && b.diff(moment(), 'hours') >
        0) ? true : false;
    },
    inLessThanAWeek(d, b) {
      return (b.diff(moment(), 'weeks') < 1) ? true : false;
    },
    inLessThanAMonth(d, b) {
      return (b.diff(moment(), 'months') < 1) ? true : false;
    },
    whatDiff(d, b) {
      return b.diff(moment(), 'days');
    },
    bDayClose(b) {
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
    bDayPlain(b) {
      return b.format('D MMM');
    },

    bDayLong: function(b) {
      return b.format('[el ] dddd, D [de] MMMM');
    },
    newAge: function(d) {
      //var lessYear =
      return (d.year() == 5000) ? false : moment().add(1, 'year').diff(d,
        'years');
    }



});
