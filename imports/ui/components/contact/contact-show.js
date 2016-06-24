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

import './contact-show.html';
import './contact-edit.js';

Template.Contact_show.onCreated(function() {

    this.state = new ReactiveDict();
    this.state.setDefault({
        showingOptionButtons: false,
        expanded: false
    });
});


Template.Contact_show.helpers({
    // editing() {
    //     const instance = Template.instance();
    //     return instance.state.get('editing');
    // },
    // displaying() {
    //     const instance = Template.instance();
    //     return !instance.state.get('editing');
    // },

    // personArgs(person) {
    //     const instance = Template.instance();
    //     return {
    //         person,
    //         onSavedData(finished) {
    //             instance.state.set('editing', false);
    //         },
    //         onCancel(finished) {
    //             instance.state.set('editing', false);
    //         }
    // 
    //     }
    // }

    showingOptionButtons() {
        const instance = Template.instance();
        return instance.state.get('showingOptionButtons');
    },
    expanded() {
        const instance = Template.instance();
        return instance.state.get('expanded');
    }
});

Template.Contact_show.events({
    'click .js-show-option-buttons': function(e, instance) {
        instance.state.set('showingOptionButtons', true);
    },
    'click .js-hide-option-buttons': function(e, instance) {
        instance.state.set('showingOptionButtons', false);
    },
    'click .js-expand': function(e, instance) {
        instance.state.set('expanded', true);


    },
    'click .js-compress': function(e, instance) {
        instance.state.set('expanded', false);


    },
    'click .js-delete': function(e, instance) {
        instance.data.onDelete(instance.data.relId);
    },
    'click .js-edit': function(e, instance) {
        instance.data.onEdit(instance.data.rel._id);

    }

});
