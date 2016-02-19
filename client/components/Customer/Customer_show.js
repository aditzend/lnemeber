Template.Customer_show.onCreated(function() {
  this.getCustomerId = () => FlowRouter.getParam('_id');

  this.autorun(() => {
    this.subscribe('Actodes.byId', this.getCustomerId());
  });
})

Template.Customer_show.helpers({
  company: function() {
    return Actodes.findOne({_id: FlowRouter.getParam('_id')}) ;
  }

});

Template.Customer_show.events({
  'click [data-action=showPlace_create]': function() {
    //console.log(e.target.id);
    BlazeLayout.render('App_body', {main: 'Customer_show', create:'Place_create'});
    Session.set('creating', true);
  },
  'click [data-action=showContact_create]': function() {
    //console.log(e.target.id);
    BlazeLayout.render('App_body', {main: 'Customer_show', create:'Contact_create'});
    Session.set('creating', true);
  }


});
