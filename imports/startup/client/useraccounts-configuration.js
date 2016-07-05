import {
    AccountsTemplates
}
from 'meteor/useraccounts:core';



T9n.setLanguage('es');
console.log(TAPi18n.__('Log In'));

let myPostSubmitFunc = function(userId, info) {
    if (userId) {
        console.log('NEW USER : ', userId);
        const ssok = generateSsok(userId);
        let person = Persons.insert({
            owner: ssok
        });
        console.log('NEW PERSON : ', person);
        Meteor.users.update(userId, {
            $set: {
                relatedPerson: person,
                ssok: ssok
            }
        });

    }
};


AccountsTemplates.removeField('password');

AccountsTemplates.addField({
    _id: 'password',
    type: 'password',
    required: true,
    minLength: 8,

    re: /(?=.*[a-z])(?=.*[A-Z]).{6,}/,
    errStr: 'At least 1 digit, 1 lower-case and 1 upper-case'
});

AccountsTemplates.configure({
    texts: {
        button: {
            changePwd: "Password Text",
            enrollAccount: "Enroll Text",
            forgotPwd: "Enviar mail",
            resetPwd: "Reset Pwd Text",
            signIn: "Entrar",
            signUp: "Sign Up Text",
        }
    }
});


// 
// Accounts.urls.resetPassword = (token) => {
//     return Meteor.absoluteUrl(`reset-password/${token}`);
// };

// let userId = Meteor.userId();
AccountsTemplates.configure({
    //defaultTemplate: 'myCustomFullPageAtForm',
    postSignUpHook: myPostSubmitFunc,
    defaultLayout: 'AT_layout',
    defaultLayoutType: 'blaze',
    defaultLayoutRegions: {},
    defaultContentRegion: 'main',
    // Behavior
    confirmPassword: false,
    enablePasswordChange: true,
    forbidClientAccountCreation: true,
    overrideLoginErrors: true,
    sendVerificationEmail: false,
    lowercaseUsername: false,
    focusFirstInput: true,

    // Appearance
    showAddRemoveServices: false,
    showForgotPasswordLink: true,
    showLabels: true,
    showPlaceholders: true,
    showResendVerificationEmailLink: false,

    // Client-side Validation
    continuousValidation: true,
    negativeFeedback: true,
    negativeValidation: true,
    positiveValidation: true,
    positiveFeedback: true,
    showValidating: true,

    // Privacy Policy and Terms of Use
    privacyUrl: 'privacy',
    termsUrl: 'terms-of-use',

    // Redirects
    homeRoutePath: '/',
    redirectTimeout: 4000,


    // Hooks
    // onLogoutHook: postSignUp
    // onSubmitHook: mySubmitFunc,
    // preSignUpHook: myPreSubmitFunc,

    // Texts
    /*texts: {
      button: {
          signUp: "Register Now!"
      },
      socialSignUp: "Register",
      socialIcons: {
          "meteor-developer": "fa fa-rocket"
      },
      title: {
          forgotPwd: "Recover Your Password"
      },
    },*/
});
