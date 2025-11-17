# 🥁 Drum Stick - Beat Maker App

A modern, interactive web-based drum machine application that allows users to create beats using raw drum sounds or play premade tracks. Built with pure HTML, CSS, and JavaScript - no frameworks required!

## 📋 Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Keyboard Controls](#keyboard-controls)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Features in Detail](#features-in-detail)
- [Browser Compatibility](#browser-compatibility)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### 🎵 Sound Features
- **19 Raw Drum Sounds**: Individual drum samples including kicks, snares, hi-hats, stick sounds, and more
- **6 Premade Tracks**: Full drum loops and compositions ready to play
- **Real-time Playback**: Instant sound triggering with no latency
- **Multiple Sound Support**: Play multiple sounds simultaneously

### ⌨️ Keyboard Controls
- **Full Keyboard Mapping**: Each raw sound is mapped to a specific keyboard key
- **Visual Key Indicators**: Each button displays its corresponding keyboard key
- **Intuitive Layout**: Keys arranged in a logical pattern (Q-P for first row, A-L for second row)

### 🎨 User Interface
- **Modern Dark Theme**: Beautiful dark blue/teal gradient background with texture effects
- **Glassmorphism Design**: Frosted glass effect on cards and sections
- **Smooth Animations**: Hover effects, transitions, and visual feedback
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Visual Feedback**: Buttons highlight and animate when sounds are playing

### 🎛️ Controls
- **Click to Play**: Click any raw sound button to play instantly
- **Keyboard Shortcuts**: Press keyboard keys for quick sound triggering
- **Play/Stop Controls**: Full control over premade tracks with play and stop buttons
- **Auto-stop**: Premade tracks automatically stop when finished

## 🚀 Demo

Visit the live demo: [GitHub Pages](https://sidhant185.github.io/Drum_Stick_App/) (if deployed)

Or clone the repository and open `index.html` in your browser.

## 📦 Installation

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies required!

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sidhant185/Drum_Stick_App.git
   cd Drum_Stick_App
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js (if you have http-server installed)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Start creating beats!**
   - Click buttons or use keyboard keys to play sounds
   - Mix and match different sounds to create unique beats

## 🎮 Usage

### Playing Raw Sounds

**Method 1: Mouse Click**
- Click on any sound button in the "Raw Sounds" section
- The button will highlight and the sound will play immediately
- You can click multiple buttons to layer sounds

**Method 2: Keyboard**
- Press the corresponding keyboard key shown on each button
- Keys are displayed in brackets (e.g., `[Q]`, `[W]`, `[A]`)
- See [Keyboard Controls](#keyboard-controls) section for full mapping

### Playing Premade Tracks

1. Scroll to the "Premade Tracks" section
2. Click the **Play** button on any track card
3. The track will start playing and the button will show "Playing..."
4. Click **Stop** to stop the track at any time
5. Only one premade track can play at a time

## ⌨️ Keyboard Controls

### Raw Sounds Keyboard Mapping

| Key | Sound Name |
|-----|------------|
| **Q** | 808 Bass |
| **W** | Bad Joke Drum |
| **E** | Drum |
| **R** | Drum Beat 02 |
| **T** | Drum Stick Hit |
| **Y** | Drum Sticks Sequence |
| **U** | Hi Hat |
| **I** | Kick Drum 1 |
| **O** | Kick Drum 2 |
| **P** | Simple Kick Loop |
| **A** | Stick Breaking 1 |
| **S** | Stick Breaking 2 |
| **D** | Stick Breaking 3 |
| **F** | Stick Snap 1 |
| **G** | Stick Snap 2 |
| **H** | Swish Stick |
| **J** | Whoosh Drum Hits |
| **K** | Wood Rhythm |
| **L** | 714 Break |

### Tips for Using Keyboard Controls
- Press and hold keys for rapid triggering
- Combine multiple keys to create complex rhythms
- The layout mimics a drum pad for intuitive use
- Keys are case-insensitive (works with both uppercase and lowercase)

## 📁 Project Structure

```
Drum_Stick_App/
│
├── index.html              # Main HTML file
├── style.css               # All styling and animations
├── script.js               # JavaScript functionality
├── README.md               # This file
│
├── Raw_Sounds/             # Individual drum samples
│   ├── 808-bass-drum-421219.mp3
│   ├── bad-joke-drum-352439.mp3
│   ├── drum-171799.mp3
│   ├── drum-beat-02-36276.mp3
│   ├── drum-stick-hit_garage-raw-101388.mp3
│   ├── drum-sticks-sequence-43012.mp3
│   ├── hi-hat-4-231039.mp3
│   ├── kick-drum-230743.mp3
│   ├── kick-drum-263837.mp3
│   ├── simple-drum-kick-loop-230756.mp3
│   ├── stick-breaking-44575.mp3
│   ├── stick-breaking-44824.mp3
│   ├── stick-breaking-97722.mp3
│   ├── stick-snap-1-83897.mp3
│   ├── stick-snap-2-83899.mp3
│   ├── swish-stick-85783.mp3
│   ├── whoosh-drum-hits-169007.mp3
│   ├── wood-rhythm-music-435632.mp3
│   └── 714break_019a_090bpm-108315.mp3
│
└── PreMade_Sounds/         # Full drum loops and tracks
    ├── 023081_ethnic-drum-loop-77143.mp3
    ├── bottle-water-drum-55719.mp3
    ├── drum-beat-64426.mp3
    ├── drum-line-at-parade-25303.mp3
    ├── drum-solo-76124.mp3
    └── electronic-drum-loop-by-prettysleepy-art-12918.mp3
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: 
  - Modern gradients and color schemes
  - Glassmorphism effects
  - CSS animations and transitions
  - Responsive grid layouts
  - Backdrop filters
- **Vanilla JavaScript**: 
  - DOM manipulation
  - Event handling
  - Audio API
  - Keyboard event listeners

## 🎨 Features in Detail

### Visual Design
- **Dark Theme**: Easy on the eyes with a professional dark blue/teal color scheme
- **Texture Effects**: Subtle patterns and overlays for depth
- **Gradient Buttons**: Vibrant orange/yellow for raw sounds, green/teal for tracks
- **Glassmorphism**: Modern frosted glass effect on cards
- **Smooth Animations**: Hover effects, button presses, and playing states

### Audio Features
- **Instant Playback**: No delay when triggering sounds
- **Multiple Simultaneous Sounds**: Layer different sounds together
- **Visual Feedback**: Buttons change color and animate when playing
- **Auto-cleanup**: Audio elements are properly managed and cleaned up

### User Experience
- **Intuitive Interface**: Clear sections and labels
- **Keyboard Shortcuts**: Fast and efficient sound triggering
- **Responsive Layout**: Adapts to different screen sizes
- **Visual Indicators**: Key labels on buttons, playing states, hover effects

## 🌐 Browser Compatibility

This app works on all modern browsers:
- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

**Note**: Some older browsers may not support all CSS features (backdrop-filter, advanced gradients). The app will still function but may look slightly different.

## 🎯 Use Cases

- **Music Production**: Quick drum pattern creation and testing
- **Learning**: Understanding rhythm and beat creation
- **Entertainment**: Fun interactive drumming experience
- **Practice**: Drumming practice without physical drums
- **Demo/Portfolio**: Showcase web development skills

## 🔧 Customization

### Adding New Sounds

1. Add your audio file to the appropriate folder (`Raw_Sounds/` or `PreMade_Sounds/`)
2. Open `script.js`
3. Add a new entry to the `rawSounds` or `premadeSounds` array:
   ```javascript
   { name: 'Your Sound Name', file: 'your-file.mp3', key: 'M' }
   ```
4. Make sure to assign an unused keyboard key

### Changing Colors

Edit `style.css` to customize:
- Background gradients (line 9)
- Button colors (lines 117, 271, 305, 311)
- Text colors (line 22)
- Hover effects and animations

### Modifying Layout

- Adjust grid columns in `.sound-grid` (line 111)
- Change card sizes in `.premade-tracks` (line 211)
- Modify spacing and padding throughout the CSS

## 🐛 Troubleshooting

### Sounds Not Playing
- Check browser console for errors
- Ensure audio files are in the correct folders
- Verify file paths in `script.js` match actual file names
- Some browsers require user interaction before playing audio

### Keyboard Not Working
- Make sure the page is focused (click on the page)
- Check that you're using the correct keys (case-insensitive)
- Verify no other application is capturing keyboard input

### Layout Issues
- Clear browser cache
- Check browser compatibility
- Ensure CSS file is properly linked

## 📝 Future Enhancements

Potential features for future versions:
- [ ] Recording functionality
- [ ] Save/load beat patterns
- [ ] Tempo control
- [ ] Metronome
- [ ] More sound packs
- [ ] Volume controls per sound
- [ ] Effects (reverb, delay, etc.)
- [ ] MIDI support
- [ ] Export beats as audio files

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Contribution Ideas
- Add more sound samples
- Improve UI/UX
- Add new features
- Fix bugs
- Improve documentation
- Optimize performance

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Sidhant185**
- GitHub: [@Sidhant185](https://github.com/Sidhant185)

## 🙏 Acknowledgments

- Sound samples from various free sound libraries
- Inspiration from classic drum machines and beat makers
- Community feedback and suggestions

## 📞 Support

If you encounter any issues or have questions:
- Open an issue on GitHub
- Check existing issues for solutions
- Review the code comments for implementation details

---

**Enjoy creating beats! 🥁🎵**

*Made with ❤️ using pure HTML, CSS, and JavaScript*

