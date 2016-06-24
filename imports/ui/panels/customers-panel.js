import './customers-panel.html';
import '../components/company/company-search.js';
import '../components/company/company-edit.js';
import '../components/contact/contact-edit.js';
import '../components/contact/contact-show.js';

Template.Customers_panel.onCreated(function() {
    this.subscribe('Rels.all');
    this.subscribe('persons.test');
    this.state = new ReactiveDict();
    this.state.setDefault({
        selectedCompany: false,
        createdRel: false,
        editingCustomerRel: false,
        creatingCompany: false,
        editingCompany: false,
        companyCreated: false,
        creatingContact: false,
        editingContact: false,
        deletingContact: false
    });
});

//vvvvvvvvvvvvvv ARGS vvvvvvvvvvvvvv
Template.Customers_panel.helpers({
    searchCompanyArgs() {
        const instance = Template.instance();

        return {
            selectedCompany(id) {
                instance.state.set('selectedCompany', id);
                // console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);
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

    editContactArgs(companyId, personId, relId) {
        const instance = Template.instance();
        const company = Companies.findOne(companyId);
        const person = Persons.findOne(personId);
        const rel = Rels.findOne(relId);
        return {
            destiny: companyId,
            owner: HARDCODE_OWNER,
            type: 'contact',
            company: company,
            person: person,
            rel: rel,
            onSavedData() {
                // console.log('rel created contact', relId);
                instance.state.set('editingContact', false);
                instance.state.set('creatingContact', false);

            },
            onCancel() {
                // console.log('cancel');
                instance.state.set('editingContact', false);
                instance.state.set('creatingContact', false);

            }
        }
    },

    showContactArgs(personId, relId) {
        const instance = Template.instance();

        const person = Persons.findOne(personId);
        const rel = Rels.findOne(relId);
        return {
            person: person,
            rel: rel,

            onEdit(relId) {
                instance.state.set('editingContact', relId);
                // console.log('EDIT CONTACT REL ', relId);
            },
            onDelete(relId) {
                instance.state.set('deletingContact', relId);
                // console.log('DELETE CONTACT REL ', relId);
                swal({
                        title: "Estas seguro?",
                        text: "No se puede recuperar esta informacion!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Si, borrarlo!",
                        cancelButtonText: "No, cancelar por favor!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm) {
                        if (isConfirm) {
                            Rels.remove(relId);
                            swal("Eliminado!", "Este contacto fue eliminado.", "success");
                        } else {
                            swal("Cancelado", "Este contacto esta seguro :)", "error");
                        }
                    });

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
    creatingContact() {
        const instance = Template.instance();
        return instance.state.get('creatingContact');
    },
    editingContact(relId) {
        const instance = Template.instance();
        return (relId == instance.state.get('editingContact')) ? true : false;
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
    },
    contactRels(company) {
        const rels = Rels.find({
            type: 'contact',
            // origin: company,
            destiny: company
        });
        return rels;
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
        instance.state.set('creatingContact', true);
    },
    'click .js-confirm-deletion': function(e, instance) {
        const relId = instance.state.get('deletingContactRel');
        console.log('delete confirmed ', relId);

    },
    'click .js-cancel-deletion': function(e, instance) {
        instance.data.onEdit(instance.data.relId);
    }
});
