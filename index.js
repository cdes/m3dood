/**
 * @returns the count plus the proper "m3dood" word. e.g. "3 كتب".
 * @description Provides the grammatically correct "m3dood" for a number.
 * - دون كتب
 * - كتاب واحد
 * - كتابان
 * - 3 كتب
 * - 9 كتب
 * - 10 كتب
 * - 11 كتاب
 * - 12 كتاب
 * - 13 كتاب
 * - 60 كتاب
 * - 99 كتاب
 * - 100 كتاب
 * - 101 من الكتب
 * - 1001 من الكتب
 * - 9045 من الكتب
 * @param {number} count - The count of your entity.
 * @param {string} singular - The singular noun of the entity, e.g. "كتاب"
 * @param {string} dual - The dual noun of the entity, e.g. "كتابان"
 * @param {string} plural - The plural noun of the entity, e.g. "كتب"
 * @param {boolean} [isFemale=false] - We will try our best to guess, but you can force the noun to be handled as female.
 */

function m3dood (count, singular, dual, plural, isFemale) {
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
    else if (count > 2 && count < 11) {
      return `${count} ${plural}`
    }
    else if (count > 10 && count < 101) {
      return `${count} ${singular}`
    }
    else if (count > 100) {
      return `${count} من ال${plural}`
    }
  }

  return getProperM3dood(count);

}

m3dood()

module.exports = m3dood;