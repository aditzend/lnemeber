console.log("[COMMON] Loading schemas.js ...");

Schema = {};

Schema.RelationshipWithCustomer = new SimpleSchema({
  owner: {
    type: String,
    optional: false,
    autoform: {
      type:"hidden"
    }
  },
  origin: {
    type: String,
    optional: false,
    autoform: {
      type:"hidden"
    }
  },
  destiny: {
    type:String,
    optional:false,
    autoform: {
      type:'hidden'
    }
  },
  notes: {
    type: String,
    optional: true,
    autoform: {
      placeholder: " 'Cliente de hace mucho tiempo',  'CLASE A' ",
      rows: 2
    }
  },
  paymentDays: {
    label: 'Condición de pago (días)',
    type: Number,
    optional:true,
    max: 200,
    autoform: {
      placeholder: 30
    }
  },
  paymentTerms: {
    label: "Términos",
    type: String,
    optional:true,
    autoform: {
      placeholder: " 'FF', 'desde entrega'"
    }
  },
  paymentNotes: {
    label: "Notas para retirar el pago",
    type: String,
    optional: true,
    autoform: {
      placeholder: " 'Pasar los martes de 14hs a 17hs' ",
      rows: 2
    }
  },

})

Schema.RelCompanyContact = new SimpleSchema({
  owner: {
    type: String,
    optional: false,
    autoform: {
      type:"hidden"
    }
  },
  origin: {
    type: String,
    optional: false,
    autoform: {
      type:"hidden"
    }
  },
  destiny: {
    type:String,
    optional:false,
    autoform: {
      type:'hidden'
    }
  },
  notes: {
    type: String,
    optional: true,
    autoform: {
      rows: 10
    }
  },
  type: {
    type: String,
    autoform: {
      type: 'hidden'
    }
  }


})


Schema.Place = new SimpleSchema({
  relatedActode: {
    type: String,
    optional:true,
    autoform: {
      type:"hidden"
    }
  },
  placeType: {
    label: "Este lugar es ...",
    type: String,
    optional: false,
    autoform: {
      afFieldInput: {
        firstOption: "Elegí una opción ..."
      }
    }
  },
  address: {
    label: "DIRECCIÓN",
    type: String,
    optional: false,
    autoform: {
      placeholder: 'Empezá a tipear, seleccioná la dirección con las flechas del teclado y enter!',

    }
  },
  text: {
    label: "ACLARACIONES",
    type: String,
    optional: true,
    autoform: {
      placeholder: " '3 A' , 'Frente al correo' , 'RN8 km 73,5' "
    }
  },
  phone: {
    label: "TELÉFONO",
    type: String,
    optional: true,
    autoform: {
      placeholder: "El tel. de línea del lugar, Ej: '+541147330432' "
    }
  }
});
//Places.attachSchema(Schema.Place);



Schema.Person = new SimpleSchema({

  /*actodeCidType: {
    label: "Quiero identificar a esta persona  ...",
    type: String,
    optional:false
  },*/
  dnix: {
    label: "Ingresá el DNI",
    type: String,
    max: 8,
    optional:true,
    autoform: {
      placeholder:"Sin espacios ni puntos"
    }
  },
  lenr: {
    label: "Ingresá la Libreta",
    type: String,
    max: 8,
    optional:true,
    autoform: {
      placeholder:"Sin espacios"
    }
  },
  cuil: {
    label: "Ingresá el CUIL",
    type: String,
    max: 13,
    min:11,
    optional:true,
    autoform: {
      placeholder:"Sin espacios"
    }
  },
  country: {
    label: "Nacionalidad",
    //placeholder:"El país asociado al documento insertado",
    type: String,
    optional:true,
    autoform: {
      firstOption:"Elegí uno..."
    }
  },
  actodeType: {
    type: Number,
    optional:true,
    autoform: {
      type:"hidden"
    }
  },
  name: {
    type: String,
    optional: true
  },
  middleName: {
    type: String,
    optional: true  },
  lastName: {
    type: String,
    optional: true
  },
  treatedAs: {
    type: String,
    optional: true
  },
  formalTreatment: {
    label: "Se lo trata de Ud.",
    type: Boolean
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email",
    optional: true
  },
  mobile: {
    label: "Teléfono celular",
    type: String
  }
});

Schema.Contact = new SimpleSchema({

  /*actodeCidType: {
    label: "Quiero identificar a esta persona  ...",
    type: String,
    optional:false
  },*/
/*  dnix: {
    label: "Ingresá el DNI",
    type: String,
    max: 8,
    optional:true,
    autoform: {
      placeholder:"Sin espacios ni puntos"
    }
  },*/
/*  lenr: {
    label: "Ingresá la Libreta",
    type: String,
    max: 8,
    optional:true,
    autoform: {
      placeholder:"Sin espacios"
    }
  },
  cuil: {
    label: "Ingresá el CUIL",
    type: String,
    max: 13,
    min:11,
    optional:true,
    autoform: {
      placeholder:"Sin espacios"
    }
  },*/
/*  country: {
    label: "Nacionalidad",
    //placeholder:"El país asociado al documento insertado",
    type: String,
    optional:true,
    autoform: {
      firstOption:"Elegí uno..."
    }
  },*/
  actodeType: {
    type: Number,
    optional:true,
    autoform: {
      type:"hidden"
    }
  },
  name: {
    type: String,
    label:'Nombre',
    optional: true
  },
  middleName: {
    type: String,
    optional: true  },
  lastName: {
    type: String,
    optional: true
  },
  treatedAs: {
    type: String,
    optional: true
  },
  isMale: {
    type: Boolean,
    optional:false,
    label: 'Hombre o mujer?',
    autoform: {
      type: 'boolean-select',
      trueLabel: 'Hombre',
      falseLabel: 'Mujer'
    }
  },
  formalTreatment: {
    label: "Se trata de Ud.",
    type: Boolean
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email",
    optional: true
  },
  mobile: {
    label: "Teléfono celular",
    type: String
  }
});

/*Schema.CustomerRelationship = new SimpleSchema({
origin: {

} ,
destiny: {

} ,
saleCondition: {

},
dedicatedPaymentTime: {

},
printOver: {

},
contactPerson: {

}

});*/

Schema.Company = new SimpleSchema({
  actodeType: {
    type: Number,
    autoform: {
      type: "hidden"
    }
  },
  actodeIdType: {
    type: String,
    autoform: {
      type: "hidden"
    }
  },
  country: {
    label: "¿De qué país es la empresa?",
    //placeholder:"El país asociado al documento insertado",
    type: String,
    autoform: {
      firstOption:"Elegí uno..."
    }
  },
  name: {
    label:"Razón Social",
    type: String,
    autoform: {
      placeholder:" 'Alameda S.A.', 'Cerro Castor S.R.L.'"
    }
  },

  cuit: {
    label: "CUIT",
    type: String,
    max: 11,
    optional:true,
    autoform: {
      placeholder:"Sólo números"
    }
  },


});
