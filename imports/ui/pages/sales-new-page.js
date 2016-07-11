import '/imports/ui/components/rel/rel-customer-edit.js';
import '/imports/ui/panels/cash-assets-panel.js';
import '/imports/ui/panels/payables-panel.js';
import '/imports/ui/panels/receivables-panel.js';
import '/imports/ui/components/person/person-create.js';
import '/imports/ui/components/company/company-decs.js';
import '/imports/ui/components/item/item-decs.js';
import './sales-new-page.html';



Template.Sales_new_page.onCreated(function() {
    this.autorun(() => {
        this.subscribe('transfers_of_ownership.test');
        this.subscribe('transfer_of_ownership_details.test');

    });
    this.state = new ReactiveDict();
    this.state.setDefault({
        selectedCompany: false,
        paymentDays: false,
        fin: false,
        finType: false,
        showCompanyDetails: false,
        selectedProduct: false,
        tooId: false,
        sellingItemName: false,
        sellingItemId: false
    });



});

Template.Sales_new_page.onRendered(function() {
    const instance = Template.instance();

    // $('.date-picker')
    //     .datepicker();
    const today = moment()
        .format("D-MM-YYYY");
    $('#emission-date')
        .val(today);
    const tooId = FlowRouter.getParam('_id');
    instance.state.set('tooId', tooId);
});

Template.Sales_new_page.helpers({
    sellingItemName() {
        const instance = Template.instance();
        return instance.state.get('sellingItemName');
    },
    soldProducts() {
        const instance = Template.instance();
        const too = instance.state.get('tooId');
        return TransferOfOwnershipDetails.find({
            too: too
        });
    },
    selectedCompany() {
        const instance = Template.instance();
        return instance.state.get('selectedCompany');
    },
    showCompanyDetails() {
        const instance = Template.instance();
        return instance.state.get('showCompanyDetails');

    },
    companyName() {
        const instance = Template.instance();
        return instance.state.get('companyName');
    },
    productArgs() {
        const instance = Template.instance();
        return {
            selectedItemId(id) {
                instance.state.set('sellingItemId', id);
                console.log("product", id);
            },
            selectedItemName(name) {
                instance.state.set("sellingItemName", name);
                console.log("selling :", instance.state.get('sellingItemName'));


            }
        }
    },
    customerArgs(companyId) {
        const instance = Template.instance();

        return {
            mode: 'customer',
            params: 'show-details',
            index: CustomersIndex,
            selectedCompanyId: companyId,
            selectedCompany(id) {
                instance.state.set('selectedCompany', id);
                console.log('company', id);

                // console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);
            },
            name(name) {
                instance.state.set('companyName', name);
                console.log('company', name);

                // console.log("STATE>>>>>>>>>>>>>> SELECTED COMPANY ", id);
            },
            paymentDays(paymentDays) {
                instance.state.set('paymentDays', paymentDays);
                console.log("paymentDays", paymentDays);
                $('#due-date')
                    .val(moment()
                        .add(paymentDays, 'days')
                        .format("D-MM-YYYY"));

            },
            fin(fin) {
                instance.state.set('fin', fin);
                console.log("fin", fin);

            },
            finType(finType) {
                instance.state.set('finType', finType);
                console.log("finType", finType);

            }

        }
    }

});

Template.Sales_new_page.events({
    'click .js-add-item': function(e, instance) {
        TransferOfOwnershipDetails.insert({
            too: instance.state.get('tooId'),
            owner: Session.get('workfor'),
            item: instance.state.get('sellingItemId'),
            amount: instance.$('.js-amount')
                .val()
        });
    },
    'click .js-show-company-details': function(e, instance) {
        instance.state.set('showCompanyDetails', true);

        console.log("show details");


    },
    'click .js-hide-company-details': function(e, instance) {
        instance.state.set('showCompanyDetails', false);
    },
    'click .js-show-company-switch': function(e, instance) {
        instance.state.set('companyName', false);

        console.log("show search");


    }

});
