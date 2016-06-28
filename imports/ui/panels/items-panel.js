import './items-panel.html';
import '../components/item/item-search.js';


Template.Items_panel.onCreated(function() {
    this.subscribe('Rels.all');
    this.subscribe('persons.test');
    this.subscribe('places.test');
    this.subscribe('items.public');
    this.state = new ReactiveDict();
    this.state.setDefault({
        selectedItem: false,
        createdRel: false,
        editingVendorRel: false,
        creatingItem: false,
        editingItem: false,
        itemCreated: false,
        creatingContact: false,
        editingContact: false,
        deletingContact: false,
        creatingPlace: false,
        editingPlace: false
    });
});

//vvvvvvvvvvvvvv ARGS vvvvvvvvvvvvvv
Template.Items_panel.helpers({

    searchItemArgs() {
        const instance = Template.instance();

        return {
            mode: 'product',
            index: ProductsIndex,
            selectedItem(id) {
                instance.state.set('selectedItem', id);
                // console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);
            },
            itemNotFound(insertedText) {
                instance.state.set('creatingItem', insertedText);
            }
        }
    },
    showItemArgs(selectedItemId) {
        const instance = Template.instance();
        const item = Items.findOne(selectedItemId);
        return {
            item: item,
            onEdit(itemId) {
                instance.state.set('editingItem', itemId);
                // console.log('EDIT CONTACT REL ', relId);
            },
            onDelete(itemId) {
                instance.state.set('deletingItem', itemId);
                // console.log('DELETE CONTACT REL ', relId);
                swal({
                        title: "Borramos a " + item.name + ' ?',
                        text: "No se puede recuperar esta informacion!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Sí, borrar!",
                        cancelButtonText: "No, cancelar por favor!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm) {
                        if (isConfirm) {
                            const deleted = Items.remove(itemId);
                            instance.state.set('selectedItem', false);
                            swal(item.name + " fue eliminada.", "Se borraron los datos", "success");
                        } else {
                            swal("Eliminación cancelada!", item.name + " esta segura :)", "error");
                        }
                    });

            }
        }
    },
    editItemArgs(id) {
        const instance = Template.instance();
        const item = Items.findOne(id);
        return {
            item: item,
            onSavedData() {
                instance.state.set('editingItem', false);

            },
            onCancel() {
                instance.state.set('editingItem', false);

            }

        }
    },
    showVendorRelArgs(itemId) {
        const instance = Template.instance();
        const rel = Rels.findOne({
            type: 'vendor',
            origin: itemId,
            destiny: HARDCODE_OWNER
        });
        return {
            rel,
            onEdit(relId) {
                instance.state.set('editingVendorRel', relId);
                // console.log('EDIT CONTACT REL ', relId);
            }
        }

    },
    editVendorRelArgs(itemId) {
        const instance = Template.instance();

        return {
            type: 'vendor',
            origin: itemId,
            destiny: HARDCODE_OWNER,
            onSavedData(relId) {
                instance.state.set('createdRel', relId);
                instance.state.set('editingVendorRel', false);

            },
            onCancel() {
                instance.state.set('editingVendorRel', false);
                console.log('Cancelado');
            }
        }
    },
    createItemArgs() {
        const instance = Template.instance();

        return {
            item: {
                name: instance.state.get('creatingItem')
            },
            // person,
            onSavedData(newItem) {
                instance.state.set('creatingItem', false);
                instance.state.set('selectedItem', newItem);

            },
            onCancel() {
                instance.state.set('creatingItem', false);

            }
        }
    },

    editContactArgs(itemId, personId, relId) {
        const instance = Template.instance();
        const item = Items.findOne(itemId);
        const person = Persons.findOne(personId);
        const rel = Rels.findOne(relId);
        return {
            destiny: itemId,
            owner: HARDCODE_OWNER,
            type: 'contact',
            item: item,
            person: person,
            rel: rel,
            onSavedData() {
                // console.log('rel created contact', relId);
                instance.state.set('editingContact', false);
                instance.state.set('creatingContact', false);

            },
            onCancel() {
                // console.log('cancel');
                instance.state.set('editingContact', false);
                instance.state.set('creatingContact', false);

            }
        }
    },
    editPlaceArgs(itemId, placeId, relId) {
        const instance = Template.instance();
        const item = Items.findOne(itemId);
        const place = Places.findOne(placeId);
        const rel = Rels.findOne(relId);
        return {
            destiny: itemId,
            owner: HARDCODE_OWNER,
            type: 'place',
            item: item,
            place: place,
            rel: rel,
            onSavedData() {
                // console.log('rel created contact', relId);
                instance.state.set('editingPlace', false);
                instance.state.set('creatingPlace', false);

            },
            onCancel() {
                // console.log('cancel');
                instance.state.set('editingPlace', false);
                instance.state.set('creatingPlace', false);

            }
        }
    },

    showContactArgs(personId, relId) {
        const instance = Template.instance();

        const person = Persons.findOne(personId);
        const rel = Rels.findOne(relId);
        return {
            person: person,
            rel: rel,

            onEdit(relId) {
                instance.state.set('editingContact', relId);
                // console.log('EDIT CONTACT REL ', relId);
            },
            onDelete(relId) {
                instance.state.set('deletingContact', relId);
                // console.log('DELETE CONTACT REL ', relId);
                swal({
                        title: "Estas seguro?",
                        text: "No se puede recuperar esta informacion!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Si, borrarlo!",
                        cancelButtonText: "No, cancelar por favor!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm) {
                        if (isConfirm) {

                            const deleted = Rels.remove(relId);
                            console.log('deleted', deleted);


                            swal("Eliminado!", "Este contacto fue eliminado.", "success");
                        } else {
                            swal("Cancelado", "Este contacto esta seguro :)", "error");
                        }
                    });

            }
        }
    },
    showPlaceArgs(placeId, relId) {
        const instance = Template.instance();
        const place = Places.findOne(placeId);
        const rel = Rels.findOne(relId);
        return {
            place: place,
            rel: rel,
            onEdit(relId) {
                instance.state.set('editingPlace', relId);
                // console.log('EDIT CONTACT REL ', relId);
            },
            onDelete(relId) {
                instance.state.set('deletingPlace', relId);
                // console.log('DELETE CONTACT REL ', relId);
                swal({
                        title: "Estas seguro?",
                        text: "No se puede recuperar esta informacion!",
                        type: "warning",
                        showCancelButton: true,
                        confirmButtonColor: "#DD6B55",
                        confirmButtonText: "Si, borrarlo!",
                        cancelButtonText: "No, cancelar por favor!",
                        closeOnConfirm: false,
                        closeOnCancel: false
                    },
                    function(isConfirm) {
                        if (isConfirm) {

                            const deleted = Rels.remove(relId);
                            console.log('deleted', deleted);


                            swal("Eliminado!", "Este lugar fue eliminado.", "success");
                        } else {
                            swal("Cancelado", "Este lugar esta seguro :)", "error");
                        }
                    });

            }
        }
    },


});
//vvvvvvvvvvvvvv STATE vvvvvvvvvvvvvv
Template.Items_panel.helpers({
    editingVendorRel() {
        const instance = Template.instance();
        return instance.state.get('editingVendorRel');
    },
    editingItem() {
        const instance = Template.instance();
        return instance.state.get('editingItem');
    },

    selectedItem() {
        const instance = Template.instance();
        return instance.state.get('selectedItem');
    },
    creatingItem() {
        const instance = Template.instance();
        return instance.state.get('creatingItem');
    },
    itemCreated() {
        const instance = Template.instance();
        return instance.state.get('itemCreated');
    },
    creatingContact() {
        const instance = Template.instance();
        return instance.state.get('creatingContact');
    },
    creatingPlace() {
        const instance = Template.instance();
        return instance.state.get('creatingPlace');
    },
    editingPlace() {
        const instance = Template.instance();
        return instance.state.get('editingPlace');
    },
    editingContact(relId) {
        const instance = Template.instance();
        return (relId == instance.state.get('editingContact')) ? true : false;
    }
});
//vvvvvvvvvvvvvv HELPERS vvvvvvvvvvvvvv
Template.Items_panel.helpers({
    rel(item) {
        const rel = Rels.findOne({
            type: 'vendor',
            origin: item,
            destiny: HARDCODE_OWNER
        });
        return rel;
    },
    contactRels(item) {
        const rels = Rels.find({
            type: 'contact',
            // origin: item,
            destiny: item
        });
        return rels;
    },
    placeRels(item) {
        const rels = Rels.find({
            type: 'place',
            // origin: item,
            destiny: item
        });
        return rels;
    }
});

Template.Items_panel.events({
    'click .js-deselect-item': function(e, instance) {
        instance.state.set('selectedItem', false);
    },
    'click .js-rel-vendor-edit': function(e, instance) {
        instance.state.set('editingVendorRel', true);
    },
    'click .js-item-edit': function(e, instance) {
        instance.state.set('editingItem', true);
    },
    'click .js-contact-create': function(e, instance) {
        instance.state.set('creatingContact', true);
    },
    'click .js-place-create': function(e, instance) {
        instance.state.set('creatingPlace', true);
    },
    'click .js-confirm-deletion': function(e, instance) {
        const relId = instance.state.get('deletingContactRel');
        console.log('delete confirmed ', relId);

    },
    'click .js-cancel-deletion': function(e, instance) {
        instance.data.onEdit(instance.data.relId);
    }
});
