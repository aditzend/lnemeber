console.log('[COMMON] Loading collections.js ...');
// this will go to the HEADQUARTERS code! delete after deploying
//Test = new Mongo.Collection("test");
Actodes = new Mongo.Collection('actodes');
Actodes.helpers({
  places() {
    return Places.find({relatedActode: this._id}, {sort: {createdAt: -1}});
  }
});
Rels = new Mongo.Collection('rels');
Places = new Mongo.Collection('places');
Generics = new Mongo.Collection('generics');
