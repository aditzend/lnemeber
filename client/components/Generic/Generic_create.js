Template.Generic_create.onCreated( function() {


  });

Template.Generic_create.events({
  'submit [data-action=createGenericForm]' : function(e) {
    e.preventDefault();
    Generics.insert({
      _id: e.target.globalCode.value,
      es_name: e.target.es_name.value,
      es_keyword: e.target.es_keyword.value,
      es_desc: e.target.es_desc.value
      });
      console.log("inserted in Generics");
      FlowRouter.go('../show-generic/' + e.target.globalCode.value);
  }
});
