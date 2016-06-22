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

import './person-show-work.html';
import '../company/company-create.js';
import '../company/company-search.js';
import '../rel/rel-worker-edit.js';
import '../../../api/rels/methods.js';



Template.Person_show_work.onCreated(function() {
  let admin = Meteor.call('rels.checkAdmin');
  console.log(admin);


  const instance = Template.instance();
  this.state = new ReactiveDict();

  let positionCount = 0;
  // console.log(instance.data.person._id);
  this.autorun(function() {
    positionCount = Rels.find({
      origin: instance.data.person._id,
      type: 'worker'
    }).count();
    console.log('position count', positionCount);
    instance.state.set('positionCount', positionCount);

  });



  this.state.setDefault({
    creatingCompany: false,
    creatingWorkRel: false,
    editingWorkRel: true,

  });
});

Template.Person_show_work.helpers({
  selectedCompany() {
      const instance = Template.instance();

      return instance.state.get('selectedCompany');
    },

    positions(personId) {
      return Rels.find({
        origin: personId,
        type: 'worker'
      });

    },
    positionCountGreaterThan(number) {
      const instance = Template.instance();

      return (instance.state.get('positionCount') > number) ? true :
        false;
    },
    company(destiny) {
      const c = Companies.findOne(
        destiny
      );
      return c.name;
    },

    creatingCompany() {
      const instance = Template.instance();
      return instance.state.get('creatingCompany');
    },
    createCompanyArgs() {
      const instance = Template.instance();

      return {
        // person,
        onSavedData() {
            instance.state.set('creatingCompany', false);

          },
          onCancel() {
            instance.state.set('creatingCompany', false);

          }
      }
    },
    position(company) {
      const instance = Template.instance();
      const person = instance.data.person._id;
      const rel = Rels.findOne({
        origin: person,
        type: "worker",
        destiny: company
      });
      return rel.position;
    },
    searchCompanyArgs() {
      const instance = Template.instance();

      return {
        selectedCompany(id) {
          instance.state.set('selectedCompany', id);
          console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);

        }
      }
    },
    showCompanyArgs(id) {
      const instance = Template.instance();
      return {
        selectedCompanyId: id
      }
    },
    createWorkerRelArgs(company) {
      const instance = Template.instance();
      return {
        origin: instance.data.person._id,
        destiny: company,
        onSavedData() {
          instance.state.set('editingWorkRel', false);
          instance.state.set('creatingWorkRel', false);
          instance.state.set('selectedCompany', false);
        },
        onCancel() {
          instance.state.set('editingWorkRel', false);
          instance.state.set('creatingWorkRel', false);
          instance.state.set('selectedCompany', false);


        },
        onEdit() {
          instance.state.set('editingWorkRel', true);
        }

      }
    },
    creatingWorkerRel() {
      const instance = Template.instance();
      return instance.state.get('creatingWorkRel');

    },
    editingWorkRel() {
      const instance = Template.instance();

      return instance.state.get('editingWorkRel');
    },
    validated() {
      return true;
    }
});

Template.Person_show_work.events({
  'click .js-edit': function(e, instance) {
    instance.state.set('editing', true);
  },
  'click .js-create-company': function(e, instance) {
    instance.state.set('creatingCompany', true);
  },
  'click .js-deselect-company': function(e, instance) {
    instance.state.set('selectedCompany', false);
  },
  'click .js-create-worker-rel': function(e, instance) {
    instance.state.set('creatingWorkRel', true);
    console.log("STATE>>>>>>>>> CREATING WORK REL");
  },
  'click .js-edit-worker-rel': function(e, instance) {
    console.log("EDIT>>>>>>>>> ");
  }

});
