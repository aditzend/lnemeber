//no one enters without logging!
FlowRouter.triggers.enter([AccountsTemplates.ensureSignedIn]);

//home always renders the dashboard
FlowRouter.route('/', {
    name: 'home',
    action: function() {
      BlazeLayout.render('App_body', {main: "Dashboard"});
    }
});

//-------------------AccountsTemplates------------------------
AccountsTemplates.configureRoute('signIn', {
  layoutType: 'blaze',
  name: 'At.signin',
  path: '/sign-in',
  //template: 'myLogin',
  layoutTemplate: 'App_body',
  layoutRegions: {

  },
  contentRegion: 'main'
});
//------------------------------------------------------------


//-------------------CREATE-----------------------------------
FlowRouter.route('/create-company', {
    name: 'createCompany',
    action() {
      BlazeLayout.render('App_body', {main: 'Company_create'});
      Session.set('showCreateOptions', false);
    }
});


FlowRouter.route('/create-item', {
    name: 'createItem',
    action() {
      BlazeLayout.render('App_body', {main: 'Item_create'});
        Session.set('showCreateOptions', false);
    }
});
//---------------------------------------------------------------

//--------------------SHOW---------------------------------------
FlowRouter.route('/show-2/:_id', {
  name:'showCompany',
  action() {
    BlazeLayout.render('App_body', {main: 'Company_show'});
  }
});



FlowRouter.route('/show-1/:_id', {
  name:'showContact',
  action() {
    BlazeLayout.render('App_body', {main: 'Contact_show_profile'});
  }
});
//---------------------------------------------------------------
