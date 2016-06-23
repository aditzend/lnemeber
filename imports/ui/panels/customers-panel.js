import './customers-panel.html';
import '../components/company/company-search.js';
import '../components/company/company-edit.js';
import '../components/contact/contact-edit.js';

Template.Customers_panel.onCreated(function() {
    this.subscribe('Rels.all');
    this.state = new ReactiveDict();
    this.state.setDefault({
        selectedCompany: false,
        createdRel: false,
        editingCustomerRel: false,
        creatingCompany: false,
        editingCompany: false,
        companyCreated: false,
        editingContact: false
    });
});

//vvvvvvvvvvvvvv ARGS vvvvvvvvvvvvvv
Template.Customers_panel.helpers({
    searchCompanyArgs() {
        const instance = Template.instance();

        return {
            selectedCompany(id) {
                instance.state.set('selectedCompany', id);
                console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);
            },
            companyNotFound(insertedText) {
                instance.state.set('creatingCompany', insertedText);
            }
        }
    },
    showCompanyArgs(id) {
        const instance = Template.instance();
        return {
            selectedCompanyId: id
        }
    },
    editCompanyArgs(id) {
        const instance = Template.instance();
        const company = Companies.findOne(id);
        return {
            company: company,
            onSavedData() {
                instance.state.set('editingCompany', false);

            },
            onCancel() {
                instance.state.set('editingCompany', false);

            }

        }
    },
    showCustomerRelArgs(id) {
        const instance = Template.instance();
        const rel = Rels.findOne({
            type: 'customer',
            origin: id,
            destiny: HARDCODE_OWNER
        });
        return {
            rel
        };
    },
    editCustomerRelArgs(id) {
        const instance = Template.instance();

        return {
            type: 'customer',
            origin: id,
            destiny: HARDCODE_OWNER,
            onSavedData(relId) {
                instance.state.set('createdRel', relId);
                instance.state.set('editingCustomerRel', false);

            },
            onCancel() {
                instance.state.set('editingCustomerRel', false);
                console.log('Cancelado');
            }
        }
    },
    createCompanyArgs() {
        const instance = Template.instance();

        return {
            company: {
                name: instance.state.get('creatingCompany')
            },
            // person,
            onSavedData(newCompany) {
                instance.state.set('creatingCompany', false);
                instance.state.set('selectedCompany', newCompany);

            },
            onCancel() {
                instance.state.set('creatingCompany', false);

            }
        }
    },
    editContactArgs(companyId) {
        const instance = Template.instance();
        const company = Companies.findOne(companyId);
        return {
            destiny: companyId,
            owner: HARDCODE_OWNER,
            type: 'contact',
            company: company,
            onSavedData(relId) {
                // console.log('rel created contact', relId);
                instance.state.set('editingContact', false)
            },
            onCancel() {
                // console.log('cancel');
                instance.state.set('editingContact', false)
            }
        }
    }



});
//vvvvvvvvvvvvvv STATE vvvvvvvvvvvvvv
Template.Customers_panel.helpers({
    editingCustomerRel() {
        const instance = Template.instance();
        return instance.state.get('editingCustomerRel');
    },
    editingCompany() {
        const instance = Template.instance();
        return instance.state.get('editingCompany');
    },
    selectedCompany() {
        const instance = Template.instance();
        return instance.state.get('selectedCompany');
    },
    creatingCompany() {
        const instance = Template.instance();
        return instance.state.get('creatingCompany');
    },
    companyCreated() {
        const instance = Template.instance();
        return instance.state.get('companyCreated');
    },
    editingContact() {
        const instance = Template.instance();
        return instance.state.get('editingContact');
    }
});
//vvvvvvvvvvvvvv HELPERS vvvvvvvvvvvvvv
Template.Customers_panel.helpers({
    rel(company) {
        const rel = Rels.findOne({
            type: 'customer',
            origin: company,
            destiny: HARDCODE_OWNER
        });
        return rel;
    }
});

Template.Customers_panel.events({
    'click .js-deselect-company': function(e, instance) {
        instance.state.set('selectedCompany', false);
    },
    'click .js-rel-customer-edit': function(e, instance) {
        instance.state.set('editingCustomerRel', true);
    },
    'click .js-company-edit': function(e, instance) {
        instance.state.set('editingCompany', true);
    },
    'click .js-contact-create': function(e, instance) {
        instance.state.set('editingContact', true);
    }
});
