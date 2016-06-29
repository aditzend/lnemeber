// import {
//   Rels
// }
// from '../rels.js';
// Meteor.publish('Rels.all', function relsAll() {
//     if (!this.userId) {
//         return this.ready();
//     }
// 
//     return Rels.find({}, {
//         fields: {
//             owner: false
//         }
//     });
// });


//------------------------RELS---------------------
// Pub de prueba
// Meteor.publish('Rels.all',
//     function() {
//         if (this.userId) {
//             return Rels.find({});
//         } else {
//             this.ready();
//         }
//     });

//To get suppliers and customers
// Meteor.publish('Rels.byDestiny',
//     function(origin, destiny) {
//         if (this.userId) {
//             return Rels.find({
//                 origin: origin,
//                 destiny: destiny,
//                 owner: this.userId
//             }, {
//                 fields: {
//                     owner: false
//                 }
//             });
//         } else {
//             this.ready();
//         }
//     });

//To get rels of a contact
// Meteor.publish('Rels.byOrigin',
//     function(origin) {
//         if (this.userId) {
//             return Rels.find({
//                 origin: origin,
//                 owner: this.userId //belongsTo
//             }, {
//                 fields: {
//                     owner: false
//                 }
//             });
//         } else {
//             this.ready();
//         }
//     });
//To get worker rels of a person
Meteor.publish('rels.worker',
    function() {
        const user = Meteor.users.findOne(this.userId);
        if (this.userId) {
            let person = user
                .relatedPerson;
            return Rels.find({
                type: 'worker',
                origin: person
            })
        } else {
            this.ready();
        }
    });
Meteor.publish('rels.customers',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        const workerRel = Rels.findOne(workerRelId);
        const company = Companies.findOne(workfor); //this is an async call, if you remove the loop the data wont be ready and company.ssok will throw undefined
        let n = 1;
        //cheap way of making the process wait until company is ready =) 
        while (n < 3) {
            n++;
        }

        if (company.ssok === workerRel.owner) {
            return Rels.find({
                type: 'customer',
                destiny: workfor
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            return this.ready();
        }

    });
Meteor.publish('rels.vendors',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        const workerRel = Rels.findOne(workerRelId);
        const company = Companies.findOne(workfor); //this is an async call, if you remove the loop the data wont be ready and company.ssok will throw undefined
        let n = 1;
        //cheap way of making the process wait until company is ready =) 
        while (n < 3) {
            n++;
        }

        if (company.ssok === workerRel.owner) {
            return Rels.find({
                type: 'vendor',
                destiny: workfor
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            return this.ready();
        }

    });
Meteor.publish('rels.places',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        const workerRel = Rels.findOne(workerRelId);
        const company = Companies.findOne(workfor); //this is an async call, if you remove the loop the data wont be ready and company.ssok will throw undefined
        let n = 1;
        //cheap way of making the process wait until company is ready =) 
        while (n < 3) {
            n++;
        }

        if (company.ssok === workerRel.owner) {
            return Rels.find({
                type: 'place',
                owner: workfor
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            return this.ready();
        }

    });
Meteor.publish('rels.contacts',
    function(workfor, workerRelId) { //f7BXSGPQY3gnKf9zr
        const workerRel = Rels.findOne(workerRelId);
        const company = Companies.findOne(workfor); //this is an async call, if you remove the loop the data wont be ready and company.ssok will throw undefined
        let n = 1;
        //cheap way of making the process wait until company is ready =) 
        while (n < 3) {
            n++;
        }

        if (company.ssok === workerRel.owner) {
            return Rels.find({
                type: 'contact',
                owner: workfor
            }, {
                fields: {
                    owner: false
                }
            });
        } else {
            return this.ready();
        }

    });
// Meteor.publish(null,
//     function() {
// 
//         return Rels.find({
//             type: 'customer'
//         });
//     });
