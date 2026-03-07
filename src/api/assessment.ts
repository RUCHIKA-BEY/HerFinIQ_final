import { Hono } from 'hono'

export const assessment = new Hono()

// POST /api/assessment/submit — Save assessment results
assessment.post('/submit', async (c) => {
    try {
        const body = await c.req.json()
        const { literacyScore, riskProfile, confidenceScore, userId } = body

        if (literacyScore === undefined || !riskProfile || confidenceScore === undefined) {
            return c.json({ error: 'Missing required fields' }, 400)
        }

        const level =
            confidenceScore < 30 ? 1
                : confidenceScore < 50 ? 2
                    : confidenceScore < 70 ? 3
                        : 4

        const recommendations = {
            Conservative: [
                'Start with Fixed Deposits and Liquid Mutual Funds',
                'Explore Government saving schemes like PPF, Sukanya Samridhi Yojana',
                'Build an emergency fund of 6 months expenses first',
                'Complete Basics of Investing module'
            ],
            Moderate: [
                'Begin with Balanced/Hybrid Mutual Funds via SIP',
                'Consider ELSS for tax-saving under Section 80C',
                'Explore MUDRA Yojana if you are an entrepreneur',
                'Complete SIP Investing and Mutual Funds modules'
            ],
            Aggressive: [
                'Start with Large-cap Equity Funds and gradually explore mid-cap',
                'Consider direct equity investing after completing Stock Market module',
                'Diversify across equity, debt, and gold',
                'Join the community for advanced investing discussions'
            ]
        }

        const result = {
            userId,
            literacyScore,
            riskProfile,
            confidenceScore,
            level,
            levelTitle: ['', 'Savers', 'Learner', 'Explorer', 'Investor', 'Strategist', 'Expert'][level] || 'Member',
            xp: Math.round(literacyScore + confidenceScore * 5),
            recommendations: recommendations[riskProfile as keyof typeof recommendations] || recommendations.Moderate,
            nextSteps: confidenceScore < 40
                ? ['Complete Basics of Investing module', 'Set up your first SIP with ₹500', 'Ask AI Mentor your first question']
                : confidenceScore < 70
                    ? ['Complete Mutual Funds module', 'Start SIP in a balanced fund', 'Join the community to learn from others']
                    : ['Explore Stock Market module', 'Diversify your portfolio', 'Set long-term investment goals'],
            assessedAt: new Date().toISOString()
        }

        return c.json({ success: true, data: result })
    } catch (err) {
        return c.json({ error: 'Internal server error' }, 500)
    }
})

// GET /api/assessment/questions — Return assessment questions
assessment.get('/questions', (c) => {
    const questions = {
        literacy: [
            { id: 'l1', question: 'What does inflation mean?', options: ['Prices increasing over time', 'Stock market going up', 'Bank interest rates rising', 'Government printing money'], correct: 0 },
            { id: 'l2', question: 'What does SIP stand for in investing?', options: ['Systematic Investment Plan', 'Special Interest Policy', 'Stock Investment Portfolio', 'Savings Interest Plan'], correct: 0 },
            { id: 'l3', question: 'Which gives better long-term returns on average?', options: ['Fixed Deposit', 'Keeping cash at home', 'Equity Mutual Funds', 'Credit card savings'], correct: 2 },
            { id: 'l4', question: 'What is a mutual fund?', options: ['A government-run bank', 'A pooled investment managed by professionals', 'A type of insurance policy', 'A lottery-style investment'], correct: 1 },
            { id: 'l5', question: 'What is compound interest?', options: ['Interest only on principal', 'Interest earns interest over time', 'Interest paid monthly always', 'Interest reduces year by year'], correct: 1 },
        ],
        risk: [
            { id: 'r1', question: 'If your investment falls 20%, you would:', options: ['Sell everything immediately', 'Feel anxious but hold', 'Wait calmly for recovery', 'Invest more — opportunity!'], riskScores: [0, 1, 2, 3] },
            { id: 'r2', question: 'Your main financial priority:', options: ['Protect my money — minimum risk', 'Balance — some risk for returns', 'Moderate growth — some risk OK', 'Maximum growth — high risk OK'], riskScores: [0, 1, 2, 3] },
            { id: 'r3', question: 'Investment horizon:', options: ['Less than 1 year', '1-3 years', '3-7 years', '7+ years'], riskScores: [0, 1, 2, 3] },
            { id: 'r4', question: 'If market predicted to fall 20%:', options: ['Sell all investments', 'Sell some to be safer', 'Do nothing and wait', 'Invest more — buying opportunity!'], riskScores: [0, 1, 2, 3] },
        ],
        confidence: [
            { id: 'c1', question: 'I feel confident making investment decisions:', options: ['Not at all — scared of mistakes', 'Somewhat — need guidance', 'Fairly — learning and comfortable', 'Very confident — know what I do'], confScores: [0, 1, 2, 3] },
            { id: 'c2', question: 'When thinking about investing, I feel:', options: ['Very anxious', 'A bit nervous', 'Cautiously optimistic', 'Excited — I see the opportunity'], confScores: [0, 1, 2, 3] },
            { id: 'c3', question: 'I believe in long-term investing for wealth building:', options: ['No — need quick access', 'Maybe — not sure', 'Yes — understand the value', 'Absolutely — clear long-term goals'], confScores: [0, 1, 2, 3] },
            { id: 'c4', question: 'Comfortable with financial numbers?', options: ['Very uncomfortable', 'Somewhat uncomfortable', 'Fairly comfortable', 'Very comfortable'], confScores: [0, 1, 2, 3] },
        ]
    }
    return c.json({ success: true, data: questions })
})
