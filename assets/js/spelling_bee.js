var cleanList = function() {
    var groupedList = Object.groupBy(wordList, ({ word }) =>
        word,
    );

    Object.values(groupedList).forEach((value) => {
        if (value.length > 1) {
            var newSource = [];
            // combine the 'source' arrays
            for (let i = 0; i < value.length; i++) {
                newSource = newSource.concat(value[i].source);
            }
            newSource = [...new Set(newSource)];
            var newValue = [{ word: value[0].word, source: newSource }];
            groupedList[value[0].word] = newValue;
        }
    });

    // sort the words and organize them by 'word'
    var ordered = Object.keys(groupedList).sort().reduce(
        (obj, key) => {
            obj[key] = groupedList[key];
            return obj;
        },
        {}
    );

    // simplify it to be an array of the object's values. discard the keys.
    var newWordList = Object.values(ordered).map(function(i) {
        return i[0];
    });

    return newWordList;
}

var solve = function(letters, source = '', orderBy = 'alphabetical') {
    var results = [];

    // the magic letter is the first letter of the 'letters' input
    var magicLetter = letters[0];

    for (var i = 0; i < wordList.length; i++) {
        let noMatch = false;
        let sourceMatch = false;

        // check if the sources match
        if (source === '' || wordList[i].source.length === 0 || wordList[i].source.indexOf(source) !== -1) {
            sourceMatch = true;
        }

        // check if it has the magic letter
        if (wordList[i].word.indexOf(magicLetter) === -1) {
            continue;
        }

        // check all the other letters
        for (var j = 0; j < wordList[i].word.length; j ++) {
            if (letters.indexOf( wordList[i].word[j]) === -1) {
                noMatch = true;
                break;
            }
        }

        // it's a match. include it in the results array.
        if (!noMatch && !!sourceMatch) {
            results.push(wordList[i].word);
        }
    }

    return results;
}

// handle button click to toggle tool visibility
// $('#spellingBeeBtn').on('click', function() {
//     $('#spellingBee').toggleClass('hidden');
// });
