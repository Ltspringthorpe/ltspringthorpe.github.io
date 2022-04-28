/*
    Strata by HTML5 UP
    html5up.net | @ajlkn
    Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

    var $window = $(window),
    $body = $('body'),
    $header = $('#header'),
    $footer = $('#footer'),
    $main = $('#main'),
    settings = {

        // Parallax background effect?
        parallax: true,

        // Parallax factor (lower = more intense, higher = less intense).
        parallaxFactor: 20

    };

    // Breakpoints.
    breakpoints({
        xlarge:  [ '1281px',  '1800px' ],
        large:   [ '981px',   '1280px' ],
        medium:  [ '737px',   '980px'  ],
        small:   [ '481px',   '736px'  ],
        xsmall:  [ null,      '480px'  ],
    });

    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
    });

    // Touch?
    if (browser.mobile) {

        // Turn on touch mode.
        $body.addClass('is-touch');

        // Height fix (mostly for iOS).
        window.setTimeout(function() {
            $window.scrollTop($window.scrollTop() + 1);
        }, 0);

    }

    // Footer.
    breakpoints.on('<=medium', function() {
        $footer.insertAfter($main);
    });

    breakpoints.on('>medium', function() {
        $footer.appendTo($header);
    });

    // Header.

    // Parallax background.

    // Disable parallax on IE (smooth scrolling is jerky), and on mobile platforms (= better performance).
    if (browser.name == 'ie'
    ||	browser.mobile)
    settings.parallax = false;

    if (settings.parallax) {

        breakpoints.on('<=medium', function() {

            $window.off('scroll.strata_parallax');
            $header.css('background-position', '');

        });

        breakpoints.on('>medium', function() {

            $header.css('background-position', 'left 0px');

            $window.on('scroll.strata_parallax', function() {
                $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
            });

        });

        $window.on('load', function() {
            $window.triggerHandler('scroll');
        });

    }

    // Lightbox gallery.
    $window.on('load', function() {

        $('#two').poptrox({
            caption: function($a) { return $a.next('h2').text(); },
            overlayColor: '#2c2c2c',
            overlayOpacity: 0.85,
            popupCloserText: '',
            popupLoaderText: '',
            selector: '.work-item a.image',
            usePopupCaption: true,
            usePopupDefaultStyling: false,
            usePopupEasyClose: false,
            usePopupNav: true,
            windowMargin: (breakpoints.active('<=small') ? 0 : 50)
        });

    });

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    function decharify(ascii) {
        return ascii.split('-').map(function (ltr) {
            return (String.fromCharCode(ltr));
        }).join('');
    }

    $('#mountsBtn').on('click', function() {
        $('#mounts').toggleClass('hidden');

        $('#go').on('click', function() {
            const client_id = '54-50-98-100-99-52-56-51-97-56-53-49-52-98-54-55-97-97-101-52-98-51-48-102-97-54-54-98-50-98-48-56';
            const client_secret = '66-105-117-56-122-106-81-104-97-79-107-74-82-87-79-53-48-82-115-117-72-49-90-99-121-78-82-103-109-85-99-114';

            var region = $('#region').val() ? $('#region').val() : 'us';
            var namespace = $('#namespace').val() ? $('#namespace').val() : 'profile-us';
            var locale = $('#locale').val() ? $('#locale').val() : 'en_US';

            let realm1 = $('#realm1').val().trim().toLowerCase();
            let toon1 = $('#toon1').val().trim().toLowerCase();
            let realm2 = $('#realm2').val().trim().toLowerCase();
            let toon2 = $('#toon2').val().trim().toLowerCase();

            $('#realm1, #toon1, #realm2, #toon2').css('border-color', 'transparent');

            if (!realm1) {
                $('#realm1').css('border-color', 'red');
            }

            if (!toon1) {
                $('#toon1').css('border-color', 'red');
            }

            if (!realm2) {
                $('#realm2').css('border-color', 'red');
            }

            if (!toon2) {
                $('#toon2').css('border-color', 'red');
            }

            if (!realm1 || !toon1 || !realm2 || !toon2) {
                return;
            }

            var exclude_mounts = [
                'Acherus Deathcharger', // death knight
                'Alabaster Stormtalon', // store
                'Alabaster Thunderwing', // store
                'Armored Bloodwing', // store
                'Ban-Lu, Grandmaster\'s Companion', // monk
                'Celestial Steed', // store
                'Charger', // paladin
                'Deathlord\'s Vilebrood Vanquisher', // death knight
                'Dreadsteed', // warlock
                'Enchanted Fey Dragon', // store
                'Farseer\'s Raging Tempest', // shaman
                'Felsaber', // demon hunter
                'Felsteed', // warlock
                'Gilded Ravasaur', // collector's edition
                'Grinning Reaver', // store
                'Heart of the Aspects', // store
                'Hogrus, Swine of Good Fortune', // store
                'Illidari Felstalker', // collector's edition
                'Imperial Quilen', // collector's edition
                'Iron Skyreaver', // store
                'Lucky Yun', // store
                'Luminous Starseeker', // store
                'Mystic Runesaber', // store
                'Netherlord\'s Accursed Wrathsteed', // warlock
                'Netherlord\'s Brimstone Wrathsteed', // warlock
                'Netherlord\'s Chaotic Wrathsteed', // warlock
                'Obsidian Nightwing', // recruit-a-friend
                'Sapphire Skyblazer', // promotion
                'Seabraid Stallion', // collector's edition
                'Shu-Zen, the Divine Sentinel', // store
                'Squeakers, the Trickster', // store
                'Steamscale Incinerator', // store
                'Swift Windsteed', // store
                'Sylverian Dreamer', // store
                'The Dreadwake', // store
                'Vulpine Familiar', // store
                'Warforged Nightmare', // store
                'Warhorse', // paladin
                'Wen Lo, the River\'s Edge', // store
                'Winged Guardian', // store
                'Winged Steed of the Ebon Blade', // death knight
                'X-53 Touring Rocket', // recruit-a-friend
            ];

            // get token
            function start() {
                var request = $.ajax({
                    method: 'POST',
                    url: 'https://' + region + '.battle.net/oauth/token',
                    data: {
                        client_id: decharify(client_id),
                        client_secret: decharify(client_secret),
                        grant_type: 'client_credentials',
                    },
                    success: function(token) {
                        getAMounts(token);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }

            // get A mounts
            function getAMounts(token, store_mounts) {
                var request = $.ajax({
                    method: 'GET',
                    url: 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm1 + '/' + toon1 + '/collections/mounts',
                    data: {
                        namespace: 'profile-us',
                        locale: 'en_US',
                        access_token: token.access_token,
                    },
                    success: function(data) {
                        getBMounts(token, data);
                    },
                    error: function(error, token) {
                        console.log(error);
                    }
                });
            }

            // get B mounts
            function getBMounts(token, store_mounts, a_mounts) {
                var request = $.ajax({
                    method: 'GET',
                    url: 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm2 + '/' + toon2 + '/collections/mounts',
                    data: {
                        namespace: 'profile-us',
                        locale: 'en_US',
                        access_token: token.access_token,
                    },
                    success: function(data) {
                        parseMounts(a_mounts, data);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }

            function parseMounts(a_mounts, b_mounts) {
                debugger;
                a_mounts = a_mounts['mounts'].filter(function(mount) {
                    return !!mount['is_useable'] && !exclude_mounts.includes(mount['mount']['name']);
                });
                b_mounts = b_mounts['mounts'].filter(function(mount) {
                    return !!mount['is_useable'] && !exclude_mounts.includes(mount['mount']['name']);
                });

                var a_favs = [];
                for (let i = 0; i < a_mounts.length; i++) {
                    let dup = false;
                    for (let j = 0; j < b_mounts.length; j ++) {
                        if (a_mounts[i]['mount']['name'] === b_mounts[j]['mount']['name']) {
                            dup = true;
                        }
                    }
                    if (!dup) {
                        a_favs.push(a_mounts[i]['mount']['name']);
                    }
                }

                var b_favs = [];
                for (let k = 0; k < b_mounts.length; k++) {
                    let dup = false;
                    for (let m = 0; m < a_mounts.length; m ++) {
                        if (b_mounts[k]['mount']['name'] === a_mounts[m]['mount']['name']) {
                            dup = true;
                        }
                    }
                    if (!dup) {
                        b_favs.push(b_mounts[k]['mount']['name']);
                    }
                }

                var a_list = '<ol>';
                for (let n = 0; n < a_favs.length; n++) {
                    a_list += '<li>' + a_favs[n] + '</li>';
                }
                a_list += '</ol>';

                var b_list = '<ol>';
                for (let p = 0; p < b_favs.length; p++) {
                    b_list += '<li>' + b_favs[p] + '</li>';
                }
                b_list += '</ol>';

                var mounts = '<table><thead><tr>';
                mounts += '<th style="width: 50%;">' + toTitleCase(toon1) + '\'s Cheesy Poofs</th>';
                mounts += '<th style="width: 50%;">' + toTitleCase(toon2) + '\'s Cheesy Poofs</th>';
                mounts += '</tr></thead><tbody><tr>';
                mounts += '<td style="vertical-align: top;">' + a_list + '</td>';
                mounts += '<td style="vertical-align: top;">' + b_list + '</td>';
                mounts += '</tr></tbody></table>';

                $('#lists').html(mounts);
            }

            start();
        });
    });

})(jQuery);
