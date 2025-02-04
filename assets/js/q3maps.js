(function($) {

    $(window).on('load', function() {
        loadMaps();
    });

    function loadMaps() {
        var mapsArray = [
            {
                id: 'q3dm1',
                name: 'Arena Gate',
                keywords: 'default, shotgun, rocket launcher, plasma gun',
                notes: 'Did you really mean to call this map?',
            },
            {
                id: 'q3dm2',
                name: 'House Of Pain',
                keywords: 'shotgun, rocket launcher, plasma gun, haste',
                notes: '',
            },
            {
                id: 'q3dm3',
                name: 'Arena Of Death',
                keywords: 'shotgun, grenade launcher, rocket launcher, plasma gun',
                notes: '',
            },
            {
                id: 'q3tourney1',
                name: 'Powerstation 0218',
                keywords: 'shotgun, rocket launcher, quad damage, regeneration, yellow armor',
                notes: '',
            },
            {
                id: 'q3dm4',
                name: 'The Place Of Many Deaths',
                keywords: 'shotgun, rocket launcher, plasma gun, quad damage, red armor',
                notes: '',
            },
            {
                id: 'q3dm5',
                name: 'The Forgotten Place',
                keywords: 'shotgun, grenade launcher, rocket launcher, plasma gun, red armor, yellow armor',
                notes: '',
            },
            {
                id: 'q3dm6',
                name: 'The Camping Grounds',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3tourney2',
                name: 'The Proving Grounds',
                keywords: 'shotgun, rocket launcher, lightning gun, yellow armor',
                notes: '',
            },
            {
                id: 'q3dm7',
                name: 'Temple Of Retribution',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3dm8',
                name: 'Brimstone Abbey',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth, invisibility, quad damage',
                notes: '',
            },
            {
                id: 'q3dm9',
                name: 'Hero\'s Keep',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth',
                notes: 'In! Out!',
            },
            {
                id: 'q3tourney3',
                name: 'Hell\'s Gate',
                keywords: 'rocket launcher, railgun, plasma gun, red armor, yellow armor, battle suit',
                notes: '',
            },
            {
                id: 'q3dm10',
                name: 'The Nameless Place',
                keywords: 'rocket launcher, lightning gun, plasma gun, red armor, yellow armor, invisibility, quad damage, regeneration',
                notes: 'Recharging platform',
            },
            {
                id: 'q3dm11',
                name: 'Deva Station',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, plasma gun, red armor, yellow armor, battle suit, haste, megahealth, quad damage, medkit',
                notes: '',
            },
            {
                id: 'q3dm12',
                name: 'The Dredwerkz',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, megahealth, quad damage, regeneration, teleporter',
                notes: '',
            },
            {
                id: 'q3tourney4',
                name: 'Vertical Vengeance',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, megahealth',
                notes: '',
            },
            {
                id: 'q3dm13',
                name: 'Lost World',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, red armor, yellow armor, megahealth, quad damage, medkit',
                notes: '',
            },
            {
                id: 'q3dm14',
                name: 'Grim Dungeons',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3dm15',
                name: 'Demon Keep',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, bfg, red armor, yellow armor, battle suit, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3tourney5',
                name: 'Fatal Instinct',
                keywords: 'shotgun, rocket launcher, plasma gun, yellow armor, quad damage',
                notes: '',
            },
            {
                id: 'q3dm16',
                name: 'The Bouncy Map',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor',
                notes: '',
            },
            {
                id: 'q3dm17',
                name: 'The Longest Yard',
                keywords: 'shotgun, rocket launcher, railgun, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'q3dm18',
                name: 'Space Chamber',
                keywords: 'shotgun, rocket launcher, railgun, red armor, yellow armor, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3dm19',
                name: 'Apocalypse Void',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, wings, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'q3tourney6',
                name: 'The Very End Of You',
                keywords: 'rocket launcher, railgun, bfg, red armor, yellow armor, megahealth, teleporter',
                notes: '',
            },
            {
                id: 'mptourney1',
                name: 'The House Of Decay',
                keywords: 'rocket launcher, lightning gun, plasma gun, yellow armor',
                notes: '',
            },
            {
                id: 'mptourney2',
                name: 'Death Factory',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, yellow armor, medkit',
                notes: '',
            },
            {
                id: 'mptourney3',
                name: 'Temple Of Pain',
                keywords: 'shotgun, rocket launcher, railgun, nailgun, yellow armor',
                notes: '',
            },
            {
                id: 'mptourney4',
                name: 'Evil Playground',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, yellow armor',
                notes: '',
            },
            {
                id: 'ztn3dm2',
                name: 'Beatbox',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, red armor, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'woa',
                name: 'War of Angels (woa)',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage, medkit, teleporter',
                notes: '',
            },
            {
                id: 'vault',
                name: 'The Vault',
                keywords: 'shotgun, grenade launcher, plasma gun, red armor',
                notes: '',
            },
            {
                id: 'trampoleen',
                name: 'Trampoleen',
                keywords: 'shotgun, rocket launcher, railgun, bfg, red armor, wings, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'tig_qubert',
                name: 'April Fool\'s',
                keywords: 'railgun, quad damage',
                notes: '',
            },
            {
                id: 'teqdm2',
                name: 'Propaganda',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage, medkit',
                notes: '',
            },
            {
                id: 'karena1',
                name: 'Krusty Arena One',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor',
                notes: '',
            },
            {
                id: 'karena2',
                name: 'Krusty Arena Two',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, yellow armor',
                notes: '',
            },
            {
                id: 'karena3',
                name: 'Krusty Arena Three',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, megahealth, invisibility',
                notes: '',
            },
            {
                id: 'arcarena',
                name: 'The Balance',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, haste, megahealth',
                notes: '',
            },
            {
                id: 'stei8a',
                name: 'Between The Conduits',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'spacedm1',
                name: '$p@cE\'s $hrine',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'semper01q3',
                name: 'Crewel Lye',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, yellow armor, haste',
                notes: '',
            },
            {
                id: 'sabbac',
                name: 'Sabbac\'s Revenge',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor',
                notes: '',
            },
            {
                id: 'rene1q3',
                name: 'Blaze Of Glory',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, bfg, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'qbee',
                name: 'qbee',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor',
                notes: '',
            },
            {
                id: 'qdolphin',
                name: 'qdolphin',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, megahealth, teleporter',
                notes: 'No',
            },
            {
                id: 'qbeast',
                name: 'qbeast',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'q3_via_arena',
                name: 'Q3 Via Arena',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, haste, megahealth, invisibility, quad damage, regeneration, medkit, teleporter',
                notes: 'Too big',
            },
            {
                id: 'q3zvendm1',
                name: 'Stairway To Heaven',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, quad damage',
                notes: 'Corners!',
            },
            {
                id: 'q3monsto4',
                name: '15 Days To BoilerMaker',
                keywords: 'shotgun, grenade launcher, rocket launcher, plasma gun, yellow armor, battle suit, haste, megahealth',
                notes: '"A tiny village"',
            },
            {
                id: 'gork',
                name: 'Gork',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, quad damage',
                notes: '',
            },
            {
                id: 'q31dm1',
                name: 'Place Of Two Deaths',
                keywords: 'shotgun, grenade launcher, rocket launcher, plasma gun, bfg, red armor, megahealth, invisibility',
                notes: '',
            },
            {
                id: 'platypus',
                name: 'Platypus',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, plasma gun, red armor, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'platform6',
                name: 'Platform6',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth, invisibility, quad damage, regeneration',
                notes: '',
            },
            {
                id: 'pjw3dm1',
                name: 'Kiss The Sky',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, megahealth, quad damage, medkit',
                notes: '',
            },
            {
                id: 'mrcq3dm5',
                name: 'Abusive Intentions',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor, battle suit, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'mkexp',
                name: 'Industrial Experience',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, haste, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'mkbase',
                name: 'Feel The Base',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor, invisibility, regeneration',
                notes: '',
            },
            {
                id: 'mfspacedm3',
                name: 'Lost Cause',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, battle suit, megahealth, invisibility, quad damage',
                notes: '',
            },
            {
                id: 'maxx',
                name: 'Maxx Aggression',
                keywords: 'shotgun, rocket launcher, plasma gun, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'sg_2box4',
                name: '2box4',
                keywords: 'railgun, yellow armor',
                notes: '',
            },
            {
                id: 'nalq1ta6',
                name: 'Sinister Zone',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, chain gun, nailgun, red armor, yellow armor, invisibility, medkit',
                notes: '',
            },
            {
                id: 'hate',
                name: 'Burning Hate',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'willpower',
                name: 'Willpower',
                keywords: 'shotgun, rocket launcher, plasma gun, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'unitooldm3_beta',
                name: 'Cosmik Debris',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, megahealth, quad damage, teleporter',
                notes: 'The one with the dog thumbnail',
            },
            {
                id: 'rqm3arena2',
                name: 'A Cold Wind',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor',
                notes: '',
            },
            {
                id: 'rfwq3dm2',
                name: 'Climbing Up The Walls',
                keywords: 'grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, regeneration, teleporter',
                notes: '',
            },
            {
                id: 'mq3dm1',
                name: 'Brogan',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, haste, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'mrl1dm1',
                name: 'LuNaTiC',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, haste, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'dmmtp',
                name: 'Temple At Full Moon',
                keywords: 'shotgun, rocket launcher, lightning gun, plasma gun, red armor, megahealth, invisibility, quad damage, regeneration',
                notes: '',
            },
            {
                id: 'charon3dm13',
                name: '5quid',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'charon3dm11v2',
                name: 'Liquid Carbon',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, yellow armor, megahealth, teleporter',
                notes: '',
            },
            {
                id: '20kdm1',
                name: 'Tempered Graveyard',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, battle suit, megahealth, teleporter',
                notes: '',
            },
            {
                id: 'kmldm1',
                name: 'Ministry Of Death',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, bfg, red armor, yellow armor, haste, megahealth, quad damage, regeneration, medkit, teleporter',
                notes: '',
            },
            {
                id: 'klhights',
                name: 'Kleskonian Hights',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'klcurves_small',
                name: 'Kleskonian Curves',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth, regeneration',
                notes: '',
            },
            {
                id: 'kaos',
                name: 'Khaooohs',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, haste, megahealth, invisibility, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'jaxdm8',
                name: 'Iron And Stone',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, red armor, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'gon2',
                name: 'Gon2',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, yellow armor, megahealth, quad damage, teleporter',
                notes: '',
            },
            {
                id: 'geo-core',
                name: 'The Geo Core',
                keywords: 'shotgun, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, battle suit, wings, megahealth',
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
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, quad damage',
                notes: '',
            },
            {
                id: 'dungogt',
                name: 'The Dungeons Of Gvatter Tod',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, plasma gun, bfg, red armor, yellow armor, megahealth, invisibility, quad damage, regeneration, teleporter',
                notes: '',
            },
            {
                id: 'esq3dm1',
                name: 'esq3dm1',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, megahealth, quad damage',
                notes: '',
            },
            {
                id: 'e3l9',
                name: 'Stadium',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, bfg, red armor, yellow armor, haste, wings, megahealth, quad damage, medkit',
                notes: '',
            },
            {
                id: 'delirium',
                name: 'Delirium',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, yellow armor, megahealth',
                notes: 'There\'s one portal that will trap you. Not sure if it\'s a bug or a feature.',
            },
            {
                id: 'blackforest',
                name: 'Black Forest',
                keywords: 'shotgun, rocket launcher, railgun, plasma gun, red armor, yellow armor, battle suit, wings, megahealth, quad damage, teleporter',
                notes: 'Don\'t stand still after spawning!',
            },
            {
                id: 'billdm17',
                name: 'Forbidden Place',
                keywords: 'grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, red armor, yellow armor, invisibility, quad damage, medkit, teleporter',
                notes: '',
            },
            {
                id: 'bfgdm2',
                name: 'Breakthru',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, plasma gun, red armor, yellow armor, haste, megahealth',
                notes: '',
            },
            {
                id: 'basic',
                name: 'Basic Instincts',
                keywords: 'shotgun, grenade launcher, rocket launcher, plasma gun, yellow armor, haste, megahealth',
                notes: '',
            },
            {
                id: 'auh3dm2',
                name: 'The BackStab',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, plasma gun, red armor, yellow armor, haste, quad damage',
                notes: '',
            },
            {
                id: 'auh3dm1',
                name: 'OverWhelming HostiLity',
                keywords: 'shotgun, grenade launcher, rocket launcher, railgun, plasma gun, yellow armor, megahealth',
                notes: '',
            },
            {
                id: 'altarbeta',
                name: 'AltarBeta',
                keywords: 'shotgun, rocket launcher, railgun, yellow armor, megahealth, regeneration',
                notes: '',
            },
            {
                id: 'alkdm11',
                name: 'Early Settlers',
                keywords: 'shotgun, grenade launcher, rocket launcher, lightning gun, railgun, plasma gun, megahealth',
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
            if (mapsArray[i].notes) {
                tableRows += '<div>Notes: ' + mapsArray[i].notes + '</div>';
            }
            tableRows += '</div>';

            tableRows += '</div>';
        }

        $('#q3mapsTableBody').html(tableRows);
    };
})(jQuery);
