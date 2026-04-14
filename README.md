# CareerPilot AI - An AI Powered Career Coach

A full-stack AI-powered career planning and job preparation platform built with Next.js 14, Tailwind CSS, and Google Gemini AI.

## 🚀 Launch Your Career Journey

**N.K. Orchid College of Engineering and Technology, Hipparagaha, Solapur**

## Features

- 🎯 AI-powered career guidance
- 📊 Interactive job role exploration
- 🎓 Learning and skill development
- 💼 Interview preparation
- 🏢 Company insights
- 📈 Career roadmaps
- ✅ Real-Time Resume & Feedback Analysiss
- ✅ Department-wise Job Roadmaps

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS
- **UI Components**: Shadcn UI, Radix UI
- **AI Integration**: Google Gemini Flash 1.5 API
- **Styling**: Tailwind CSS
- **Icons**: Lucide React, Heroicons
- **Deployment**: Vercel

## 🔑 Complete API Keys & Environment Setup

### Required API Keys

#### 1. **Google Gemini AI API Key** (Required for all AI features)
- **Purpose**: Powers AI-based career guidance, mock interviews, coding assistance
- **Get it from**: [Google AI Studio](https://aistudio.google.com/app/apikey)
- **Steps**:
  1. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)
  2. Sign in with your Google account
  3. Click "Create API Key"
  4. Copy the generated key (starts with `AIzaSy...`)
- **Environment Variable**: `GOOGLE_GEMINI_API_KEY=AIzaSyYourActualKeyHere`
- **Cost**: Free tier available with generous limits

#### 2. **YouTube Data API v3** (Optional - for educational content)
- **Purpose**: Fetches educational videos and tutorials
- **Get it from**: [Google Cloud Console](https://console.cloud.google.com/apis/library/youtube.googleapis.com)
- **Steps**:
  1. Go to Google Cloud Console
  2. Create a new project or select existing
  3. Enable YouTube Data API v3
  4. Create credentials (API Key)
- **Environment Variable**: `NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key`
- **Cost**: Free tier available

### Environment Setup Guide

#### For Local Development (.env.local)
Create a `.env.local` file in your project root:

```bash
# Required: Google Gemini AI (Core AI features)
GOOGLE_GEMINI_API_KEY=AIzaSyYourActualGeminiKeyHere

# Optional: YouTube Data API (Educational content)
NEXT_PUBLIC_YOUTUBE_API_KEY=your_youtube_api_key


#### For Production Deployment (Vercel/Netlify)
Add these same variables in your hosting platform's environment variables section.

### 🔒 Security Best Practices
- ✅ Never commit API keys to version control
- ✅ Use `.env.local` for local development
- ✅ Set environment variables in your hosting platform
- ✅ Use `NEXT_PUBLIC_` prefix only for client-side variables
- ✅ Keep server-side API keys without the `NEXT_PUBLIC_` prefix
- ✅ Regularly rotate your API keys
- ✅ Monitor API usage and set up billing alerts

### 🧪 Testing Your Setup

#### Test Gemini AI Integration:
1. Start your dev server: `npm run dev`
2. Visit: `http://localhost:3000/ai-code-practice`
3. Try the AI coding assistant
4. If working: ✅ API key is correctly configured

#### Test Other APIs:
- **YouTube API**: Visit any learning module with video content
### 💡 Fallback Behavior
The app is designed to work even without all API keys:
- **Without Gemini API**: Shows pre-written content instead of AI-generated
- **Without YouTube API**: Uses placeholder video content

## Getting Started

## Prerequisites

- Node.js 22.x (required by Vercel)
- npm 10+ (recommended)
- Google Gemini API Key

### Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/careerpilot-ai.git
cd careerpilot-ai
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

4. Add your Google Gemini API key to `.env.local`:

```bash
GOOGLE_GEMINI_API_KEY=your_actual_api_key_here
```

5. Run the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

| Variable                | Description                           | Required |
| ----------------------- | ------------------------------------- | -------- |
| `GOOGLE_GEMINI_API_KEY` | Google Gemini API key for AI features | Yes      |

## 🚀 Deployment

CareerPilot-AI supports multiple deployment options:

### Vercel (Recommended - Fastest)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/wajiddaudtamboli/CareerPilot-AI)

**One-Click Deploy:**
1. Click the "Deploy with Vercel" button above
2. Connect your GitHub account
3. Add environment variables in Vercel dashboard:
   - `GOOGLE_GEMINI_API_KEY`
   - `NEXT_PUBLIC_GEMINI_API_KEY` (same as above)
   - `CLERK_SECRET_KEY` (optional)
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` (optional)
4. Click "Deploy"
5. Your app will be live in ~2 minutes!

**Manual Deploy:**
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

### Hostinger / VPS Deployment

**Perfect for custom domains and full control:**

```bash
# Build the project
npm install
npm run build

# Start production server
npm start
# OR with PM2 for process management
pm2 start npm --name "careerpilot" -- start
```

**Quick Setup:**
1. SSH into your Hostinger server
2. Install Node.js 22.x: `curl -fsSL https://deb.nodesource.com/setup_22.x | sudo -E bash - && sudo apt-get install -y nodejs`
3. Clone repository: `git clone https://github.com/wajiddaudtamboli/CareerPilot-AI.git`
4. Install dependencies: `cd CareerPilot-AI && npm install`
5. Create `.env.local` with your API keys
6. Build: `npm run build`
7. Start: `pm2 start npm --name careerpilot -- start`

See [DEPLOYMENT_GUIDE_HOSTINGER.md](./DEPLOYMENT_GUIDE_HOSTINGER.md) for comprehensive guide including:
- Nginx configuration
- SSL certificate setup
- PM2 process management
- Monitoring and backups
- Security hardening

### Docker Deployment

```bash
# Build Docker image
docker build -t careerpilot-ai .

# Run container
docker run -p 3000:3000 \
  -e GOOGLE_GEMINI_API_KEY=your_key \
  -e NEXT_PUBLIC_GEMINI_API_KEY=your_key \
  careerpilot-ai
```

### Environment Variables for Production

**Required:**
- `GOOGLE_GEMINI_API_KEY` - Get from [Google AI Studio](https://aistudio.google.com/app/apikey)
- `NEXT_PUBLIC_GEMINI_API_KEY` - Same value as above

**Optional:**
- `NEXT_PUBLIC_YOUTUBE_API_KEY` - For video content
- `CLERK_SECRET_KEY` - For authentication
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - For authentication

### Production Checklist

Before deploying to production:

- [x] Build completes without errors: `npm run build`
- [x] All environment variables set correctly
- [x] API keys are valid and not hardcoded
- [x] Error handling implemented in all API routes
- [x] Fallback systems in place for missing API keys
- [x] Security headers configured
- [x] CORS properly configured
- [ ] SSL certificate installed (for custom domains)
- [ ] Domain DNS properly configured
- [ ] Monitoring and error tracking setup (optional: Sentry)
- [ ] Backups configured (for VPS deployments)

**See [PRODUCTION_READY.md](./PRODUCTION_READY.md) for complete production readiness audit.**

<pre>

🧑‍💼 User (Job Seeker)
      │
      ▼
🚪 Entry Point (Sign Up / Guest)
      │
      ▼
🎯 Identify Career Intent
      │
      ▼
🧭 Department & Interest Mapping
      │
      ▼
🧠 Role Alignment
      │
      ▼
🧬 Role Recommendation
      │
      ▼
🛣️ Learning Path Generation
      │
      ▼
📚 Skill Gap Analyzer
      │
      ▼
📘 Learning Recommendation
      │
      ▼
🧪 Project Suggestions
      │
      ▼
📄 Resume Optimization
      │
      ▼
🔧 Career Toolbox
      │
      ▼
💼 Job Matching Engine
      │
      ▼
🧠 Job Fit Assessment
 ┌────────────────────┬────────────────────┐
 ▼                    ▼
🎉 Job Matched    📝 Shortlisted for Roles

</pre>
</div>

---

## 🧠 System Architecture & Workflow

![System Architecture](./public/projectsho# 🚀 Execution Plan

## 📌 Phase 1: Career Planning
- Department-wise Job Roles
- Check My Role
- Role Roadmap

## 📌 Phase 2: Learning & Development
- Certifications
- Real Time Projects
- Competitions
- Aptitude Learning Platform

## 📌 Phase 3: Interview Preparation
- Mock Interviews
- Soft Skills
- Coding Round
- Resume Preparation

## 📌 Phase 4: Final Prototype
- Hiring Platforms
- Superset Drives
- Internship Platforms
- Hiring Challenges
- MNC Career Portals
- Startup Database
- Remote Hiring DBt/4.png)

---

## ⚙️ Tech Stack

| Layer      | Technology            |
| ---------- | --------------------- |
| Frontend   | Next.js, Tailwind CSS |
| Backend    | Next.js (API routes)  |
| UI Library | Shadcn                |
| AI Engine  | Gemini Flash 1.5 API  |

---

## 🛠 Run Instructions

```bash
git clone https://github.com/wajiddaudtamboli/
npm install
```

Create `.env` file with:

```
NEXT_PUBLIC_GEMINI_API_KEY=AIzaSyCNYe0btYtX9rZnd5Dg0kmnWRZw5I2byNI
NEXT_PUBLIC_YOUTUBE_API_KEY=your_key_here
```

Start the dev server:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🔭 Future Scope

- 📱 Mobile App (Multi-language + Offline Support)
- 🧠 Advanced ML-based Feedback Loop
- 🏛 Government Scheme Integration
- 🧑‍🏫 Human-AI Hybrid Validation
- 🎯 Micro-certifications & Career Tests

---

## 📌 Utility & Impact

| Sector         | Use Case                              |
| -------------- | ------------------------------------- |
| 🎓 Colleges    | T&P Cell integrations for placements  |
| 💻 EdTech      | Plug-in AI Career Coach for LMS       |
| 🏢 Companies   | Early talent mapping & assessments    |
| 🏛 Government   | Skill development for rural students  |
| 🔍 Job Portals | Resume-JD Mapping + Auto-Optimization |

---

## 👨‍💻 Authors

| Name                   | Role                    | GitHub                                                                                                                                        | LinkedIn                                                                                                                                                                                                                                                                       |
| ---------------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Wajid Daud Tamboli** | 💻 Full Stack Developer | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/wajiddaudtamboli/) | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/wajid-daud-tamboli-3217b031a)                                                                                                        |
| **Laxmi Javalkote**    | 🎨 Frontend Developer   | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()                                     | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/laxmi-javalkote-9a8626259?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Bsc9ZxXccT2ioXSTTG%2BZ8sQ%3D%3D)     |
| **Shaikh Parvej**      | ⚙️ Backend Developer    | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/shaikhparvej)      | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/shaikh-parvej-ab570427a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BEaB%2BmIaaRy%2BB%2Bh%2FB03gGFw%3D%3D) |
| **Sakshi Madgundi**    | 🎯 UI/UX Designer       | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()                                     | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)]()                                                                                                                                                                |
| **Bagwan Zaid**        | 🔬 Research             | [![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)]()                                     | [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/zaid-bagwan-bb3127289?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B3jhfQCkZTtmjyN3nSA%2Bbyw%3D%3D)         |

## 💭 Thoughts of Team

> "A degree ≠ a job, but with the right skills and direction, it can be."

we believe that every student deserves a fair shot at success, regardless of their background or college tier. Our goal is to bridge the gap between academic learning and industry expectations using the power of AI and personalized education.

We built this platform to:

Empower students to discover their true potential

Provide tools that make job preparation smarter and more accessible

> _ "Don’t just get placed. Get prepared. Get empowered......"_

---

> Built with ❤ by Wajid Daud Tamboli

---
