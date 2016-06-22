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
  ReactiveDict
}
from 'meteor/reactive-dict';

import {
  FlowRouter
}
from 'meteor/kadira:flow-router';

import './person-show.html';
import './person-edit.js';


Template.Person_show.onCreated(function() {
  this.state = new ReactiveDict();
  this.state.setDefault({
    editing: false
  });
});

Template.Person_show.helpers({
  editing() {
      const instance = Template.instance();
      return instance.state.get('editing');
    },
    displaying() {
      const instance = Template.instance();
      return !instance.state.get('editing');
    },
    personArgs(person) {
      const instance = Template.instance();
      return {
        person,
        onSavedData(finished) {
            instance.state.set('editing', false);
          },
          onCancel(finished) {
            instance.state.set('editing', false);
          }

      }
    }
});

Template.Person_show.events({
  'click .js-edit': function(e, instance) {
    instance.state.set('editing', true);
  }
});
