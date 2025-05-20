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
        });

        // set up listener for search field
        $('#search').on('keyup', function() {
            if (this.value.trim() !== searchInput) {
                searchInput = this.value.trim();
                searchInput = searchInput.replace(/[-\\.,_*+?^$[\](){}!=|]/ig, '\\$&');
                searchTerm = new RegExp(searchInput, 'i');
                loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
            }
        });

        // set up listener to clear search terms
        $('.clear-search').on('click', function() {
            $('#search').val('');
            searchInput = null;
            searchTerm = null;
            loadMaps(null, sortOrder, filters_include, filters_exclude);
        });

        // set up listener for sort dropdown
        $('#sort').on('change', function() {
            sortOrder = this.value;
            loadMaps(searchTerm, sortOrder, filters_include, filters_exclude);
        });

        loadMaps();
    };

    function loadMaps(searchTerm = null, sortOrder = 'native', filters_include = [], filters_exclude =[]) {
        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {

            // is there a sort order?
            if (sortOrder === 'native') {
                mapsArray = nativeOrder.slice();
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
            tableRows += '<a href="images/q3maps/' + mapsArray[i].id + '.jpg" class="col-4 col-12-xsmall image-container">';
            tableRows += '<img src="images/q3maps/' + mapsArray[i].id + '.jpg" height="384" width="512" alt="' + mapsArray[i].name + '" title="' + mapsArray[i].name + '" />';
            tableRows += '</a>';

            // name and id
            tableRows += '<div class="col-8 col-12-xsmall">';
            tableRows += '<h3>' + mapsArray[i].name + '</h3>';

            let favorite = mapsArray[i].favorite ? 'favorite' : '';
            let title = mapsArray[i].favorite ? 'Remove Favorite' : 'Add Favorite';
            tableRows += '<div class="filter-items star-icon"><a class="' + favorite + '" data-id="' + mapsArray[i].id + '" title="' + title + '"></a></div>';
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

        loadLightbox();
        initStarListener();
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

    function getCookie(cname) {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays*24*60*60*400));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function handleModal() {
        var cookieConsent = getCookie('cookieConsent');
        if (!cookieConsent) {
            $('#cookieConsent').removeClass('hidden');
            $('body').addClass('modal-open');
        }
    }

    function getFavorites() {
        var cookieConsent = getCookie('cookieConsent');
        if (!!cookieConsent) {
            let decodedCookie = decodeURIComponent(document.cookie);
            let ca = decodedCookie.split(';');
            for (let i = 0; i < ca.length; i++) {
                let mapId = ca[i].split('=true')[0].trim();
                if ($('.star-icon a[data-id="' + mapId + '"]').length) {
                    $('.star-icon a[data-id="' + mapId + '"]').addClass('favorite');
                }
            }
        }
    }

    // cookies accepted
    $('#cookieConsent #yes').on('click', function() {
        $('#cookieConsent').addClass('hidden');
        $('body').removeClass('modal-open');

        setCookie('cookieConsent', true, 400);
    });

    // cookied denied
    $('#cookieConsent #no, #cookieConsent .closer').on('click', function() {
        $('#cookieConsent').addClass('hidden');
        $('body').removeClass('modal-open');
    });

    function toggleFavorite(e) {
        var cookieConsent = getCookie('cookieConsent');
        if(!cookieConsent) return;

        var id = e.target.getAttribute('data-id');
        if (e.target.classList.contains('favorite')) {
            setCookie(id, false, 0);
            nativeOrder[id].favorite = false;
            mapsArray[id].favorite = false;
        } else {
            setCookie(id, true, 400);
            nativeOrder[id].favorite = true;
            mapsArray[id].favorite = true;
        }
        e.target.classList.toggle('favorite');
    }

    function initStarListener() {
        $('.star-icon a').on('click', toggleFavorite);
    }

    $(window).on('load', function() {
        init();
        handleModal();
    });
})(jQuery);
