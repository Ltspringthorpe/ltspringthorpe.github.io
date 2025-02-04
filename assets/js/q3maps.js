(function($) {

    $(window).on('load', function() {
        loadMaps();
    });

    function loadMaps() {
        var mapsArray = [
            {
                id: 'q3dm1',
                name: 'Arena Gate',
                keywords: 'default rocket launcher plasma',
                notes: 'Did you really mean to call this map?',
            },
            {
                id: 'q3dm2',
                name: 'House Of Pain',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm3',
                name: 'Arena Of Death',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3tourney1',
                name: 'Powerstation 0218',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm4',
                name: 'The Place Of Many Deaths',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm5',
                name: 'The Forgotten Place',
                keywords: 'small',
                notes: '',
            },
            {
                id: 'q3dm6',
                name: 'The Camping Grounds',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3tourney2',
                name: 'The Proving Grounds',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm7',
                name: 'Temple Of Retribution',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm8',
                name: 'Brimstone Abbey',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm9',
                name: 'Hero\'s Keep',
                keywords: '',
                notes: 'In! Out!',
            },
            {
                id: 'q3tourney3',
                name: 'Hell\'s Gate',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm10',
                name: 'The Nameless Place',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm11',
                name: 'Deva Station',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm12',
                name: 'The Dredwerkz',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3tourney4',
                name: 'Vertical Vengeance',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm13',
                name: 'Lost World',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm14',
                name: 'Grim Dungeons',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm15',
                name: 'Demon Keep',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3tourney5',
                name: 'Fatal Instinct',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm16',
                name: 'The Bouncy Map',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm17',
                name: 'The Longest Yard',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm18',
                name: 'Space Chamber',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3dm19',
                name: 'Apocalypse Void',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3tourney6',
                name: 'The Very End Of You',
                keywords: '',
                notes: '',
            },
            {
                id: 'mptourney1',
                name: 'The House Of Decay',
                keywords: '',
                notes: '',
            },
            {
                id: 'mptourney2',
                name: 'Death Factory',
                keywords: '',
                notes: '',
            },
            {
                id: 'mptourney3',
                name: 'Temple Of Pain',
                keywords: '',
                notes: '',
            },
            {
                id: 'mptourney4',
                name: 'Evil Playground',
                keywords: '',
                notes: '',
            },
            {
                id: 'ztn3dm2',
                name: 'Beatbox',
                keywords: '',
                notes: '',
            },
            {
                id: 'woa',
                name: 'War of Angels (woa)',
                keywords: '',
                notes: '',
            },
            {
                id: 'w0rmdm1',
                name: 'Quake3:IDLYM',
                keywords: '',
                notes: '',
            },
            {
                id: 'vault',
                name: 'The Vault',
                keywords: '',
                notes: '',
            },
            {
                id: 'trampoleen',
                name: 'Trampoleen',
                keywords: '',
                notes: '',
            },
            {
                id: 'tig_qubert',
                name: 'April Fool\'s',
                keywords: '',
                notes: '',
            },
            {
                id: 'teqdm2',
                name: 'Propaganda',
                keywords: '',
                notes: '',
            },
            {
                id: 'karena1',
                name: 'Krusty Arena One',
                keywords: '',
                notes: '',
            },
            {
                id: 'karena2',
                name: 'Krusty Arena Two',
                keywords: '',
                notes: '',
            },
            {
                id: 'karena3',
                name: 'Krusty Arena Three',
                keywords: '',
                notes: '',
            },
            {
                id: 'arcarena',
                name: 'The Balance',
                keywords: '',
                notes: '',
            },
            {
                id: 'stei8a',
                name: 'Between The Conduits',
                keywords: '',
                notes: '',
            },
            {
                id: 'spacedm1',
                name: '$p@cE\'s $hrine',
                keywords: '',
                notes: '',
            },
            {
                id: 'semper01q3',
                name: 'Crewel Lye',
                keywords: '',
                notes: '',
            },
            {
                id: 'sabbac',
                name: 'Sabbac\'s Revenge',
                keywords: '',
                notes: '',
            },
            {
                id: 'rene1q3',
                name: 'Blaze Of Glory',
                keywords: '',
                notes: '',
            },
            {
                id: 'qbee',
                name: 'qbee',
                keywords: '',
                notes: '',
            },
            {
                id: 'qdolphin',
                name: 'qdolphin',
                keywords: '',
                notes: 'no',
            },
            {
                id: 'qbeast',
                name: 'qbeast',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3_via_arena',
                name: 'Q3 Via Arena',
                keywords: '',
                notes: '',
            },
            {
                id: 'q3zvendm1',
                name: 'Stairway To Heaven',
                keywords: '',
                notes: 'Corners!',
            },
            {
                id: 'q3monsto4',
                name: '15 Days To BoilerMaker',
                keywords: '',
                notes: '',
            },
            {
                id: 'gork',
                name: 'Gork',
                keywords: '',
                notes: '',
            },
            {
                id: 'q31dm1',
                name: 'Place Of Two Deaths',
                keywords: '',
                notes: '',
            },
            {
                id: 'platypus',
                name: 'Platypus',
                keywords: '',
                notes: '',
            },
            {
                id: 'platform6',
                name: 'Platform6',
                keywords: '',
                notes: '',
            },
            {
                id: 'pjw3dm1',
                name: 'Kiss The Sky',
                keywords: '',
                notes: '',
            },
            {
                id: 'mrcq3dm5',
                name: 'Abusive Intentions',
                keywords: '',
                notes: '',
            },
            {
                id: 'mkexp',
                name: 'Industrial Experience',
                keywords: '',
                notes: '',
            },
            {
                id: 'mkbase',
                name: 'Feel The Base',
                keywords: '',
                notes: '',
            },
            {
                id: 'mfspacedm3',
                name: 'Lost Cause',
                keywords: '',
                notes: '',
            },
            {
                id: 'maxx',
                name: 'Maxx Aggression',
                keywords: '',
                notes: '',
            },
            {
                id: 'sg_2box4',
                name: '2box4',
                keywords: '',
                notes: '',
            },
            {
                id: 'nalq1ta6',
                name: 'Sinister Zone',
                keywords: '',
                notes: '',
            },
            {
                id: 'hate',
                name: 'Burning Hate',
                keywords: '',
                notes: '',
            },
            {
                id: 'willpower',
                name: 'Willpower',
                keywords: '',
                notes: '',
            },
            {
                id: 'unitooldm3_beta',
                name: 'Cosmik Debris',
                keywords: '',
                notes: 'The one with the dog thumbnail',
            },
            {
                id: 'rqm3arena2',
                name: 'A Cold Wind',
                keywords: '',
                notes: '',
            },
            {
                id: 'rfwq3dm2',
                name: 'Climbing Up The Walls',
                keywords: '',
                notes: '',
            },
            {
                id: 'mq3dm1',
                name: 'Brogan',
                keywords: '',
                notes: '',
            },
            {
                id: 'mrl1dm1',
                name: 'Lunatic',
                keywords: '',
                notes: '',
            },
            {
                id: 'dmmtp',
                name: 'Temple At Full Moon',
                keywords: '',
                notes: '',
            },
            {
                id: 'charon3dm13',
                name: '5quid',
                keywords: '',
                notes: '',
            },
            {
                id: 'charon3dm11v2',
                name: 'Liquid Carbon',
                keywords: '',
                notes: '',
            },
            {
                id: '20kdm1',
                name: 'Tempered Graveyard',
                keywords: '',
                notes: '',
            },
            {
                id: 'kmldm1',
                name: 'Ministry Of Death',
                keywords: '',
                notes: '',
            },
            {
                id: 'klhights',
                name: 'Kleskonian Hights',
                keywords: '',
                notes: '',
            },
            {
                id: 'klcurves_small',
                name: 'Kleskonian Curves',
                keywords: '',
                notes: '',
            },
            {
                id: 'kaos',
                name: 'Khaooohs',
                keywords: '',
                notes: '',
            },
            {
                id: 'jaxdm8',
                name: 'Iron And Stone',
                keywords: '',
                notes: '',
            },
            {
                id: 'gon2',
                name: 'Gon2',
                keywords: '',
                notes: '',
            },
            {
                id: 'geo-core',
                name: 'The Geo Core',
                keywords: '',
                notes: '',
            },
            {
                id: 'geit3dm3',
                name: 'And When Death Descends',
                keywords: '',
                notes: 'Mark, the rocket launcher is right there. You can see it in the screenshot.',
            },
            {
                id: 'geit3dm1',
                name: 'Slingshot',
                keywords: '',
                notes: '',
            },
            {
                id: 'dungogt',
                name: 'The Dungeons Of Gvatter Tod',
                keywords: '',
                notes: '',
            },
            {
                id: 'esq3dm1',
                name: 'esq3dm1',
                keywords: '',
                notes: '',
            },
            {
                id: 'e3l9',
                name: 'Stadium',
                keywords: '',
                notes: '',
            },
            {
                id: 'delirium',
                name: 'Delirium',
                keywords: '',
                notes: '',
            },
            {
                id: 'blackforest',
                name: 'Black Forest',
                keywords: '',
                notes: '',
            },
            {
                id: 'billdm17',
                name: 'Forbidden Place',
                keywords: '',
                notes: '',
            },
            {
                id: 'bfgdm2',
                name: 'Breakthru',
                keywords: '',
                notes: '',
            },
            {
                id: 'basic',
                name: 'Basic Instincts',
                keywords: '',
                notes: '',
            },
            {
                id: 'auh3dm2',
                name: 'The BackStab',
                keywords: '',
                notes: '',
            },
            {
                id: 'auh3dm1',
                name: 'OverWhelming HostiLity',
                keywords: '',
                notes: '',
            },
            {
                id: 'altarbeta',
                name: 'AltarBeta',
                keywords: '',
                notes: '',
            },
            {
                id: 'alkdm11',
                name: 'Early Settlers',
                keywords: '',
                notes: '',
            },
        ];

        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {
            tableRows += '<div class="row">';

            tableRows += '<div class="col-6 col-12-xsmall">';
            tableRows += '<img src="images/q3maps/' + mapsArray[i].id + '.jpg" height="384" width="512" />';
            tableRows += '</div>';

            tableRows += '<div class="col-6 col-12-xsmall">';
            tableRows += '<h3>' + mapsArray[i].name + '</h3>';
            tableRows += '<div>ID: ' + mapsArray[i].id + '</div>';
            tableRows += '<div>Keywords: ' + mapsArray[i].keywords + '</div>';
            tableRows += '<div>Notes: ' + mapsArray[i].notes + '</div>';
            tableRows += '</div>';

            tableRows += '</div>';
        }

        $('#q3mapsTableBody').html(tableRows);
    };
})(jQuery);
