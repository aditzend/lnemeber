import {
    Meteor
}
from 'meteor/meteor';



Meteor.methods({
    'rels.checkAdmin' () {
        console.log('heyyyy');
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
