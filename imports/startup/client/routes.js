import {
    FlowRouter
}
from 'meteor/kadira:flow-router';
import {
    BlazeLayout
}
from 'meteor/kadira:blaze-layout';
import {
    AccountsTemplates
}
from 'meteor/useraccounts:core';

import '../../api/users/createUser.js';
import '../../ui/pages/profile-show-page.js';
import '../../ui/pages/dashboard.js';
import '../../ui/pages/login.html';
import '../../ui/pages/reset-password.js';
import '../../ui/pages/landing-page.js';
import '../../ui/layouts/landing-layout.html';





//home always renders the dashboard
FlowRouter.route('/', {
    name: 'home',
    action: function() {
        if (Meteor.userId()) {
            BlazeLayout.render('App_body', {
                main: "Dashboard"
            });
        } else {
            BlazeLayout.render('Landing_layout', {
                main: "Landing_page"

            });
        }

    }
});
FlowRouter.route('/landing', {
    name: 'landing',
    action: function() {

        BlazeLayout.render('Landing_layout', {
            main: "Landing_page"

        });



    }
});

// AccountsTemplates.configureRoute('resetPwd', {
//     name: 'resetPwd',
//     path: '/reset-password',
// });

FlowRouter.route('/exit', {
    name: 'exit',
    action: function() {
        AccountsTemplates.logout();
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
    layoutTemplate: 'login',
    // layoutTemplate: 'AT_layout',
    layoutRegions: {},
    contentRegion: 'main'
});




AccountsTemplates.configureRoute('changePwd', {
    layoutType: 'blaze',
    name: 'changePwd',
    path: '/change-password',
    //template: 'myLogin',
    //layoutTemplate: 'AT_layout',
    layoutTemplate: 'login',
    layoutRegions: {},
    contentRegion: 'main'
});
//AccountsTemplates.configureRoute('resetPwd');

FlowRouter.route('/reset-password', {
    name: 'resetPwd',
    action: function() {

        BlazeLayout.render('Landing_layout', {
            main: "resetPassword"

        });



    }
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
//--------------------PROFILE---------------------------------------
FlowRouter.route('/profile/', {
    name: 'Profile.show',
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    action() {
        BlazeLayout.render('App_body', {
            main: 'Profile_show_page'
        });
    }
});

//---------------------------------------------------------------



//--------------------SHOW---------------------------------------
FlowRouter.route('/show-generic/:_id', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'showGeneric',
    action() {
        BlazeLayout.render('App_body', {
            main: 'Generic_show'
        });
    }
});
FlowRouter.route('/show-generics/', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'showGenerics',
    action() {
        BlazeLayout.render('App_body', {
            main: 'Generics_show'
        });
    }
});
FlowRouter.route('/show-2/:_id', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'showCompany',
    action() {
        BlazeLayout.render('App_body', {
            main: 'Company_show'
        });
    }
});



FlowRouter.route('/show-/:_id', {
    triggersEnter: [AccountsTemplates.ensureSignedIn],
    name: 'showContact',
    action() {
        BlazeLayout.render('App_body', {
            main: 'Contact_show_profile_page'
        });
    }
});
//---------------------------------------------------------------
