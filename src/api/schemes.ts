import { Hono } from 'hono'
import { schemes as schemeData } from '../data/schemes'

export const schemes = new Hono()

// GET /api/schemes — List all schemes with optional filters
schemes.get('/', (c) => {
    const category = c.req.query('category')
    const sector = c.req.query('sector')
    const search = c.req.query('search')?.toLowerCase()

    let filtered = schemeData

    if (category) {
        filtered = filtered.filter(s => s.category === category)
    }

    if (sector) {
        filtered = filtered.filter(s => s.sector.includes(sector))
    }

    if (search) {
        filtered = filtered.filter(s =>
            s.name.toLowerCase().includes(search) ||
            s.description.toLowerCase().includes(search) ||
            s.ministry.toLowerCase().includes(search) ||
            s.sector.some(sec => sec.toLowerCase().includes(search))
        )
    }

    return c.json({
        success: true,
        count: filtered.length,
        data: filtered
    })
})

// GET /api/schemes/:id — Get single scheme
schemes.get('/:id', (c) => {
    const id = c.req.param('id')
    const scheme = schemeData.find(s => s.id === id)

    if (!scheme) {
        return c.json({ error: 'Scheme not found' }, 404)
    }

    return c.json({ success: true, data: scheme })
})

// GET /api/schemes/recommended/:riskProfile — Get recommended schemes
schemes.get('/recommended/:riskProfile', (c) => {
    const riskProfile = c.req.param('riskProfile')
    const profileType = c.req.query('profileType')

    let recommended = schemeData

    // Filter by entrepreneur-focused schemes for entrepreneurs
    if (profileType === 'Entrepreneur') {
        recommended = schemeData.filter(s =>
            s.sector.includes('All') ||
            s.ministry.toLowerCase().includes('msme') ||
            s.ministry.toLowerCase().includes('startup') ||
            s.name.toLowerCase().includes('mudra') ||
            s.name.toLowerCase().includes('startup') ||
            s.name.toLowerCase().includes('stand-up')
        )
    }

    return c.json({
        success: true,
        riskProfile,
        profileType: profileType || 'General',
        count: recommended.length,
        data: recommended.slice(0, 6) // Return top 6
    })
})

// GET /api/schemes/stats — Get scheme statistics
schemes.get('/meta/stats', (c) => {
    const central = schemeData.filter(s => s.category === 'Central Government').length
    const state = schemeData.filter(s => s.category === 'State Government').length
    const rollingDeadline = schemeData.filter(s => s.deadline.includes('Rolling')).length

    return c.json({
        success: true,
        data: {
            total: schemeData.length,
            centralGovernment: central,
            stateGovernment: state,
            sectorSpecific: schemeData.length - central - state,
            rollingDeadlines: rollingDeadline,
            sectors: [...new Set(schemeData.flatMap(s => s.sector))].filter(s => s !== 'All')
        }
    })
})
