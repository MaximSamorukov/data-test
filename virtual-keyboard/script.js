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
        shift: false,
        sound: false,
        voice: false,
        recognition: "",
        cursor: {
            start: null,
            end: null
        },
    },
    // add sound while keypress
    makeSound(type = 'button') {
        // console.log(type);
        if (!this.properties.sound) {
            return;
        }
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
    // Creates HTML for an icon
    createIconHTML(icon_name) {
        return `<i class="material-icons">${icon_name}</i>`;
    },

    capsLockClick(keyElement, key) {

        keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
        if (this.properties.capsLock) {
            keyElement.classList.add("keyboard__key--active");
        }
        keyElement.innerHTML = this.createIconHTML("keyboard_capslock");

        keyElement.addEventListener("click", () => {
            document.querySelector(".use-keyboard-input").focus();
            this._toggleCapsLock();
            keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
            this.makeSound(key);
        });
    },

    getKeyName(name) {
        const returnValue = Object.keys(this.keyNamesLib).includes(name) ? this.keyNamesLib[name] : name;
        return returnValue;
    },

    toggleKeyboardLanguage(language) {
        this.alphabet.current = language; //this.alphabet.current === 'russian' ? 'english' : 'russian';

        if (this.properties.voice === true) {
            // console.log(this.properties.recognition);
            this.properties.recognition.stop();
            // console.log(this.properties.recognition);
            this.properties.recognition.lang = this.alphabet.current === 'english' ? "en-US" : "ru-RU";
            // this.properties.recognition.start();
            // console.log(this.properties.recognition);
            // console.log(this.properties.voice);
        }
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
                const elem = document.querySelectorAll('.keyboard__key--activatable');
                const wideElements = document.querySelectorAll('.keyboard__key--wide');
                const { key } = e;
                // console.log(key);
                elem.forEach((item) => {
                    // console.log(item.innerText);
                    if (item.innerText === "keyboard_capslock" && key === "CapsLock") {
                        console.log(this.properties.capsLock);
                        // if (this.properties.capsLock) {
                        //   item.classList.add("keyboard__key--active");
                        // }
                        this._toggleCapsLock();
                        item.classList.toggle("keyboard__key--active", this.properties.capsLock);
                        this.makeSound('caps');
                        return;
                    }
                    if (item.innerText === 'shift' && key === "Shift") {
                        console.log('shift');
                        this.makeSound('shift');
                        this._toggleShift();
                        item.classList.toggle("keyboard__key--active", this.properties.shift);

                        return;
                    };

                });
                wideElements.forEach((item) => {
                    // console.log(key);
                    if (item.innerText === "keyboard_return" && key === "Enter") {
                        const textArea = document.querySelector(".use-keyboard-input");
                        console.log(item);
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        this.properties.cursor.start += 1;
                        this.properties.cursor.end += 1;
                        console.log(startPosition);
                        console.log(endPosition);
                        // console.log(this.properties.value.length);

                        // const stringBefore = this.properties.value.slice(0, startPosition);
                        // const stringAfter = this.properties.value.slice(startPosition, this.properties.value.length);
                        // const str = "\n";
                        // console.log(stringBefore);
                        // console.log(stringAfter);
                        // this.properties.value = `${stringBefore}${str}${stringAfter}`;

                        this.makeSound(key);
                        this._triggerEvent("oninput");
                        return;
                    };
                    return;
                })
                try {
                    const { key } = e;
                    const textArea = document.querySelector(".use-keyboard-input");
                    const start = textArea.selectionStart;
                    const end = textArea.selectionEnd;

                    if (key.length === 1) {
                        // this.properties.value += key;
                        // console.log(`keydown: ${this.properties.value}`);
                        // console.log(endPosition);
                        // console.log(this.properties.value);
                        this.properties.cursor.start = start + 1;
                        this.properties.cursor.end = end + 1;
                    }
                    for (let item of this.elements.keys.entries()) {
                        if (item[1].innerText === "keyboard_capslock" && key === "CapsLock") {
                            this.capsLockClick(item[1], "caps");
                        }
                    }

                    let currentLanguage = this.getCurrentLanguage(key);
                    // console.log(key);
                    // console.log(currentLanguage);
                    // console.log(this.alphabet.current);
                    if (currentLanguage !== this.alphabet.current && key.length === 1 && key !== " ") {
                        this.toggleKeyboardLanguage(currentLanguage);
                    };
                    this.makeSound(key);
                    const activeElement = this.elements.keys[Object.keys(this.elements.keys).filter((element) => {
                        // console.log(this.elements.keys[element].textContent);
                        return this.getKeyName(this.elements.keys[element].textContent) === key.toLowerCase();
                    })[0]];
                    // console.log(activeElement);
                    activeElement.classList.add("keyboard__key-pressed");
                    // this._triggerEvent("oninput");
                } catch (error) {
                    if (error) {
                        element.focus();
                    }
                }
            });
            element.addEventListener('keyup', ({ key }) => {
                const textArea = document.querySelector(".use-keyboard-input");
                // console.log(textArea.value);
                this.properties.value = textArea.value;
                const start = textArea.selectionStart;
                const end = textArea.selectionEnd;
                const activeElement = this.elements.keys[Object.keys(this.elements.keys).filter((element) => {

                    return this.getKeyName(this.elements.keys[element].textContent) === key.toLowerCase();
                })[0]];
                try {
                    // console.log(activeElement);
                    activeElement.classList.remove("keyboard__key-pressed");
                } catch (error) {
                    console.log(error);
                }
            });
        })
        // Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll(".use-keyboard-input").forEach(element => {
            element.addEventListener("focus", () => {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                });
            });
            element.addEventListener("click", (e) => {
                // console.log(e.target);
                const startPosition = element.selectionStart;
                const endPosition = element.selectionEnd;
                // console.log(startPosition);
                // console.log(startPosition);
                this.properties.cursor.start = startPosition;
                this.properties.cursor.end = endPosition;
            })
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
            "space", "en / ru", "<-", "->", "sound", "voice"
        ];
        const keyLayoutRus = [
            "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
            "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
            "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
            "done", "shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", ".", "?",
            "space", "en / ru", "<-", "->", "sound", "voice"
        ];
        let keyLayout = keyLayoutEn;
        // toggleLanguage
        if (type === 'russian') {
            keyLayout = keyLayoutRus;
            currentBrackePointMatrix = brackePointsRu;
        }

        keyLayout.forEach(key => {
            const keyElement = document.createElement("button");
            const insertLineBreak = currentBrackePointMatrix.indexOf(key) !== -1;

            // Add attributes/classes
            keyElement.setAttribute("type", "button");
            keyElement.classList.add("keyboard__key");

            switch (key) {
                case "backspace":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = this.createIconHTML("backspace");

                    keyElement.addEventListener("click", () => {
                        document.querySelector(".use-keyboard-input").focus();
                        this.makeSound('backspace');
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        this.properties.cursor.start = startPosition - 1 > 0 ? startPosition - 1 : 0;
                        this.properties.cursor.end = endPosition - 1 > 0 ? endPosition - 1 : 0;
                        const stringBefore = this.properties.value.slice(0, startPosition - 1);
                        const stringAfter = this.properties.value.slice(startPosition, this.properties.value.length);
                        this.properties.value = `${stringBefore}${stringAfter}`;
                        textArea.value = this.properties.value;
                        textArea.selectionStart = this.properties.cursor.start;
                        textArea.selectionEnd = this.properties.cursor.end;
                    });

                    break;
                case "voice":
                    keyElement.classList.add("keyboard__key--wide");

                    this.properties.recognition = new webkitSpeechRecognition() || new SpeechRecognition();
                    if (this.properties.voice) {
                        keyElement.classList.remove("voice-on");
                        keyElement.classList.add("voice-off")
                    } else {
                        keyElement.classList.add("voice-on");
                        keyElement.classList.remove("voice-off")
                    };
                    keyElement.addEventListener("click", (e) => {
                        this.makeSound('backspace');
                        document.querySelector(".use-keyboard-input").focus();
                        const className = this.properties.voice ? "voice-off" : "voice-on";
                        const newClassName = this.properties.voice ? "voice-on" : "voice-off";
                        e.target.classList.remove(className);
                        e.target.classList.add(newClassName);
                        this._toggleVoiceRecognition(this);
                    });
                    break;

                case "sound":
                    keyElement.classList.add("keyboard__key--wide");
                    if (this.properties.sound) {
                        keyElement.classList.remove("sound-on");
                        keyElement.classList.add("sound-off")
                    } else {
                        keyElement.classList.add("sound-on");
                        keyElement.classList.remove("sound-off")
                    };
                    keyElement.addEventListener("click", (e) => {
                        this.makeSound('backspace');
                        document.querySelector(".use-keyboard-input").focus();
                        const className = this.properties.sound ? "sound-off" : "sound-on";
                        const newClassName = this.properties.sound ? "sound-on" : "sound-off";
                        e.target.classList.remove(className);
                        e.target.classList.add(newClassName);
                        this._toggleSoundPlay();
                    });
                    break;


                case "caps":
                    this.capsLockClick(keyElement, key);
                    break;

                case "enter":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = this.createIconHTML("keyboard_return");

                    keyElement.addEventListener("click", () => {
                        document.querySelector(".use-keyboard-input").focus();
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        this.properties.cursor.start += 1;
                        this.properties.cursor.end += 1;
                        const stringBefore = this.properties.value.slice(0, startPosition);
                        const stringAfter = this.properties.value.slice(startPosition, this.properties.value.length);
                        const str = "\n";
                        this.properties.value = `${stringBefore}${str}${stringAfter}`;
                        this.makeSound(key);
                        this._triggerEvent("oninput");
                        textArea.selectionStart = this.properties.cursor.start;
                        textArea.selectionEnd = this.properties.cursor.end;
                    });
                    break;

                case "space":
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = this.createIconHTML("space_bar");
                    keyElement.addEventListener("click", () => {
                        document.querySelector(".use-keyboard-input").focus();
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        this.properties.cursor.start += 1;
                        this.properties.cursor.end += 1;
                        const stringBefore = this.properties.value.slice(0, startPosition);
                        const stringAfter = this.properties.value.slice(startPosition, this.properties.value.length);
                        const str = " ";
                        this.properties.value = `${stringBefore}${str}${stringAfter}`;
                        this._triggerEvent("oninput");
                        this.makeSound(key);
                    });
                    break;

                case "done":
                    keyElement.classList.add("keyboard__key--dark");
                    keyElement.innerHTML = this.createIconHTML("check_circle");

                    keyElement.addEventListener("click", () => {
                        this.close();
                        this._triggerEvent("onclose");
                        this.makeSound(key);
                        this.properties.recognition.stop();
                    });

                    break;

                case "shift":
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.textContent = key.toLowerCase();
                    if (this.properties.shift) {
                        keyElement.classList.add("keyboard__key--active");
                    }

                    keyElement.addEventListener("click", () => {
                        document.querySelector(".use-keyboard-input").focus();
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
                        document.querySelector(".use-keyboard-input").focus();
                        const currentLanguage = this.alphabet.current;
                        const newLanguage = currentLanguage === 'russian' ? 'english' : 'russian';
                        this.toggleKeyboardLanguage(newLanguage);
                        this.makeSound('en_ru');
                    })
                    break;

                case "->":
                    keyElement.textContent = key.toLowerCase();

                    keyElement.addEventListener("click", (e) => {
                        document.querySelector(".use-keyboard-input").focus();
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        textArea.focus();
                        textArea.selectionEnd += 1;
                        textArea.selectionStart = textArea.selectionEnd;
                        this.properties.cursor.start = textArea.selectionStart;
                        this.properties.cursor.end = textArea.selectionEnd;
                        this.makeSound();
                    });
                    break;

                case "<-":
                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener("click", (e) => {
                        document.querySelector(".use-keyboard-input").focus();
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        if (startPosition === 0 || endPosition === 0) {
                            this.makeSound();
                            textArea.focus();
                            return;
                        };
                        textArea.focus();
                        textArea.selectionEnd -= 1;
                        textArea.selectionStart = textArea.selectionEnd;
                        this.properties.cursor.start = textArea.selectionStart;
                        this.properties.cursor.end = textArea.selectionEnd;
                        this.makeSound();
                    });
                    break;

                default:
                    keyElement.textContent = this.properties.capsLock !== this.properties.shift ? key.toUpperCase() : key.toLowerCase();
                    keyElement.addEventListener("click", (e) => {
                        this.makeSound();
                        document.querySelector(".use-keyboard-input").focus();
                        const textArea = document.querySelector(".use-keyboard-input");
                        const startPosition = this.properties.cursor.start;
                        const endPosition = this.properties.cursor.end;
                        this.properties.cursor.start += 1;
                        this.properties.cursor.end += 1;
                        const stringBefore = this.properties.value.slice(0, startPosition);
                        const stringAfter = this.properties.value.slice(startPosition, this.properties.value.length);
                        const str = this.properties.capsLock ? e.target.textContent.toUpperCase() : e.target.textContent.toLowerCase();
                        this.properties.value = `${stringBefore}${str}${stringAfter}`;
                        this._triggerEvent("oninput");
                        textArea.selectionStart = this.properties.cursor.start;
                        textArea.selectionEnd = this.properties.cursor.end;
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

    _toggleSoundPlay() {
        this.properties.sound = this.properties.sound ? false : true;
    },

    _toggleVoiceRecognition(context) {
        this.properties.voice = this.properties.voice ? false : true;
        if (this.properties.voice) {
            console.log("it's true");
            this.properties.recognition.lang = this.alphabet.current === 'english' ? "en-US" : "ru-RU";
            this.properties.recognition.interimResults = false;
            this.properties.recognition.maxAlternatives = 1;
            this.properties.recognition.continuous = true;
            this.properties.recognition.start();
            this.properties.recognition.onend = function (e) {
                if (document.querySelector(".voice-off") !== null) {
                    const element = document.querySelector(".voice-off");
                    element.classList.add("voice-on");
                    element.classList.remove("voice-off");
                    context.properties.voice = false;
                }
            };
            this.properties.recognition.onresult = function (event) {
                const length = event.results.length;
                let text = event.results[length - 1][0].transcript;
                const blackboard = document.querySelector(".use-keyboard-input");
                let string = blackboard.value.length === 0 ? "" : `${blackboard.value} `;
                blackboard.value = `${string}${text.trim()}`;
                context.properties.value = blackboard.value;
            }
        } else {
            this.properties.recognition.stop();
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = !this.properties.capsLock;
        for (const key of this.elements.keys) {
            if (key.childElementCount === 0) {
                key.textContent = this.properties.capsLock !== this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                if (key.textContent.toLowerCase() === "en / ru") {
                    key.textContent = "en / ru";
                };
                if (key.textContent.toLowerCase() === "shift") {
                    key.textContent = "shift";
                };
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
                        };
                        if (key.textContent.toLowerCase() === "shift") {
                            key.textContent = "shift";
                        };
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
                        };
                        if (key.textContent.toLowerCase() === "shift") {
                            key.textContent = "shift";
                        };
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