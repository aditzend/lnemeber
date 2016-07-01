//client

//declarations
import '../../api/companies/companies.js';
import '../../api/rels/rels.js';
import '../../api/items/items.js';
import '../../api/persons/persons.js';
import '../../api/places/places.js';
import '../../api/generics/generics.js';


import './useraccounts-configuration.js';
import './routes.js';
import './googlemaps.js';
import './easysearch.js';
import './global-functions.js';
import '../../api/rels/methods.js';
import '../../api/emails/methods.js';

import '../../api/companies/methods.js';


Meteor.startup(function() {
    /*$('body').addClass('fixed-navbar');*/
    $('body')
        .addClass('fixed-sidebar');
    $('body')
        .addClass('fixed-small-header');
    // const workerRel = Rels.findOne({
    //     type: 'worker'
    // });
    // 
    // Meteor.setTimeout(function() {
    //     Session.set('workfor', workerRel.destiny);
    //     Session.set('workerRelId', workerRel._id);
    //     console.log("work for set to : ", Session.get('workfor'));
    //     console.log("work rel  set to : ", Session.get('workerRelId'));
    // 
    //     console.log(workerRel);
    // 
    // }, 10000);



});
