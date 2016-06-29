var i = 0;

Template.header.onCreated(function() {
    this.autorun(() => {
        this.subscribe('companies.public');
    });
});

Template.header.helpers({
    // taken from easysearch
    headerInputAttributes: function() {
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
    headerIndex: function() {
        return ActodesIndex;
    },
    pathTest: function() {
            var params = {
                _id: '5shKQs4j2g7DRfLrnP'
            };
            var path = FlowRouter.path('showContact', params);
            return path;
        }
        /*,
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

Template.header.events({

    'click .hide-menu': function(event) {

        event.preventDefault();

        if ($(window)
            .width() < 769) {
            $("body")
                .toggleClass("show-sidebar");
        } else {
            $("body")
                .toggleClass("hide-sidebar");
        }
    },

    'click .right-sidebar-toggle': function(event) {
        event.preventDefault();
        $('#right-sidebar')
            .toggleClass('sidebar-open');
    },
    'click [data-action=logout]': function() {
        alert('saliendo');
        Meteor.logout();
        //FlowRouter.go('signin');
        console.log("message");

    },
    'click [data-action=createCompany]': function() {

        FlowRouter.go('signin');
        console.log("signin");

    },
    'focus [data-action=header-search]': function() {
        console.log("focus");
        /*Session.set('searchingInHeader', true);*/
    },
    'blur [data-action=header-search]': function() {
        console.log("blur");
        hideSearchResults();

        /*Meteor.setTimeout(function() {
            Session.set('searchingInHeader', false);
          },
          100);*/



    },
    'submit [data-action=header-search-form]': function(evt) {
        evt.preventDefault();
    },
    'keyup #search-input': function(evt) {
        var kids = $('#search-result-ul')
            .children();
        var selected = $('#search-result-ul')
            .children('.h-bg-yellow');
        var selIndex = kids.index(selected);
        var len = kids.length;
        if (evt.keyCode == '39' || evt.keyCode == '40') {
            //down or right
            if (selIndex < (len - 1)) {
                //bottom not reached  yet
                selected.removeClass('h-bg-yellow');
                selected.next()
                    .addClass('h-bg-yellow');
                /*console.log("down", kids.index(selected), len);*/
            } else {
                //bottom reached
                selected.removeClass('h-bg-yellow');
                kids.first()
                    .addClass('h-bg-yellow');
                /*console.log("down", kids.index(selected), len);*/
            }
        } else {
            //other key
            if (evt.keyCode == 13) {
                //enter
                var url = selected.children()
                    .first()
                    .attr('href');
                /*console.log("go to result...", selected.children().first().attr(
                  'href'));*/
                FlowRouter.go(url);
                hideSearchResults();
                console.log(url);



            } else {
                //typing

                var input = $('#search-input');
                if (input.val()
                    .length < 1 && evt.keyCode == '8') {
                    hideSearchResults();
                } else {
                    if (evt.keyCode == '8') {
                        //backspace
                        toastr.clear();
                        selected.removeClass('h-bg-yellow');

                        showSearchResults();

                    } else {
                        if (Session.get('nothingFound')) {
                            Session.set('nothingFound', false)
                            showSearchResults();

                        } else {
                            showSearchResults();

                        }


                    }
                    /*console.log("k ", evt.keyCode);*/

                }


                /*console.log("typing...");*/
            }
        }
    }



});
