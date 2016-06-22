import {
  Meteor
}
from 'meteor/meteor';


import {
  Template
}
from 'meteor/templating';
import {
  Mongo
}
from 'meteor/mongo';
import {
  Tracker
}
from 'meteor/tracker';

import {
  ReactiveDict
}
from 'meteor/reactive-dict';

import {
  FlowRouter
}
from 'meteor/kadira:flow-router';

import './company-create.html';
import '../rel/rel-customer-edit';
import '/imports/api/companies/methods.js';

Template.Company_create.onCreated(function() {
  // this.subscribe('Rels.all');
  this.state = new ReactiveDict();
  this.state.setDefault({
    editingCustomerRel: false,
    companyCreated: false
  });
});


Template.Company_create.onRendered(function() {

  const instance = Template.instance();
  $('#nameInput').val(instance.data.company.name);

  instance.$('[data-action=form]').validate({

    rules: {
      name: {
        required: true,
        minlength: 2,
        maxlength: 40
      },
      cuit: {
        required: false,
        minlength: 11
      }
    },

    messages: {
      name: {
        required: 'Este campo no puede quedar vacío!',
        minlength: 'La Razon Social debe tener mínimo {0} letras!',
        maxlength: 'La Razon Social debe tener máximo {0} letras!',
      },
      cuit: {
        minlength: 'El CUIT debe tener mínimo {0} numeros!',
      }
    },

    submitHandler: () => {
      var name = $('#nameInput').val();
      var country = CountryCodes.countryCode($('#countryInput').val());
      var cuit = $('#cuitInput').val();
      const ssok = generateSsok(Meteor.userId());
      var newCompany = Companies.insert({
        name: name,
        country: country,
        fin: cuit,
        finType: 'CUIT',
        ssok: ssok
      });
      instance.state.set('companyCreated', newCompany);
      // Rels.insert({
      //   origin: Meteor.user().relatedPerson,
      //   type: 'worker',
      //   position: 'Gerente general',
      //   destiny: newCompany,
      // });

      // swal({
      //   title: name + ' creada!',
      //   text: 'Datos guardados',
      //   type: 'success'
      // });
      // const relType = FlowRouter.getQueryParam('relType');
      //   FlowRouter.go('showCompany', {
      //     _id: insert
      //   }, {
      //     relType: relType
      //   });
    }


  });


});

Template.Company_create.helpers({
  companyCreated() {
      const instance = Template.instance();
      return instance.state.get('companyCreated');
    },
    showCompanyArgs(id) {
      const instance = Template.instance();
      return {
        selectedCompanyId: id
      }
    },
    editCustomerRelArgs(id) {
      const instance = Template.instance();
      return {
        selectedCompanyId: id,
        onCancel() {
          instance.state.set('editingCustomerRel', false);
        },
        onSavedData(id) {
          instance.state.set('customerRelCreated', id);
        }
      }
    },
});

Template.Company_create.events({
  'submit form': (e, instance) => {
    e.preventDefault();

  },
  'change [data-action=country]': (e) => {
    console.log(CountryCodes.countryCode(e.target.value));

  },
  'click .js-cancel': function(e, instance) {
    swal({
      title: 'Cancelado',
      text: 'No se guardaron los datos',
      type: 'warning'
    });
    this.onCancel();
    console.log(instance.data);
  }

});
