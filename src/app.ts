export function camelCaseConverter(word: string) {
    const noWordIsGiven = word.length === 0;
    if(noWordIsGiven) {
        return '->';
    }
    const splittedWord = word.split(' ');

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

}