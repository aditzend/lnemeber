generateSsok = (_id) => Random.secret([26]) + _id;

HARDCODE_OWNER = "yckFkyE3XJqF56CnJ";

postSignUp = function(userId, info) {
    console.log('SIGN UP');
    // FlowRouter.go('exit');
};

// dateOfBirth = function(bDay, bMonth, bYear) {
// 
//   var result;
//   if ((bDay !== null) && (bMonth !== null)) {
//     if ((bDay == '') || (bMonth == '')) {
//       result = moment(sfsdfseff);
//     };
//     result = moment({
//       year: bYear,
//       month: bMonth,
//       day: bDay
//     });
//   } else {
// 
//     result = null;
//   };
//   return result;
// 
// };

// actualBirthDay = function(dateOfBirth) {
// 
//   var result;
//   var now = moment();
//   var actualBDay = moment(dateOfBirth).year(now.year());
//   var prevBDay = moment(actualBDay).subtract(1, 'years');
//   var nextBDay = moment(actualBDay).add(1, 'years');
//   if (now.month() < 6) {
//     if (Math.abs(now.diff(prevBDay, 'days')) < Math.abs(now.diff(actualBDay,
//         'days'))) {
//       result = prevBDay; //compare against last year's birthday
//     } else {
//       result = actualBDay; //compare against this year's birthday
//     }
//   } else {
//     //we are between JUL and DEC
//     if (Math.abs(now.diff(nextBDay, 'days')) < Math.abs(now.diff(actualBDay,
//         'days'))) {
//       result = nextBDay; //compare against next year's birthday
//     } else {
//       result = actualBDay; //compare against this year's birthday
//     }
//   }
//   return result;
// 
// };


let myPostSubmitFunc = function(userId, info) {
    if (userId) {
        console.log('NEW USER : ', userId);
        const ssok = generateSsok(userId);
        let person = Persons.insert({
            owner: ssok
        });
        console.log('NEW PERSON : ', person);
        Meteor.users.update(userId, {
            $set: {
                relatedPerson: person,
                ssok: ssok
            }
        });

        // let rel = Rels.insert({
        //   origin: person,
        //   destiny: userId,
        //   owner: key,
        //   type: 'HAS_USER'
        // });
        // 
        // console.log('NEW REL : ', rel);
    }
};
AccountsTemplates.configure({
    postSignUpHook: myPostSubmitFunc
});

///
import {
    Meteor
}
from 'meteor/meteor';



Meteor.methods({
    'rels.checkAdmin' () {
        console.log('heyyyy');
    },
    'rels.grantCompanyAccess' ({
        workerRelId
    }) {
        new SimpleSchema({
                workerRelId: {
                    type: String
                }
            })
            .validate({
                workerRelId
            });

        const rel = Rels.findOne(workerRelId);
        const company = Companies.findOne(rel.destiny);


        if (rel.owner === company.ssok) {
            console.log(company);
            return 'access granted';
        } else {
            //throw new Meteor.Error('La empresa no existe', 'Error');

        }



    },
    'rels.upsertWorker' ({
        origin,
        destiny,
        position
    }) {
        new SimpleSchema({
                origin: {
                    type: String
                },
                destiny: {
                    type: String
                },
                position: {
                    type: String
                }
            })
            .validate({
                origin,
                destiny,
                position
            });

        const rel = Rels.findOne({
            origin: origin,
            destiny: destiny,
            type: 'worker'
        });
        const c = Companies.findOne(destiny);

        const ssok = c.ssok;

        // if (!todo.editableBy(this.userId)) {
        //   throw new Meteor.Error('todos.updateText.unauthorized',
        //     'Cannot edit todos in a private list that is not yours');
        // }
        if (rel) {
            Rels.update(rel._id, {
                $set: {
                    position: position,

                }
            });
        } else {
            Rels.insert({
                origin: origin,
                destiny: destiny,
                type: 'worker',
                position: position,
                validated: false,
                owner: ssok
            });
        }


    }
});
