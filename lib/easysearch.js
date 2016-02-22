ActodesIndex = new EasySearch.Index({
  engine: new EasySearch.Minimongo({
    sort: function () {
      return { createdAt: -1 };
    },
    selector: function (searchObject, options, aggregation) {
      let selector = this.defaultConfiguration().selector(searchObject, options, aggregation),
        categoryFilter = options.search.props.categoryFilter;

      if (_.isString(categoryFilter) && !_.isEmpty(categoryFilter)) {
        selector.category = categoryFilter;
      }

      return selector;
    }
  }),
  collection: Actodes,
  fields: ['treatedAs','name','lastName', 'cuit', 'cid'],
  defaultSearchOptions: {
    limit: 3
  },
  permission: () => {
    //console.log(Meteor.userId());

    return true;
  }
});
