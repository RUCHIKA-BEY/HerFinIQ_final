import { Hono } from 'hono'
import { languagePage } from './pages/language'
import { loginPage } from './pages/login'
import { onboardingPage } from './pages/onboarding'
import { dashboardPage } from './pages/dashboard'
import { learningPage } from './pages/learning'
import { aiAssistantPage } from './pages/ai-assistant'
import { plannerPage } from './pages/planner'
import { progressPage } from './pages/progress'
import { profilePage } from './pages/profile'
import { roadmapPage } from './pages/roadmap'
import { communityPage, mentorshipPage } from './pages/community'
import { toolsPage } from './pages/tools'
import { schemesPage } from './pages/schemes'
import { simulatorPage } from './pages/simulator'
import { entrepreneurPage } from './pages/entrepreneur'
import { assessment } from './api/assessment'
import { schemes } from './api/schemes'

const app = new Hono()

// ─── Language Selection (Root) ─────────────────────────────────────────────
app.get('/', (c) => {
  return c.html(languagePage())
})

// ─── Auth Pages ────────────────────────────────────────────────────────────
app.get('/login', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(loginPage(lang))
})

// ─── Onboarding / Assessment ───────────────────────────────────────────────
app.get('/onboarding', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(onboardingPage(lang))
})

app.get('/assessment', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(onboardingPage(lang))
})

// ─── Main App Pages ────────────────────────────────────────────────────────
app.get('/home', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.redirect('/login?lang=' + lang)
})

app.get('/dashboard', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(dashboardPage(lang))
})

app.get('/learning', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(learningPage(lang))
})

app.get('/ai-assistant', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(aiAssistantPage(lang))
})

app.get('/planner', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(plannerPage(lang))
})

app.get('/progress', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(progressPage(lang))
})

app.get('/profile', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(profilePage(lang))
})

app.get('/roadmap', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(roadmapPage(lang))
})

app.get('/community', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(communityPage(lang))
})

app.get('/mentorship', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(mentorshipPage(lang))
})

app.get('/tools', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(toolsPage(lang))
})

app.get('/schemes', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(schemesPage(lang))
})

app.get('/simulator', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(simulatorPage(lang))
})

app.get('/entrepreneur', (c) => {
  const lang = c.req.query('lang') || 'en'
  return c.html(entrepreneurPage(lang))
})

// ─── API Routes ────────────────────────────────────────────────────────────
app.route('/api/assessment', assessment)
app.route('/api/schemes', schemes)

// ─── Health Check ──────────────────────────────────────────────────────────
app.get('/api/health', (c) => {
  return c.json({
    status: 'ok',
    app: 'HerFinIQ',
    version: '1.0.0',
    description: 'Financial Confidence Platform for Women in India'
  })
})

export default app
