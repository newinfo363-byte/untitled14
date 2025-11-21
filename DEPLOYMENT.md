# Flying Bird Game - Deployment Guide

## 🚀 Deployment Options

Your Flying Bird game is now ready to deploy! Here are several free hosting options:

### Option 1: Render (Recommended - Easiest)

1. **Create a Render account**: Go to [render.com](https://render.com) and sign up
2. **Connect your GitHub**: Push your code to GitHub first (see instructions below)
3. **Create a new Web Service**:
   - Click "New +" → "Web Service"
   - Connect your repository
   - Render will auto-detect the settings
   - Click "Create Web Service"
4. Your game will be live in a few minutes!

### Option 2: Railway

1. **Sign up at [railway.app](https://railway.app)**
2. **Click "New Project" → "Deploy from GitHub repo"**
3. Select your repository
4. Railway will automatically deploy your app
5. Get your live URL from the deployment

### Option 3: Heroku

1. **Install Heroku CLI**: Download from [heroku.com](https://devcenter.heroku.com/articles/heroku-cli)
2. **Run these commands**:
   ```bash
   heroku login
   heroku create your-flying-bird-game
   git push heroku main
   heroku open
   ```

### Option 4: Vercel (with Node.js)

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```
2. **Deploy**:
   ```bash
   vercel
   ```
3. Follow the prompts and your game will be live!

---

## 📦 First: Push to GitHub

Before deploying, you need to push your code to GitHub:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Flying Bird Game"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/flying-bird-game.git
git branch -M main
git push -u origin main
```

---

## ✅ What's Already Configured

- ✅ `package.json` with start script
- ✅ Environment variable support (PORT)
- ✅ `.gitignore` file
- ✅ `Procfile` for Heroku
- ✅ `vercel.json` for Vercel
- ✅ Static file serving for images and audio

---

## 🎮 Local Testing

Test your changes locally before deploying:

```bash
npm start
```

Visit `http://localhost:3000`

---

## 🆘 Troubleshooting

**Issue**: Audio not playing on deployment
- Solution: Make sure the `audio/fail.wav` file is committed to git
- Check browser console for errors

**Issue**: Images not loading
- Solution: Verify images are in the `images/` folder and committed

**Issue**: Port errors
- Solution: The app now uses `process.env.PORT` which hosting platforms provide automatically

---

## 📝 Next Steps

1. Choose a deployment platform above
2. Push your code to GitHub
3. Follow the platform-specific steps
4. Share your game URL with friends! 🎉

Good luck! 🚀

