import { ChangeEvent, useEffect, useState } from "react";
import "../index.css";

export const PageReader = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [options, setOptions] = useState(false) // toggle options menu
    const [speed, setSpeed] = useState(1)
    const [voice, setVoice] = useState(0) // selected voice
    const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]) // All voices

    let lines: NodeListOf<HTMLDivElement> // All lines
    let playing = false // playing or paused
    let index = 0 // current line
    let position = 0 // position in current line

    const changeSpeed = (e:ChangeEvent<HTMLSelectElement>) => {
        setSpeed(parseFloat(e.target.value))
        update()
    }
    const changeVoice = (e:ChangeEvent<HTMLSelectElement>) => {
        setVoice(parseFloat(e.target.value))
        update()
    }

    function populateVoices() {
        setVoices(speechSynthesis.getVoices());
    }
    function speakLine() {
        const currentLine = lines[index];
        const text = currentLine.textContent;
        if(text==null){
            return
        }
        utterance.text = text.substring(position);
        speechSynthesis.speak(utterance);
        utterance.onend = function () {
            if (index < lines.length - 1) {
                index++
                position = 0
                speakLine();
                update();
            }
        };
    }

    function play() {
        playing = !playing
        document.getElementById('controls')?.classList.toggle('playing')
        if (playing) {
            utterance.voice = voices[voice];
            utterance.rate = speed;
            document.getElementById('controls')?.classList.add("fixed", "bottom-2", "right-1/2", "translate-x-1/2");
            document.getElementById('stop')?.classList.remove('hidden')
            speakLine();
            update();
        } else {
            speechSynthesis.cancel();
        }
    }
    
    function update() {
        const currentLine = lines[index];
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.remove("bg-sky-200");
        }
        currentLine.classList.add("bg-sky-200");

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

    function stop() {
        speechSynthesis.cancel();
        playing = false
        for (let i = 0; i < lines.length; i++) {
            lines[i].classList.remove("bg-sky-200");
        }
        document.getElementById('controls')?.classList.remove("fixed", "bottom-2", "right-1/2", "translate-x-1/2", "playing");
        document.getElementById('stop')?.classList.add('hidden')
        index = 0
        position = 0
    }

    function previous() {
        if (index > 0) {
            index--
            position = 0
            update();
        }
    }

    function next() {
        if (index < lines.length - 1) {
            index++
            position = 0
            update();
        }
    }

    useEffect(() => {
        lines = document.querySelectorAll("#content p, #content h1, #content h2, #content h3, #content h4, #content h5, #content h6, #content h7");

        utterance.addEventListener('boundary', function (e) {
            position = e.charIndex;
        });

        function handleClick(e:Event) {
            const target = e.target
            if(target instanceof Element){
                if (!target.closest('#toggleoptions, #options')) {
                    setOptions(false)
                }
            }
        }

        document.addEventListener('click', handleClick);

        function handleKeyDown(e:KeyboardEvent) {
            e.preventDefault();
            if (e.which === 32 || e.which === 179) {
                play();
            } else if (e.which === 39 || e.which === 176) {
                next();
            } else if (e.which === 37 || e.which === 177) {
                previous();
            }
        }

        document.addEventListener('keydown', handleKeyDown);


        function initialize() {
            populateVoices();
        }


        if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
            initialize();
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }


        return () => {
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <div>
            <div id="controls" className="group flex w-max h-14 mx-auto bg-gray-700 text-white text-lg rounded-lg space-x-5 p-3">
                <button type="button" title="previous" id="previous" className="hover:scale-125 focus:outline-none hover:outline-none" onClick={() => { previous() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </svg>
                </button>
                <button type="button" title="stop" id="stop" className="hidden hover:scale-125 focus:outline-none" onClick={() => { stop() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                    </svg>
                </button>
                <button type="button" title="play" id="play" className="hover:scale-125 focus:outline-none" onClick={() => { play() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 group-[.playing]:hidden">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hidden group-[.playing]:inline">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </svg>
                </button>
                <button type="button" title="next" id="next" className="hover:scale-125 focus:outline-none" onClick={() => { next() }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </svg>

                </button>
                <button type="button" title="toggleoptions" id="toggleoptions" className="hover:scale-125 focus:outline-none" onClick={() => { setOptions(!options) }}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </button>
            </div>

            <div id="options"
                className={"fixed top-80 left-1/2 -translate-x-1/2 flex-wrap bg-gray-800 text-white rounded-lg shadow-2xl shadow-black p-3 " + (options ? "" : "hidden")}>
                <div className="p-2">
                    <label htmlFor="speed">Speed:</label>
                    <select id="speed" value={speed} onChange={changeSpeed} className="bg-gray-700 focus:outline-none">
                        <option value={0.5}>0.5x</option>
                        <option value={1} selected>1x</option>
                        <option value={1.5}>1.5x</option>
                        <option value={2}>2x</option>
                    </select>
                </div>

                <div className="p-2">
                    <label htmlFor="voices">Voices:</label>
                    <select id="voices" value={voice} onChange={changeVoice} className="bg-gray-700 focus:outline-none">
                        {voices.map((voice, index) => (<option value={index}>{voice.name}</option>))}
                    </select>
                </div>
            </div>
        </div>
    )
}
