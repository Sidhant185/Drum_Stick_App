// Raw Sounds Configuration with keyboard mapping
const rawSounds = [
    { name: '808 Bass', file: '808-bass-drum-421219.mp3', key: 'Q' },
    { name: 'Bad Joke Drum', file: 'bad-joke-drum-352439.mp3', key: 'W' },
    { name: 'Drum', file: 'drum-171799.mp3', key: 'E' },
    { name: 'Drum Beat 02', file: 'drum-beat-02-36276.mp3', key: 'R' },
    { name: 'Drum Stick Hit', file: 'drum-stick-hit_garage-raw-101388.mp3', key: 'T' },
    { name: 'Drum Sticks Sequence', file: 'drum-sticks-sequence-43012.mp3', key: 'Y' },
    { name: 'Hi Hat', file: 'hi-hat-4-231039.mp3', key: 'U' },
    { name: 'Kick Drum 1', file: 'kick-drum-230743.mp3', key: 'I' },
    { name: 'Kick Drum 2', file: 'kick-drum-263837.mp3', key: 'O' },
    { name: 'Simple Kick Loop', file: 'simple-drum-kick-loop-230756.mp3', key: 'P' },
    { name: 'Stick Breaking 1', file: 'stick-breaking-44575.mp3', key: 'A' },
    { name: 'Stick Breaking 2', file: 'stick-breaking-44824.mp3', key: 'S' },
    { name: 'Stick Breaking 3', file: 'stick-breaking-97722.mp3', key: 'D' },
    { name: 'Stick Snap 1', file: 'stick-snap-1-83897.mp3', key: 'F' },
    { name: 'Stick Snap 2', file: 'stick-snap-2-83899.mp3', key: 'G' },
    { name: 'Swish Stick', file: 'swish-stick-85783.mp3', key: 'H' },
    { name: 'Whoosh Drum Hits', file: 'whoosh-drum-hits-169007.mp3', key: 'J' },
    { name: 'Wood Rhythm', file: 'wood-rhythm-music-435632.mp3', key: 'K' },
    { name: '714 Break', file: '714break_019a_090bpm-108315.mp3', key: 'L' }
];

// Premade Sounds Configuration
const premadeSounds = [
    { name: 'Ethnic Drum Loop', file: '023081_ethnic-drum-loop-77143.mp3' },
    { name: 'Bottle Water Drum', file: 'bottle-water-drum-55719.mp3' },
    { name: 'Drum Beat', file: 'drum-beat-64426.mp3' },
    { name: 'Drum Line Parade', file: 'drum-line-at-parade-25303.mp3' },
    { name: 'Drum Solo', file: 'drum-solo-76124.mp3' },
    { name: 'Electronic Drum Loop', file: 'electronic-drum-loop-by-prettysleepy-art-12918.mp3' }
];

// Store currently playing audio elements
const playingSounds = new Map();
let currentPremadeTrack = null;

// Initialize the app
document.addEventListener('DOMContentLoaded', () => {
    createRawSoundButtons();
    createPremadeTracks();
    
    // Add keyboard support for raw sounds (optional enhancement)
    document.addEventListener('keydown', handleKeyPress);
});

// Create buttons for raw sounds
function createRawSoundButtons() {
    const grid = document.getElementById('rawSoundsGrid');
    
    rawSounds.forEach((sound, index) => {
        const button = document.createElement('button');
        button.className = 'sound-btn';
        button.innerHTML = `<div>${sound.name}</div><div class="key-label">[${sound.key}]</div>`;
        button.setAttribute('data-sound', sound.file);
        button.setAttribute('data-key', sound.key.toLowerCase());
        button.setAttribute('data-index', index);
        
        button.addEventListener('click', () => playRawSound(sound.file, button));
        
        grid.appendChild(button);
    });
}

// Create premade track cards
function createPremadeTracks() {
    const container = document.getElementById('premadeTracks');
    
    premadeSounds.forEach((track, index) => {
        const card = document.createElement('div');
        card.className = 'track-card';
        
        const name = document.createElement('div');
        name.className = 'track-name';
        name.textContent = track.name;
        
        const controls = document.createElement('div');
        controls.className = 'track-controls';
        
        const playBtn = document.createElement('button');
        playBtn.className = 'track-btn';
        playBtn.textContent = 'Play';
        playBtn.addEventListener('click', () => playPremadeTrack(track.file, playBtn, stopBtn));
        
        const stopBtn = document.createElement('button');
        stopBtn.className = 'track-btn stop';
        stopBtn.textContent = 'Stop';
        stopBtn.addEventListener('click', () => stopPremadeTrack(playBtn, stopBtn));
        
        controls.appendChild(playBtn);
        controls.appendChild(stopBtn);
        
        card.appendChild(name);
        card.appendChild(controls);
        
        container.appendChild(card);
    });
}

// Play raw sound
function playRawSound(filename, button) {
    // Stop any currently playing instance of this sound
    if (playingSounds.has(filename)) {
        const audio = playingSounds.get(filename);
        audio.pause();
        audio.currentTime = 0;
    }
    
    // Create and play new audio
    const audio = new Audio(`Raw_Sounds/${filename}`);
    playingSounds.set(filename, audio);
    
    // Add playing class for visual feedback
    button.classList.add('playing');
    
    audio.play().catch(err => {
        console.error('Error playing sound:', err);
        button.classList.remove('playing');
    });
    
    // Remove playing class when sound ends
    audio.addEventListener('ended', () => {
        button.classList.remove('playing');
        playingSounds.delete(filename);
    });
    
    // Handle errors
    audio.addEventListener('error', () => {
        button.classList.remove('playing');
        playingSounds.delete(filename);
        console.error(`Error loading sound: ${filename}`);
    });
}

// Play premade track
function playPremadeTrack(filename, playBtn, stopBtn) {
    // Stop current track if playing
    if (currentPremadeTrack) {
        currentPremadeTrack.pause();
        currentPremadeTrack.currentTime = 0;
    }
    
    // Create and play new track
    const audio = new Audio(`PreMade_Sounds/${filename}`);
    currentPremadeTrack = audio;
    
    // Update button states
    playBtn.classList.add('playing');
    playBtn.textContent = 'Playing...';
    stopBtn.disabled = false;
    
    audio.play().catch(err => {
        console.error('Error playing track:', err);
        playBtn.classList.remove('playing');
        playBtn.textContent = 'Play';
    });
    
    // Reset when track ends
    audio.addEventListener('ended', () => {
        playBtn.classList.remove('playing');
        playBtn.textContent = 'Play';
        currentPremadeTrack = null;
    });
    
    // Handle errors
    audio.addEventListener('error', () => {
        playBtn.classList.remove('playing');
        playBtn.textContent = 'Play';
        currentPremadeTrack = null;
        console.error(`Error loading track: ${filename}`);
    });
}

// Stop premade track
function stopPremadeTrack(playBtn, stopBtn) {
    if (currentPremadeTrack) {
        currentPremadeTrack.pause();
        currentPremadeTrack.currentTime = 0;
        currentPremadeTrack = null;
    }
    
    playBtn.classList.remove('playing');
    playBtn.textContent = 'Play';
}

// Keyboard support - map keys to sounds
function handleKeyPress(event) {
    const pressedKey = event.key.toLowerCase();
    
    // Find the sound that matches this key
    const soundIndex = rawSounds.findIndex(sound => sound.key.toLowerCase() === pressedKey);
    
    if (soundIndex !== -1) {
        const sound = rawSounds[soundIndex];
        const button = document.querySelector(`[data-key="${pressedKey}"]`);
        if (button) {
            playRawSound(sound.file, button);
        }
    }
}

