TransfersOfOwnership = new Mongo.Collection('transfers_of_ownership');
TransfersOfOwnership.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
