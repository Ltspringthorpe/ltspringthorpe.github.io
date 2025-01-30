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
                keywords: '',
                notes: '',
            },
            {
                name: 'Hero\'s Keep',
                filename: 'HerosKeep',
                keywords: '',
                notes: '',
            },
            {
                name: 'Hell\'s Gate',
                filename: 'HellsGate',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Nameless Place',
                filename: 'TheNamelessPlace',
                keywords: '',
                notes: '',
            },
            {
                name: 'Deva Station',
                filename: 'DevaStation',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Dredwerkz',
                filename: 'TheDredwerkz',
                keywords: '',
                notes: '',
            },
            {
                name: 'Vertical Vengeance',
                filename: 'VerticalVengeance',
                keywords: '',
                notes: '',
            },
            {
                name: 'Lost World',
                filename: 'LostWorld',
                keywords: '',
                notes: '',
            },
            {
                name: 'Grim Dungeons',
                filename: 'GrimDungeons',
                keywords: '',
                notes: '',
            },
            {
                name: 'Demon Keep',
                filename: 'DemonKeep',
                keywords: '',
                notes: '',
            },
            {
                name: 'Fatal Instinct',
                filename: 'FatalInstinct',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Bouncy Map',
                filename: 'TheBouncyMap',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Longest Yard',
                filename: 'TheLongestYard',
                keywords: '',
                notes: '',
            },
            {
                name: 'Space Chamber',
                filename: 'SpaceChamber',
                keywords: '',
                notes: '',
            },
            {
                name: 'Apocalypse Void',
                filename: 'ApocalypseVoid',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Very End Of You',
                filename: 'TheVeryEndOfYou',
                keywords: '',
                notes: '',
            },
            {
                name: 'The House Of Decay',
                filename: 'TheHouseOfDecay',
                keywords: '',
                notes: '',
            },
            {
                name: 'Death Factory',
                filename: 'DeathFactory',
                keywords: '',
                notes: '',
            },
            {
                name: 'Temple Of Pain',
                filename: 'TempleOfPain',
                keywords: '',
                notes: '',
            },
            {
                name: 'Evil Playground',
                filename: 'EvilPlayground',
                keywords: '',
                notes: '',
            },
            {
                name: 'Space Chamber',
                filename: 'SpaceChamber',
                keywords: '',
                notes: '',
            },
            {
                name: 'Beatbox',
                filename: 'Beatbox',
                keywords: '',
                notes: '',
            },
            {
                name: 'Woa',
                filename: 'Woa',
                keywords: '',
                notes: '',
            },
            {
                name: 'Quake3:IDLYM',
                filename: 'Quake3IDLYM',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Vault',
                filename: 'TheVault',
                keywords: '',
                notes: '',
            },
            {
                name: 'Trampoleen',
                filename: 'Trampoleen',
                keywords: '',
                notes: '',
            },
            {
                name: 'April Fool\'s',
                filename: 'AprilFools',
                keywords: '',
                notes: '',
            },
            {
                name: 'Propaganda',
                filename: 'Propaganda',
                keywords: '',
                notes: '',
            },
            {
                name: 'Krusty Arena One',
                filename: 'KrustyArenaOne',
                keywords: '',
                notes: '',
            },
            {
                name: 'Krusty Arena Two',
                filename: 'KrustyArenaTwo',
                keywords: '',
                notes: '',
            },
            {
                name: 'Krusty Arena Three',
                filename: 'KrustyArenaThree',
                keywords: '',
                notes: '',
            },
            {
                name: 'The Balance',
                filename: 'TheBalance',
                keywords: '',
                notes: '',
            },
            {
                name: 'Between The Conduits',
                filename: 'BetweenTheConduits',
                keywords: '',
                notes: '',
            },
            {
                name: '$p@cE\'s $hrine',
                filename: 'SpaceShrine',
                keywords: '',
                notes: '',
            },
            {
                name: 'Crewel Lye',
                filename: 'CrewelLye',
                keywords: '',
                notes: '',
            },
            {
                name: 'Sabbac\'s Revenge',
                filename: 'SabbacsRevenge',
                keywords: '',
                notes: '',
            },
            {
                name: 'Runt Fest',
                filename: 'RuntFest',
                keywords: '',
                notes: 'Fun to explore, but way too big',
            },
            {
                name: 'Blaze Of Glory',
                filename: 'BlazeOfGlory',
                keywords: '',
                notes: '',
            },
            {
                name: 'qbee',
                filename: 'Qbee',
                keywords: '',
                notes: '',
            },
            {
                name: 'qdolphin',
                filename: 'Qdolphin',
                keywords: '',
                notes: 'no',
            },
            {
                name: 'qbeast',
                filename: 'Qbeast',
                keywords: '',
                notes: '',
            },
            {
                name: 'Q3 Via Arena',
                filename: 'Q3ViaArena',
                keywords: '',
                notes: '',
            },
            {
                name: 'Stairway To Heaven',
                filename: 'StairwayToHeaven',
                keywords: '',
                notes: '',
            },
            {
                name: '15 Days To BoilerMaker',
                filename: '15DaysToBoilerMaker',
                keywords: '',
                notes: '',
            },
            {
                name: 'Gork',
                filename: 'Gork',
                keywords: '',
                notes: '',
            },
            {
                name: 'Place Of Two Deaths',
                filename: 'PlaceOfTwoDeaths',
                keywords: '',
                notes: '',
            },
            {
                name: 'Platipus',
                filename: 'Platipus',
                keywords: '',
                notes: '',
            },
            {
                name: 'Platform6',
                filename: 'Platform6',
                keywords: '',
                notes: '',
            },
        ];

        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {
            tableRows += '<div class="row">';

            tableRows += '<div class="col-6 col-12-xsmall">';
            tableRows += '<img src="images/q3maps/' + mapsArray[i].filename + '.png" />';
            tableRows += '</div>';

            tableRows += '<div class="col-6 col-12-xsmall">';
            tableRows += '<h2>' + mapsArray[i].name + '</h2>';
            tableRows += '<div>Keywords: ' + mapsArray[i].keywords + '</div>';
            tableRows += '<div>Notes: ' + mapsArray[i].notes + '</div>';
            tableRows += '</div>';

            tableRows += '</div>';
        }

        $('#q3mapsTableBody').html(tableRows);
    };
})(jQuery);
