Template.header.events({

  'click .hide-menu': function(event) {

    event.preventDefault();

    if ($(window).width() < 769) {
      $("body").toggleClass("show-sidebar");
    } else {
      $("body").toggleClass("hide-sidebar");
    }
  },

  'click .right-sidebar-toggle': function(event) {
    event.preventDefault();
    $('#right-sidebar').toggleClass('sidebar-open');
  },
  'click [data-action=logout]': function() {
    alert('saliendo');
    Meteor.logout();
    //FlowRouter.go('signin');
    console.log("message");

  },
  'click [data-action=createCompany]': function() {

    FlowRouter.go('signin');
    console.log("signin");

  }


});
