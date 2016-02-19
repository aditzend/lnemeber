Template.Place_show.onCreated( function() {

  this.autorun( () => {
    this.subscribe('Places.byRelatedActode', FlowRouter.getParam('_id'));
  });

});

Template.Place_show.helpers({
  places: function() {
    var result = Places.find({relatedActode:FlowRouter.getParam('_id')},{sort: {placeType: 1}});
    return (result.count() == 0) ? false : result;
  }
});


Template.Place_show.events({
  'click [data-action=edit]' : function(e) {
    console.log('well clicked!');
  }

});
