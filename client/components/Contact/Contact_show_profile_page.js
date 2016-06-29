Template.Contact_show_profile_page.onCreated(function() {
    this.getActodeId = () => FlowRouter.getParam('_id');

    this.autorun(() => {
        console.log('accesing ', this.getActodeId());
        this.subscribe('Actodes.all')
    });
});


Template.Contact_show_profile_page.helpers({
    contactArray() {
        const instance = Template.instance();
        const contact = instance.getActodeId();
        return Actodes.findOne(contact) ? [contact] : [];
    },
    contactArgs(contact) {
        const instance = Template.instance();
        return {
            contactReady: instance.subscriptionsReady(),
            contact() {
                return Actodes.findOne(contact);
            },
            contactItem: Actodes.findOne(contact, {
                fields: {
                    _id: true
                }
            })
        };
    }
});
