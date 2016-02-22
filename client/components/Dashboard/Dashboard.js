Template.Dashboard.onCreated( function() {
  this.autorun( () => {
    this.subscribe('Actodes.all');
    this.subscribe('Rels.byOwner', Meteor.userId()); // replace userId with OWNER, e.g. belongsTo

  });

});



Template.Dashboard.events({
  'click #btn-create' : function() {
    Session.set('showCreateOptions', true);

    //BlazeLayout.render('Dashboard',{createArea:'Create'})
  }




});

Template.Dashboard.helpers({
  showCreateOptions() {
    return Session.get('showCreateOptions');
  }

});

/*Template.Dashboard.onCreated(function() {
  BlazeLayout.render('Dashboard', {createSection:'Create'})
})*/
