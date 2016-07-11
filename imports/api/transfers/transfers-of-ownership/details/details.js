TransferOfOwnershipDetails = new Mongo.Collection('transfer_of_ownership_details');
TransferOfOwnershipDetails.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
