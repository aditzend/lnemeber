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
Generics.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});

Items = new Mongo.Collection('items');
Items.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});

Persons = new Mongo.Collection('persons');
Persons.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});

Companies = new Mongo.Collection('companies');
Companies.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});

Rels = new Mongo.Collection('rels');

Rels.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});

Places = new Mongo.Collection('places');
Places.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
