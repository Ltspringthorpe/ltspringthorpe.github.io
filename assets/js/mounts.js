(function($) {

    function toTitleCase(str) {
        return str.toLowerCase().split(' ').map(function (word) {
            return (word.charAt(0).toUpperCase() + word.slice(1));
        }).join(' ');
    }

    function charify(str) {
        return str.split('').map(function(ltr) {
            return ltr.charCodeAt(0);
        }).join('-');
    }

    function decharify(ascii) {
        return ascii.split('-').map(function (ltr) {
            return String.fromCharCode(ltr);
        }).join('');
    }

    const client_id = '54-50-98-100-99-52-56-51-97-56-53-49-52-98-54-55-97-97-101-52-98-51-48-102-97-54-54-98-50-98-48-56';
    const client_secret = '55-97-67-66-72-72-121-105-110-106-55-113-79-52-78-76-109-66-119-99-70-53-70-79-85-107-50-111-111-79-83-77';

    $('#mountsBtn').on('click', function() {
        $('#mountsContainer').toggleClass('hidden');

        $('#go').on('click', function() {
            $('#lists').empty();

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
                'Creeping Carpet', // tailoring
                'Deathlord\'s Vilebrood Vanquisher', // death knight
                'Dreadsteed', // warlock
                'Enchanted Fey Dragon', // store
                'Ensorcelled Everwyrm', // collector's edition
                'Farseer\'s Raging Tempest', // shaman
                'Felsaber', // demon hunter
                'Felsteed', // warlock
                'Flying Carpet', // tailoring
                'Frosty Flying Carpet', // tailoring
                'Gilded Ravasaur', // collector's edition
                'Grinning Reaver', // store
                'Heart of the Aspects', // store
                'Hogrus, Swine of Good Fortune', // store
                'Illidari Felstalker', // collector's edition
                'Imperial Quilen', // collector's edition
                'Iron Skyreaver', // store
                'Lucky Yun', // store
                'Luminous Starseeker', // store
                'Magnificent Flying Carpet', // tailoring
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
                'Tangled Dreamweaver', // collector's edition
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
                    // url: 'https://' + region + '.battle.net/oauth/token',
                    url: 'https://oauth.battle.net/token',
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
            function getAMounts(token) {
                var request = $.ajax({
                    method: 'GET',
                    url: 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm1 + '/' + toon1 + '/collections/mounts',
                    headers: {
                        'Authorization': 'Bearer ' + token.access_token,
                    },
                    data: {
                        namespace: namespace,
                        locale: 'en_US',
                    },
                    success: function(data) {
                        getBMounts(token, data);
                    },
                    error: function(error) {
                        console.log(error);
                    }
                });
            }

            // get B mounts
            function getBMounts(token, a_mounts) {
                var request = $.ajax({
                    method: 'GET',
                    url: 'https://' + region + '.api.blizzard.com/profile/wow/character/' + realm2 + '/' + toon2 + '/collections/mounts',
                    headers: {
                        'Authorization': 'Bearer ' + token.access_token,
                    },
                    data: {
                        namespace: namespace,
                        locale: 'en_US',
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

                a_favs.sort();
                b_favs.sort();

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
