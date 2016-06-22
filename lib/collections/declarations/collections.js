//console.log('[COMMON] Loading collections.js ...');
// this will go to the HEADQUARTERS code! delete after deploying
//Test = new Mongo.Collection("test");
Actodes = new Mongo.Collection('actodes');
Actodes.helpers({
  places() {
    return Places.find({
      relatedActode: this._id
    }, {
      sort: {
        createdAt: -1
      }
    });
  }
});

Generics = new Mongo.Collection('generics');
Items = new Mongo.Collection('items');
Persons = new Mongo.Collection('persons');
Companies = new Mongo.Collection('companies');
Rels = new Mongo.Collection('rels');

Rels.before.insert(function(userId, doc) {
  doc.createdAt = moment().toISOString();
  doc.author = Meteor.userId();
});

Places = new Mongo.Collection('places');
