// Typing Text experience on the front page

const words = ['app experience', 'web experience', 'user experience', 'experience'];
const base_typing_delay = 15; // time delay between each character being typed
const word_delay = 800; // time delay before moving on to the next word

const typing_text = document.getElementById('typing-text');
let current_word_index = 0;
let current_char_index = 0;
let is_deleting = false;

function type() {
    const current_word = words[current_word_index];
    // Have to calculate word length to make sure the typing delay doesn't seem faster when the words are shorter
    const typing_delay = current_char_index === current_word.length ? stopDelay : base_typing_delay * (current_word.length - current_char_index);
  
  if (!is_deleting) {
    typing_text.innerHTML = current_word.substring(0, current_char_index + 1);
    current_char_index++;
    
    if (current_word.substring(0, current_char_index) === 'experience') {
        // Stop typing if the word "word" has been typed
        return;
    }

    if (current_char_index === current_word.length) {
        is_deleting = true;
        
        setTimeout(() => {
        current_char_index--;
        type();
        }, word_delay);
    }
    } else {
    typing_text.innerHTML = current_word.substring(0, current_char_index);
    current_char_index--;

    if (current_char_index === 0) {
        is_deleting = false;
        current_word_index++;
        if (current_word_index === words.length) {
        current_word_index = 0;
        }
    }
    }

    setTimeout(type, typing_delay);
}

type();
