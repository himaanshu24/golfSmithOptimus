define([
    '$',
    'translator'
],
function($, translator) {
    return {
        context: {
            // Fetch the data of search pinny
            searchForm: function() {
                var $search = $('#search');
                $search.removeAttr('style');
                $search.find('*').removeAttr('style');
                $search.find('#site_search').attr('value', 'Search');
                $search.find('label').remove();
                return $search;
            },

            // Fetch the link of Cart page
            cartLink: function() {
                return $('#CartTotal').attr('href');
            }
        }
    };
});
