(function($) {

    function init() {
        var searchInput = null;
        var searchTerm = null;
        var sortOrder = 'native';
        var sortFavorites = 'unset';
        var type = 'ffa';
        var filters_include = [];
        var filters_exclude = [];

        // set up listener for mobile hamburger - open
        $('filter img').on('click', function() {
            $('.filter-menu').removeClass('hidden');
            $('.search-menu').addClass('hidden');
            $(this).closest('a').addClass('hidden');
            $('#arrow').removeClass('hidden');
        });

        // set up listener for mobile hamburger - close
        $('#arrow img').on('click', function() {
            $('.filter-menu').addClass('hidden');
            $('.search-menu').addClass('hidden');
            $(this).closest('a').addClass('hidden');
            $('filter').removeClass('hidden');
        });

        // set up listener for mobile search
        $('#magnifying img').on('click', function() {
            $('.filter-menu').addClass('hidden');
            $('.search-menu').toggleClass('hidden');
            $('filter').removeClass('hidden');
            $('#arrow').addClass('hidden');
        });

        // set up listener for filter carets
        $('.filter-list .label').on('click', function() {
            $(this).find('.caret').toggleClass('closed');
            $(this).closest('.filter-list').find('.filter-items, .favorites, .random, .types').toggleClass('hidden');
        });

        // set up listeners for filter buttons
        $('.filter-list.include a, .filter-list.exclude a').on('click', function() {
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
            loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        // set up listeners for clear filter buttons
        $('.clear-filters').on('click', function() {
            $(this).closest('.filter-list').find('.filter-items a').removeClass('selected');
            if ($(this).closest('.include').length) {
                filters_include = [];
            } else if ($(this).closest('.exclude').length) {
                filters_exclude = [];
            }
            loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        // set up listener for search field
        $('#search').on('keyup', function() {
            if (this.value.trim() !== searchInput) {
                searchInput = this.value.trim();
                searchInput = searchInput.replace(/[-\\.,_*+?^$[\](){}!=|]/ig, '\\$&');
                searchTerm = new RegExp(searchInput, 'i');
                loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
            }
        });

        // set up listener to clear search terms
        $('.clear-search').on('click', function() {
            $('#search').val('');
            searchInput = null;
            searchTerm = null;
            loadMaps(null, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        // set up listener for sort dropdown
        $('#sort').on('change', function() {
            sortOrder = this.value;
            loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        // set up listener for favorites sort options
        $('.favorites a').on('click', function() {
            if ($(this).hasClass('selected')) {
                sortFavorites = 'unset';
                $('.favorites a').removeClass('selected');
            } else {
                sortFavorites = this.id;
                $('.favorites a').removeClass('selected');
                $(this).addClass('selected');
            }
            loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        // set up listener for type buttons
        $('.types a').on('click', function() {
            type = this.id;
            $('.types a').removeClass('selected');
            $(this).addClass('selected');
            loadMaps(searchTerm, sortOrder, sortFavorites, type, filters_include, filters_exclude);
        });

        loadMaps();
    };

    function loadMaps(searchTerm = null, sortOrder = 'native', sortFavorites = 'unset', type = 'ffa', filters_include = [], filters_exclude =[]) {
        // what type is selected?
        if (type === 'ffa') {
            mapsArray = Object.values(mapsObject);
        } else if (type === 'ctf') {
            mapsArray = Object.values(mapsObjectCTF);
        } else if (type === 'retired') {
            mapsArray = Object.values(mapsObjectOld);
        }

        // is there a sort order?
        if (sortOrder === 'native') {
            mapsArray = mapsArray;
        } else if (sortOrder === 'name') {
            mapsArray = mapsArray.sort(function(a, b) {
                return (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1);
            });
        } else if (sortOrder === 'id') {
            mapsArray = mapsArray.sort(function(a, b) {
                return (a.id.toLowerCase() < b.id.toLowerCase() ? -1 : 1);
            });
        }

        // are favorites sorted on top?
        if (sortFavorites === 'topFav') {
            mapsArray = mapsArray.sort(function(a,b) {
                return (a.favorite === b.favorite ? 0 : (a.favorite < b.favorite ? 1 : -1));
            });
        }

        var tableRows = '';
        for (let i = 0; i < mapsArray.length; i++) {
            // is there a search term?
            if (searchTerm && !searchTerm.test(mapsArray[i].name) && !searchTerm.test(mapsArray[i].id)) {
                continue;
            }

            // is it set to show only favorites?
            if (sortFavorites === 'onlyFav' && !mapsArray[i].favorite) {
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
            tableRows += '<img src="images/q3maps/' + mapsArray[i].id + '-0.jpg" height="384" width="512" alt="' + mapsArray[i].name + ' (1)" title="' + mapsArray[i].name + ' (1)" />';
            tableRows += '</a>';

            tableRows += '<div class="col-2 col-4-small col-12-xsmall">';
            for (let n = 1; n < mapsArray[i].images; n++) {
                let filename = 'images/q3maps/' + mapsArray[i].id + '-' + n + '.jpg';
                tableRows += '<a href="' + filename + '" class="image-container">';
                tableRows += '<img src="' + filename + '"  height="192" width="256" alt="' + mapsArray[i].name + ' (' + Number(n+1) + ')" title="' + mapsArray[i].name + ' (' + Number(n+1) + ')" />';
                tableRows += '</a>';
            }
            tableRows += '</div>';

            // name
            tableRows += '<div class="col-6 col-12-small info-container">';
            tableRows += '<h3>' + mapsArray[i].name + '</h3>';

            // add/remove favorite
            let favorite = mapsArray[i].favorite ? 'favorite' : '';
            let title = mapsArray[i].favorite ? 'Remove Favorite' : 'Add Favorite';
            tableRows += '<div class="filter-items star-icon"><a class="' + favorite + '" data-id="' + mapsArray[i].id + '" title="' + title + '"></a></div>';

            // add to queue / remove from queue
            let queued = mapsArray[i].queued ? 'queued' : '';
            let queueTitle = mapsArray[i].queued ? 'Remove from Queue' : 'Add to Queue';
            tableRows += '<div class="filter-items add-to-queue-icon"><a class="' + queued + '" data-id="' + mapsArray[i].id + '" title="' + queueTitle + '"></a></div>';

            // id
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
        initQueueListener();
    };

    // Lightbox gallery.
    function loadLightbox() {
        $('#q3mapsTableBody').poptrox({
            caption: function($a) { return $a.find('img').attr('alt'); },
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

    function toggleFavorite(e) {
        var cookieConsent = getCookie('cookieConsent');
        if(!cookieConsent) return;

        var id = e.target.getAttribute('data-id');
        if (e.target.classList.contains('favorite')) {
            setCookie(id, false, 0);
            if (!!nativeOrder[id]) nativeOrder[id].favorite = false;
            if (!!mapsObject[id]) mapsObject[id].favorite = false;
            if (!!ctfMaps[id]) ctfMaps[id].favorite = false;
            if (!!mapsObjectCTF[id]) mapsObjectCTF[id].favorite = false;
            if (!!oldMaps[id]) oldMaps[id].favorite = false;
            if (!!mapsObjectOld[id]) mapsObjectOld[id].favorite = false;
        } else {
            setCookie(id, true, 400);
            if (!!nativeOrder[id]) nativeOrder[id].favorite = true;
            if (!!mapsObject[id]) mapsObject[id].favorite = true;
            if (!!ctfMaps[id]) ctfMaps[id].favorite = true;
            if (!!mapsObjectCTF[id]) mapsObjectCTF[id].favorite = true;
            if (!!oldMaps[id]) oldMaps[id].favorite = true;
            if (!!mapsObjectOld[id]) mapsObjectOld[id].favorite = true;
        }
        e.target.classList.toggle('favorite');
    }

    function toggleQueue(e) {
        var cookieConsent = getCookie('cookieConsent');
        if(!cookieConsent) return;

        var queueList = Object.values(mapsObject).filter(function(map) {
            return !!map.queued;
        });
        var currentIdx = queueList.length + 1;

        var id = e.target.getAttribute('data-id');
        if (e.target.classList.contains('queued')) {
            setCookie(id + '_queued', false, 0);
            if (!!nativeOrder[id]) nativeOrder[id].queued = false;
            if (!!mapsObject[id]) mapsObject[id].queued = false;
            if (!!ctfMaps[id]) ctfMaps[id].queued = false;
            if (!!mapsObjectCTF[id]) mapsObjectCTF[id].queued = false;
            if (!!oldMaps[id]) oldMaps[id].queued = false;
            if (!!mapsObjectOld[id]) mapsObjectOld[id].queued = false;
        } else {
            setCookie(id + '_queued', currentIdx, 1);
            if (!!nativeOrder[id]) nativeOrder[id].queued = true;
            if (!!mapsObject[id]) mapsObject[id].queued = true;
            if (!!ctfMaps[id]) ctfMaps[id].queued = true;
            if (!!mapsObjectCTF[id]) mapsObjectCTF[id].queued = true;
            if (!!oldMaps[id]) oldMaps[id].queued = true;
            if (!!mapsObjectOld[id]) mapsObjectOld[id].queued = true;
        }

        $(e.target).fadeOut('fast', function() {
            e.target.classList.toggle('queued');
            $(e.target).fadeIn('fast');
        });

        var myQueue = '';
    }

    function initStarListener() {
        $('.star-icon a').on('click', toggleFavorite);
    }

    function initQueueListener() {
        $('.add-to-queue-icon a').on('click', toggleQueue);
    }

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    $(window).on('load', function() {
        init();
    });
})(jQuery);
