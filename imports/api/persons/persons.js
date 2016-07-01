Persons = new Mongo.Collection('persons');
Persons.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
