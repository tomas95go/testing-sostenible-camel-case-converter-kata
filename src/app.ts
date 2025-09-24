export function camelCaseConverter(word: string) {
    const noWordIsGiven = word.length === 0;
    if(noWordIsGiven) {
        return '->';
    }

    const wordIncludesSpaces = word.includes(' ');
    const wordIncludesUnderscores = word.includes('-');
    const wordIncludesDashes = word.includes('-');

    const wordIncludesOnlySpaces = wordIncludesSpaces && !wordIncludesUnderscores && !wordIncludesDashes;
    const wordIncludesOnlyDashes = wordIncludesDashes && !wordIncludesUnderscores && !wordIncludesSpaces;
    const wordIncludesOnlyUnderscores = wordIncludesUnderscores && !wordIncludesDashes && !wordIncludesSpaces;

    const wordIncludesUnderscoresAndDashes = wordIncludesDashes && wordIncludesUnderscores;

    let splittedWord: string[];

    if(wordIncludesOnlySpaces) {
        splittedWord = word.split(' ');
    }

    if(wordIncludesUnderscoresAndDashes) {
        splittedWord = word.split('_').join('').split('-');
    }

    if(splittedWord.length > 1) {
        const joinedWord = splittedWord.join('');
        return `${word} -> ${joinedWord}`;
    }

    const givenWordFirstLetter = splittedWord[0];
    const givenWordFirstLetterLowerCase = splittedWord[0].toLowerCase();

    const givenWordFirstLetterCharCode = givenWordFirstLetter.charCodeAt(0);
    const givenWordFirstLetterCharCoderLowerCase = givenWordFirstLetterLowerCase.charCodeAt(0);

    if(givenWordFirstLetterCharCode !== givenWordFirstLetterCharCoderLowerCase) {
        return `${word} -> ${word}`;
    }

    //return `${word} -> ${word[0].toUpperCase()}`;
}