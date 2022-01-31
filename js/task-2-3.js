const findLongestWord = function(string) {
    let words = string.split(' ');
     let longestWord = words[0]
    for (let i = 0; i < words.length; i += 1) {
        // console.log(words[i].length);
       
        if (longestWord.length < words[i].length) {
            longestWord = words[i]
            // console.log(longestWord);
           
        }
    }
    return console.log(longestWord);
};
// findLongestWord('Google do a roll')
// findLongestWord('The quick brown fox jumped over the lazy dog')
// findLongestWord('May the force be with you')
findLongestWord('луопард пошел охотиться на виталикадогналипокусал и зубы обломал виталику дизоксорибонуклеиновая кислота ')