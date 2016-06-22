// api/users/server
Meteor.publish("userData", function() {
  if (this.userId) {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        'emails': 1,
        'relatedPerson': 1
      }
    });
  } else {
    this.ready();
  }
});
