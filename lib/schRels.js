//---------------------------RELS-------------------------------------------

Schema.RelationshipWithCustomer = new SimpleSchema({
  type: {
    type: String,
    optional:true,
    autoform: {
      type: 'hidden'
    }
  },
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
