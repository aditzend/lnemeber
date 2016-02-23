
//---------------------------ACTODES-------------------------------------------


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
    //value: 1,
    autoform: {
      type:"hidden",
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
    label: 'Tratamiento',
    type: String,
    optional: true
  },
  isMale: {
    type: Boolean,
    optional:true,
    label: 'Hombre o mujer?',
    autoform: {
      type: 'boolean-select',
      trueLabel: 'Hombre',
      falseLabel: 'Mujer'
    }
  },
  formalTreatment: {
    label: "Se trata de Ud.",
    optional:true,
    type: Boolean
  },
  email: {
    type: String,
    regEx: SimpleSchema.RegEx.Email,
    label: "Email",
    optional: true
  },
  phone: {
    label: "Teléfono Personal Fijo",
    optional:true,
    type: String
  },
  internalPhone: {
    label: "Interno",
    optional:true,
    type: String
  },
  mobile: {
    label: "Teléfono celular",
    optional:true,
    type: String
  },
  bdate: {
    label:"Fecha de Nacimiento",
    optional:true,
    type: Date,
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
