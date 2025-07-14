# MHS Avatar Suite - Neway Security Training Academy

A comprehensive web-based platform for professional security training provided by Neway Security Services. This platform combines traditional security training with modern AI-powered avatar technology for enhanced learning experiences.

## 🎯 Overview

The MHS Avatar Suite is now integrated with the Neway Security Training Academy to provide:
- **Interactive AI Avatar Instructors** for engaging security training
- **Professional PSIRA-accredited courses** (Grades E, D, C, B, A)
- **Modern learning management system** with progress tracking
- **Real-time voice synthesis** and speech recognition
- **Customizable learning experiences** with AI-powered responses

## 🏢 Company Information

**Neway Security Services**
- **Location**: Stand No. 10111, Matsikitsane, R40 Main Road, Acornhoek 1360, Mpumalanga
- **Contact**: 079 955 0700 / 072 555 6444
- **Email**: info@newaysecurity.co.za
- **Website**: www.newaysecurity.co.za
- **Management**: Peace Tibane (Managing Director), Max Seya (Strategic Leadership)

## 📚 Course Offerings

### Training Packages
1. **E, D, C ONLY** - R2,000.00 (3 weeks)
2. **E, D, C \& PSIRA** - R2,450.00 (3 weeks) *Most Popular*
3. **E, D, C, B \& PSIRA** - R3,900.00 (4 weeks)
4. **Complete Package (E-A + PSIRA)** - R5,000.00 (5 weeks)
5. **Individual Grades** - R850-R1,600 (1 week each)
6. **Grade B \& A Only** - R2,950.00 (2 weeks)

### Course Features
- **AI Avatar Video Lessons** - Interactive instruction with virtual trainers
- **Digital Training Manuals** - Comprehensive study materials
- **Progress Tests** - Regular assessments and feedback
- **PSIRA Registration Support** - Complete certification assistance
- **Leadership Development** - Advanced management skills
- **Crisis Management** - Emergency response training

## 🚀 Features

### Learning Platform
- **Modern Responsive Design**: Professional dark theme with gold accents
- **AI Avatar Integration**: Interactive teaching with AI-powered avatars
- **Student Portal**: Secure login and progress tracking
- **Course Management**: Complete LMS functionality
- **Certificate Generation**: Automated certificate creation

### AI Avatar Technology
- **Text-to-Speech**: Natural-sounding speech synthesis
- **Avatar Animation**: Lip-sync and facial expressions
- **Voice Cloning**: Custom voice creation using open-source models
- **Real-time Interaction**: Chat with AI instructors
- **Customizable Avatars**: Multiple avatar styles and personalities

## 💻 Tech Stack

### Frontend
- **HTML5, CSS3, JavaScript (ES6+)**
- **Three.js** for 3D avatar rendering
- **GSAP** for smooth animations
- **Responsive design** for all devices

### Backend
- **Node.js with Express** server
- **WebSocket support** for real-time communication
- **Serverless functions** for scalability
- **RESTful API** architecture

### AI \& Speech
- **Coqui TTS** - High-quality text-to-speech
- **SpeechT5** - Microsoft's speech synthesis model
- **Hugging Face Transformers** - AI model integration
- **Wav2Vec2** - Speech recognition capabilities

## 📁 Project Structure

```
MHS-Avatar-Suite/
├── index.html              # Academy homepage
├── student-portal.html     # Student login
├── css/
│   └── style.css          # Academy styling
├── js/
│   └── main.js            # Academy JavaScript
├── frontend/              # Original avatar UI
│   ├── index.html         # Avatar interface
│   ├── css/style.css      # Avatar styling
│   └── js/app.js          # Avatar functionality
├── backend/               # Server-side API
│   ├── server.js          # Main server
│   └── package.json       # Backend dependencies
├── netlify/               # Serverless functions
│   └── functions/
│       └── server.js      # Netlify functions
├── models/                # AI models and weights
├── assets/                # 3D models, textures, audio
├── docs/                  # Documentation
└── scripts/               # Build and deployment scripts
```

## 🛠️ Installation \& Setup

### Prerequisites
- Node.js 16+ 
- Modern web browser
- Git

### Local Development
```
# Clone the repository
git clone https://github.com/NewaySecurity/MHS-Avatar-Suite.git
cd MHS-Avatar-Suite

# Install dependencies
npm install

# Start development server
npm run dev

# Or start individual components
npm run dev:backend    # Backend server
npm run dev:frontend   # Frontend development
```

### Production Deployment
```
# Build for production
npm run build

# Deploy to Netlify
npm run deploy

# Or use the deployment guide
# See NETLIFY_DEPLOY.md for detailed instructions
```

## 🌐 Deployment

### Netlify (Recommended)
1. Connect your GitHub repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `frontend`
4. Add environment variables in Netlify dashboard

### Other Platforms
- **Vercel**: Use `vercel.json` configuration
- **Railway**: Automatic deployment from GitHub
- **Render**: Use `render.yaml` configuration

## 📖 Usage

### For Students
1. Visit the academy homepage
2. Browse available courses
3. Register for a course package
4. Login to student portal
5. Access AI avatar lessons
6. Complete assessments
7. Receive certificates

### For Administrators
1. Access admin dashboard
2. Manage student enrollments
3. Track learning progress
4. Generate reports
5. Update course content

## 🎯 Development Roadmap

### Phase 1: Foundation ✅
- [x] Basic website structure
- [x] Responsive design
- [x] Navigation system
- [x] Student portal framework

### Phase 2: Core Features (In Progress)
- [ ] Complete course catalog
- [ ] Student dashboard
- [ ] Course enrollment system
- [ ] Progress tracking

### Phase 3: AI Integration
- [ ] Avatar instructor integration
- [ ] Voice synthesis implementation
- [ ] Interactive lessons
- [ ] Speech recognition

### Phase 4: Advanced Features
- [ ] Payment processing
- [ ] PSIRA API integration
- [ ] Advanced analytics
- [ ] Mobile application

## 🔧 API Endpoints

### Public Endpoints
- `GET /api/status` - API health check
- `POST /api/chat` - Chat with AI avatar
- `POST /api/tts` - Text-to-speech generation

### Student Endpoints
- `POST /api/student/login` - Student authentication
- `GET /api/student/courses` - Available courses
- `POST /api/student/enroll` - Course enrollment

### Admin Endpoints
- `GET /api/admin/students` - Student management
- `POST /api/admin/courses` - Course management
- `GET /api/admin/analytics` - Usage analytics

## 🔐 Security Features

- **HTTPS enforcement** in production
- **Input validation** and sanitization
- **Rate limiting** for API endpoints
- **Secure session management**
- **Data encryption** for sensitive information
- **CORS configuration** for cross-origin requests

## 📊 Analytics \& Monitoring

- **Student progress tracking**
- **Course completion rates**
- **Avatar interaction metrics**
- **Performance monitoring**
- **Error logging and reporting**

## 🤝 Contributing

This is a private project for Neway Security Services. For modifications or enhancements, please contact the development team.

## 📄 License

Proprietary software owned by Neway Security Services. All rights reserved.

## 📞 Support

For technical support or questions:
- **Email**: info@newaysecurity.co.za
- **Phone**: 079 955 0700 / 072 555 6444
- **Website**: www.newaysecurity.co.za

## 🌟 Acknowledgments

- **Hugging Face** for open-source AI models
- **Three.js** for 3D rendering capabilities
- **Coqui TTS** for speech synthesis
- **Netlify** for deployment platform

---

**© 2025 Neway Security Services. All rights reserved.**  
*Professional Security Training • AI-Powered Learning • PSIRA Registered • Black-Owned Enterprise*

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
