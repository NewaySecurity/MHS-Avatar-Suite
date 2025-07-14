# MHS Avatar Suite Deployment Guide

## 🚀 Quick Deploy Options

### Option 1: Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts to connect to your GitHub repo
4. Your app will be live at: `https://your-project.vercel.app`

### Option 2: Render.com
1. Connect your GitHub repo to Render
2. Create a new Web Service
3. Use these settings:
   - Build Command: `npm install && npm run build`
   - Start Command: `npm start`
   - Environment: Node.js

### Option 3: Railway
1. Connect GitHub repo to Railway
2. Deploy automatically with zero configuration
3. Environment variables will be set automatically

### Option 4: Netlify
1. Connect GitHub repo to Netlify
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `frontend`

## 🔧 Environment Variables

Set these environment variables in your deployment platform:

```env
NODE_ENV=production
PORT=5000
HUGGINGFACE_API_KEY=your_api_key_here
CORS_ORIGIN=https://your-deployed-url.com
```

## 📊 Testing Your Deployment

Once deployed, test these endpoints:

1. **Frontend**: `https://your-app.com/` - Should show the avatar interface
2. **API Status**: `https://your-app.com/api/status` - Should return JSON status
3. **Chat API**: `POST https://your-app.com/api/chat` - Test chat functionality

## 🚨 Common Issues

1. **Port Issues**: Make sure to use `process.env.PORT` in production
2. **Static Files**: Ensure frontend files are served correctly
3. **API Endpoints**: Check that `/api/*` routes are working
4. **WebSocket**: Some platforms may need WebSocket configuration

## 🔄 Continuous Deployment

Push to main branch automatically deploys:
```bash
git add .
git commit -m "Update feature"
git push origin main
```

## 🔐 Security Notes

- Never commit `.env` files
- Use environment variables for all secrets
- Enable HTTPS in production
- Set proper CORS origins

## 🌍 Multi-Region Deployment

For better global performance:
1. Use Vercel's Edge Network
2. Enable CDN for static assets
3. Consider database replication if needed
