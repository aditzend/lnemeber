AccountingAccounts = new Mongo.Collection('accounting_accounts');
AccountingAccounts.before.insert(function(userId, doc) {
    doc.createdAt = moment()
        .toISOString();
    doc.author = Meteor.userId();
});
