import {
  Meteor
}
from 'meteor/meteor';


import {
  Template
}
from 'meteor/templating';
import {
  Mongo
}
from 'meteor/mongo';
import {
  Tracker
}
from 'meteor/tracker';


import {
  FlowRouter
}
from 'meteor/kadira:flow-router';

import '../components/person/person-show.js';
import '../components/person/person-show-work.js';
import '../components/company/company-show.js';
import '/imports/api/users/methods.js';



import './profile-show-page.html';



Template.Profile_show_page.onCreated(function profileShowPageOnCreated() {
  this.autorun(() => {
    this.subscribe('persons.own');
    this.subscribe('Rels.byOrigin', this.userId);
  });
});



Template.Profile_show_page.helpers({
  adminOf() {
      let c = Meteor.call('ad');
      return c;
    },
    relatedPersonId() {
      const instance = Template.instance();

      // let r = Meteor.users.findOne(Meteor.userId()).relatedPerson;
      return Meteor.user().relatedPerson;
      // let relatedPerson = Persons.findOne(r);


    },
    person() {
      const r = Meteor.user().relatedPerson;
      return Persons.findOne(r);
    },
    company() {
      const r = Meteor.user().relatedPerson;
      return Persons.findOne(r);
    },

    personArgs(relatedPersonId) {
      const instance = Template.instance();
      const person = Persons.findOne(relatedPersonId);
      console.log('person ', person._id);
      console.log('person ', person.name);
      return {
        personReady: instance.subscriptionsReady(),
        person
      }
    }
});

Template.Profile_show_page.events({


});
