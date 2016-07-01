Template.Contact_show_profile_page.onCreated(function() {
    this.getPersonId = () => FlowRouter.getParam('_id');

    this.autorun(() => {
        console.log('accesing ', this.getPersonId());
        this.subscribe('Persons.all')
    });
});


Template.Contact_show_profile_page.helpers({
    contactArray() {
        const instance = Template.instance();
        const contact = instance.getPersonId();
        return Persons.findOne(contact) ? [contact] : [];
    },
    contactArgs(contact) {
        const instance = Template.instance();
        return {
            contactReady: instance.subscriptionsReady(),
            contact() {
                return Persons.findOne(contact);
            },
            contactItem: Persons.findOne(contact, {
                fields: {
                    _id: true
                }
            })
        };
    }
});
