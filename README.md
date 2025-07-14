# MHS Avatar Suite

A web-based talking avatar application using free open-source models for speech synthesis, natural language processing, and avatar animation.

## Features

- **Text-to-Speech**: Convert text to natural-sounding speech
- **Avatar Animation**: Lip-sync and facial expressions
- **Voice Cloning**: Create custom voices using open-source models
- **Real-time Interaction**: Chat with your avatar in real-time
- **Customizable Avatars**: Multiple avatar styles and customization options

## Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **3D Graphics**: Three.js for avatar rendering
- **Speech Synthesis**: 
  - Coqui TTS (open-source TTS)
  - SpeechT5 (Hugging Face)
- **Avatar Animation**: 
  - Rhubarb Lip Sync
  - Facial animation using morph targets
- **Backend**: Node.js with Express
- **AI Models**: Hugging Face Transformers

## Project Structure

```
MHS-Avatar-Suite/
├── frontend/           # Client-side application
├── backend/           # Server-side API
├── models/            # AI models and weights
├── assets/            # 3D models, textures, audio
├── docs/              # Documentation
└── scripts/           # Build and deployment scripts
```

## Getting Started

1. Clone this repository
2. Install dependencies: `npm install`
3. Set up the development environment
4. Run the application: `npm start`

## Open Source Models Used

- **Coqui TTS**: High-quality text-to-speech
- **SpeechT5**: Microsoft's speech synthesis model
- **Wav2Vec2**: Speech recognition capabilities
- **Ready Player Me**: Avatar creation platform

## License

MIT License - Feel free to use and modify for your projects!
