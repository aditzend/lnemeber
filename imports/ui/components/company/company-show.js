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

import './company-show.html';
import './company-edit.js';


Template.Company_show.onCreated(function() {
  console.log("show company", this.data.selectedCompanyId);

  this.subscribe("companies.public.byId", this.data.selectedCompanyId);
});

Template.Company_show.helpers({

  company() {
    const instance = Template.instance();

    return Companies.findOne(instance.data.selectedCompanyId);
  }
});
