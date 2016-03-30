Template.Company_show.onCreated(function() {


})

Template.Company_show.helpers({
  company: function() {
    return Actodes.findOne({
      _id: FlowRouter.getParam('_id')
    });
  }

});

Template.Company_show.events({
  'click [data-action=showPlace_create]': function() {
    //console.log(e.target.id);
    BlazeLayout.render('App_body', {
      main: 'Company_show',
      create: 'Place_create'
    });
    Session.set('creating', true);
  },
  'click [data-action=showContact_create]': function() {
    //console.log(e.target.id);
    BlazeLayout.render('App_body', {
      main: 'Company_show',
      create: 'Contact_create'
    });
    Session.set('creating', true);
  },
  'click [data-action=delete]': function() {
    Session.set('deleting', true);
    console.log('deleting');
  },
  'click [data-action=exit-delete]': function() {
    Session.set('deleting', false);
    //console.log('deleting');
  },
  'click [data-action=exit-edit]': function() {
    Session.set('editing', false);
  },
  'click [data-action=exit-create]': function() {
    Session.set('creating', false);
  }


});
