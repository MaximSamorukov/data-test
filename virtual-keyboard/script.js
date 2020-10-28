const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: []
  },

  specialKeys: {
    originalKeys: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", ",", ".", "?"],
    shiftKeys: ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "/"]
  },

  sounds: {
    english: {
      button: "./assets/sound/bp_en.wav",
      backspace: "./assets/sound/backspace_en.wav",
      enter: "./assets/sound/enter_en.wav",
      shift: "./assets/sound/shift_en.wav",
      space: "./assets/sound/space_en.wav",
      en_ru: "./assets/sound/en_ru_en.wav",
      done: "./assets/sound/done_ru.wav",
    },
    russian: {
      button: "./assets/sound/bp_ru.wav",
      backspace: "./assets/sound/backspace_ru.wav",
      enter: "./assets/sound/enter_ru.wav",
      shift: "./assets/sound/shift_ru.wav",
      space: "./assets/sound/space_ru.wav",
      en_ru: "./assets/sound/en_ru_ru.wav",
      done: "./assets/sound/done_ru.wav",
    },
  },
  alphabet: {
    ru: ["й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
      "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
      "done", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю"],
    current: 'english'
  },

  eventHandlers: {
    oninput: null,
    onclose: null
  },

  keyNamesLib: {
    space_bar: " ",
    keyboard_capslock: "capslock",
    keyboard_return: "enter"
  },

  properties: {
    value: "",
    capsLock: false,
    shift: false
  },
  // add sound while keypress
  makeSound(type = 'button') {
    // console.log(type);
    if (type === " ") {
      type = "space";
    }
    type = Object.keys(this.sounds.english).includes(type.toLowerCase()) ? type : 'button';
    // console.log(type);
    const language = this.alphabet.current;
    const sound = new Audio(this.sounds[language][type.toLowerCase()]);

    // console.log(sound);
    sound.play();

  },

  getKeyName(name) {
    const returnValue = Object.keys(this.keyNamesLib).includes(name) ? this.keyNamesLib[name] : name;
    return returnValue;
  },

  toggleKeyboardLanguage(language) {
    this.alphabet.current = language; //this.alphabet.current === 'russian' ? 'english' : 'russian';
    const fragment = this._createKeys(language);
    // this.elements.keys = fragment;
    const container = document.querySelector('.keyboard__keys');
    container.innerHTML = '';
    container.appendChild(fragment);
    const newKeys = container.querySelectorAll(".keyboard__key");
    this.elements.keys = newKeys;
    this.elements.keysContainer = container;
  },

  getCurrentLanguage(key) {
    let current = 'english';
    if (this.alphabet.ru.includes(key)) {
      return 'russian';
    }
    return current;
  },

  init(language = 'english') {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard", "keyboard--hidden");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys(language));
    this.elements.keys = this.elements.keysContainer.querySelectorAll(".keyboard__key");

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    // Add highlight to buttons 
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener('keydown', (e) => {
        const { key } = e;
        let currentLanguage = this.getCurrentLanguage(e.key);
        if (currentLanguage !== this.alphabet.current) {
          this.toggleKeyboardLanguage(currentLanguage);
        };
        this.makeSound(key);
        const activeElement = this.elements.keys[Object.keys(this.elements.keys).filter((element) => {
          // console.log(this.elements.keys[element].textContent);
          return this.getKeyName(this.elements.keys[element].textContent) === key.toLowerCase();
        })[0]];
        // console.log(activeElement);
        activeElement.classList.add("keyboard__key-pressed");
      });
      element.addEventListener('keyup', ({ key }) => {
        const activeElement = this.elements.keys[Object.keys(this.elements.keys).filter((element) => {

          return this.getKeyName(this.elements.keys[element].textContent) === key.toLowerCase();
        })[0]];
        activeElement.classList.remove("keyboard__key-pressed");
      });
    })
    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll(".use-keyboard-input").forEach(element => {
      element.addEventListener("focus", () => {
        this.open(element.value, currentValue => {
          element.value = currentValue;
        });
      });
    });
  },

  _createKeys(type = 'english') {
    const fragment = document.createDocumentFragment();
    const brackePointsEn = ["backspace", "p", "enter", "?"];
    const brackePointsRu = ["backspace", "ъ", "enter", "?"];
    let currentBrackePointMatrix = brackePointsEn;
    const keyLayoutEn = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
      "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
      "done", "shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?",
      "space", "en / ru", "<-", "->"
    ];
    const keyLayoutRus = [
      "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
      "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
      "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
      "done", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", ".", "?",
      "space", "en / ru", "<-", "->"
    ];
    let keyLayout = keyLayoutEn;
    // toggleLanguage
    if (type === 'russian') {
      keyLayout = keyLayoutRus;
      currentBrackePointMatrix = brackePointsRu;
    }
    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    keyLayout.forEach(key => {
      const keyElement = document.createElement("button");
      const insertLineBreak = currentBrackePointMatrix.indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");

          keyElement.addEventListener("click", () => {
            this.makeSound('backspace');
            this.properties.value = this.properties.value.substring(0, this.properties.value.length - 1);
            this._triggerEvent("oninput");
          });

          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          if (this.properties.capsLock) {
            keyElement.classList.add("keyboard__key--active");
          }
          keyElement.innerHTML = createIconHTML("keyboard_capslock");

          keyElement.addEventListener("click", () => {
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            this.makeSound(key);
          });

          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");

          keyElement.addEventListener("click", () => {
            this.makeSound(key);
            this.properties.value += "\n";
            this._triggerEvent("oninput");
          });

          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");

          keyElement.addEventListener("click", () => {
            this.properties.value += " ";
            this._triggerEvent("oninput");
            this.makeSound(key);
          });

          break;

        case "done":
          keyElement.classList.add("keyboard__key--dark");
          keyElement.innerHTML = createIconHTML("check_circle");

          keyElement.addEventListener("click", () => {
            this.close();
            this._triggerEvent("onclose");
            this.makeSound(key);
          });

          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
          keyElement.textContent = key.toLowerCase();
          if (this.properties.shift) {
            keyElement.classList.add("keyboard__key--active");
          }

          keyElement.addEventListener("click", () => {
            this.makeSound(key);
            this._toggleShift();
            keyElement.classList.toggle("keyboard__key--active", this.properties.shift);
          });

          break;

        case "en / ru":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.textContent = key.toLowerCase();
          if (this.alphabet.current === 'english') {
            keyElement.classList.add("english");
          } else {
            keyElement.classList.add("russian");
          }
          keyElement.addEventListener('click', () => {
            const currentLanguage = this.alphabet.current;
            const newLanguage = currentLanguage === 'russian' ? 'english' : 'russian';
            this.toggleKeyboardLanguage(newLanguage);
            this.makeSound('en_ru');
          })
          break;

        case "->":
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", (e) => {
            // console.log(e);
            const textArea = document.querySelector(".use-keyboard-input");
            const startPosition = textArea.selectionStart;
            const endPosition = textArea.selectionEnd;
            // console.log(`ss: ${startPosition}; sE: ${endPosition}`);
            textArea.focus();
            textArea.selectionEnd += 1;
            textArea.selectionStart = textArea.selectionEnd;
            this.makeSound();
          });

          break;

        case "<-":
          keyElement.textContent = key.toLowerCase();

          keyElement.addEventListener("click", (e) => {
            const textArea = document.querySelector(".use-keyboard-input");
            const startPosition = textArea.selectionStart;
            const endPosition = textArea.selectionEnd;

            // console.log(`ss: ${startPosition}; sE: ${endPosition}`);
            if (startPosition === 0 || endPosition === 0) {
              this.makeSound();
              textArea.focus();
              return;
            };
            textArea.focus();
            textArea.selectionEnd -= 1;
            textArea.selectionStart = textArea.selectionEnd;
            this.makeSound();
          });

          break;

        default:
          keyElement.textContent = this.properties.capsLock !== this.properties.shift ? key.toUpperCase() : key.toLowerCase();
          keyElement.addEventListener("click", (e) => {
            this.makeSound();
            this.properties.value += this.properties.capsLock ? e.target.textContent.toUpperCase() : e.target.textContent.toLowerCase();
            this._triggerEvent("oninput");
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    return fragment;
  },

  _triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] == "function") {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  _toggleCapsLock() {
    this.properties.capsLock = !this.properties.capsLock;
    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        // key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        key.textContent = this.properties.capsLock !== this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        if (key.textContent.toLowerCase() === "en / ru") {
          key.textContent = "en / ru";
        }
      }
    }
  },

  _toggleShift() {
    this.properties.shift = !this.properties.shift;
    if (this.properties.shift) {
      for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
          if (this.specialKeys.originalKeys.includes(key.textContent)) {
            key.textContent = this.specialKeys.shiftKeys[this.specialKeys.originalKeys.indexOf(key.textContent)];
          } else {
            key.textContent = this.properties.capsLock !== this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            if (key.textContent.toLowerCase() === "en / ru") {
              key.textContent = "en / ru";
            }
          }
        }
      }
    } else {
      for (const key of this.elements.keys) {
        if (key.childElementCount === 0) {
          if (this.specialKeys.shiftKeys.includes(key.textContent)) {
            key.textContent = this.specialKeys.originalKeys[this.specialKeys.shiftKeys.indexOf(key.textContent)];
          } else {
            key.textContent = this.properties.capsLock !== this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
            if (key.textContent.toLowerCase() === "en / ru") {
              key.textContent = "en / ru";
            }
          }
        }
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove("keyboard--hidden");
  },

  close() {
    this.properties.value = "";
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add("keyboard--hidden");
  }
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});