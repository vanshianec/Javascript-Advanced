function solve() {
    let validKingdomNames = ['CASTLE', 'DUNGEON', 'FORTRESS', 'INFERNO', 'NECROPOLIS', 'RAMPART', 'STRONGHOLD', 'TOWER', 'CONFLUX'];
    rebuildKingdom();
    joinKingdom();
    war();

    function rebuildKingdom() {
        let kingdomField = $('[placeholder="Kingdom..."]').eq(0);
        let kingField = $('[placeholder="King..."]').eq(0);
        let rebuildButton = $('button').eq(0);

        rebuildButton.on('click', function () {
            if (kingField.val().length >= 2 && validKingdomNames.includes(kingdomField.val().toUpperCase())) {
                let h1 = $('<h1>').text(kingdomField.val().toUpperCase());
                let div = $('<div>').addClass('castle');
                let h2 = $('<h2>').text(kingField.val().toUpperCase());
                let fieldset = $('<fieldset>');
                let legend = $('<legend>').text('Army');
                let divArmy = $('<div>').addClass('armyOutput');
                fieldset.append(legend, $('<p>').text('TANKS - 0'), $('<p>').text('FIGHTERS - 0'),
                    $('<p>').text('MAGES - 0'), divArmy);
                $(`#${kingdomField.val().toLowerCase()}`).show().append(h1, div, h2, fieldset);
            } else {
                if (kingField.val().length < 2) {
                    kingField.val('');
                } else {
                    kingdomField.val('');
                }
            }

        })
    }

    function joinKingdom() {
        let fighterButton = $('[value="fighter"]');
        let mageButton = $('[value="mage"]');
        let tankButton = $('[value="tank"]');
        let joinButton = $('button').eq(1);
        let kingdomField = $('[placeholder="Kingdom..."]').eq(1);
        let characterField = $('[placeholder="Character..."]').eq(0);
        joinButton.on('click', function () {
            let index = 0;
            let role = '';
            let id = kingdomField.val().toLowerCase();
            if (!validKingdomNames.includes(kingdomField.val().toUpperCase())) {
                if (characterField.val().length < 2) {
                    characterField.val('');
                }
                kingdomField.val('');
                return;
            }
            if ($(`#${id}`).is(':visible')) {
                if (characterField.val().length < 2) {
                    characterField.val('');
                    return;
                }
                if (fighterButton.is(':checked')) {
                    index = 1;
                    role = 'FIGHTERS';
                } else if (mageButton.is(':checked')) {
                    index = 2;
                    role = 'MAGES';
                } else if (tankButton.is(':checked')) {
                    index = 0;
                    role = 'TANKS';
                } else {
                    kingdomField.val('');
                    return;
                }
            } else {
                if (characterField.val().length < 2) {
                    characterField.val('');
                }
                kingdomField.val('');
                return;
            }

            let p = $(`#${id} p`).eq(index);
            console.log(p);
            let count = +p.text().split(" - ")[1];
            p.text(`${role} - ${++count}`);
            $('.armyOutput').text($('.armyOutput').text() + characterField.val() + ' ');
        })
    }

    function war() {
        let attackingKingdom = $('[placeholder="Attacker..."]');
        let defendingKingdom = $('[placeholder="Defender..."]');
        let attackButton = $('button').eq(2);
        attackButton.on('click', function () {
            if (validKingdomNames.includes(attackingKingdom.val().toUpperCase())) {
                if (!$('#' + attackingKingdom.val().toLowerCase()).is(':visible')) {
                    attackingKingdom.val('');
                }
            } else {
                attackingKingdom.val('');
            }
            if (validKingdomNames.includes(defendingKingdom.val().toUpperCase())) {
                if (!$('#' + defendingKingdom.val().toLowerCase()).is(':visible')) {
                    defendingKingdom.val('');
                }
            } else {
                defendingKingdom.val('');
            }
            if (attackingKingdom.val() !== '' && defendingKingdom.val() !== '') {
                let attackingParagraphs = $(`#${attackingKingdom.val().toLowerCase()} p`);
                let defendingParagraphs = $(`#${defendingKingdom.val().toLowerCase()} p`);
                let attackingTotal = getTotalPoints(attackingParagraphs, true);
                let defendingTotal = getTotalPoints(defendingParagraphs, false);
                if (attackingTotal > defendingTotal) {
                    let attackingKingdomKing = $('#' + attackingKingdom.val().toLowerCase() + ' h2').text();
                    $('#' + defendingKingdom.val().toLowerCase() + ' h2').text(attackingKingdomKing);
                }
            }
        });

        function getTotalPoints(paragraph, attacking) {
            let stats = attacking ? {0: 20, 1: 50, 2: 70} : {0: 80, 1: 50, 2: 30};
            let totalPoints = 0;
            for (let i = 0; i < 3; i++) {
                let p = paragraph.eq(i);
                let unitCount = +p.text().split(' - ')[1];
                totalPoints += unitCount * stats[i];
            }
            return totalPoints;
        }
    }

}




