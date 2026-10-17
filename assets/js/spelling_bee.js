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
            newSource = newSource.sort();
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

    newWordList = JSON.stringify(newWordList);
    // console.log(newWordList);

    newWordList = newWordList.replace(/\[{/g, `var wordList =\n[\n{`);
    newWordList = newWordList.replace(/{"word":"([a-z]*)","source":\["/g, `    { word: '$1', source: ['`);
    newWordList = newWordList.replace(/{"word":"([a-z]*)","source":\[]},/g ,`    { word: '$1', source: [] },\n`);
    newWordList = newWordList.replace(/","/g, `', '`);
    newWordList = newWordList.replace(/"\]},*/g, `'] },\n`);
    newWordList += ';\n';
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

/*

handle button click to toggle tool visibility -
$('#spellingBeeBtn').on('click', function() {
    $('#spellingBee').toggleClass('hidden');
});

NYT repeated word regex -
^(    )*([a-z]{4,})\2(\s\(pangram\))*\n
    { word: '$2', source: ['nyt'] },\n

Spellsbee & LA Times regex -
^(    )*([a-z]{4,})\b\n
    { word: '$2', source: ['spellsbee'] },\n
    { word: '$2', source: ['latimes'] },\n

*/
