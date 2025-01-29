(function($) {

    $(window).on('load', function() {
        loadMaps();
    });

    function loadMaps() {
        var mapsArray = [
            {
                name: 'Arena Gate',
                filename: 'ArenaGate',
                keywords: 'default rocket launcher plasma gun',
                notes: 'Did you really mean to call this map?',
            },
            {
                name: 'House Of Pain',
                filename: 'HouseOfPain',
                keywords: '',
                notes: '',
            },
            {
                name: 'Arena Of Death',
                filename: 'ArenaOfDeath',
                keywords: '',
                notes: '',
            },
            {
                name: 'Powerstation 0218',
                filename: 'Powerstation0218',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Place Of Many Deaths',
                filename: 'ThePlaceOfManyDeaths',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Forgotten Place',
                filename: 'TheForgottenPlace',
                keywords: 'small',
                notes: '',
            },
            {
                name: 'The Camping Grounds',
                filename: 'TheCampingGrounds',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Proving Grounds',
                filename: 'TheProvingGrounds',
                keywords: '',
                notes: '',
            },
            {
                name: 'Temple Of Retribution',
                filename: 'TempleOfRetribution',
                keywords: '',
                notes: '',
            },
            {
                name: 'Brimstone Abbey',
                filename: 'BrimstoneAbbey',
                keywords: 'invisibility',
                notes: '',
            },
        ];

        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {
            tableRows += '<tr>';
            tableRows += '<td><img src="images/q3maps/' + mapsArray[i].filename + '.png" /></td>';
            tableRows += '<td><h2>' + mapsArray[i].name + '</h2>';
            tableRows += '<div>Keywords: ' + mapsArray[i].keywords + '</div>';
            tableRows += '<div>Notes: ' + mapsArray[i].notes + '</div></td>';
            notes: '',
            tableRows += '</tr>';
        }

        $('#q3mapsTableBody').html(tableRows);
    };
})(jQuery);
