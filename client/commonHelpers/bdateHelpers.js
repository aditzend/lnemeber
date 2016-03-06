/*Template.registerHelper("bdate", function(){
  let str='';
  let bdateObj = {};
if (this.bDayOfMonth && this.bMonth && this.bYear) {
    //return this.bDayOfMonth +'/'+this.bMonth+'/'+this.bYear;
    //str = "'"+this.bYear+" "+this.bMonth+" "+this.bDayOfMonth+"','YYYY M D'";
    bdateObj = { year:this.bYear, month:this.bMonth-1, day: this.bDayOfMonth};

    return String(moment(bdateObj).format('YYYY-MM-DD'));

  }else if(this.bDayOfMonth && this.bMonth && !this.bYear) {
    bdateObj = {year:5000, month:this.bMonth-1, day: this.bDayOfMonth};

    //str =  "'"+this.bMonth+" "+this.bDayOfMonth+"','M D'"
    //return this.bDayOfMonth +'/'+this.bMonth +'/0000';
    //return moment('1917 '+this.bMonth+' '+this.bDayOfMonth).format("YYYY-MM-DD");
    return String(moment(bdateObj).format('YYYY-MM-DD'));

  }else {
    return '';

  }
  //return moment(this.bDayOfMonth+'/'+this.bMonth+'/'+this.bYear).format("YYYY-MM-DD");
});*/

/*Template.registerHelper('isToday', function(birthStr) {
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
*/



/*Template.registerHelper('wasYesterday', function(nearest) {
  var yesterday = moment().subtract(1,'days');
  var birthday = moment("2016 03 03","YYYY-MM-DD") ;
  if (birthday.isSame(yesterday,'day')) {
    return true;
  }else{
    return false;
  }
});*/


/*Template.registerHelper("hasAge", function(b){
  return (moment(b).year() === 5000) ? false : true;
});*/


/*

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
});*/








/*Template.registerHelper("age", function(b){
  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  //return  now.add(1,'year').diff(bDate,'years');
  return  now.diff(bDate,'years');

});*/

/*  var bDate = moment(b,"YYYY-MM-DD");
  var now = moment();
  return  now.add(1,'year').diff(bDate,'years');

});*/
