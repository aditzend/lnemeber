//To get worker rels of a person
Meteor.publish(null,
    function() {
        const user = Meteor.users.findOne(this.userId);
        if (this.userId) {
            let person = user
                .relatedPerson;
            return Rels.find({
                type: 'worker',
                origin: person
            }, {
                fields: {
                    owner: 0
                }
            })
        } else {
            this.ready();
        }
    });
Meteor.publish('rels.customers',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        this.autorun(function(computation) {
            let workerRel = Rels.findOne(workerRelId, {
                fields: {
                    owner: 1
                }
            });
            let company = Companies.findOne(workfor, {
                fields: {
                    ssok: 1
                }
            });
            let ip = this.connection.clientAddress;


            if (company.ssok === workerRel.owner) {
                console.log("access granted to customers");
                return Rels.find({
                    type: 'customer',
                    destiny: workfor
                }, {
                    fields: {
                        owner: false
                    }
                });
            } else {
                console.log("ACCESS DENIED : Attempt logged to ip ", ip);
                Logs.insert({
                    type: 'ACCESS_DENIAL',
                    user: this.userId,
                    ip: ip,
                    createdAt: new Date()
                        .valueOf(),
                    affects: company._id,
                    details: 'rels.customers publication denied due to keys inconsistency'
                });
                this.ready();
            }
        });
    });
Meteor.publish('customerRels',
    function(workfor) {
        if (this.userId) {
            return Rels.find({
                type: 'customer',
                destiny: workfor
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            this.ready();
        }
    });

Meteor.publish('rels.vendors',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        this.autorun(function(computation) {
            let workerRel = Rels.findOne(workerRelId, {
                fields: {
                    owner: 1
                }
            });
            let company = Companies.findOne(workfor, {
                fields: {
                    ssok: 1
                }
            });
            let ip = this.connection.clientAddress;


            if (company.ssok === workerRel.owner) {
                console.log("access granted to vendors");
                return Rels.find({
                    type: 'vendor',
                    destiny: workfor
                }, {
                    fields: {
                        owner: false
                    }
                });
            } else {
                console.log("ACCESS DENIED : Attempt logged to ip ", ip);
                Logs.insert({
                    type: 'ACCESS_DENIAL',
                    user: this.userId,
                    ip: ip,
                    createdAt: new Date()
                        .valueOf(),
                    affects: company._id,
                    details: 'rels.vendors publication denied due to keys inconsistency'
                });
                this.ready();
            }
        });
    });
Meteor.publish(null,
    function(workfor, workerRelId) {



        if (this.userId) {
            return Rels.find({
                type: 'place'
            }, {
                fields: {
                    owner: false
                }
            });
        } else {

            this.ready();
        }
    });

Meteor.publish('rels.contacts',
    function(workfor, workerRelId) {
        this.autorun(function(computation) {
            let workerRel = Rels.findOne(workerRelId, {
                fields: {
                    owner: 1
                }
            });
            let company = Companies.findOne(workfor, {
                fields: {
                    ssok: 1
                }
            });
            let ip = this.connection.clientAddress;


            if (company.ssok === workerRel.owner) {
                console.log("access granted to contacts");
                return Rels.find({
                    type: 'contact',
                    owner: company._id

                }, {
                    fields: {
                        owner: false
                    }
                });
            } else {
                console.log("ACCESS DENIED : Attempt logged to ip ", ip);
                Logs.insert({
                    type: 'ACCESS_DENIAL',
                    user: this.userId,
                    ip: ip,
                    createdAt: new Date()
                        .valueOf(),
                    affects: company._id,
                    details: 'rels.contacts publication denied due to keys inconsistency'
                });
                this.ready();
            }
        });
    });
