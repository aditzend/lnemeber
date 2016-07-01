import {
    Meteor
}
from 'meteor/meteor';


import {
    Template
}
from 'meteor/templating';
import {
    Mongo
}
from 'meteor/mongo';
import {
    Tracker
}
from 'meteor/tracker';

import {
    ReactiveDict
}
from 'meteor/reactive-dict';

import {
    FlowRouter
}
from 'meteor/kadira:flow-router';

import './item-edit.html';

Template.Item_edit.onRendered(function() {
    const instance = Template.instance();
    const item = instance.data.person;

    instance.$('[data-action=form]')
        .validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2,
                    maxlength: 30
                },
                desc: {
                    required: false,
                    minlength: 2,
                    maxlength: 30
                }
            },
            messages: {
                name: {
                    //required: 'Este campo no puede quedar vacío!',
                    minlength: 'El nombre debe tener mínimo {0} letras!',
                    maxlength: 'El nombre debe tener máximo {0} letras!',
                },
                desc: {
                    //required: 'Este campo no puede quedar vacío!',
                    minlength: 'La descripción debe tener mínimo {0} letras!',
                    maxlength: 'La descripción debe tener máximo {0} letras!',
                }
            },
            showErrors: function(errorMap, errorList) {
                instance.$("#summary")
                    .html("El formulario tiene errores (" +
                        this.numberOfInvalids() +
                        "), ver detalles en rojo.");
                this.defaultShowErrors();
            },
            submitHandler: function() {
                    let name = instance.$('#nameInput')
                        .val();
                    let desc = instance.$('#descInput')
                        .val();
                    if (item == undefined) {
                        console.log("INSERTING...");
                        const newItem = Items.insert({
                            name: name,
                            desc: desc,
                            owner: Session.get('workfor')
                        });
                        instance.data.onSavedData(newItem);
                        swal({
                            title: name + ' creado!',
                            type: "success"
                        });
                    } else {
                        console.log("UPDATING...");
                        Items.update({
                            _id: item._id
                        }, {
                            name: name,
                            desc: desc,
                        });
                        instance.data.onSavedData();
                        swal({
                            title: name + ' actualizado!',
                            type: "success"
                        });
                    }
                    //insert or edit if
                }
                //submit
        });
});

Template.Item_edit.helpers({
    company() {
        const instance = Template.instance();
        return instance.data.company;
    }
})

Template.Item_edit.events({


    'click .js-cancel': function(e, instance) {
        this.onCancel(true);
        swal({
            title: 'Cancelado',
            text: 'Los cambios no se guardaron',
            type: 'warning'
        });
    },

    'submit form': function(e, instance) {
        e.preventDefault();

    },
    'focus [data-action=phoneInput]': function(e) {
        //$('#phoneExplanation').show();
    },
    'blur [data-action=phoneInput]': function(e, instance) {
        var intNum = e.target.value;
        var country = (Phoneformat.countryForE164Number(intNum)) ?
            Phoneformat.countryForE164Number(intNum) : 'AR';
        var element = instance.$('#phoneInput');
        var error = 'TELEFONO INCORRECTO';
        if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
            element.parent("div")
                .addClass("has-error has-feedback");
            $(element)
                .next("span")
                .next("span")
                .html(error)
                .show();
            $(element)
                .parent("div")
                .addClass("has-error has-feedback");
            // $(element).next("span").addClass("fa fa-2x fa-remove");
        } else {
            $(element)
                .parent("div")
                .removeClass("has-error has-feedback");
            // $(element).next("span").removeClass("fa fa-2x fa-remove");
            $(element)
                .next("span")
                .next("span")
                .hide();
        }
        //console.log(Phoneformat.isValidNumber(intNum,country));
        //console.log(country);
        //console.log(intNum);

        //$('#phoneExplanation').hide();


    },
    'blur [data-action=mobileInput]': function(e, instance) {
        var intNum = e.target.value;
        var country = (Phoneformat.countryForE164Number(intNum)) ?
            Phoneformat.countryForE164Number(intNum) : 'AR';
        var element = instance.$('#mobileInput');
        var error = 'TELEFONO INCORRECTO';
        if (!Phoneformat.isValidNumber(intNum, country) && (intNum != '')) {
            element.parent("div")
                .addClass("has-error has-feedback");
            $(element)
                .next("span")
                .next("span")
                .html(error)
                .show();
            $(element)
                .parent("div")
                .addClass("has-error has-feedback");
            // $(element).next("span").addClass("fa fa-2x fa-remove");
        } else {
            $(element)
                .parent("div")
                .removeClass("has-error has-feedback");
            // $(element).next("span").removeClass("fa fa-2x fa-remove");
            $(element)
                .next("span")
                .next("span")
                .hide();
        }
    }

});
