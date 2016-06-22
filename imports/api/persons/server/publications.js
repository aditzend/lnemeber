import {
  Meteor
}
from 'meteor/meteor';

// import {
//   Persons
// }
// from '../persons.js';



Meteor.publish("persons.test", function personsTest() {
  return Persons.find();
});


Meteor.publish('persons.public', function personsPublic() {
  return Persons.find({}, {
    fields: {
      treatedAs: 1,
      bDay: 1,
      bMonth: 1,
      bYear: 1,
      isMale: 1,
      lastName: 1,
      middleName: 1,
      name: 1,
      fin: 1,
      finType: 1,
      country: 1


    }
  });
});

Meteor.publish('persons.own', function personsOwn() {
  if (this.userId) {
    let u = Meteor.users.findOne(this.userId);

    //console.log('USER KEY', r.key);

    // let r = "vBBRrEM8m8PYSjTBM";

    return Persons.find({
      owner: u.ssok
    }, {
      fields: {
        owner: false

      }
    });
  } else {
    this.ready();
  }
});
