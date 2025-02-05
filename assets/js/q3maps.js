(function($) {

    var mapsArray = [
        {
            id: 'q3dm1',
            name: 'Arena Gate',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun',
            notes: 'Did you really mean to call this map?',
        },
        {
            id: 'q3dm2',
            name: 'House Of Pain',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun,Haste',
            notes: '',
        },
        {
            id: 'q3dm3',
            name: 'Arena Of Death',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Plasma Gun',
            notes: '',
        },
        {
            id: 'q3tourney1',
            name: 'Powerstation 0218',
            keywords: 'Shotgun,Rocket Launcher,Yellow Armor,Quad Damage,Regeneration',
            notes: '',
        },
        {
            id: 'q3dm4',
            name: 'The Place Of Many Deaths',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun,Red Armor,Quad Damage',
            notes: '',
        },
        {
            id: 'q3dm5',
            name: 'The Forgotten Place',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Plasma Gun,Red Armor,Yellow Armor',
            notes: '',
        },
        {
            id: 'q3dm6',
            name: 'The Camping Grounds',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3tourney2',
            name: 'The Proving Grounds',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Yellow Armor',
            notes: '',
        },
        {
            id: 'q3dm7',
            name: 'Temple Of Retribution',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3dm8',
            name: 'Brimstone Abbey',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Invisibility,Quad Damage',
            notes: '',
        },
        {
            id: 'q3dm9',
            name: 'Hero\'s Keep',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth',
            notes: 'In! Out!',
        },
        {
            id: 'q3tourney3',
            name: 'Hell\'s Gate',
            keywords: 'Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit',
            notes: '',
        },
        {
            id: 'q3dm10',
            name: 'The Nameless Place',
            keywords: 'Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Yellow Armor,Invisibility,Quad Damage,Regeneration',
            notes: 'Recharging platform',
        },
        {
            id: 'q3dm11',
            name: 'Deva Station',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Haste,Megahealth,Quad Damage,Medkit',
            notes: '',
        },
        {
            id: 'q3dm12',
            name: 'The Dredwerkz',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Megahealth,Quad Damage,Regeneration,Teleporter',
            notes: '',
        },
        {
            id: 'q3tourney4',
            name: 'Vertical Vengeance',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Megahealth',
            notes: '',
        },
        {
            id: 'q3dm13',
            name: 'Lost World',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Medkit',
            notes: '',
        },
        {
            id: 'q3dm14',
            name: 'Grim Dungeons',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3dm15',
            name: 'Demon Keep',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Battle Suit,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3tourney5',
            name: 'Fatal Instinct',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun,Yellow Armor,Quad Damage',
            notes: '',
        },
        {
            id: 'q3dm16',
            name: 'The Bouncy Map',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor',
            notes: '',
        },
        {
            id: 'q3dm17',
            name: 'The Longest Yard',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'q3dm18',
            name: 'Space Chamber',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Red Armor,Yellow Armor,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3dm19',
            name: 'Apocalypse Void',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Wings,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'q3tourney6',
            name: 'The Very End Of You',
            keywords: 'Rocket Launcher,Railgun,BFG,Red Armor,Yellow Armor,Megahealth,Teleporter',
            notes: '',
        },
        {
            id: 'mptourney1',
            name: 'The House Of Decay',
            keywords: 'Rocket Launcher,Lightning Gun,Plasma Gun,Yellow Armor',
            notes: '',
        },
        {
            id: 'mptourney2',
            name: 'Death Factory',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Yellow Armor,Medkit',
            notes: '',
        },
        {
            id: 'mptourney3',
            name: 'Temple Of Pain',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Nailgun,Yellow Armor',
            notes: '',
        },
        {
            id: 'mptourney4',
            name: 'Evil Playground',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Yellow Armor',
            notes: '',
        },
        {
            id: 'ztn3dm2',
            name: 'Beatbox',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Red Armor,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'woa',
            name: 'War of Angels (woa)',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Medkit,Teleporter',
            notes: '',
        },
        {
            id: 'vault',
            name: 'The Vault',
            keywords: 'Shotgun,Grenade Launcher,Plasma Gun,Red Armor',
            notes: '',
        },
        {
            id: 'trampoleen',
            name: 'Trampoleen',
            keywords: 'Shotgun,Rocket Launcher,Railgun,BFG,Red Armor,Wings,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'tig_qubert',
            name: 'April Fool\'s',
            keywords: 'Railgun,Quad Damage',
            notes: '',
        },
        {
            id: 'teqdm2',
            name: 'Propaganda',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Medkit',
            notes: '',
        },
        {
            id: 'karena1',
            name: 'Krusty Arena One',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor',
            notes: '',
        },
        {
            id: 'karena2',
            name: 'Krusty Arena Two',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Yellow Armor',
            notes: '',
        },
        {
            id: 'karena3',
            name: 'Krusty Arena Three',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Megahealth,Invisibility',
            notes: '',
        },
        {
            id: 'arcarena',
            name: 'The Balance',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Haste,Megahealth',
            notes: '',
        },
        {
            id: 'stei8a',
            name: 'Between The Conduits',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'spacedm1',
            name: '$p@cE\'s $hrine',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'semper01q3',
            name: 'Crewel Lye',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Yellow Armor,Haste',
            notes: '',
        },
        {
            id: 'sabbac',
            name: 'Sabbac\'s Revenge',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor',
            notes: '',
        },
        {
            id: 'rene1q3',
            name: 'Blaze Of Glory',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'qbee',
            name: 'qbee',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor',
            notes: '',
        },
        {
            id: 'qdolphin',
            name: 'qdolphin',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Megahealth,Teleporter',
            notes: 'No',
        },
        {
            id: 'qbeast',
            name: 'qbeast',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'q3_via_arena',
            name: 'Q3 Via Arena',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Haste,Megahealth,Invisibility,Quad Damage,Regeneration,Medkit,Teleporter',
            notes: 'Too big',
        },
        {
            id: 'q3zvendm1',
            name: 'Stairway To Heaven',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Quad Damage',
            notes: 'Corners!',
        },
        {
            id: 'q3monsto4',
            name: '15 Days To BoilerMaker',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Plasma Gun,Yellow Armor,Battle Suit,Haste,Megahealth',
            notes: '"A tiny village"',
        },
        {
            id: 'gork',
            name: 'Gork',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Quad Damage',
            notes: '',
        },
        {
            id: 'q31dm1',
            name: 'Place Of Two Deaths',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Plasma Gun,BFG,Red Armor,Megahealth,Invisibility',
            notes: '',
        },
        {
            id: 'platypus',
            name: 'Platypus',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'platform6',
            name: 'Platform6',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Invisibility,Quad Damage,Regeneration',
            notes: '',
        },
        {
            id: 'pjw3dm1',
            name: 'Kiss The Sky',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Megahealth,Quad Damage,Medkit',
            notes: '',
        },
        {
            id: 'mrcq3dm5',
            name: 'Abusive Intentions',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'mkexp',
            name: 'Industrial Experience',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Haste,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'mkbase',
            name: 'Feel The Base',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Invisibility,Regeneration',
            notes: '',
        },
        {
            id: 'mfspacedm3',
            name: 'Lost Cause',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Megahealth,Invisibility,Quad Damage',
            notes: '',
        },
        {
            id: 'maxx',
            name: 'Maxx Aggression',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'sg_2box4',
            name: '2box4',
            keywords: 'Railgun,Yellow Armor',
            notes: '',
        },
        {
            id: 'nalq1ta6',
            name: 'Sinister Zone',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Chain Gun,Nailgun,Red Armor,Yellow Armor,Invisibility,Medkit',
            notes: '',
        },
        {
            id: 'hate',
            name: 'Burning Hate',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'willpower',
            name: 'Willpower',
            keywords: 'Shotgun,Rocket Launcher,Plasma Gun,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'unitooldm3_beta',
            name: 'Cosmik Debris',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Megahealth,Quad Damage,Teleporter',
            notes: 'The one with the dog thumbnail',
        },
        {
            id: 'rqm3arena2',
            name: 'A Cold Wind',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor',
            notes: '',
        },
        {
            id: 'rfwq3dm2',
            name: 'Climbing Up The Walls',
            keywords: 'Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Regeneration,Teleporter',
            notes: '',
        },
        {
            id: 'mq3dm1',
            name: 'Brogan',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Haste,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'mrl1dm1',
            name: 'LuNaTiC',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Haste,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'dmmtp',
            name: 'Temple At Full Moon',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Megahealth,Invisibility,Quad Damage,Regeneration',
            notes: '',
        },
        {
            id: 'charon3dm13',
            name: '5quid',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'charon3dm11v2',
            name: 'Liquid Carbon',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Yellow Armor,Megahealth,Teleporter',
            notes: '',
        },
        {
            id: '20kdm1',
            name: 'Tempered Graveyard',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Megahealth,Teleporter',
            notes: '',
        },
        {
            id: 'kmldm1',
            name: 'Ministry Of Death',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Haste,Megahealth,Quad Damage,Regeneration,Medkit,Teleporter',
            notes: '',
        },
        {
            id: 'klhights',
            name: 'Kleskonian Hights',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'klcurves_small',
            name: 'Kleskonian Curves',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Regeneration',
            notes: '',
        },
        {
            id: 'kaos',
            name: 'Khaooohs',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Haste,Megahealth,Invisibility,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'jaxdm8',
            name: 'Iron And Stone',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Red Armor,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'gon2',
            name: 'Gon2',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Yellow Armor,Megahealth,Quad Damage,Teleporter',
            notes: '',
        },
        {
            id: 'geo-core',
            name: 'The Geo Core',
            keywords: 'Shotgun,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Wings,Megahealth',
            notes: '',
        },
        {
            id: 'geit3dm3',
            name: 'And When Death Descends',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Red Armor,Yellow Armor,Megahealth',
            notes: 'Mark, the Rocket Launcher is right there. You can see it in the screenshot.',
        },
        {
            id: 'geit3dm1',
            name: 'Slingshot',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Quad Damage',
            notes: '',
        },
        {
            id: 'dungogt',
            name: 'The Dungeons Of Gvatter Tod',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Plasma Gun,BFG,Red Armor,Yellow Armor,Megahealth,Invisibility,Quad Damage,Regeneration,Teleporter',
            notes: '',
        },
        {
            id: 'esq3dm1',
            name: 'esq3dm1',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Megahealth,Quad Damage',
            notes: '',
        },
        {
            id: 'e3l9',
            name: 'Stadium',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,BFG,Red Armor,Yellow Armor,Haste,Wings,Megahealth,Quad Damage,Medkit',
            notes: '',
        },
        {
            id: 'delirium',
            name: 'Delirium',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Yellow Armor,Megahealth',
            notes: 'There\'s one portal that will trap you. Not sure if it\'s a bug or a feature.',
        },
        {
            id: 'blackforest',
            name: 'Black Forest',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Plasma Gun,Red Armor,Yellow Armor,Battle Suit,Wings,Megahealth,Quad Damage,Teleporter',
            notes: 'Don\'t stand still after spawning!',
        },
        {
            id: 'billdm17',
            name: 'Forbidden Place',
            keywords: 'Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Red Armor,Yellow Armor,Invisibility,Quad Damage,Medkit,Teleporter',
            notes: '',
        },
        {
            id: 'bfgdm2',
            name: 'Breakthru',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Yellow Armor,Haste,Megahealth',
            notes: '',
        },
        {
            id: 'basic',
            name: 'Basic Instincts',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Plasma Gun,Yellow Armor,Haste,Megahealth',
            notes: '',
        },
        {
            id: 'auh3dm2',
            name: 'The BackStab',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Plasma Gun,Red Armor,Yellow Armor,Haste,Quad Damage',
            notes: '',
        },
        {
            id: 'auh3dm1',
            name: 'OverWhelming HostiLity',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Railgun,Plasma Gun,Yellow Armor,Megahealth',
            notes: '',
        },
        {
            id: 'altarbeta',
            name: 'AltarBeta',
            keywords: 'Shotgun,Rocket Launcher,Railgun,Yellow Armor,Megahealth,Regeneration',
            notes: '',
        },
        {
            id: 'alkdm11',
            name: 'Early Settlers',
            keywords: 'Shotgun,Grenade Launcher,Rocket Launcher,Lightning Gun,Railgun,Plasma Gun,Megahealth',
            notes: '',
        },
    ];

    var keywordFilenames = {
        "Shotgun": 'iconw_shotgun',
        "Grenade Launcher": 'iconw_grenade',
        "Rocket Launcher": 'iconw_rocket',
        "Lightning Gun": 'iconw_lightning',
        "Railgun": 'iconw_railgun',
        "Plasma Gun": 'iconw_plasma',
        "BFG": 'iconw_bfg',
        "Grappling Hook": 'iconw_grapple',
        "Chain Gun": 'iconw_chaingun',
        "Nailgun": 'iconw_nailgun',
        "Prox Mine": 'iconw_proxmine',
        "Red Armor": 'iconr_red',
        "Yellow Armor": 'iconr_yellow',
        "Battle Suit": 'envirosuit',
        "Haste": 'haste',
        "Wings": 'flight',
        "Megahealth": 'iconh_mega',
        "Invisibility": 'invis',
        "Quad Damage": 'quad',
        "Regeneration": 'regen',
        "Medkit": 'medkit',
        "Teleporter": 'teleporter',
    };

    var searchInput = null;
    var searchTerm = null;
    var filters_include = [];
    var filters_exclude = [];

    $(window).on('load', function() {

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
            loadMaps(searchTerm, filters_include, filters_exclude);
        });

        // set up listeners for clear filter buttons
        $('.clear-filters').on('click', function() {
            $(this).closest('.filter-list').find('.filter-items a').removeClass('selected');
            if ($(this).closest('.include').length) {
                filters_include = [];
            } else if ($(this).closest('.exclude').length) {
                filters_exclude = [];
            }
            loadMaps(searchTerm, filters_include, filters_exclude);
        });

        // set up listener for search field
        $('#search').on('keyup', function() {
            if (this.value.trim() !== searchInput) {
                searchInput = this.value.trim();
                searchInput = searchInput.replace(/[-\\.,_*+?^$[\](){}!=|]/ig, '\\$&');
                searchTerm = new RegExp(searchInput, 'i');
                loadMaps(searchTerm, filters_include, filters_exclude);
            }
        });

        // set up listener to clear search terms
        $('.clear-search').on('click', function() {
            $('#search').val('');
            searchInput = null;
            searchTerm = null;
            loadMaps(null, filters_include, filters_exclude);
        });

        loadMaps();
    });

    function loadMaps(searchTerm = null, filters_include = [], filters_exclude =[]) {
        var tableRows = [];
        for (let i = 0; i < mapsArray.length; i++) {

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
            tableRows += '<div class="col-4 col-12-xsmall">';
            tableRows += '<img src="images/q3maps/' + mapsArray[i].id + '.jpg" height="384" width="512" alt="' + mapsArray[i].name + '" title="' + mapsArray[i].name + '" />';
            tableRows += '</div>';

            // name and id
            tableRows += '<div class="col-8 col-12-xsmall">';
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
})(jQuery);
