import './vendors-panel.html';
import '../components/company/company-search.js';
import '../components/contact/contact-edit.js';

Template.Customers_panel.onCreated(function() {
  this.subscribe('Rels.all');
  this.state = new ReactiveDict();
  this.state.setDefault({
    selectedCompany: false,
    createdRel: false,
    editingCustomerRel: false,
    creatingCompany: false
  });
});

Template.Vendors_panel.helpers({
  searchCompanyArgs() {
      const instance = Template.instance();

      return {
        index: CompaniesIndex,
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
        },
        onCancel() {
          instance.state.set('editingCustomerRel', false);
        }
      }
    },
    editingCustomerRel() {
      const instance = Template.instance();
      return instance.get('editingCustomerRel');
    },

    createCompanyArgs() {
      const instance = Template.instance();

      return {
        company: {
          name: instance.state.get('creatingCompany')
        },
        // person,
        onSavedData() {
          instance.state.set('creatingCompany', false);

        },
        onCancel() {
          instance.state.set('creatingCompany', false);

        },
        companyCreated(newCompany) {
          instance.state.set('companyCreated', newCompany);
          console.log('company created id .........', newCompany);
        }
      }
    },
    selectedCompany() {
      const instance = Template.instance();

      return instance.state.get('selectedCompany');
    },
    rel(company) {
      const rel = Rels.findOne({
        type: 'vendor',
        origin: company,
        destiny: HARDCODE_OWNER
      });
      return rel;
    },
    creatingCompany() {
      const instance = Template.instance();
      return instance.state.get('creatingCompany');

    }
});

Template.Vendors_panel.events({
  'click .js-deselect-company': function(e, instance) {
    instance.state.set('selectedCompany', false);
  }
});
