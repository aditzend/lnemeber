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
Meteor.publish('Relationships.byDestiny',
 function (origin,destiny) {
  if (this.userId) {
    return Relationships.find({
      origin: origin,
      destiny: destiny,
      owner: this.userId
    });
  }else{
    this.ready();
  }
});
/*
Meteor.publish('Contacts.byDestiny',
  function (destiny,owner) {
    if (this.userId) {
      return Relationships.find({
        destiny: destiny,
        owner: owner,
        type: 'IS_CONTACT_OF'
      }
      );
    }
});
*/
Meteor.publish('Contacts.byDestiny',
  function (destiny,owner) {
    if (this.userId) {
      return Relationships.find({
                destiny: destiny,
                owner: owner,
                type: 'IS_CONTACT_OF'
              });
      }else{
        this.ready();
      }
  }
);

/*Meteor.publish('Relationships.byOwner',
 function () {
  if (this.userId) {
    return Relationships.find({
      //owner: "sdd5JEgfDjoBr8iHm"
    });
  }else{
    this.ready();
  }
});*/

/*Meteor.publish('Relationships.all', function () {
  if (this.userId) {
    return Relationships.find();
  }else{
    this.ready();
  }
});*/
