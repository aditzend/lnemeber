
//------------------------ACTODES---------------------
Meteor.publish('Actodes.byId',
 function(actodeId) {
   if (this.userId) {
     return Actodes.find({_id: actodeId});
   } else {
     this.ready();
   }
});

Meteor.publish('Actodes.all', function () {
  if (this.userId) {
    return Actodes.find();
  }else{
    this.ready();
  }
});

//------------------------PLACES---------------------


Meteor.publish('Places.byRelatedActode',
  function (actodeId) {
    if (this.userId) {
      return Places.find({relatedActode: actodeId});
    } else {
      this.ready();
    }
});
Meteor.publish('Places.all',
  function () {
    if (this.userId) {
      return Places.find();
    } else {
      this.ready();
    }
});
//------------------------RELS---------------------

//To get suppliers and customers
Meteor.publish('Rels.byDestiny',
 function (origin,destiny) {
  if (this.userId) {
    return Rels.find({
      origin: origin,
      destiny: destiny,
      owner: this.userId
    });
  }else{
    this.ready();
  }
});

//To get rels of a contact
Meteor.publish('Rels.byOrigin',
 function (origin) {
  if (this.userId) {
    return Rels.find({
      origin: origin,
      owner: this.userId //belongsTo
    });
  }else{
    this.ready();
  }
});




//To get the company/companies to with a contact belongs
Meteor.publish('CompanyContacts',
 function (origin) {
  if (this.userId) {
    return Rels.find({
      origin: origin,
      destiny: destiny,
      type:'CONT',
      owner: this.userId
    });
  }else{
    this.ready();
  }
});

Meteor.publish('Rels.byOwner',
 function (owner) {
  if (this.userId) {
    return Rels.find({
      owner: owner
    });
  }else{
    this.ready();
  }
});

Meteor.publish('Contacts.byDestiny',
  function (destiny,owner) {
    if (this.userId) {
      return Rels.find({
                destiny: destiny,
                owner: owner,
                type: 'CONT'
              });
      }else{
        this.ready();
      }
  }
);

//---------------------GENERICS-------------------------
//To get all GENERICS

Meteor.publish('Generics.all', function () {
  if (this.userId) {
    return Generics.find();
  }else{
    this.ready();
  }
});

//To get a GENERIC by _id

Meteor.publish('Generics.byId', function (id) {
  if (this.userId) {
    return Generics.find(id);
  }else{
    this.ready();
  }
});
