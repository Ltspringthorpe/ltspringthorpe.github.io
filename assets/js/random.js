(function($) {

    function setCookie(cname, cvalue, exdays) {
        const d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        let expires = "expires="+ d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }

    function getRandomInt(min, max) {
        const minCeiled = Math.ceil(min);
        const maxFloored = Math.floor(max);
        return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
    }

    function roll(list) {
        if (list.length === 0) {
            return alert('There are no more maps to choose from.');
        }

        $('#randomMap').removeClass('hidden');
        $('#played').fadeIn('fast');

        var idx = getRandomInt(0, list.length);
        var chosenMap = list[idx];

        $('#mapImage, #mapTitle, #mapId').fadeOut('fast', function() {
            $('#mapImage img').attr('src', 'images/q3maps/' + chosenMap.id + '-0.jpg');
            $('#mapTitle').html(chosenMap.name);
            $('#mapId').html(chosenMap.id);
        });
        $('#mapImage, #mapTitle, #mapId').fadeIn('fast');
    }

    function init() {
        var randomMapList = Object.values(mapsObject).filter(function(randomMap) {
            return !randomMap.playedTonight;
        });

        var randomFavoriteList = randomMapList.filter(function(randomFav) {
            return !!randomFav.favorite;
        });

        // set up listener for roll random favorite
        $('#diceStarMobile, #diceStar').on('click', function() {
            roll(randomFavoriteList);
        });

        // set up listener for roll random map
        $('#diceMobile, #dice').on('click', function() {
            roll(randomMapList);
        });

        // random map accepted
        $('#randomMap #yes').on('click', function() {
            $('#randomMap').addClass('hidden');

            var id = $('#mapId').html().trim();
            console.log(id);
            setCookie(id + '_played', true, 1);

            if (!!nativeOrder[id]) nativeOrder[id].playedTonight = true;
            if (!!mapsObject[id]) mapsObject[id].playedTonight = true;

            randomMapList = randomMapList.filter(function(randomMap) {
                return randomMap.id !== id;
            });
            randomFavoriteList = randomFavoriteList.filter(function(randomFav) {
                return randomFav.id !== id;
            });

            $('#mapImage img').attr('src', '');
            $('#mapTitle').html('');
            $('#mapId').html('');
        });

        // reroll favorite maps
        $('#randomMap #rerollFav').on('click', function() {
            roll(randomFavoriteList);
        });

        // reroll all maps
        $('#randomMap #rerollRandom').on('click', function() {
            roll(randomMapList);
        });

        // mark map as already played
        $('#randomMap #played').on('click', function() {
            $(this).fadeOut('fast');
            var id = $('#mapId').html().trim();
            console.log(id);
            setCookie(id + '_played', true, 1);

            if (!!nativeOrder[id]) nativeOrder[id].playedTonight = true;
            if (!!mapsObject[id]) mapsObject[id].playedTonight = true;

            randomMapList = randomMapList.filter(function(randomMap) {
                return randomMap.id !== id;
            });
            randomFavoriteList = randomFavoriteList.filter(function(randomFav) {
                return randomFav.id !== id;
            });

            roll(randomMapList);
        });

        // random map modal closed
        $('#randomMap .closer').on('click', function() {
            $('#randomMap').addClass('hidden');
            $('#mapImage img').attr('src', '');
            $('#mapTitle').html('');
            $('#mapId').html('');
        });
    }

    $(window).on('load', function() {
        init();
    });

})(jQuery);
