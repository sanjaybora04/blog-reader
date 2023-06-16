class BlogReader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    const div = document.createElement('div');
    div.innerHTML = `
    <style>
    *,
::before,
::after {
  box-sizing: border-box;
  /* 1 */
  border-width: 0;
  /* 2 */
  border-style: solid;
  /* 2 */
  border-color: #e5e7eb;
  /* 2 */
}

::before,
::after {
  --tw-content: '';
}



html {
  line-height: 1.5;
  /* 1 */
  -webkit-text-size-adjust: 100%;
  /* 2 */
  -moz-tab-size: 4;
  /* 3 */
  -o-tab-size: 4;
     tab-size: 4;
  /* 3 */
  font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  /* 4 */
  font-feature-settings: normal;
  /* 5 */
  font-variation-settings: normal;
  /* 6 */
}



body {
  margin: 0;
  /* 1 */
  line-height: inherit;
  /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0;
  /* 1 */
  color: inherit;
  /* 2 */
  border-top-width: 1px;
  /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}



code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
  /* 1 */
  font-size: 1em;
  /* 2 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}



sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0;
  /* 1 */
  border-color: inherit;
  /* 2 */
  border-collapse: collapse;
  /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit;
  /* 1 */
  font-size: 100%;
  /* 1 */
  font-weight: inherit;
  /* 1 */
  line-height: inherit;
  /* 1 */
  color: inherit;
  /* 1 */
  margin: 0;
  /* 2 */
  padding: 0;
  /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
[type='button'],
[type='reset'],
[type='submit'] {
  -webkit-appearance: button;
  /* 1 */
  background-color: transparent;
  /* 2 */
  background-image: none;
  /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}



:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield;
  /* 1 */
  outline-offset: -2px;
  /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}



::-webkit-file-upload-button {
  -webkit-appearance: button;
  /* 1 */
  font: inherit;
  /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1;
  /* 1 */
  color: #9ca3af;
  /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/

:disabled {
  cursor: default;
}



img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block;
  /* 1 */
  vertical-align: middle;
  /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */

[hidden] {
  display: none;
}

*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
}

.visible {
  visibility: visible;
}

.collapse {
  visibility: collapse;
}

.fixed {
  position: fixed;
}

.relative {
  position: relative;
}

.left-1\/2 {
  left: 50%;
}

.right-5 {
  right: 1.25rem;
}

.top-80 {
  top: 20rem;
}

.top-\[80px\] {
  top: 80px;
}

.left-1 {
  left: 0.25rem;
}

.bottom-0 {
  bottom: 0px;
}

.right-1\/2 {
  right: 50%;
}

.bottom-3 {
  bottom: 0.75rem;
}

.bottom-2 {
  bottom: 0.5rem;
}

.block {
  display: block;
}

.inline-block {
  display: inline-block;
}

.inline {
  display: inline;
}

.table {
  display: table;
}

.contents {
  display: contents;
}

.hidden {
  display: none;
}

.h-6 {
  height: 1.5rem;
}

.w-6 {
  width: 1.5rem;
}

.w-max {
  width: -moz-max-content;
  width: max-content;
}

.w-min {
  width: -moz-min-content;
  width: min-content;
}

.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}

.w-80 {
  width: 20rem;
}

.border-collapse {
  border-collapse: collapse;
}

.-translate-x-1\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.-translate-x-1 {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1 {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.translate-x-1\/2 {
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.resize {
  resize: both;
}

.flex-wrap {
  flex-wrap: wrap;
}

.space-x-3 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.75rem * var(--tw-space-x-reverse));
  margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)));
}

.rounded-lg {
  border-radius: 0.5rem;
}

.border {
  border-width: 1px;
}

.bg-gray-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(55 65 81 / var(--tw-bg-opacity));
}

.bg-gray-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(31 41 55 / var(--tw-bg-opacity));
}

.bg-sky-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(186 230 253 / var(--tw-bg-opacity));
}

.p-2 {
  padding: 0.5rem;
}

.p-3 {
  padding: 0.75rem;
}

.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}

.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity));
}

.text-indigo-500 {
  --tw-text-opacity: 1;
  color: rgb(99 102 241 / var(--tw-text-opacity));
}

.underline {
  text-decoration-line: underline;
}

.shadow-2xl {
  --tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  --tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.shadow-black {
  --tw-shadow-color: #000;
  --tw-shadow: var(--tw-shadow-colored);
}

.outline {
  outline-style: solid;
}

.hover\:scale-125:hover {
  --tw-scale-x: 1.25;
  --tw-scale-y: 1.25;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.focus\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.group.playing .group-\[\.playing\]\:inline {
  display: inline;
}

.group.playing .group-\[\.playing\]\:hidden {
  display: none;
}
    </style>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <div id="controls" class="inline-block bg-gray-700 text-white text-lg p-2 rounded-lg space-x-3">
        <button id="previous" class="hover:scale-125 focus:outline-none">
            <i class="fa fa-backward"></i>
        </button>
        <button id="stop" class="hidden hover:scale-125 focus:outline-none">
            <i class="fa fa-stop"></i>
        </button>
        <button id="play" class="group hover:scale-125 focus:outline-none">
            <i class="group-[.playing]:hidden fa fa-play"></i>
            <div class="hidden group-[.playing]:inline">
                <i class="fa fa-pause"></i>
            </div>
        </button>
        <button id="next" class="hover:scale-125 focus:outline-none">
            <i class="fa fa-forward"></i>
        </button>
        <button id="toggleoptions" class="hover:scale-125 focus:outline-none">
            <i class="fa fa-sliders"></i>
        </button>
    </div>
    
    <div id="options"
        class="hidden fixed top-80 left-1/2 -translate-x-1/2 flex-wrap bg-gray-800 text-white rounded-lg shadow-2xl shadow-black p-3">
        <div class="p-2">
            <label for="speed">Speed:</label>
            <select id="speed" class="bg-gray-700 focus:outline-none">
                <option value="0.5">0.5x</option>
                <option value="1" selected>1x</option>
                <option value="1.5">1.5x</option>
                <option value="2">2x</option>
            </select>
        </div>
    
        <div class="p-2">
            <label for="voices">Voices:</label>
            <select id="voices" class="bg-gray-700 focus:outline-none w-80"></select>
        </div>
    </div>
    <script>
        console.log('hello')
        document.addEventListener('DOMContentLoaded', function () {
            var lines = document.querySelectorAll("#content p, #content h1, #content h2, #content h3, #content h4, #content h5, #content h6, #content h7");
    
            var currentIndex = 0;
            var currentCharacter = 0;
            var isPlaying = false;
            var utterance = new SpeechSynthesisUtterance();
    
            utterance.addEventListener('boundary', function (e) {
                currentCharacter = e.charIndex;
            });
    
            document.addEventListener('click', function (e) {
                if (!e.target.closest('#toggleoptions, #options')) {
                    document.getElementById('options').classList.add('hidden');
                }
            });
    
            document.getElementById('toggleoptions').addEventListener('click', function () {
                document.getElementById('options').classList.toggle('hidden');
            });
    
            function initialize() {
                document.getElementById('speed').addEventListener('change', function () {
                    var speed = parseFloat(this.value);
                    utterance.rate = speed;
                    update();
                });
    
                document.getElementById('voices').addEventListener('change', function () {
                    var selectedVoiceIndex = this.value;
                    var voices = speechSynthesis.getVoices();
                    utterance.voice = voices[selectedVoiceIndex];
                    update();
                });
    
                document.getElementById('play').addEventListener('click', play);
                document.getElementById('next').addEventListener('click', next);
                document.getElementById('previous').addEventListener('click', previous);
    
                document.addEventListener('keydown', function (e) {
                    e.preventDefault();
                    if (e.which === 32 || e.which === 179) {
                        play();
                    } else if (e.which === 39 || e.which === 176) {
                        next();
                    } else if (e.which === 37 || e.which === 177) {
                        previous();
                    }
                });
    
                document.getElementById('stop').addEventListener('click', function () {
                    speechSynthesis.cancel();
                    isPlaying = false;
                    lines.forEach(function (line) {
                        line.classList.remove('bg-sky-200');
                    });
                    document.getElementById('controls').classList.remove('fixed', 'bottom-2','right-1/2', 'translate-x-1/2');
                    document.getElementById('stop').classList.add('hidden')
                    document.getElementById('play').classList.remove('playing');
                    currentIndex = 0;
                    currentCharacter = 0;
                });
            }
    
            if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
                initialize();
            } else {
                alert('Text-to-speech is not supported in this browser.');
            }
    
            function update() {
                var currentLine = lines[currentIndex];
                lines.forEach(function (line) {
                    line.classList.remove('bg-sky-200');
                });
                currentLine.classList.add('bg-sky-200');
    
                window.scrollTo({
                    top: currentLine.offsetTop - 200,
                    behavior: 'smooth'
                });
    
                if (speechSynthesis.speaking) {
                    speechSynthesis.cancel();
                    speakLine();
                } else {
                    speechSynthesis.cancel();
                }
            }
    
            function speakLine() {
                var currentLine = lines[currentIndex];
                var text = currentLine.textContent;
                utterance.text = text.substring(currentCharacter);
                speechSynthesis.speak(utterance);
    
                utterance.onend = function () {
                    if (currentIndex < lines.length - 1) {
                        currentIndex++;
                        currentCharacter = 0;
                        speakLine();
                        update();
                    }
                };
            }
    
            function play() {
                populateVoices();
                isPlaying = !isPlaying;
                document.getElementById('play').classList.toggle('playing');
                if (isPlaying) {
                    var selectedVoiceIndex = document.getElementById('voices').value;
                    var voices = speechSynthesis.getVoices();
                    utterance.voice = voices[selectedVoiceIndex];
                    var selectedSpeed = parseFloat(document.getElementById('speed').value);
                    utterance.rate = selectedSpeed;
                    document.getElementById('controls').classList.add('fixed', 'bottom-2','right-1/2', 'translate-x-1/2');
                    document.getElementById('stop').classList.remove('hidden')
                    speakLine();
                    update();
                } else {
                    speechSynthesis.cancel();
                }
            }
    
            function previous() {
                if (currentIndex > 0) {
                    currentIndex--;
                    currentCharacter = 0;
                    update();
                }
            }
    
            function next() {
                if (currentIndex < lines.length - 1) {
                    currentIndex++;
                    currentCharacter = 0;
                    update();
                }
            }
    
            function populateVoices() {
                var voices = speechSynthesis.getVoices();
                var voicesSelect = document.getElementById('voices');
                voicesSelect.innerHTML = '';
    
                voices.forEach(function (voice, index) {
                    var option = document.createElement('option');
                    option.value = index;
                    option.textContent = voice.name;
                    voicesSelect.appendChild(option);
                });
            }
        });
    
    </script>
      `
    shadow.appendChild(div);
  }
}

customElements.define('blog-reader', BlogReader);