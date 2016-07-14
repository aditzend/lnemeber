ProfitCenters = new Mongo.Collection('profit_centers');
ProfitCenters.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
