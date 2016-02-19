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
FlowRouter.route('/create-customer', {
    name: 'createCustomer',
    action() {
      BlazeLayout.render('App_body', {main: 'Customer_create'});
      Session.set('showCreateOptions', false);
    }
});
FlowRouter.route('/create-vendor', {
    name: 'createVendor',
    action() {
      BlazeLayout.render('App_body', {main: 'Vendor_create'});
        Session.set('showCreateOptions', false);

    }
});
FlowRouter.route('/create-supply', {
    name: 'createSupply',
    action() {
      BlazeLayout.render('App_body', {main: 'Supply_create'});
        Session.set('showCreateOptions', false);
    }
});
FlowRouter.route('/create-product', {
    name: 'createProduct',
    action() {
      BlazeLayout.render('App_body', {main: 'Product_create'});
        Session.set('showCreateOptions', false);
    }
});
//---------------------------------------------------------------

//--------------------SHOW---------------------------------------
FlowRouter.route('/show-customer/:_id', {
  name:'showCustomer',
  action() {
    BlazeLayout.render('App_body', {main: 'Customer_show'});
  }
});
//---------------------------------------------------------------
