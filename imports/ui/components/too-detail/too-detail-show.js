import './too-detail-show.html';

Template.TooDetailShow.onCreated(function() {
    // this.autorun(() => {
    //     this.subscribe('transfers_of_ownership.test');
    //     this.subscribe('transfer_of_ownership_details.test');
    // 
    // });
    this.state = new ReactiveDict();
    this.state.setDefault({
        rowState: false

    });



});

Template.TooDetailShow.onRendered(function() {


});

Template.TooDetailShow.helpers({

    rowState() {
        const instance = Template.instance();
        return (instance.state.get('selected')) ?
            'info' : '';
    },
    selected() {
        const instance = Template.instance();
        return (instance.state.get('selected')) ?
            1 : 0;
    },
    itemName(id) {
        const item = Items.findOne(id);
        return item.name;
    },
    total(amount, price, discount, taxes) {
        const instance = Template.instance();

        const total = (amount * price) * (1 - discount / 100) * (1 + taxes / 100)
        return (total > 0) ? total : '-';
    }
});

Template.TooDetailShow.events({
    'click .js-select-row': function(e, instance) {
        if (instance.state.get('selected')) {
            instance.state.set('selected', false);
        } else {
            instance.state.set('selected', true);
        }
    },
    'click .js-delete-detail': function(e, instance) {
        const detailId = instance.$('.js-delete-detail')
            .attr('id');
        const total = instance.$('#total')
            .val();
        instance.data.onDelete(detailId, total);
    }
});
