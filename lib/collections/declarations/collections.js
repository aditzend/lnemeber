console.log('[COMMON] Loading collections.js ...');
// this will go to the HEADQUARTERS code! delete after deploying
//Test = new Mongo.Collection("test");
Actodes = new Mongo.Collection('actodes');
Actodes.helpers({
  places() {
    return Places.find({relatedActode: this._id}, {sort: {createdAt: -1}});
  }
});
Relationships = new Mongo.Collection('relationships');
Places = new Mongo.Collection('places');
