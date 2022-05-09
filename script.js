const keyboardLayouts = [
  [
    {
      code: 'Backquote',
      func: false,
      lang: { en: '`', ru: 'ё' },
      width: 'normal',
    },
    {
      code: 'Number1',
      func: false,
      lang: { en: '1', ru: '1' },
      width: 'normal',
    },
    {
      code: 'Number2',
      func: false,
      lang: { en: '2', ru: '2' },
      width: 'normal',
    },
    {
      code: 'Number3',
      func: false,
      lang: { en: '3', ru: '3' },
      width: 'normal',
    },
    {
      code: 'Number4',
      func: false,
      lang: { en: '4', ru: '4' },
      width: 'normal',
    },
    {
      code: 'Number5',
      func: false,
      lang: { en: '5', ru: '5' },
      width: 'normal',
    },
    {
      code: 'Number6',
      func: false,
      lang: { en: '6', ru: '6' },
      width: 'normal',
    },
    {
      code: 'Number7',
      func: false,
      lang: { en: '7', ru: '7' },
      width: 'normal',
    },
    {
      code: 'Number8',
      func: false,
      lang: { en: '8', ru: '8' },
      width: 'normal',
    },
    {
      code: 'Number9',
      func: false,
      lang: { en: '9', ru: '9' },
      width: 'normal',
    },
    {
      code: 'Number0',
      func: false,
      lang: { en: '0', ru: '0' },
      width: 'normal',
    },
    {
      code: 'Minus',
      func: false,
      lang: { en: '-', ru: '-' },
      width: 'normal',
    },
    {
      code: 'Equal',
      func: false,
      lang: { en: '=', ru: '=' },
      width: 'normal',
    },
    {
      code: 'Backspace',
      func: true,
      lang: { en: ' Back', ru: ' Back' },
      width: 'wide',
    },
    {
      code: 'Delete',
      func: true,
      lang: { en: 'Delete', ru: 'Delete' },
      width: 'wide',
    },
  ],
  [
    {
      code: 'Tab',
      func: true,
      lang: { en: 'Tab', ru: 'Tab' },
      width: 'extra-wide',
    },
    {
      code: 'KeyQ',
      func: false,
      lang: { en: 'q', ru: 'й' },
      width: 'normal',
    },
    {
      code: 'KeyW',
      func: false,
      lang: { en: 'w', ru: 'ц' },
      width: 'normal',
    },
    {
      code: 'KeyE',
      func: false,
      lang: { en: 'e', ru: 'у' },
      width: 'normal',
    },
    {
      code: 'KeyR',
      func: false,
      lang: { en: 'r', ru: 'к' },
      width: 'normal',
    },
    {
      code: 'KeyT',
      func: false,
      lang: { en: 't', ru: 'е' },
      width: 'normal',
    },
    {
      code: 'KeyY',
      func: false,
      lang: { en: 'y', ru: 'н' },
      width: 'normal',
    },
    {
      code: 'KeyU',
      func: false,
      lang: { en: 'u', ru: 'г' },
      width: 'normal',
    },
    {
      code: 'KeyI',
      func: false,
      lang: { en: 'i', ru: 'ш' },
      width: 'normal',
    },
    {
      code: 'KeyO',
      func: false,
      lang: { en: 'o', ru: 'щ' },
      width: 'normal',
    },
    {
      code: 'KeyP',
      func: false,
      lang: { en: 'p', ru: 'з' },
      width: 'normal',
    },
    {
      code: 'BracketLeft',
      func: false,
      lang: { en: '[', ru: 'х' },
      width: 'normal',
    },
    {
      code: 'BracketRight',
      func: false,
      lang: { en: ']', ru: 'ъ' },
      width: 'normal',
    },
    {
      code: 'Backslash',
      func: false,
      lang: { en: '\\', ru: '\\' },
      width: 'normal',
    },
  ],
  [
    {
      code: 'CapsLock',
      func: true,
      lang: { en: 'Caps', ru: 'Caps' },
      width: 'extra-wide',
    },
    {
      code: 'KeyA',
      func: false,
      lang: { en: 'a', ru: 'ф' },
      width: 'normal',
    },
    {
      code: 'KeyS',
      func: false,
      lang: { en: 's', ru: 'ы' },
      width: 'normal',
    },
    {
      code: 'KeyD',
      func: false,
      lang: { en: 'd', ru: 'в' },
      width: 'normal',
    },
    {
      code: 'KeyF',
      func: false,
      lang: { en: 'f', ru: 'а' },
      width: 'normal',
    },
    {
      code: 'KeyG',
      func: false,
      lang: { en: 'g', ru: 'п' },
      width: 'normal',
    },
    {
      code: 'KeyH',
      func: false,
      lang: { en: 'h', ru: 'р' },
      width: 'normal',
    },
    {
      code: 'KeyJ',
      func: false,
      lang: { en: 'j', ru: 'о' },
      width: 'normal',
    },
    {
      code: 'KeyK',
      func: false,
      lang: { en: 'k', ru: 'л' },
      width: 'normal',
    },
    {
      code: 'KeyL',
      func: false,
      lang: { en: 'l', ru: 'д' },
      width: 'normal',
    },
    {
      code: 'Semicolon',
      func: false,
      lang: { en: ';', ru: 'ж' },
      width: 'normal',
    },
    {
      code: 'Quote',
      func: false,
      lang: { en: "'", ru: 'э' },
      width: 'normal',
    },
    {
      code: 'Enter',
      func: true,
      lang: { en: 'Enter', ru: 'Enter' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ShiftLeft',
      func: true,
      lang: { en: 'Shift', ru: 'Shift' },
      width: 'extra-wide',
    },
    {
      code: 'KeyZ',
      func: false,
      lang: { en: 'z', ru: 'я' },
      width: 'normal',
    },
    {
      code: 'KeyX',
      func: false,
      lang: { en: 'x', ru: 'ч' },
      width: 'normal',
    },
    {
      code: 'KeyC',
      func: false,
      lang: { en: 'c', ru: 'с' },
      width: 'normal',
    },
    {
      code: 'KeyV',
      func: false,
      lang: { en: 'v', ru: 'м' },
      width: 'normal',
    },
    {
      code: 'KeyB',
      func: false,
      lang: { en: 'b', ru: 'и' },
      width: 'normal',
    },
    {
      code: 'KeyN',
      func: false,
      lang: { en: 'n', ru: 'т' },
      width: 'normal',
    },
    {
      code: 'KeyM',
      func: false,
      lang: { en: 'm', ru: 'ь' },
      width: 'normal',
    },
    {
      code: 'Comma',
      func: false,
      lang: { en: ',', ru: 'б' },
      width: 'normal',
    },
    {
      code: 'Period',
      func: false,
      lang: { en: '.', ru: 'ю' },
      width: 'normal',
    },
    {
      code: 'Slash',
      func: false,
      lang: { en: '/', ru: '.' },
      width: 'normal',
    },
    {
      code: 'ArrowUp',
      func: true,
      lang: { en: '⯅', ru: '⯅' },
      width: 'normal',
    },
    {
      code: 'ShiftRight',
      func: true,
      lang: { en: '⇧ Shift', ru: '⇧ Shift' },
      width: 'extra-wide',
    },
  ],
  [
    {
      code: 'ControlLeft',
      func: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'wide',
    },
    {
      code: 'AltLeft',
      func: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'wide',
    },
    {
      code: 'Space',
      func: false,
      lang: { en: ' ', ru: ' ' },
      width: 'ultra-wide',
    },
    {
      code: 'AltRight',
      func: true,
      lang: { en: 'Alt', ru: 'Alt' },
      width: 'wide',
    },
    {
      code: 'ControlRight',
      func: true,
      lang: { en: 'Ctrl', ru: 'Ctrl' },
      width: 'wide',
    },
    {
      code: 'ArrowLeft',
      func: true,
      lang: { en: '⯇', ru: '⯇' },
      width: 'normal',
    },
    {
      code: 'ArrowDown',
      func: true,
      lang: { en: '⯆', ru: '⯆' },
      width: 'normal',
    },
    {
      code: 'ArrowRight',
      func: true,
      lang: { en: '⯈', ru: '⯈' },
      width: 'normal',
    },
  ],
];

const keyboardKeys = {};
const keyboardFragment = document.createDocumentFragment();

keyboardLayouts.forEach((line) => {
  const keyboardRow = document.createElement('div');
  keyboardRow.classList.add('row');

  line.forEach((key) => {
    keyboardKeys[key.code] = key.lang;
    keyboardKeys[key.code].func = key.func;

    const keyElement = document.createElement('button');

    keyElement.classList.add('key');
    keyElement.classList.add(`key_${key.width}`);
    keyElement.setAttribute('id', key.code);
    keyElement.setAttribute('type', 'button');
    keyElement.textContent = key.lang.en;
    keyboardRow.appendChild(keyElement);
  });

  keyboardFragment.appendChild(keyboardRow);
});


class Keyboard {
  constructor() {
    this.caps = false;
    this.lang = localStorage.getItem('lang') === 'ru' ? 'ru' : 'en';
  }

  init() {

    this.container = document.createElement('main');
    this.title = document.createElement('h1');
    this.text = document.createElement('textarea');
    this.keyboard = document.createElement('div');
    const keyboardRow = document.createElement('div');
    this.description = document.createElement('p');
    this.language = document.createElement('p');


    this.container.classList.add('container');

    this.title.classList.add('title');
    this.title.textContent = 'Virtual keyboard';

    this.text.autofocus = true;
    this.text.classList.add('text');

    this.keyboard.classList.add('keyboard');
    keyboardRow.classList.add('row');

    this.description.classList.add('subtitle');
    this.description.textContent =
      'To switch ENG/РУС input methods, press Ctrl+Alt on Windows/Linux or Cmd+Alt on Mac.';

    this.language.classList.add('subtitle');
    this.language.textContent =

      'This keyboard was developed and tested in Microsoft Windows.';
    // Add to DOM
    this.keyboard.appendChild(keyboardFragment);
    this.showLanguage(this.lang);

    this.container.appendChild(this.title);
    this.container.appendChild(this.text);
    this.container.appendChild(this.keyboard);
    this.container.appendChild(this.description);
    this.container.appendChild(this.language);

    document.body.appendChild(this.container);

    this.createListeners();
  }

  createListeners() {
    this.text.addEventListener('blur', () => {
      setTimeout(() => {
        this.text.focus();
      }, 0);
    });

    document.addEventListener('keydown', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code === 'CapsLock' && !e.repeat) {
        e.preventDefault();
        this.caps = !this.caps;

        const addRemove = this.caps ? 'add' : 'remove';
        key.classList[addRemove]('active');

        this.switchCaps(e.shiftKey);
      } else {
        key.classList.add('active');

        if ((e.ctrlKey || e.metaKey) && e.altKey && !e.repeat) {
          e.preventDefault();
          this.lang = this.lang === 'ru' ? 'en' : 'ru';
          localStorage.setItem('lang', this.lang);
          this.showLanguage(this.lang, e.shiftKey);
        } else if (!keyboardKeys[e.code].func) {
          e.preventDefault();
          this.insertText(key.textContent);
        } else if (e.key === 'Shift' && !e.repeat) {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        } else if (e.code === 'Tab') {
          e.preventDefault();
          this.insertText('\t');
        } else if (e.code === 'Enter') {
          e.preventDefault();
          this.insertText('\n');
        } else if (e.code === 'Backspace') {
          e.preventDefault();
          this.pressBackspace();
        } else if (e.code === 'Delete') {
          e.preventDefault();
          this.pressDelete();
        } else if (e.code === 'ArrowUp' && !e.isTrusted) {
          this.arrowUp();
        } else if (e.code === 'ArrowDown' && !e.isTrusted) {
          this.arrowDown();
        } else if (e.code === 'ArrowLeft' && !e.isTrusted) {
          this.arrowLeft();
        } else if (e.code === 'ArrowRight' && !e.isTrusted) {
          this.arrowRight();
        }
      }
    });

    document.addEventListener('keyup', (e) => {
      e.stopImmediatePropagation();

      const key = document.getElementById(e.code);
      if (!key) {
        e.preventDefault();
        return;
      }

      if (e.code !== 'CapsLock') {
        key.classList.remove('active');
        if (e.key === 'Shift') {
          e.preventDefault();
          this.switchCaps(e.shiftKey);
        }
      }
    });

    this.keyboard.addEventListener('click', (e) => {
      this.text.focus();
      const eventKeyDown = new KeyboardEvent('keydown', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyDown);

      this.text.focus();
      const eventKeyUp = new KeyboardEvent('keyup', {
        bubbles: true,
        cancelable: true,
        code: e.target.id,
        view: window,
      });
      document.dispatchEvent(eventKeyUp);
    });
  }

  arrowUp() {
    this.text.selectionStart = 0;
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowDown() {
    this.text.selectionEnd = this.text.textLength;
    this.text.selectionStart = this.text.selectionEnd;
  }

  arrowLeft() {
    this.text.selectionStart = Math.max(0, this.text.selectionStart - 1);
    this.text.selectionEnd = this.text.selectionStart;
  }

  arrowRight() {
    this.text.selectionStart = Math.min(
      this.text.textLength,
      this.text.selectionEnd + 1,
    );
    this.text.selectionEnd = this.text.selectionStart;
  }

  insertText(chars) {
    const cursorAt = this.text.selectionStart;

    this.text.value =
      this.text.value.slice(0, cursorAt) +
      chars +
      this.text.value.slice(this.text.selectionEnd);

    this.text.selectionStart = cursorAt + chars.length;
    this.text.selectionEnd = this.text.selectionStart;
  }

  pressBackspace() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = Math.max(0, this.text.selectionStart - 1);

      this.text.value =
        this.text.value.slice(0, cursorAt) +
        this.text.value.slice(this.text.selectionEnd);

      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  pressDelete() {
    if (this.text.selectionStart !== this.text.selectionEnd) {
      this.insertText('');
    } else {
      const cursorAt = this.text.selectionStart;

      this.text.value =
        this.text.value.slice(0, cursorAt) +
        this.text.value.slice(cursorAt + 1);

      this.text.selectionStart = cursorAt;
      this.text.selectionEnd = this.text.selectionStart;
    }
  }

  showLanguage(lang, shift = false) {
    Array.from(this.keyboard.querySelectorAll('.key')).forEach(
      (e) => {
        e.textContent = keyboardKeys[e.id][lang];
      },
    );

    this.switchCaps(shift);
  }

  switchCaps(shiftKey) {
    const showUpperCase = (this.caps && !shiftKey) || (!this.caps && shiftKey);
    const toCase = showUpperCase ? 'toUpperCase' : 'toLowerCase';
    Array.from(this.keyboard.querySelectorAll('.key')).forEach(
      (e) => {
        if (!keyboardKeys[e.id].func) {
          if (e.id === 'Backquote' && this.lang === 'en') {
            e.textContent = shiftKey ? '~' : '`';
          } else if (e.id === 'Minus' && this.lang === 'en') {
            e.textContent = shiftKey ? '_' : '-';
          } else if (e.id === 'Equal' && this.lang === 'en') {
            e.textContent = shiftKey ? '+' : '=';
          } else if (e.id === 'BracketLeft' && this.lang === 'en') {
            e.textContent = shiftKey ? '{' : '[';
          } else if (e.id === 'BracketRight' && this.lang === 'en') {
            e.textContent = shiftKey ? '}' : ']';
          } else if (e.id === 'Backslash' && this.lang === 'en') {
            e.textContent = shiftKey ? '|' : '\\';
          } else if (e.id === 'Semicolon' && this.lang === 'en') {
            e.textContent = shiftKey ? ':' : ';';
          } else if (e.id === 'Quote' && this.lang === 'en') {
            e.textContent = shiftKey ? '"' : "'";
          } else if (e.id === 'Comma' && this.lang === 'en') {
            e.textContent = shiftKey ? '<' : ',';
          } else if (e.id === 'Period' && this.lang === 'en') {
            e.textContent = shiftKey ? '>' : '.';
          } else if (e.id === 'Slash' && this.lang === 'en') {
            e.textContent = shiftKey ? '?' : '/';
          } else if (e.id === 'Slash' && this.lang === 'ru') {
            e.textContent = shiftKey ? ',' : '.';
          } else {
            e.textContent = e.textContent[toCase]();
          }
        }
      },
    );
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const keyboard = new Keyboard();
  keyboard.init();
});
