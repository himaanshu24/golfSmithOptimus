define([
    '$',
    'fastclick',
    'pinny',
    'modal-center',
    'sheet-left',
    'sheet-top',
    'deckard'
],
function(
    $,
    fastclick,
    pinny,
    modalCenter,
    sheetLeft,
    sheetTop
) {
    var searchHeaderPinny = function() {
        var $searchHeader = $('.c-search-pinny');
        // initializes pinny
        $searchHeader.pinny({
            effect: sheetTop,
            spacerHeight: 0,
            coverage: '100%',
            cssClass: 'c-search-pinny',
            shade: {
                color: '#081629',
                opacity: 0.7
            },
            opened: function() {
                $('#site_search').focus();
            },
            closed: function() {
                $('#site_search').val('');
            }
        });
        $('.c-search-link').on('click', function() {
            $searchHeader.pinny('open');
        });
    };

    var sideBar = function() {
        var $navPinny = $('.nav-wrapper');
        $navPinny.pinny({
            effect: sheetLeft,
            coverage: '85%',
            structure: false,
        });

        $('.c-hamburger').on('click', function() {
            $navPinny.pinny('open');
        });
    };

    var globalUI = function() {
        // Remove 300ms tap delay using FastClick
        fastclick.attach(document.body);
        // Enable active states for CSS
        $(document).on('touchstart', function() {});
        searchHeaderPinny();
        sideBar();
        // Add any scripts you would like to run on ALL pages here
    };
    return globalUI;
});
