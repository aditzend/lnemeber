Template.registerHelper("deleting", function(){
  return Session.get('deleting');
});

Template.registerHelper("editing", function(){
  return Session.get('editing');
});

Template.registerHelper("editingId", function(id){
  return (Session.get('editing') === id) ? true : false ;
});

Template.registerHelper("thisId", function(){
  return this._id;
});
Template.registerHelper("relTypeTranslate", function(relType){
    switch (relType) {
      case 'SUPL' :
        return 'CLIENTE';
        break;
      case 'CONT' :
        return 'CONTACTO';
        break;
      case 'CUST' :
        return 'PROVEEDOR';
      default:
       return '';
       break;
    }

});

Template.registerHelper("getRelType", function(){
  return FlowRouter.getQueryParam('relType');
});

Template.registerHelper("relTypeLink", function(relType){
    switch (relType) {
      case 'SUPL' :
        return 'show-customer';
        break;
      case 'CONT' :
        return 'show-contact';
        break;
      default:
       return '';
       break;
    }

});

Template.registerHelper("placeTypeOptions", function(){
  return [
    {label:'la oficina principal', value: 1},
    {label:'el deposito donde reciben mercaderia', value: 2},
    {label:'donde se retiran pagos', value: 3},
  ];
});
Template.registerHelper("classPlaceTypeOption", function(val) {
  switch (val) {
    case '1' :
     return 'fa fa-building';
     break;
    case '2' :
      return 'fa fa-cubes';
      break;
    case '3' :
      return 'fa fa-credit-card';
      break;
     default :
     return 'fa fa-home';
     break;
  }
});

Template.registerHelper("convertPlaceTypeOption", function(val) {
  switch (val) {
    case '1' :
     return "OFICINA";
     break;
    case '2' :
      return "RECEPCION MERCADERIA";
      break;
    case '3' :
      return "PAGOS";
      break;
     default :
     return "EN";
     break;
  }
});
Template.registerHelper("countryOptions", function(){
    return [
      {label:'Argentina', value: 'AR'},
      {label:'Brasil', value: 'BR'},
      {label:'Uruguay', value: 'UY'},
      {label:'Paraguay', value: 'PY'},
      {label:'Chile', value: 'CL'},
      {label:'Bolivia', value: 'BO'},
      {label:'Ecuador', value: 'EC'},
      {label:'Perú', value: 'PE'},
      {label:'Colombia', value: 'CO'},
      {label:'Venezuela', value: 'VE'},
      {label:'Méjico', value: 'MX'}
    ];

});

Template.registerHelper("creating", function(){
    return Session.get('creating');
});

Template.registerHelper("isMan", function(g){
    if (g === 'M') {
      return true;
    }
});
