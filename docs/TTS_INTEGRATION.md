# Text-to-Speech Integration Guide

## Overview

This guide explains how to integrate open-source text-to-speech models into the MHS Avatar Suite.

## Supported Models

### 1. Coqui TTS
- **Model**: `coqui/XTTS-v2`
- **Features**: Multilingual, voice cloning, real-time synthesis
- **API**: Hugging Face Inference API

### 2. SpeechT5
- **Model**: `microsoft/speecht5_tts`
- **Features**: High-quality synthesis, customizable voices
- **API**: Hugging Face Transformers

### 3. Tortoise TTS
- **Model**: `tortoise-tts`
- **Features**: Extremely high quality, voice cloning
- **API**: Local inference

## Implementation Steps

### Step 1: Install Dependencies

```bash
npm install @huggingface/inference
```

### Step 2: Configure API Keys

Add your Hugging Face API key to `.env`:

```env
HUGGINGFACE_API_KEY=your_api_key_here
```

### Step 3: Initialize TTS Service

```javascript
const { HfInference } = require('@huggingface/inference');

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

async function generateSpeech(text, voice = 'default') {
    try {
        const response = await hf.textToSpeech({
            model: 'microsoft/speecht5_tts',
            inputs: text,
            parameters: {
                voice: voice
            }
        });
        
        return response;
    } catch (error) {
        console.error('TTS Error:', error);
        throw error;
    }
}
```

### Step 4: Voice Cloning Setup

For voice cloning with Coqui TTS:

```javascript
async function cloneVoice(audioFile, text) {
    const response = await hf.textToSpeech({
        model: 'coqui/XTTS-v2',
        inputs: text,
        parameters: {
            voice_sample: audioFile,
            language: 'en'
        }
    });
    
    return response;
}
```

## API Endpoints

### POST /api/tts
Generate speech from text

**Request Body:**
```json
{
    "text": "Hello, how are you today?",
    "voice": "default",
    "speed": 1.0,
    "language": "en"
}
```

**Response:**
```json
{
    "success": true,
    "audioUrl": "/api/audio/generated.wav",
    "duration": 2500,
    "voice": "default"
}
```

### POST /api/voice-clone
Clone a voice from audio sample

**Request Body:**
```json
{
    "text": "This is a test message",
    "voiceSample": "base64_audio_data",
    "language": "en"
}
```

## Testing

Run the TTS service:

```bash
npm run dev
```

Test the endpoint:

```bash
curl -X POST http://localhost:5000/api/tts \
  -H "Content-Type: application/json" \
  -d '{"text": "Hello world", "voice": "default"}'
```

## Performance Optimization

1. **Caching**: Cache generated audio files
2. **Streaming**: Use streaming for long texts
3. **Queue System**: Implement queue for batch processing
4. **Model Loading**: Preload models for faster response

## Error Handling

```javascript
try {
    const audio = await generateSpeech(text);
    res.json({ success: true, audio });
} catch (error) {
    if (error.status === 429) {
        res.status(429).json({ error: 'Rate limit exceeded' });
    } else {
        res.status(500).json({ error: 'TTS generation failed' });
    }
}
```

## Best Practices

1. **Input Validation**: Always validate text input
2. **Rate Limiting**: Implement rate limiting for API calls
3. **Audio Format**: Use appropriate audio formats (WAV, MP3)
4. **Memory Management**: Clean up audio files after use
5. **Error Logs**: Log all TTS errors for debugging
