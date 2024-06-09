import React, { useEffect, useState } from "react";
import styled from "styled-components";

const ControlsContainer = styled.div`
  display: flex;
  max-width: fit-content;
  width: max-content;
  gap: 1rem;
  height: 3.5rem; /* You can adjust the height as needed */
  margin-left: auto;
  margin-right: auto;
  background-color: #374151;
  color: white;
  font-size: 1rem;
  border-radius: 0.5rem;
  padding: 0.75rem;
`;

const Button = styled.button`
    outline: none;
    &:hover {
        transform: scale(1.25);
    }
`;

const SvgIcon = styled.svg`
    width: 24px;
    height: 24px;
    stroke: currentColor;
    stroke-width: 1.5;
    fill: currentColor;
    `;

const OptionsContainer = styled.div<{show:Boolean}>`
position: fixed;
top: 10rem;
left: 50%;
transform: translateX(-50%);
flex-wrap: wrap;
background-color: #2d3748;
color: white;
border-radius: 0.5rem;
box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.25);
padding: 0.75rem;
visibility: ${props => (props.show ? 'visible' : 'hidden')};
`;

const Select = styled.select`
background-color: #4a5568;
color: white;
padding: 0.25rem 0.5rem;
margin-left: 0.5rem;
border: none;
outline: none;
cursor: pointer;
`;

export const PageReader = () => {
    const utterance = new SpeechSynthesisUtterance();
    const [options, setOptions] = useState(false) // toggle options menu

    let lines: NodeListOf<HTMLDivElement> = document.querySelectorAll("#content p, #content h1, #content h2, #content h3, #content h4, #content h5, #content h6, #content h7, #content ul, #content ol, #content li"); // All lines
    let playing = false // playing or paused
    let index = 0 // current line
    let position = 0 // position in current line

    function populateVoices() {
        const voices = speechSynthesis.getVoices();
        const voicesSelect = document.getElementById('page-reader-voices');
        if (voicesSelect) {
            voicesSelect.innerHTML = "";

            voices.forEach(function (voice, index) {
                const option = document.createElement('option');
                option.value = index.toString();
                option.textContent = voice.name;
                voicesSelect.appendChild(option);
            });
        }
    }

    function speakLine() {
        const currentLine = lines[index];
        const text = currentLine.textContent;
        if (text == null) {
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
            else {
                index = 0
                position = 0
                stop()
            }
        };
    }

    function play() {
        playing = !playing
        document.getElementById('page-reader-play')?.style.setProperty('display', playing ? 'none' : 'inline', 'important')
        document.getElementById('page-reader-pause')?.style.setProperty('display', playing ? 'inline' : 'none', 'important')
        if (playing) {
            const voices = speechSynthesis.getVoices();
            const voiceElement = document.getElementById('page-reader-voices');
            const speedElement = document.getElementById('page-reader-speed');
            const voice = voiceElement instanceof HTMLSelectElement ? parseFloat(voiceElement.value) : undefined;
            const speed = speedElement instanceof HTMLSelectElement ? parseFloat(speedElement.value) : undefined;
            if (voice == undefined || speed == undefined) {
                alert(voice)
                return
            }
            utterance.voice = voices[voice];
            utterance.rate = speed;
            document.getElementById('page-reader-controls')?.style.setProperty('position', 'fixed', 'important')
            document.getElementById('page-reader-controls')?.style.setProperty('bottom', '2rem', 'important')
            document.getElementById('page-reader-controls')?.style.setProperty('right', '50%', 'important')
            document.getElementById('page-reader-controls')?.style.setProperty('transform', 'translateX(50%)', 'important')
            document.getElementById('page-reader-stop')?.style.setProperty('display', 'inline', 'important')
            speakLine();
            update();
        } else {
            speechSynthesis.cancel();
        }
    }


    function stop() {
        speechSynthesis.cancel();
        playing = false
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.setProperty('background-color', 'transparent', 'important')
        }
        document.getElementById('page-reader-controls')?.style.setProperty('position', 'relative', 'important')
        document.getElementById('page-reader-controls')?.style.setProperty('bottom', '0', 'important')
        document.getElementById('page-reader-controls')?.style.setProperty('right', '0', 'important')
        document.getElementById('page-reader-controls')?.style.setProperty('transform', 'none', 'important')

        document.getElementById('page-reader-stop')?.style.setProperty('display', 'none', 'important')
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

    function update() {
        const currentLine = lines[index];
        for (let i = 0; i < lines.length; i++) {
            lines[i].style.setProperty('background-color', 'transparent', 'important')
        }
        currentLine.style.setProperty('background-color', '#bae4fe', 'important')

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

    useEffect(() => {
        lines = document.querySelectorAll("#content p, #content h1, #content h2, #content h3, #content h4, #content h5, #content h6, #content h7");

        utterance.addEventListener('boundary', function (e) {
            position = e.charIndex;
        });

        // handle Click outside the toggle window
        function handleClick(e: Event) {
            const target = e.target
            if (target instanceof Element) {
                if (!target.closest('#page-reader-toggleoptions, #page-reader-options')) {
                    setOptions(false)
                }
            }
        }

        // when voice rate is changed
        function handleSpeedChange(e: Event) {
            const target = e.target
            if (target instanceof HTMLSelectElement) {
                const speed = parseFloat(target.value);
                utterance.rate = speed;
                update();
            }
        }

        // when voice is changed
        function handleVoicesChange(e: Event) {
            const target = e.target
            if (target instanceof HTMLSelectElement) {
                const voice = parseFloat(target.value);
                const voices = speechSynthesis.getVoices();
                utterance.voice = voices[voice];
                update();
            }
        }


        // Keyboard and media button events
        function handleKeyDown(e: KeyboardEvent) {
            e.preventDefault();
            console.log(e.key, e.which)
            if (e.code === 'Space' || e.key === 'MediaPlayPause') {             // space and play button
                play();
            } else if (e.key === 'ArrowRight' || e.key === 'MediaTrackNext') {      // right arrow key and next button
                next();
            } else if (e.key === 'ArrowLeft' || e.key === 'MediaTrackPrevious') {      // left arrow key and previous button
                previous();
            }
        }

        speechSynthesis.onvoiceschanged = (): void => {
            populateVoices();
        };

        document.addEventListener('click', handleClick);
        document.addEventListener('keydown', handleKeyDown);
        document.getElementById('page-reader-speed')?.addEventListener('change', handleSpeedChange);
        document.getElementById('page-reader-voices')?.addEventListener('change', handleVoicesChange);


        return () => {
            utterance.removeEventListener('boundary', function (e) {
                position = e.charIndex;
            });
            document.removeEventListener('click', handleClick);
            document.removeEventListener('keydown', handleKeyDown);
            document.getElementById('page-reader-speed')?.removeEventListener('change', handleSpeedChange);
            document.getElementById('page-reader-voices')?.removeEventListener('change', handleVoicesChange);
        };
    }, []);

    // Check browser compatibility
    useEffect(() => {
        if ('speechSynthesis' in window && 'SpeechSynthesisUtterance' in window) {
            populateVoices()
        } else {
            alert('Text-to-speech is not supported in this browser.');
        }
    }, [])

    return (
        <div>
            <ControlsContainer id="page-reader-controls" >
                <Button type="button" title="page-reader-previous" id="page-reader-previous" onClick={() => { previous() }}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953l7.108-4.062A1.125 1.125 0 0121 8.688v8.123zM11.25 16.811c0 .864-.933 1.405-1.683.977l-7.108-4.062a1.125 1.125 0 010-1.953L9.567 7.71a1.125 1.125 0 011.683.977v8.123z" />
                    </SvgIcon>
                </Button>
                <Button type="button" title="page-reader-stop" id="page-reader-stop" style={{ 'display': 'none' }} onClick={() => { stop() }}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z" />
                    </SvgIcon>
                </Button>
                <Button type="button" title="page-reader-play-pause" id="page-reader-play-pause" onClick={() => { play() }}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" id="page-reader-play" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </SvgIcon>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" id="page-reader-pause" viewBox="0 0 24 24" style={{ 'display': 'none' }}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25v13.5m-7.5-13.5v13.5" />
                    </SvgIcon>
                </Button>
                <Button type="button" title="page-reader-next" id="page-reader-next" onClick={() => { next() }}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062A1.125 1.125 0 013 16.81V8.688zM12.75 8.688c0-.864.933-1.405 1.683-.977l7.108 4.062a1.125 1.125 0 010 1.953l-7.108 4.062a1.125 1.125 0 01-1.683-.977V8.688z" />
                    </SvgIcon>

                </Button>
                <Button type="button" title="page-reader-toggleoptions" id="page-reader-toggleoptions" onClick={() => { setOptions(!options) }}>
                    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </SvgIcon>
                </Button>
            </ControlsContainer>

            <OptionsContainer id="page-reader-options" show={options}>
                <div style={{'padding':'0.5rem'}}>
                    <label htmlFor="page-reader-speed">Speed:</label>
                    <Select id="page-reader-speed" defaultValue="1">
                        <option value='0.5'>0.5x</option>
                        <option value='1'>1x</option>
                        <option value='1.5'>1.5x</option>
                        <option value='2'>2x</option>
                    </Select>
                </div>

                <div style={{'padding':'0.5rem'}}>
                    <label htmlFor="page-reader-voices">Voices:</label>
                    <Select id="page-reader-voices" className="bg-gray-700 focus:outline-none"></Select>
                </div>
            </OptionsContainer>
        </div>
    )
}