const themeAudio = document.getElementById('themeAudio');
const desktop = document.getElementById('desktop');
const terminalContainer = document.getElementById('terminalContainer');
const startButton = document.getElementById('startButton');
const minimizeButton = document.getElementById('minimize');
const maximizeButton = document.getElementById('maximize');
const closeButton = document.getElementById('close');
const aboutMe = document.getElementById('about-me');
const portfolio = document.getElementById('portfolio');
const contact = document.getElementById('contact');
const terminalContent = document.getElementById('terminal-content');
const scrollbarThumb = document.getElementById('scrollbar-thumb');
const scrollbar = document.querySelector('.scrollbar');

function randomStat(min, max) {
  let i = (Math.random() * (max - min) + min);
  return Math.round(i * 100) / 100;
}

const retroTerminalText = `█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█          SYSTEM INITIALIZATION SEQUENCE        █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█

[BOOT] Initializing kernel... [OK]
[BOOT] Checking hardware integrity... [OK]
[BOOT] Verifying cryptographic signatures... [OK]
[BOOT] Loading drivers:
      > Input Devices...........Connected
      > Graphics Processor......Online
      > Audio Interface.........Operational
[BOOT] Allocating memory resources... [OK]
[BOOT] Establishing network connection... [OK]

>>> SYSTEM DIAGNOSTICS <<< 
=============================
CPU Load...............` + randomStat(5, 100) + `%
Memory Usage...........` + randomStat(40, 100) + `%
Disk Usage.............` + randomStat(0.2, 20) + `%
Temperature...........` + Math.round(randomStat(30, 70)) + `°C
Network Speed.........` + Math.round(randomStat(5, 900) * 10) / 10 + `Kbps

>>> WELCOME TO RETRO TERMINAL <<< 
=================================
Click a button for some info about me.

>>> `;

const aboutMeText = `<file:assets/Promasterio.png>
User.getName() >> 'Promasterio';
User.getGender() >> 'Male';
User.getAge() >> 15;
User.getNationality() >> 'Netherlands';
User.getFavoriteGame() >> 'Minecraft';

const Dev = User.asDeveloper();
Dev.getProgrammingLangs() >> '[Skript, Java, Python, JavaScript]';
Dev.getFavoriteLang() >> 'Skript';

Skript.getKnowledge() === 100%
Java.getKnowledge() === 65%
Python.getKnowdlege() === 30%
JavaScript.getKnowledge() === 10%

>>> `;

const portfolioText = `[INFO] Oh here's some stuff I made
[INFO] It's all minecraft (using Skript)

[INFO] Cinema Skript (using maps):
[INFO] This is probably the most fun thing I made!
<file:assets/cinema.mp4>


[INFO] Gun with smooth recoil (using item displays):
[INFO] The following video doesn't use a texture pack :P
[INFO] The smooth recoil took ages cause minecraft
[INFO] Operates at 20 GameTicks per second
[INFO] (Part of TensorByte Network - Devasted)
<file:assets/gun.mp4>

[INFO] Island Generator (partly java cause of lag):
[INFO] It has seed and island size input!
[INFO] Using Simplex algorithm.
[INFO] (Part of TensorByte Network - Devasted)
<file:assets/island1.png>

[INFO] Same Size, Different Seed:
<file:assets/island2.png>

[INFO] Big Island Render (2048x2048):
<file:assets/island3.png>


[INFO] Cape + Skin Changer:
[INFO] Sadly u can't change the cape server side
[INFO] But for just the skin its possible!
<file:assets/skin.png>


[INFO] Rust Styled Building System:
[INFO] (Part of TensorByte Network - Devasted)
<file:assets/building1.png>
<file:assets/building2.png>
<file:assets/building3.png>

[INFO] It also has physics when broken!
<file:assets/physics.mp4>


[INFO] Main Menu:
[INFO] Controllable with your mouse
[INFO] (Part of TensorByte Network - Devasted)
<file:assets/mainmenu.mp4>

>>>`;

const contactText = `[INFO] Interested in contacting me?

const metadata = User.getMetadata();
metadata.get('Discord') >> 'promasterio'
metadata.get('Discord-Server') >>
<url:https://discord.gg/hM4xmcQjSc>


[INFO] Interested in my minecraft network?

const network = metadata.get('MC-Network');
network.getName() >> 'TensorByte Network'
network.getIP() >> 'Tensorbyte.net'
network.getDiscord() >>
<url:https://discord.gg/c6mVHAFD4x>
<file:assets/logo.png>


[INFO] Thank you for visiting my site <3
<file:assets/thanks.gif>

>>> `

// Flag to check if audio has been started
let isAudioPlaying = false;

// Debounce variables
let fadeTimeout = null;
let fadeState = null; // Tracks whether fading in or out is in progress

// Event listener for clicking "Start Button"
startButton.addEventListener('click', () => {
  playClickSound()
  if (!isAudioPlaying) {
    themeAudio.loop = true;
    themeAudio.volume = 1; // Set volume to full initially
    themeAudio.play().catch((error) => {
      console.error("Error playing audio:", error);
    });
    isAudioPlaying = true;
  }

  // Show terminal and hide desktop
  desktop.style.display = 'none';
  terminalContainer.style.display = 'flex'; // Reveals the terminal

  // Clear and type the terminal text
  clearText();
  typeLine(retroTerminalText, 1);
});

// Get the audio element and mute button
const audio = document.getElementById('themeAudio');
const muteButton = document.getElementById('muteButton');

// Function to toggle mute/unmute
function toggleMute() {
  if (audio.paused) {
    audio.play();  // If audio is paused, play it
    muteButton.textContent = 'Mute';  // Change button text to "Mute"
  } else {
    audio.pause();  // Pause the audio
    muteButton.textContent = 'Unmute';  // Change button text to "Unmute"
  }
}

// Add an event listener to the button to toggle audio on click
muteButton.addEventListener('click', toggleMute);

// Function to fade out the audio (debounced)
function fadeOutAudio(audio, duration = 1000) {
  if (fadeState === 'fading-out') return; // Prevent overlapping fades
  fadeState = 'fading-out';

  clearTimeout(fadeTimeout); // Cancel any ongoing fade-in
  const step = audio.volume / (duration / 50);
  const fadeInterval = setInterval(() => {
    audio.volume = Math.max(0, audio.volume - step);
    if (audio.volume === 0) {
      clearInterval(fadeInterval);
      audio.pause();
      fadeState = null; // Reset fade state
    }
  }, 50);
}

// Function to fade in the audio (debounced)
function fadeInAudio(audio, duration = 1000) {
  if (fadeState === 'fading-in') return; // Prevent overlapping fades
  fadeState = 'fading-in';

  clearTimeout(fadeTimeout); // Cancel any ongoing fade-out
  audio.play().catch((error) => console.error("Error resuming audio:", error));
  const step = 1 / (duration / 50);
  audio.volume = 0;
  const fadeInterval = setInterval(() => {
    audio.volume = Math.min(1, audio.volume + step);
    if (audio.volume === 1) {
      clearInterval(fadeInterval);
      fadeState = null; // Reset fade state
    }
  }, 50);
}

// Function to handle media playback events (with debounce)
function handleMediaPlayback(media) {
  media.addEventListener('playing', () => {
    if (!themeAudio.paused) {
      fadeOutAudio(themeAudio); // Fade out theme audio when media starts
    }
  });

  media.addEventListener('pause', () => {
    clearTimeout(fadeTimeout); // Cancel any queued fades
    fadeTimeout = setTimeout(() => {
      const allMediaPaused = Array.from(document.querySelectorAll('audio, video')).every((m) => m.paused);
      if (allMediaPaused) {
        fadeInAudio(themeAudio); // Fade in theme audio when all media is paused
      }
    }, 300); // Add debounce delay to prevent rapid toggling
  });
}

// Monitor DOM for added/removed media elements
const observer = new MutationObserver((mutationsList) => {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      // Handle added nodes
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'AUDIO' || node.tagName === 'VIDEO') {
          handleMediaPlayback(node);
        }
      });

      // Optionally, handle removed nodes
      mutation.removedNodes.forEach((node) => {
        if (node.tagName === 'AUDIO' || node.tagName === 'VIDEO') {
          console.log(`Removed media element: ${node.tagName}`);
        }
      });
    }
  }
});

// Observe the entire document for changes
observer.observe(document.body, { childList: true, subtree: true });

function playClickSound() {
  const clickSound = document.getElementById('clickSound');
  clickSound.play(); // Play the click sound
}

aboutMe.addEventListener('click', () => {
  clearText(); 
  typeLine(aboutMeText, 25);
  playClickSound()
});

portfolio.addEventListener('click', () => {
  clearText(); 
  typeLine(portfolioText, 25);
  playClickSound()
});

contact.addEventListener('click', () => {
  clearText(); 
  typeLine(contactText, 25);
  playClickSound()
});

// Fullscreen toggle event listener
maximizeButton.addEventListener('click', () => {
  playClickSound()
  if (terminalContainer.classList.contains('fullscreen')) {
    terminalContainer.classList.remove('fullscreen');
    terminalContainer.style.left = '50%';
    terminalContainer.style.transform = 'translateX(-50%)';
  } else {
    terminalContainer.classList.add('fullscreen');
    terminalContainer.style.left = '0';
    terminalContainer.style.transform = 'none';
  }
});

// Minimize terminal
minimizeButton.addEventListener('click', () => {
  terminalContainer.style.display = 'none'; // Hides the terminal again
  desktop.style.display = 'flex'; // Shows the desktop
  clearText()
  playClickSound()
});

// Close terminal
closeButton.addEventListener('click', () => {
  terminalContainer.style.display = 'none'; // Hides the terminal again
  desktop.style.display = 'flex'; // Shows the desktop
  clearText()
  playClickSound()
});

function clearText() { document.querySelector('.output').innerHTML = ''; }

let typingTimeout; // Store the current typing timeout to cancel it when the function is called again

function typeLine(text, timeout) {
  const output = document.querySelector('.output');

  // Clear previous typing process
  clearTimeout(typingTimeout);

  // Function to parse references in the text
  function parseReferences(text) {
    // Replace <file:path/to/file> with local media elements
    text = text.replace(/<file:([^>]+)>/gi, (match, filePath) => {
      const fileExtension = filePath.split('.').pop().toLowerCase();
      if (['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'].includes(fileExtension)) {
        return `<media type="image" src="${filePath}"></media>`;
      } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
        return `<media type="video" src="${filePath}"></media>`;
      } else if (['mp3', 'wav', 'ogg'].includes(fileExtension)) {
        return `<media type="audio" src="${filePath}"></media>`;
      } else {
        return `<media type="link" src="${filePath}">Download Local File</media>`;
      }
    });

    // Replace <urlFile:URL> with external media elements
    text = text.replace(/<urlFile:(https?:\/\/[^\s>]+)>/gi, (match, url) => {
      const fileExtension = url.split('.').pop().toLowerCase();
      if (['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp'].includes(fileExtension)) {
        return `<media type="image" src="${url}"></media>`;
      } else if (['mp4', 'webm', 'ogg'].includes(fileExtension)) {
        return `<media type="video" src="${url}"></media>`;
      } else if (['mp3', 'wav', 'ogg'].includes(fileExtension)) {
        return `<media type="audio" src="${url}"></media>`;
      } else {
        return `<media type="link" src="${url}">Download File</media>`;
      }
    });

    // Replace URLs with clickable links
    text = text.replace(/<url:(https?:\/\/[^\s<]+)>/gi, (match, url) => {
      return `<media type="link" src="${url}">${url}</media>`;
    });

    return text;
  }

  // Parse the text into fragments
  const fragments = parseReferences(text).split(/(<media[^>]*>.*?<\/media>)/gi);

  let i = 0; // Fragment index

  // Function to render a media element
  function renderMedia(fragment) {
    const parser = new DOMParser();
    const mediaNode = parser.parseFromString(fragment, 'text/html').body.firstChild;
    const type = mediaNode.getAttribute('type');
    const src = mediaNode.getAttribute('src');

    let element;
    switch (type) {
      case 'image':
        element = document.createElement('img');
        element.src = src;
        element.alt = 'Image';
        element.style.maxWidth = '100%';
        element.style.maxHeight = '300px';
        break;
      case 'video':
        element = document.createElement('video');
        element.src = src;
        element.controls = true;
        element.style.maxWidth = '100%';
        element.style.maxHeight = '300px';
        break;
      case 'audio':
        element = document.createElement('audio');
        element.src = src;
        element.controls = true;
        element.style.width = '100%';
        break;
      case 'link':
        element = document.createElement('a');
        element.href = src;
        element.target = '_blank';
        element.textContent = mediaNode.textContent || 'Download';
        break;
    }

    if (element) {
      const container = document.createElement('div');
      container.className = 'media-container';
      container.appendChild(element);
      output.appendChild(container);
    }
  }

  // Function to type out text fragments
  function type() {
    if (i < fragments.length) {
      const fragment = fragments[i];
      i++;

      if (fragment.startsWith('<media') && fragment.endsWith('</media>')) {
        // Immediately render media elements
        renderMedia(fragment);
        type(); // Continue to the next fragment
      } else {
        // Type out plain text fragments
        let j = 0;
        const textFragment = document.createElement('span');
        output.appendChild(textFragment); // Append text fragment immediately

        function typeText() {
          if (j < fragment.length) {
            textFragment.textContent += fragment[j];
            j++;
            typingTimeout = setTimeout(typeText, timeout);
          } else {
            type(); // Move to the next fragment
          }
        }
        typeText();
      }
    }
  }

  type();
}



