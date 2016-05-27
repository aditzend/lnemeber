//no one enters without logging!
FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//home always renders the dashboard
FlowRouter.route('/', {
  name: 'home',
  action: function() {
    BlazeLayout.render('App_body', {
      main: "Dashboard"
    });
  }
});

FlowRouter.route('/exit', {
  name: 'exit',
  action: function() {
    Meteor.logout();
    BlazeLayout.render('AT_layout', {
      main: "Exit"
    });
  }
});

//-------------------AccountsTemplates------------------------
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'signin',
  path: '/login',
  //template: 'myLogin',
  layoutTemplate: 'AT_layout',
  layoutRegions: {},
  contentRegion: 'main'
});

AccountsTemplates.configureRoute('changePwd', {
  layoutType: 'blaze',
  name: 'At.changePwd',
  path: '/changepassword',
  //template: 'myLogin',
  layoutTemplate: 'AT_layout',
  layoutRegions: {},
  contentRegion: 'main'
});

//------------------------------------------------------------


//-------------------CREATE-----------------------------------
FlowRouter.route('/create-company', {
  name: 'createCompany',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Company_create'
    });
    Session.set('showCreateOptions', false);
  }
});


FlowRouter.route('/create-item', {
  name: 'createItem',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Item_create'
    });
    Session.set('showCreateOptions', false);
  }
});

FlowRouter.route('/create-generic/', {
  name: 'createGeneric',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Generic_create'
    });
    Session.set('showCreateOptions', false);
  }
});
//---------------------------------------------------------------

//--------------------SHOW---------------------------------------
FlowRouter.route('/show-generic/:_id', {
  name: 'showGeneric',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Generic_show'
    });
  }
});
FlowRouter.route('/show-generics/', {
  name: 'showGenerics',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Generics_show'
    });
  }
});
FlowRouter.route('/show-2/:_id', {
  name: 'showCompany',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Company_show'
    });
  }
});
FlowRouter.route('/contact/:_id', {
  name: 'Contact.show',
  action(params, queryParams) {
    console.log("render contact ");
    BlazeLayout.render('App_body', {
      main: 'Contact_show'
    });

  }
});



FlowRouter.route('/show-1/:_id', {
  name: 'showContact',
  action() {
    BlazeLayout.render('App_body', {
      main: 'Contact_show_profile'
    });
  }
});
//---------------------------------------------------------------
