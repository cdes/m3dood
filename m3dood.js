/**
 * @returns {(count: number) => string} a curried function that takes a count and returns it with the proper "m3dood" word. e.g. "3 كتب".
 * @summary Provides the grammatically correct "m3dood" for a number.
 * @description Provides a function that returns the gramatically "m3dood" for a number.
 * Usage `var books = m3dood("كتاب", "كتابان", "كتب"); books(2); => "كتابان"
 * @param {string} singular - The singular noun of the entity, e.g. "كتاب"
 * @param {string} dual - The dual noun of the entity, e.g. "كتابان"
 * @param {string} plural - The plural noun of the entity, e.g. "كتب"
 * @param {boolean} [isFemale=false] - We will try our best to guess, but you can force the noun to be handled as female.
 */

function m3dood (singular, dual, plural, isFemale) {
  return function (count) {
    var one = 'واحد';
          
    var words = singular.split(' ');
    var firstWord   = words[0];
    var firstWord = firstWord.replace(/أ|إ|آ/gi, 'ا');
    var last       = firstWord[firstWord.length - 1];
    var beforeLast = firstWord[firstWord.length - 2];  

    if(isFemale) {
      one = 'واحدة';
    } else if (last == 'ة' || last == 'ه' || last == 'ى' || last == 'ا' 
      || (last == 'ء' && beforeLast == 'ا')
    ) {
      one = 'واحدة';
    } else if (firstWord.match(/^[اإ].{2}ا.$/u) 
      || firstWord.match(/^[إا].ت.ا.+$/u)
    ) {
      // الأسماء على وزن إفتعال و إفعال
      one = 'واحدة';
    }

    function between(number, first, last) {
        return number > first && number < last
    }

    function getProperM3dood(count) {
      if (count === 0) {
        return `دون ${plural}`
      }
      else if (count === 1) {
        return `${singular} ${one}`
      }
      else if (count === 2) {
        return dual
      }
      else if (between(count, 2, 11)) {
        return `${count} ${plural}`
      }
      else if (between(count, 10, 101)) {
        return `${count} ${singular}`
      }
      else if (count % 100 === 1 || count % 100 === 2 ) {
        return `${count} من ال${plural}`
      }
      else if (between(count % 100, 2, 11)) {
        return `${count} ${plural}`
      }
      else if (count % 100 > 10) {
        return `${count} ${singular}`
      }
    }

    return getProperM3dood(count);
  }
}

var books = m3dood();

module.exports = m3dood;