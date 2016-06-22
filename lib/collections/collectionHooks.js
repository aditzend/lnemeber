//console.log('[COMMON] Loading collectionHooks.js ...');

Actodes.before.insert(function(userId, doc) {
  doc.createdAt = moment().toISOString();
  doc.author = Meteor.userId();

  /*  if (!doc.actodeCidType === 'EXCP') {
      if (doc.dnix) {
        console.log(doc.dnix);
      }
      else if(doc.lenr){
          console.log(doc.lenr);
      }
      else if(doc.excp){
          console.log('exception');
      }
    }*/


});
/*
Places.before.insert(function(userId, doc) {
  doc.createdAt = moment().toISOString();
  doc.author = Meteor.userId();
});
Generics.before.insert(function(userId, doc) {
  doc.createdAt = moment().toISOString();
  doc.author = Meteor.userId();
});*/
