//var hooksObject = {
/*  after: {
    insert: function(error, result) {
      console.log('INSERTED OK : ' + result);
      const relType = FlowRouter.getQueryParam('relType');
      FlowRouter.go('showCompany', {_id: result},{relType: relType });
    }
  }
}


AutoForm.hooks({
  insertCompany: hooksObject
});*/

Template.Company_create.onRendered(() => {
  $('[data-action=form]').validate({

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
      var insert = Actodes.insert({
        actodeType: 2, // 'COMPANY'
        name: name,
        country: country,
        cuit: cuit
      });
      /*  Rels.insert({
          origin: Meteor.userId(),
          destiny: insert,
          owner: Meteor.userId(),
          type: 'SUPL' // 'We SUPPLY these guys, ergo they are customers'
        });*/
      const relType = FlowRouter.getQueryParam('relType');
      FlowRouter.go('showCompany', {
        _id: insert
      }, {
        relType: relType
      });
    }


  });


});
Template.Company_create.events({
  'submit form': (e) => {
    e.preventDefault();
  },
  'change [data-action=country]': (e) => {
    console.log(CountryCodes.countryCode(e.target.value));

  }

});
