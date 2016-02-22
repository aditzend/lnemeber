//---------------------------PLACES-------------------------------------------


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
