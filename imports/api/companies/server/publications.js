import {
    Meteor
}
from 'meteor/meteor';

// 
// import {
//   Companies
// }
// from '../companies.js';
// Meteor.publish("companies.public", function companiesPublic() {
//     return Companies.find({}, {
//         fields: {
//             ssok: false
//         }
//     });
// });
Meteor.publish(null, function companiesNames() {
    return Companies.find({}, {
        fields: {
            // name: 1,
            // _id: 1,
            // ssok: 0
        }
    });
});

// Meteor.publish('companies.public.byId', function companiesPublicById(id) {
//     if (!this.userId) {
//         this.ready();
//     } else {
//         return Companies.find({
//             _id: id
//         }, {
//             fields: {
//                 ssok: false
//             }
//         });
//     }
// });