# 🚀 Deploy MHS Avatar Suite to Netlify

## Quick Deployment Steps

### 1. Login to Netlify
1. Go to [netlify.com](https://netlify.com) and sign in with your GitHub account
2. Click "New site from Git"

### 2. Connect Repository
1. Choose "GitHub" as your Git provider
2. Select your repository: `NewaySecurity/MHS-Avatar-Suite`
3. Click "Deploy site"

### 3. Configure Build Settings
Use these settings:
- **Build command**: `npm install && npm run build`
- **Publish directory**: `frontend`
- **Base directory**: (leave empty)

### 4. Environment Variables
In your Netlify dashboard, go to:
**Site settings → Environment variables**

Add these variables:
```
NODE_ENV=production
HUGGINGFACE_API_KEY=your_api_key_here
```

### 5. Deploy!
Click "Deploy site" - Your app will be live at:
`https://your-site-name.netlify.app`

## 🔧 Manual Deployment (Alternative)

If you prefer to deploy manually:

1. **Install Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:
   ```bash
   netlify login
   ```

3. **Deploy from your project folder**:
   ```bash
   netlify deploy --prod
   ```

## 📊 Test Your Deployment

After deployment, test these URLs:

1. **Frontend**: `https://your-site.netlify.app/`
2. **API Status**: `https://your-site.netlify.app/api/status`
3. **Chat API**: Test the chat functionality in the UI

## 🛠️ Troubleshooting

### Common Issues:
1. **Build fails**: Check that all dependencies are in `package.json`
2. **API not working**: Verify serverless functions are in `netlify/functions/`
3. **Environment variables**: Make sure they're set in Netlify dashboard

### Debug Steps:
1. Check the build logs in Netlify dashboard
2. View function logs in Netlify Functions tab
3. Test API endpoints directly in browser

## 🔄 Continuous Deployment

Once set up, any push to `main` branch will automatically deploy:

```bash
git add .
git commit -m "Update feature"
git push origin main
```

## 📈 Performance Tips

1. **Function regions**: Deploy functions close to your users
2. **Caching**: Netlify automatically caches static assets
3. **CDN**: Global CDN is included with Netlify

## 🔐 Security

- HTTPS is automatic with Netlify
- Environment variables are secure
- Functions run in isolated environments

Your MHS Avatar Suite is now live and ready for testing! 🎉
