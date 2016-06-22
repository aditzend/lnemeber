generateSsok = (_id) => Random.secret([26]) + _id;

HARDCODE_OWNER = "yckFkyE3XJqF56CnJ";

postSignUp = function(userId, info) {
  console.log('SIGN UP');
  // FlowRouter.go('exit');
};

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

actualBirthDay = function(dateOfBirth) {

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


let myPostSubmitFunc = function(userId, info) {
  if (userId) {
    console.log('NEW USER : ', userId);
    const ssok = generateSsok(userId);
    let person = Persons.insert({
      owner: ssok
    });
    console.log('NEW PERSON : ', person);
    Meteor.users.update(userId, {
      $set: {
        relatedPerson: person,
        ssok: ssok
      }
    });

    // let rel = Rels.insert({
    //   origin: person,
    //   destiny: userId,
    //   owner: key,
    //   type: 'HAS_USER'
    // });
    // 
    // console.log('NEW REL : ', rel);
  }
};
AccountsTemplates.configure({
  postSignUpHook: myPostSubmitFunc
});
