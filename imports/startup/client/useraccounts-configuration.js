import {
  AccountsTemplates
}
from 'meteor/useraccounts:core';



T9n.setLanguage('es');

AccountsTemplates.removeField('password');

AccountsTemplates.addField({
  _id: 'password',
  type: 'password',
  required: true,
  minLength: 8,

  re: /(?=.*[a-z])(?=.*[A-Z]).{6,}/,
  errStr: 'At least 1 digit, 1 lower-case and 1 upper-case'
});

// let userId = Meteor.userId();
AccountsTemplates.configure({
  //defaultTemplate: 'myCustomFullPageAtForm',
  defaultLayout: 'AT_layout',
  defaultLayoutType: 'blaze',
  defaultLayoutRegions: {},
  defaultContentRegion: 'main',
  // Behavior
  confirmPassword: false,
  enablePasswordChange: true,
  forbidClientAccountCreation: false,
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
