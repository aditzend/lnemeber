import '/imports/ui/components/rel/rel-customer-edit.js';
import '/imports/ui/panels/customers-panel.js';
import '/imports/ui/panels/vendors-panel.js';
import '/imports/ui/panels/items-panel.js';
import '/imports/ui/components/person/person-create.js';
import './dashboard.html';



Template.Dashboard.onCreated(function() {
    this.autorun(() => {
        // this.subscribe('userData'),
        //     this.subscribe('persons.own'),
    });
});

Template.Dashboard.helpers({
    // workingFor() {
    //     const instance = Template.instance();
    //     const companyId = Session.get('workfor');
    //     instance.autorun(() => {
    //         if (instance.subscriptionsReady()) {
    //             const company = Companies.findOne(companyId);
    //             return companyId;
    //         } else {
    //             return false;
    //         }
    //     })
    // 
    // 
    // 
    // 
    // },
    workfor() {
        const instance = Template.instance();
        const companyId = Session.get('workfor');

        return companyId;
    },
    companyLogo(companyId) {
        const company = Companies.findOne(companyId);
        if (company) {
            if (company.logo) {
                return company.logo;
            } else {
                return false
            }
        } else {
            return false
        }


    },
    companyName(companyId) {
        const company = Companies.findOne(companyId);
        if (company) {
            return company.name;
        } else {
            return '-'
        }
    }






});
