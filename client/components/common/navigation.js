Template.navigation.onCreated(function() {

    this.state = new ReactiveDict();

    this.autorun(() => {
        this.subscribe('userData'),
            this.subscribe('persons.own'),
            this.subscribe('rels.worker'),
            this.subscribe('companies.name')
            // if (this.subscriptionsReady()) {
            //     this.state.setDefault({
            //         user: Meteor.userId(),
            //         relatedPerson: Meteor.user()
            //             .relatedPerson,
            //         workingFor: false,
            //         foo: 'bar'
    });

});




Template.navigation.onRendered(function() {
    // Initialize metsiMenu plugin to sidebar menu
    $('#side-menu')
        .metisMenu();
    // console.log('person related', Template.instance().state.);

});


Template.navigation.helpers({
    workerRels() {

        const instance = Template.instance();
        // origin: instance.state.get('relatedPerson')
        const workerRel = Rels.find({
            type: 'worker',
            origin: 'xQ3eNjbYnK5QZt6Bd'
                // origin: instance.state.get('relatedPerson')
        });
        return workerRel;

    },
    companyName(companyId) {
        const company = Companies.findOne(companyId);
        if (company) {
            return company.name;
        } else {
            return '-'
        }
    },

    userEmail() {
        const instance = Template.instance();
        if (instance.subscriptionsReady()) {
            return Meteor.user()
                .emails[0].address;
        }
    },
    relatedPerson() {
        const instance = Template.instance();
        if (instance.subscriptionsReady()) {


            let r = Meteor.users.findOne(Meteor.userId())
                .relatedPerson;
            // let relatedPersonId = Rels.findOne({
            //   destiny: Meteor.userId(),
            //   type: "HAS_USER"
            // }).origin;
            let relatedPerson = Persons.findOne(r);
            let name = relatedPerson.name;



            return (name) ?
                name :
                'Completa tus datos!';
            // return 'subscriptionsReady';

        }
    }


});

Template.navigation.events({

    // Colapse menu in mobile mode after click on element
    'click #side-menu a:not([href$="\\#"])': function() {
        if ($(window)
            .width() < 769) {
            $("body")
                .toggleClass("show-sidebar");
        }
    },
    'click [data-action=logout]': function() {
        Meteor.logout();
        FlowRouter.go('login');
    },
    'click .js-workfor': function(e, instance) {
            Session.set('workfor', e.target.id);

            Session.set('workerRelId', $(e.target)
                .attr('relid'));

        }
        /*  'click [data-action=loginWithFacebook]': function() {
      Meteor.loginWithFacebook({
        requestPermissions: ['public_profile', 'email']
      }, function(err) {
        if (err)
          console.log("ERROR LOGGING WITH FACEBOOK : ") + err.reason;
      });
}*/

});
