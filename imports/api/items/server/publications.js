Meteor.publish("items.test", function itemsTest() {
    return Items.find();
});




Meteor.publish('items.own',
    function itemsOwn(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        const workerRel = Rels.findOne(workerRelId);
        const company = Companies.findOne(workfor); //this is an async call, if you remove the loop the data wont be ready and company.ssok will throw undefined
        let n = 1;
        //cheap way of making the process wait until company is ready =) 
        while (n < 999) {
            n++;
        }

        // return Items.find({
        //     owner: company.ssok
        // }, {
        //     fields: {
        //         owner: false
        //     }
        // });
        if (company.ssok === workerRel.owner) {
            return Items.find({
                owner: company._id
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            return this.ready();
        }

    });
