import {
  Meteor
}
from 'meteor/meteor';

import {
  ValidatedMethod
}
from 'meteor/mdg:validated-method';

Meteor.methods({
  'ad' () {
    console.log("ALAMEDA");

    return 'Alameda';
  }
});
