import {
    Meteor
}
from 'meteor/meteor';



Meteor.publish('places.test',
    function() {
        if (this.userId) {
            return Places.find();
        } else {
            this.ready();
        }
    });
