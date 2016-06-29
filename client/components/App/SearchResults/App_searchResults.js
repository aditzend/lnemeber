Template.App_searchResults.onCreated(function() {
    /*this.autorun(() => {
      this.subscribe('Actodes.all');
    });*/
});


Template.App_searchResults.helpers({
    /*// taken from easysearch
    inputAttributes: function() {
      return {
        'id': 'search-input',
        'class': 'form-control',
        'autocomplete': 'off',
        'placeholder': "'Maria','29984695','Lopez' "
      };
    },
    actodes: function() {
      return Actodes.find({}, {
        sort: {
          name: 1
        }
      });
    },
    index: function() {
      return ActodesIndex;
    },
    currentUser: function() {
      return Accounts.userId();
    },
    resultsCount: function() {
      return ActodesIndex.getComponentDict().get('count');
    },
    oneFound: function() {
      if (ActodesIndex.getComponentDict().get('count') == 1) {
        return true;
      }
    }*/
});

Template.App_searchResults.events({

});
