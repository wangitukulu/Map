//Create a map that can be used as a translator for a language of your choice.

let translate_user = prompt("What word would you like to translate") // enter the english word to be translated into french
const trans_new = new Map(); // all the key and value to be set
trans_new.set('word', 'mot');
trans_new.set('peace', 'pai');
trans_new.set('pretty', 'jolie');
trans_new.set('laugh', 'rire');
trans_new.set('fly', 'voler');
trans_new.set('sleep', 'dormir');
trans_new.set('speak', 'parler');
trans_new.set('weep', 'pleurer');
trans_new.set('hungry', 'faim');
trans_new.set('hope', 'espoir');
if (!trans_new.has(translate_user)) {
    translate_user = prompt("the word cannot be translated, please try another word")
}
console.log(trans_new.get(translate_user)); // get the french value 
