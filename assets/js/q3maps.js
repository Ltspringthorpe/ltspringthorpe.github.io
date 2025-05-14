(function($) {

    function init() {
        var searchInput = null;
        var searchTerm = null;
        var sortOrder = 'native';
        var filters_include = [];
        var filters_exclude = [];

        // set up listener for filter carets
        $('.caret').on('click', function() {
            $(this).toggleClass('closed');
            $(this).closest('.filter-list').find('.filter-items').toggleClass('hidden');
        });

        // set up listeners for filter buttons
        $('.filter-list a').on('click', function() {
            $(this).toggleClass('selected');

            // don't allow two conflicting filters
            var key = $(this).find('img').attr('alt');
            if ($(this).closest('.include').length) {
                $('.exclude img[alt="' + key + '"]').closest('a').removeClass('selected');
            } else if ($(this).closest('.exclude').length) {
                $('.include img[alt="' + key + '"]').closest('a').removeClass('selected');
            }

            filters_include = $('.filter-list.include .selected img').map(function(idx, item) {
                return $(item).attr('alt');
            });
            filters_exclude = $('.filter-list.exclude .selected img').map(function(idx, item) {
                return $(item).attr('alt');
            });
            loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
            loadLightbox();
        });

        // set up listeners for clear filter buttons
        $('.clear-filters').on('click', function() {
            $(this).closest('.filter-list').find('.filter-items a').removeClass('selected');
            if ($(this).closest('.include').length) {
                filters_include = [];
            } else if ($(this).closest('.exclude').length) {
                filters_exclude = [];
            }
            loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
            loadLightbox();
        });

        // set up listener for search field
        $('#search').on('keyup', function() {
            if (this.value.trim() !== searchInput) {
                searchInput = this.value.trim();
                searchInput = searchInput.replace(/[-\\.,_*+?^$[\](){}!=|]/ig, '\\$&');
                searchTerm = new RegExp(searchInput, 'i');
                loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
                loadLightbox();
            }
        });

        // set up listener to clear search terms
        $('.clear-search').on('click', function() {
            $('#search').val('');
            searchInput = null;
            searchTerm = null;
            loadMaps(null, sortOrder, filters_include, filters_exclude);
            loadLightbox();
        });

        // set up listener for sort dropdown
        $('#sort').on('change', function() {
            sortOrder = this.value;
            loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
            loadLightbox();
        });

        loadMaps();
        loadLightbox();
    };

    async function loadMaps(searchTerm = null, sortOrder = 'native', filters_include = [], filters_exclude =[]) {
        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {

            // is there a sort order?
            if (sortOrder === 'native') {
                mapsArray = NATIVE_ORDER.slice();
            } else if (sortOrder === 'name') {
                mapsArray = mapsArray.sort(function(a, b) {
                    return (a.name < b.name ? -1 : 1);
                });
            } else if (sortOrder === 'id') {
                mapsArray = mapsArray.sort(function(a, b) {
                    return (a.id < b.id ? -1 : 1);
                });
            }

            // is there a search term?
            if (searchTerm && !searchTerm.test(mapsArray[i].name) && !searchTerm.test(mapsArray[i].id)) {
                continue;
            }

            // are there "include" filters?
            var skip = false;
            for (let k = 0; k < filters_include.length; k++) {
                if (!(new RegExp (filters_include[k])).test(mapsArray[i].keywords)) {
                    skip = true;
                    continue;
                }
            }
            if (!!skip) continue;

            // are there "exclude" filters?
            for (let m = 0; m < filters_exclude.length; m++) {
                if ((new RegExp(filters_exclude[m])).test(mapsArray[i].keywords)) {
                    skip = true;
                    continue;
                }
            }
            if (!!skip) continue;

            tableRows += '<div class="row">';

            // image
            tableRows += '<a href="images/q3maps/' + mapsArray[i].id + '-0.jpg" class="col-4 col-8-small col-12-xsmall image-container">';
            tableRows += '<img src="images/q3maps/' + mapsArray[i].id + '-0.jpg" height="384" width="512" alt="' + mapsArray[i].name + ' image 1" title="' + mapsArray[i].name + ' image 1" />';
            tableRows += '</a>';

            tableRows += '<div class="col-2 col-4-small col-12-xsmall">';
            for (let n = 1; n < 3; n++) {
                let filename = 'images/q3maps/' + mapsArray[i].id + '-' + n + '.jpg';
                tableRows += '<a href="' + filename + '" class="image-container">';
                tableRows += '<img src="' + filename + '"  height="192" width="256" alt="' + mapsArray[i].name + ' image ' + Number(n+1) + '" title="' + mapsArray[i].name + ' image ' + Number(n+1) +'" />';
                tableRows += '</a>';
            }
            tableRows += '</div>';

            // name and id
            tableRows += '<div class="col-4 col-12-small info-container">';
            tableRows += '<h3>' + mapsArray[i].name + '</h3>';
            tableRows += '<div>ID: ' + mapsArray[i].id + '</div>';

            // keywords
            if (mapsArray[i].keywords) {
                var keywordsArr = mapsArray[i].keywords.split(',');
                tableRows += '<div class="keywords">';
                for (let j = 0; j < keywordsArr.length; j++) {
                    tableRows += '<img src="images/icons/' + keywordFilenames[keywordsArr[j]] + '.svg" alt="' + keywordsArr[j] + '" title="' + keywordsArr[j] + '" height="25" width="25" />';
                }
                tableRows += '</div>';
            }

            // notes
            if (mapsArray[i].notes) {
                tableRows += '<div>Notes: ' + mapsArray[i].notes + '</div>';
            }

            tableRows += '</div>';
            tableRows += '</div>';
        }

        $('#q3mapsTableBody').html(tableRows);
    };

    // Lightbox gallery.
    function loadLightbox() {
        $('#q3mapsTableBody').poptrox({
            caption: function($a) { return $a.closest('.row').find('h3').text(); },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            popupCloserText: '',
            popupLoaderText: '',
            selector: 'a.image-container',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: 50,
        });
    };

    $(window).on('load', function() {
        init();
    });
})(jQuery);
