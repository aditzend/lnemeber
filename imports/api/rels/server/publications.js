// import {
//   Rels
// }
// from '../rels.js';
Meteor.publish('Rels.all', function relsAll() {
  if (!this.userId) {
    return this.ready();
  }

  return Rels.find({}, {
    fields: {
      owner: false
    }
  });
});


//------------------------RELS---------------------
// Pub de prueba
// Meteor.publish('Rels.all',
//   function() {
//     if (this.userId) {
//       return Rels.find({});
//     } else {
//       this.ready();
//     }
//   });

//To get suppliers and customers
Meteor.publish('Rels.byDestiny',
  function(origin, destiny) {
    if (this.userId) {
      return Rels.find({
        origin: origin,
        destiny: destiny,
        owner: this.userId
      }, {
        fields: {
          owner: false
        }
      });
    } else {
      this.ready();
    }
  });

//To get rels of a contact
Meteor.publish('Rels.byOrigin',
  function(origin) {
    if (this.userId) {
      return Rels.find({
        origin: origin,
        owner: this.userId //belongsTo
      }, {
        fields: {
          owner: false
        }
      });
    } else {
      this.ready();
    }
  });
