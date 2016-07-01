//server



import './register-api.js';
// 
// EmailGenerator = {};
// 
// EmailGenerator.addTemplates = function(templates) {
//     templates.forEach(function(template) {
//         SSR.compileTemplate(template.name, Assets.getText(template.path));
//     });
// }
// 
// EmailGenerator.generateHtml = function(templateName, data) {
//     var html = null;
//     try {
//         html = SSR.render(templateName, data);
//     } catch (err) {
//         console.log("meteor-template-email: Unable to generate html, err:", err);
//     }
//     return html;
// }
// 
// 

Meteor.startup(function() {
    Email.send({
        from: "pross888@gmail.com",
        to: "ad@alexanderditzend.com",
        replyTo: "pross888@gmail.com",
        subject: "That was easy",
        text: "If you're reading this, sending an email through Meteor really was that easy"
    });
    // 
    //     var templates = [];
    //     templates.push({
    //         name: "emailTemplate",
    //         path: "email-template.html"
    //     }, {
    //         name: "billing",
    //         path: "billing.html"
    //     });
    // 
    // 
    // 
    //     EmailGenerator.addTemplates(templates);
    // 
    //     var smtp = {
    //         username: Meteor.settings.mailgun_login,
    //         password: Meteor.settings.mailgun_password,
    //         server: Meteor.settings.mailgun_hostname,
    //         port: 25
    //     };
    // 
    // process.env.MAIL_URL = "smtp://" + encodeURIComponent(smtp.username) +
    //     ":" +
    //     encodeURIComponent(smtp.password) + "@" + encodeURIComponent(smtp.server) +
    //     ":" + smtp.port;

    //process.env.MAIL_URL = "smtp://pross888@gmail.com:Lkjpoi098---M@smtp.mailgun.org:25";


});
