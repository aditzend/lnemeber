Meteor.publish("items.test", function itemsTest() {
    return Items.find();
});


Meteor.publish('items.public', function itemsPublic() {
    return Items.find({}, {
        fields: {
            treatedAs: 1,
            bDay: 1,
            bMonth: 1,
            bYear: 1,
            isMale: 1,
            lastName: 1,
            middleName: 1,
            name: 1,
            fin: 1,
            finType: 1,
            country: 1


        }
    });
});

Meteor.publish('items.own', function itemsOwn() {
    if (this.userId) {
        let u = Meteor.users.findOne(this.userId);

        //console.log('USER KEY', r.key);

        // let r = "vBBRrEM8m8PYSjTBM";

        return Items.find({
            owner: u.ssok
        }, {
            fields: {
                owner: false

            }
        });
    } else {
        this.ready();
    }
});
