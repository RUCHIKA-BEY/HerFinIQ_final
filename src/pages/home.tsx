export const homePage = (lang: 'en' | 'hi' | 'kn' | 'ta' | 'te' = 'en') => {
  const translations = {
    en: {
      title: 'SheLaunch AI — Startup Growth Advisor',
      navLinks: { modules: 'Modules', how: 'How It Works', impact: 'Impact' },
      navBtns: { signIn: 'Sign In', startFree: 'Start Free' },
      heroBadge: 'AI-Powered Startup Growth Advisor',
      heroTitlePrefix: 'Your ',
      heroTitleEm: 'intelligent',
      heroTitleSuffix: ' pathway<br>from idea to funded startup',
      heroSub: 'Personalized readiness scores, funding roadmaps, scheme discovery, and AI mentorship — built exclusively for women entrepreneurs.',
      heroActions: { assessment: 'Start Readiness Assessment', mentor: 'Talk to AI Mentor' },
      stats: { schemes: 'Government Schemes', partners: 'Incubator Partners', modules: 'AI Modules', sdg: 'UN SDGs Aligned' },
      preview: { title: 'SheLaunch AI Dashboard', status: 'Live Analysis', readiness: 'Readiness Score', growthReady: 'Growth Ready · MVP Stage', fundingTarget: '₹20L Target', sectorMatch: 'Sector Match', schemesMatched: '✓ 3 Schemes Matched', mentorTag: 'AI Mentor · just now', mentorAdvice: 'Your market validation is strong. Focus on financial projections to attract angel investors within the next 90 days — your traction metrics are compelling.' },
      modules: { label: '5 Intelligent Modules', title: 'Everything you need to launch & grow', sub: 'One unified AI platform replacing five different portals, advisors, and directories — built exclusively for women entrepreneurs.' },
      moduleCards: [
        { name: 'AI Mentor', desc: 'Conversational AI mentor powered by Gemini. Get pitch analysis, business model validation, and strategic guidance in real time.', tags: ['Pitch Analysis', 'PDF Upload', 'Multimodal AI'], link: 'Start Mentoring' },
        { name: 'Readiness Assessment', desc: 'AI-powered startup maturity scoring. Get your 0–100 readiness score with a personalized 30–60 day actionable roadmap.', tags: ['0–100 Score', 'AI Scoring', 'Roadmap'], link: 'Assess Now' },
        { name: 'Funding Pathway Advisor', desc: 'RAG-powered funding strategy generation. Get a sequenced Grant → Incubator → Angel → VC roadmap tailored to your startup.', tags: ['RAG Architecture', 'Funding Roadmap', 'Timeline'], link: 'Plan Funding' },
        { name: 'Govt Scheme Aggregator', desc: '12+ curated, verified government schemes for women entrepreneurs. Filter by sector, stage, and funding type instantly.', tags: ['12+ Schemes', 'Verified Data', 'Smart Filter'], link: 'Explore Schemes' },
        { name: 'Incubator Aggregator', desc: 'AI-powered incubator matching. Discover 12+ top incubators with match scores, equity details, and application guidance.', tags: ['AI Matching', '12+ Incubators', 'Match Score'], link: 'Find Incubators' }
      ],
      process: { label: 'Process', title: 'From registration to funded startup', sub: 'A structured four-step journey designed to take you from assessment to investment-ready in the shortest possible time.' },
      steps: [
        { num: '01', title: 'Assessment', desc: 'Complete the startup readiness form. AI scores your maturity across 6 dimensions and identifies your growth gaps.' },
        { num: '02', title: 'Funding Plan', desc: 'AI generates your personalized funding roadmap with matched schemes and incubators tailored to your sector and stage.' },
        { num: '03', title: 'Discover & Apply', desc: 'Explore matched schemes and incubators. Apply with AI-prepared checklists and eligibility pre-screening.' },
        { num: '04', title: 'Get Mentored', desc: 'Chat with AI Mentor for pitch refinement, compliance guidance, and continuous growth strategy support.' }
      ],
      impact: { label: 'Impact', title: 'Aligned with UN Sustainable Development Goals', sub: 'SheLaunch AI drives measurable impact across four global development goals.' },
      sdgs: [
        { num: '5', title: 'Gender Equality', desc: 'Empowering women through AI mentorship and democratized funding access.' },
        { num: '8', title: 'Decent Work & Growth', desc: 'Accelerating startup sustainability and driving measurable economic impact.' },
        { num: '9', title: 'Industry & Innovation', desc: 'AI-powered digital infrastructure delivering equal innovation access.' },
        { num: '10', title: 'Reduced Inequalities', desc: 'Democratizing access to government schemes, mentors, and capital for all.' }
      ],
      cta: { title: 'Ready to launch<br>your startup?', sub: 'Join thousands of women entrepreneurs leveraging AI to accelerate their startup journey from idea to funded.', btns: { assessment: 'Start Free Assessment', mentor: 'Talk to AI Mentor' } },
      footer: { logo: 'SheLaunch AI', impacts: 'Aligned with UN SDG Goals 5 · 8 · 9 · 10', copyright: '© 2025 SheLaunch AI. Built for women entrepreneurs.' }
    },
    hi: {
      title: 'SheLaunch AI — स्टार्टअप विकास सलाहकार',
      navLinks: { modules: 'मॉड्यूल', how: 'यह कैसे काम करता है', impact: 'प्रभाव' },
      navBtns: { signIn: 'साइन इन', startFree: 'मुफ्त शुरू करें' },
      heroBadge: 'एआई-संचालित स्टार्टअप विकास सलाहकार',
      heroTitlePrefix: 'आपका ',
      heroTitleEm: 'बुद्धिमान',
      heroTitleSuffix: ' मार्ग<br>विचार से वित्त पोषित स्टार्टअप तक',
      heroSub: 'व्यक्तिगत तैयारी स्कोर, फंडिंग रोडमैप, योजना खोज, और एआई मेंटरशिप — विशेष रूप से महिला उद्यमियों के लिए बनाया गया है।',
      heroActions: { assessment: 'तैयारी मूल्यांकन शुरू करें', mentor: 'एआई मेंटर से बात करें' },
      stats: { schemes: 'सरकारी योजनाएं', partners: 'इनक्यूबेटर भागीदार', modules: 'एआई मॉड्यूल', sdg: 'यूएन एसडीजी संरेखित' },
      preview: { title: 'SheLaunch AI डैशबोर्ड', status: 'लाइव विश्लेषण', readiness: 'तैयारी स्कोर', growthReady: 'विकास के लिए तैयार · एमवीपी चरण', fundingTarget: '₹20L लक्ष्य', sectorMatch: 'सेक्टर मिलान', schemesMatched: '✓ 3 योजनाएं मेल खाती हैं', mentorTag: 'एआई मेंटर · अभी', mentorAdvice: 'आपका बाजार सत्यापन मजबूत है। अगले 90 दिनों के भीतर एंजेल निवेशकों को आकर्षित करने के लिए वित्तीय अनुमानों पर ध्यान केंद्रित करें — आपके ट्रैक्शन मेट्रिक्स सम्मोहक हैं।' },
      modules: { label: '5 बुद्धिमान मॉड्यूल', title: 'लॉन्च और बढ़ने के लिए आपको जो कुछ भी चाहिए', sub: 'एक एकीकृत एआई प्लेटफॉर्म जो पांच अलग-अलग पोर्टलों, सलाहकारों और निर्देशिकाओं की जगह लेता है — विशेष रूप से महिला उद्यमियों के लिए बनाया गया है।' },
      moduleCards: [
        { name: 'एआई मेंटर', desc: 'जेमिनी द्वारा संचालित संवादात्मक एआई मेंटर। वास्तविक समय में पिच विश्लेषण, बिजनेस मॉडल सत्यापन और रणनीतिक मार्गदर्शन प्राप्त करें।', tags: ['पिच विश्लेषण', 'पीडीएफ अपलोड', 'मल्टीमॉडल एआई'], link: 'मेंटरिंग शुरू करें' },
        { name: 'तैयारी मूल्यांकन', desc: 'एआई-संचालित स्टार्टअप परिपक्वता स्कोरिंग। व्यक्तिगत 30-60 दिनों के कार्रवाई योग्य रोडमैप के साथ अपना 0-100 तैयारी स्कोर प्राप्त करें।', tags: ['0-100 स्कोर', 'एआई स्कोरिंग', 'रोडमैप'], link: 'अभी मूल्यांकन करें' },
        { name: 'फंडिंग पाथवे सलाहकार', desc: 'आरएजी-संचालित फंडिंग रणनीति निर्माण। अपने स्टार्टअप के अनुरूप एक अनुक्रमित अनुदान → इनक्यूबेटर → एंजेल → वीसी रोडमैप प्राप्त करें।', tags: ['आरएजी आर्किटेक्चर', 'फंडिंग रोडमैप', 'समयरेखा'], link: 'फंडिंग की योजना बनाएं' },
        { name: 'सरकारी योजना एग्रीगेटर', desc: 'महिला उद्यमियों के लिए 12+ क्यूरेटेड, सत्यापित सरकारी योजनाएं। सेक्टर, चरण और फंडिंग प्रकार द्वारा तुरंत फ़िल्टर करें।', tags: ['12+ योजनाएं', 'सत्यापित डेटा', 'स्मार्ट फ़िल्टर'], link: 'योजनाएं खोजें' },
        { name: 'इनक्यूबेटर एग्रीगेटर', desc: 'एआई-संचालित इनक्यूबेटर मिलान। मिलान स्कोर, इक्विटी विवरण और आवेदन मार्गदर्शन के साथ 12+ शीर्ष इनक्यूबेटरों की खोज करें।', tags: ['एआई मिलान', '12+ इनक्यूबेटर', 'मैच स्कोर'], link: 'इनक्यूबेटर खोजें' }
      ],
      process: { label: 'प्रक्रिया', title: 'पंजीकरण से वित्त पोषित स्टार्टअप तक', sub: 'सबसे कम संभव समय में आपको मूल्यांकन से लेकर निवेश-तैयार तक ले जाने के लिए डिज़ाइन की गई एक संरचित चार-चरणीय यात्रा।' },
      steps: [
        { num: '01', title: 'मूल्यांकन', desc: 'स्टार्टअप तैयारी फॉर्म पूरा करें। एआई 6 आयामों में आपकी परिपक्वता को स्कोर करता है और आपके विकास अंतराल की पहचान करता है।' },
        { num: '02', title: 'फंडिंग योजना', desc: 'एआई आपके सेक्टर और चरण के अनुरूप मिलान वाली योजनाओं और इनक्यूबेटरों के साथ आपका व्यक्तिगत फंडिंग रोडमैप तैयार करता है।' },
        { num: '03', title: 'खोजें और आवेदन करें', desc: 'मिलान वाली योजनाओं और इनक्यूबेटरों का पता लगाएं। एआई-तैयार चेकलिस्ट और पात्रता प्री-स्क्रीनिंग के साथ आवेदन करें।' },
        { num: '04', title: 'मेंटरशिप प्राप्त करें', desc: 'पिच शोधन, अनुपालन मार्गदर्शन और निरंतर विकास रणनीति समर्थन के लिए एआई मेंटर के साथ चैट करें।' }
      ],
      impact: { label: 'प्रभाव', title: 'संयुक्त राष्ट्र सतत विकास लक्ष्यों के साथ संरेखित', sub: 'SheLaunch AI चार वैश्विक विकास लक्ष्यों में औसत दर्जे का प्रभाव डालता है।' },
      sdgs: [
        { num: '5', title: 'लैंगिक समानता', desc: 'एआई मेंटरशिप और लोकतांत्रिक फंडिंग पहुंच के माध्यम से महिलाओं को सशक्त बनाना।' },
        { num: '8', title: 'उचित कार्य और विकास', desc: 'स्टार्टअप स्थिरता में तेजी लाना और औसत दर्जे का आर्थिक प्रभाव डालना।' },
        { num: '9', title: 'उद्योग और नवाचार', desc: 'समान नवाचार पहुंच प्रदान करने वाला एआई-संचालित डिजिटल बुनियादी ढांचा।' },
        { num: '10', title: 'असमानताओं में कमी', desc: 'सभी के लिए सरकारी योजनाओं, सलाहकारों और पूंजी तक पहुंच का लोकतंत्रीकरण।' }
      ],
      cta: { title: 'अपना स्टार्टअप लॉन्च करने के लिए<br>तैयार हैं?', sub: 'विचार से लेकर वित्त पोषित होने तक अपने स्टार्टअप की यात्रा को तेज करने के लिए एआई का लाभ उठाने वाली हजारों महिला उद्यमियों में शामिल हों।', btns: { assessment: 'मुफ्त मूल्यांकन शुरू करें', mentor: 'एआई मेंटर से बात करें' } },
      footer: { logo: 'SheLaunch AI', impacts: 'यूएन एसडीजी लक्ष्यों 5 · 8 · 9 · 10 के साथ संरेखित', copyright: '© 2025 SheLaunch AI. महिला उद्यमियों के लिए बनाया गया।' }
    },
    kn: {
      title: 'SheLaunch AI — ಸ್ಟಾರ್ಟ್ಅಪ್ ಬೆಳವಣಿಗೆಯ ಸಲಹೆಗಾರ',
      navLinks: { modules: 'ಮಾಡ್ಯೂಲ್‌ಗಳು', how: 'ಇದು ಹೇಗೆ ಕೆಲಸ ಮಾಡುತ್ತದೆ', impact: 'ಪರಿಣಾಮ' },
      navBtns: { signIn: 'ಸೈನ್ ಇನ್', startFree: 'ಉಚಿತವಾಗಿ ಪ್ರಾರಂಭಿಸಿ' },
      heroBadge: 'AI-ಚಾಲಿತ ಸ್ಟಾರ್ಟ್ಅಪ್ ಬೆಳವಣಿಗೆಯ ಸಲಹೆಗಾರ',
      heroTitlePrefix: 'ನಿಮ್ಮ ',
      heroTitleEm: 'ಬುದ್ಧಿವಂತ',
      heroTitleSuffix: ' ಮಾರ್ಗ<br>ಚಿಂತನೆಯಿಂದ ಧನಸಹಾಯ ಪಡೆದ ಸ್ಟಾರ್ಟ್ಅಪ್ವರೆಗೆ',
      heroSub: 'ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಸಿದ್ಧತೆಯ ಅಂಕಗಳು, ಧನಸಹಾಯದ ಮಾರ್ಗಸೂಚಿಗಳು, ಯೋಜನೆಗಳ ಅನ್ವೇಷಣೆ ಮತ್ತು AI ಮಾರ್ಗದರ್ಶನ — ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.',
      heroActions: { assessment: 'ಸಿದ್ಧತೆಯ ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ', mentor: 'AI ಮಾರ್ಗದರ್ಶಕರೊಂದಿಗೆ ಮಾತನಾಡಿ' },
      stats: { schemes: 'ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು', partners: 'ಇನ್ಕುಬೇಟರ್ ಪಾಲುದಾರರು', modules: 'AI ಮಾಡ್ಯೂಲ್‌ಗಳು', sdg: 'UN SDG ಗಳು ಜೋಡಣೆಗೊಂಡಿವೆ' },
      preview: { title: 'SheLaunch AI ಡ್ಯಾಶ್‌ಬೋರ್ಡ್', status: 'ಲೈವ್ ವಿಶ್ಲೇಷಣೆ', readiness: 'ಸಿದ್ಧತೆಯ ಅಂಕಗಳು', growthReady: 'ಬೆಳವಣಿಗೆಗೆ ಸಿದ್ಧವಾಗಿದೆ · MVP ಹಂತ', fundingTarget: '₹20L ಗುರಿ', sectorMatch: 'ವಲಯದ ಹೊಂದಾಣಿಕೆ', schemesMatched: '✓ 3 ಯೋಜನೆಗಳು ಹೊಂದಾಣಿಕೆಯಾಗಿವೆ', mentorTag: 'AI ಮಾರ್ಗದರ್ಶಕ · ಇದೀಗ', mentorAdvice: 'ನಿಮ್ಮ ಮಾರುಕಟ್ಟೆ ಮೌಲ್ಯೀಕರಣವು ಬಲವಾಗಿದೆ. ಮುಂದಿನ 90 ದಿನಗಳಲ್ಲಿ ಏಂಜಲ್ ಹೂಡಿಕೆದಾರರನ್ನು ಆಕರ್ಷಿಸಲು ಹಣಕಾಸಿನ ಮುನ್ಸೂಚನೆಗಳ ಮೇಲೆ ಗಮನ ಕೇಂದ್ರೀಕರಿಸಿ — ನಿಮ್ಮ ಟ್ರ್ಯಾಕ್ಷನ್ ಮೆಟ್ರಿಕ್‌ಗಳು ಆಕರ್ಷಕವಾಗಿವೆ.' },
      modules: { label: '5 ಬುದ್ಧಿವಂತ ಮಾಡ್ಯೂಲ್‌ಗಳು', title: 'ಪ್ರಾರಂಭಿಸಲು ಮತ್ತು ಬೆಳೆಯಲು ನಿಮಗೆ ಬೇಕಾದ ಎಲ್ಲವೂ', sub: 'ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗಾಗಿ ವಿಶೇಷವಾಗಿ ನಿರ್ಮಿಸಲಾದ ಐದು ವಿಭಿನ್ನ ಪೋರ್ಟಲ್‌ಗಳು, ಸಲಹೆಗಾರರು ಮತ್ತು ಡೈರೆಕ್ಟರಿಗಳನ್ನು ಬದಲಿಸುವ ಒಂದು ಏಕೀಕೃತ AI ವೇದಿಕೆ.' },
      moduleCards: [
        { name: 'AI ಮಾರ್ಗದರ್ಶಕ', desc: 'ಜೆಮಿನಿ ಚಾಲಿತ ಸಂವಾದಾತ್ಮಕ AI ಮಾರ್ಗದರ್ಶಕ. ನೈಜ ಸಮಯದಲ್ಲಿ ಪಿಚ್ ವಿಶ್ಲೇಷಣೆ, ವ್ಯಾಪಾರ ಮಾದರಿ ಮೌಲ್ಯೀಕರಣ ಮತ್ತು ಕಾರ್ಯತಂತ್ರದ ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ.', tags: ['ಪಿಚ್ ವಿಶ್ಲೇಷಣೆ', 'PDF ಅಪ್‌ಲೋಡ್', 'ಮಲ್ಟಿಮೋಡಲ್ AI'], link: 'ಮಾರ್ಗದರ್ಶನ ಪ್ರಾರಂಭಿಸಿ' },
        { name: 'ಸಿದ್ಧತೆಯ ಮೌಲ್ಯಮಾಪನ', desc: 'AI-ಚಾಲಿತ ಸ್ಟಾರ್ಟ್ಅಪ್ ಪಕ್ವತೆಯ ಸ್ಕೋರಿಂಗ್. ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ 30-60 ದಿನಗಳ ಕಾರ್ಯನ್ಮುಖ ಮಾರ್ಗಸೂಚಿಯೊಂದಿಗೆ ನಿಮ್ಮ 0-100 ಸಿದ್ಧತೆಯ ಅಂಕವನ್ನು ಪಡೆಯಿರಿ.', tags: ['0-100 ಅಂಕಗಳು', 'AI ಸ್ಕೋರಿಂಗ್', 'ಮಾರ್ಗಸೂಚಿ'], link: 'ಈಗಲೇ ಮೌಲ್ಯಮಾಪನ ಮಾಡಿ' },
        { name: 'ಧನಸಹಾಯ ಮಾರ್ಗದ ಸಲಹೆಗಾರ', desc: 'RAG-ಚಾಲಿತ ಧನಸಹಾಯ ಕಾರ್ಯತಂತ್ರದ ರಚನೆ. ನಿಮ್ಮ ಸ್ಟಾರ್ಟ್ಅಪ್‌ಗೆ ಅನುಗುಣವಾಗಿ ಅನುಕ್ರಮವಾದ ಅನುದಾನ → ಇನ್ಕುಬೇಟರ್ → ಏಂಜಲ್ → VC ಮಾರ್ಗಸೂಚಿಯನ್ನು ಪಡೆಯಿರಿ.', tags: ['RAG ಆರ್ಕಿಟೆಕ್ಚರ್', 'ಧನಸಹಾಯದ ಮಾರ್ಗಸೂಚಿ', 'ಸಮಯದ ಮಿತಿ'], link: 'ಧನಸಹಾಯ ಯೋಜನೆ ಮಾಡಿ' },
        { name: 'ಸರ್ಕಾರಿ ಯೋಜನೆ ಸಂಗ್ರಾಹಕ', desc: 'ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗಾಗಿ 12+ ಕ್ಯುರೇಟೆಡ್, ಪರಿಶೀಲಿಸಿದ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು. ವಲಯ, ಹಂತ ಮತ್ತು ಧನಸಹಾಯ ಪ್ರಕಾರದ ಮೂಲಕ ತಕ್ಷಣ ಫಿಲ್ಟರ್ ಮಾಡಿ.', tags: ['12+ ಯೋಜನೆಗಳು', 'ಪರಿಶೀಲಿಸಿದ ಡೇಟಾ', 'ಸ್ಮಾರ್ಟ್ ಫಿಲ್ಟರ್'], link: 'ಯೋಜನೆಗಳನ್ನು ಅನ್ವೇಷಿಸಿ' },
        { name: 'ಇನ್ಕುಬೇಟರ್ ಸಂಗ್ರಾಹಕ', desc: 'AI-ಚಾಲಿತ ಇನ್ಕುಬೇಟರ್ ಹೊಂದಾಣಿಕೆ. ಹೊಂದಾಣಿಕೆ ಅಂಕಗಳು, ಇಕ್ವಿಟಿ ವಿವರಗಳು ಮತ್ತು ಅರ್ಜಿ ಮಾರ್ಗದರ್ಶನದೊಂದಿಗೆ 12+ ಉನ್ನತ ಇನ್ಕುಬೇಟರ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ.', tags: ['AI ಹೊಂದಾಣಿಕೆ', '12+ ಇನ್ಕುಬೇಟರ್‌ಗಳು', 'ಹೊಂದಾಣಿಕೆ ಅಂಕ'], link: 'ಇನ್ಕುಬೇಟರ್‌ಗಳನ್ನು ಹುಡುಕಿ' }
      ],
      process: { label: 'ಪ್ರಕ್ರಿಯೆ', title: 'ನೋಂದಣಿಯಿಂದ ಧನಸಹಾಯ ಪಡೆದ ಸ್ಟಾರ್ಟ್ಅಪ್ವರೆಗೆ', sub: 'ಕಡಿಮೆ ಸಮಯದಲ್ಲಿ ನಿಮ್ಮನ್ನು ಮೌಲ್ಯಮಾಪನದಿಂದ ಹೂಡಿಕೆಗೆ ಸಿದ್ಧರನ್ನಾಗಿ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾದ ರಚನಾತ್ಮಕ ನಾಲ್ಕು ಹಂತದ ಪ್ರಯಾಣ.' },
      steps: [
        { num: '01', title: 'ಮೌಲ್ಯಮಾಪನ', desc: 'ಸ್ಟಾರ್ಟ್ಅಪ್ ಸಿದ್ಧತೆಯ ಫಾರ್ಮ್ ಅನ್ನು ಪೂರ್ಣಗೊಳಿಸಿ. AI ನಿಮ್ಮ ಪಕ್ವತೆಯನ್ನು 6 ಆಯಾಮಗಳಲ್ಲಿ ಸ್ಕೋರ್ ಮಾಡುತ್ತದೆ ಮತ್ತು ನಿಮ್ಮ ಬೆಳವಣಿಗೆಯ ಅಂತರವನ್ನು ಗುರುತಿಸುತ್ತದೆ.' },
        { num: '02', title: 'ಧನಸಹಾಯ ಯೋಜನೆ', desc: 'AI ನಿಮ್ಮ ವಲಯ ಮತ್ತು ಹಂತಕ್ಕೆ ಅನುಗುಣವಾಗಿ ಹೊಂದಾಣಿಕೆಯ ಯೋಜನೆಗಳು ಮತ್ತು ಇನ್ಕುಬೇಟರ್‌ಗಳೊಂದಿಗೆ ನಿಮ್ಮ ವೈಯಕ್ತಿಕಗೊಳಿಸಿದ ಧನಸಹಾಯದ ಮಾರ್ಗಸೂಚಿಯನ್ನು ರಚಿಸುತ್ತದೆ.' },
        { num: '03', title: 'ಅನ್ವೇಷಿಸಿ ಮತ್ತು ಅನ್ವಯಿಸಿ', desc: 'ಹೊಂದಾಣಿಕೆಯ ಯೋಜನೆಗಳು ಮತ್ತು ಇನ್ಕುಬೇಟರ್‌ಗಳನ್ನು ಅನ್ವೇಷಿಸಿ. AI-ಸಿದ್ಧಪಡಿಸಿದ ಪರಿಶೀಲನಾಪಟ್ಟಿಗಳು ಮತ್ತು ಅರ್ಹತಾ ಪೂರ್ವ-ಸ್ಕ್ರೀನಿಂಗ್‌ನೊಂದಿಗೆ ಅನ್ವಯಿಸಿ.' },
        { num: '04', title: 'ಮಾರ್ಗದರ್ಶನ ಪಡೆಯಿರಿ', desc: 'ಪಿಚ್ ಸುಧಾರಣೆ, ಅನುಸರಣೆ ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ನಿರಂತರ ಬೆಳವಣಿಗೆಯ ಕಾರ್ಯತಂತ್ರದ ಬೆಂಬಲಕ್ಕಾಗಿ AI ಮಾರ್ಗದರ್ಶಕರೊಂದಿಗೆ ಚಾಟ್ ಮಾಡಿ.' }
      ],
      impact: { label: 'ಪರಿಣಾಮ', title: 'ವಿಶ್ವಸಂಸ್ಥೆಯ ಸುಸ್ಥಿರ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳೊಂದಿಗೆ ಜೋಡಣೆಗೊಂಡಿದೆ', sub: 'SheLaunch AI ನಾಲ್ಕು ಜಾಗತಿಕ ಅಭಿವೃದ್ಧಿ ಗುರಿಗಳಲ್ಲಿ ಅಳೆಯಬಹುದಾದ ಪರಿಣಾಮವನ್ನು ಬೀರುತ್ತದೆ.' },
      sdgs: [
        { num: '5', title: 'ಲಿಂಗ ಸಮಾನತೆ', desc: 'AI ಮಾರ್ಗದರ್ಶನ ಮತ್ತು ಪ್ರಜಾಪ್ರಭುತ್ವೀಕರಣಗೊಂಡ ಧನಸಹಾಯದ ಪ್ರವೇಶದ ಮೂಲಕ ಮಹಿಳೆಯರ ಸಬಲೀಕರಣ.' },
        { num: '8', title: 'ಗೌರವಾನ್ವಿತ ಕೆಲಸ ಮತ್ತು ಬೆಳವಣಿಗೆ', desc: 'ಸ್ಟಾರ್ಟ್ಅಪ್ ಸುಸ್ಥಿರತೆಯನ್ನು ವೇಗಗೊಳಿಸುವುದು ಮತ್ತು ಅಳೆಯಬಹುದಾದ ಆರ್ಥಿಕ ಪರಿಣಾಮವನ್ನು ಬೀರುವುದು.' },
        { num: '9', title: 'ಉದ್ಯಮ ಮತ್ತು ನಾವೀನ್ಯತೆ', desc: 'ಸಮಾನ ನಾವೀನ್ಯತೆ ಪ್ರವೇಶವನ್ನು ನೀಡುವ AI-ಚಾಲಿತ ಡಿಜಿಟಲ್ ಮೂಲಸೌಕರ್ಯ.' },
        { num: '10', title: 'ಅಸಮಾನತೆಗಳ ಕಡಿತ', desc: 'ಎಲ್ಲರಿಗೂ ಸರ್ಕಾರಿ ಯೋಜನೆಗಳು, ಮಾರ್ಗದರ್ಶಕರು ಮತ್ತು ಬಂಡವಾಳದ ಪ್ರವೇಶವನ್ನು ಪ್ರಜಾಪ್ರಭುತ್ವೀಕರಣಗೊಳಿಸುವುದು.' }
      ],
      cta: { title: 'ನಿಮ್ಮ ಸ್ಟಾರ್ಟ್ಅಪ್ ಪ್ರಾರಂಭಿಸಲು<br>ಸಿದ್ಧರಿದ್ದೀರಾ?', sub: 'ಚಿಂತನೆಯಿಂದ ಧನಸಹಾಯದವರೆಗೆ ತಮ್ಮ ಸ್ಟಾರ್ಟ್ಅಪ್ ಪ್ರಯಾಣವನ್ನು ವೇಗಗೊಳಿಸಲು AI ಅನ್ನು ಬಳಸಿಕೊಳ್ಳುವ ಸಾವಿರಾರು ಮಹಿಳಾ ಉದ್ಯಮಿಗಳೊಂದಿಗೆ ಸೇರಿ.', btns: { assessment: 'ಉಚಿತ ಮೌಲ್ಯಮಾಪನ ಪ್ರಾರಂಭಿಸಿ', mentor: 'AI ಮಾರ್ಗದರ್ಶಕರೊಂದಿಗೆ ಮಾತನಾಡಿ' } },
      footer: { logo: 'SheLaunch AI', impacts: 'UN SDG ಗುರಿಗಳಾದ 5 · 8 · 9 · 10 ರೊಂದಿಗೆ ಜೋடಣೆಗೊಂಡಿದೆ', copyright: '© 2025 SheLaunch AI. ಮಹಿಳಾ ಉದ್ಯಮಿಗಳಿಗಾಗಿ ನಿರ್ಮಿಸಲಾಗಿದೆ.' }
    },
    ta: {
      title: 'SheLaunch AI — ஸ்டார்ட்அப் வளர்ச்சி ஆலோசகர்',
      navLinks: { modules: 'தொகுதிகள்', how: 'எவ்வாறு செயல்படுகிறது', impact: 'தாக்கம்' },
      navBtns: { signIn: 'உள்நுழைக', startFree: 'இலவசமாகத் தொடங்குங்கள்' },
      heroBadge: 'AI-ஆற்றல் கொண்ட ஸ்டார்ட்அப் வளர்ச்சி ஆலோசகர்',
      heroTitlePrefix: 'உங்கள் ',
      heroTitleEm: 'புத்திசாலித்தனமான',
      heroTitleSuffix: ' பாதை<br>யோசனையிலிருந்து நிதியுதவி பெறும் ஸ்டார்ட்அப் வரை',
      heroSub: 'தனிப்பயனாக்கப்பட்ட தயார்நிலை மதிப்பெண்கள், நிதி வரைபடங்கள், திட்ட அன்வேஷிப்பு மற்றும் AI வழிகாட்டுதல் — பிரத்தியேகமாக பெண் தொழில்முனைவோருக்காக உருவாக்கப்பட்டது.',
      heroActions: { assessment: 'தயார்நிலை மதிப்பீட்டைத் தொடங்குங்கள்', mentor: 'AI வழிகாட்டியுடன் பேசுங்கள்' },
      stats: { schemes: 'அரசு திட்டங்கள்', partners: 'இன்குபேட்டர் பங்காளிகள்', modules: 'AI தொகுதிகள்', sdg: 'UN SDG சீரமைக்கப்பட்டது' },
      preview: { title: 'SheLaunch AI டாஷ்போர்டு', status: 'நேரடி பகுப்பாய்வு', readiness: 'தயார்நிலை மதிப்பெண்', growthReady: 'வளர்ச்சிக்குத் தயாராக உள்ளது · MVP நிலை', fundingTarget: '₹20L இலக்கு', sectorMatch: 'துறை பொருத்தம்', schemesMatched: '✓ 3 திட்டங்கள் பொருந்தின', mentorTag: 'AI வழிகாட்டி · இப்போது', mentorAdvice: 'உங்கள் சந்தை சரிபார்ப்பு சிறப்பாக உள்ளது. அடுத்த 90 நாட்களுக்குள் ஏஞ்சல் முதலீட்டாளர்களை ஈர்க்க நிதி கணிப்புகளில் கவனம் செலுத்துங்கள் — உங்கள் இழுவை அளவீடுகள் கட்டாயமாக உள்ளன.' },
      modules: { label: '5 புத்திசாலித்தனமான தொகுதிகள்', title: 'நீங்கள் தொடங்கவும் வளரவும் தேவையான அனைத்தும்', sub: 'பெண் தொழில்முனைவோருக்காக பிரத்தியேகமாக கட்டப்பட்ட ஐந்து வெவ்வேறு இணையதளங்கள், ஆலோசகர்கள் மற்றும் கோப்புகளை மாற்றும் ஒரு ஒருங்கிணைந்த AI தளம்.' },
      moduleCards: [
        { name: 'AI வழிகாட்டி', desc: 'ஜெமினி மூலம் இயங்கும் உரையாடல் AI வழிகாட்டி. நிகழ்நேரத்தில் பிட்ச் பகுப்பாய்வு, வணிக மாதிரி சரிபார்ப்பு மற்றும் மூலோபாய வழிகாட்டுதலைப் பெறுங்கள்.', tags: ['பிட்ச் பகுப்பாய்வு', 'PDF பதிவேற்றம்', 'மல்டிமோடல் AI'], link: 'வழிகாட்டுதலைத் தொடங்குங்கள்' },
        { name: 'தயார்நிலை மதிப்பீடு', desc: 'AI-ஆற்றல் கொண்ட ஸ்டார்ட்அப் முதிர்ச்சி மதிப்பீடு. தனிப்பயனாக்கப்பட்ட 30-60 நாட்கள் செயல்படக்கூடிய வரைபடத்துடன் உங்கள் 0-100 தயார்நிலை மதிப்பெண்ணைப் பெறுங்கள்.', tags: ['0–100 மதிப்பெண்', 'AI மதிப்பெண்', 'வரைபடம்'], link: 'இப்போது மதிப்பிடுங்கள்' },
        { name: 'நிதி பாதை ஆலோசகர்', desc: 'RAG-ஆற்றல் கொண்ட நிதி மூலோபாய உருவாக்கம். உங்கள் ஸ்டார்ட்அப்பிற்கு ஏற்ப வரிசைப்படுத்தப்பட்ட மானியம் → இன்குபேட்டர் → ஏஞ்சல் → VC வரைபடத்தைப் பெறுங்கள்.', tags: ['RAG கட்டிடக்கலை', 'நிதி வரைபடம்', 'காலவரிசை'], link: 'நிதி திட்டமிடுங்கள்' },
        { name: 'அரசு திட்ட ஒருங்கிணைப்பாளர்', desc: 'பெண் தொழில்முனைவோருக்கான 12+ தேர்ந்தெடுக்கப்பட்ட, சரிபார்க்கப்பட்ட அரசு திட்டங்கள். துறை, நிலை மற்றும் நிதி வகை மூலம் உடனடியாக வடிகட்டவும்.', tags: ['12+ திட்டங்கள்', 'சரிபார்க்கப்பட்ட தரவு', 'ஸ்மார்ட் வடிகட்டி'], link: 'திட்டங்களை ஆராயுங்கள்' },
        { name: 'இன்குபேட்டர் ஒருங்கிணைப்பாளர்', desc: 'AI-ஆற்றல் கொண்ட இன்குபேட்டர் பொருத்தம். பொருந்தும் மதிப்பெண்கள், பங்கு விவரங்கள் மற்றும் விண்ணப்ப வழிகாட்டுதலுடன் 12+ சிறந்த இன்குபேட்டர்களைக் கண்டறியவும்.', tags: ['AI பொருத்தம்', '12+ இன்குபேட்டர்கள்', 'பொருத்த மதிப்பெண்'], link: 'இன்குபேட்டர்களைக் கண்டறியவும்' }
      ],
      process: { label: 'செயல்முறை', title: 'பதிவு முதல் நிதியுதவி பெறும் ஸ்டார்ட்அப் வரை', sub: 'குறுகிய காலத்தில் மதிப்பீட்டிலிருந்து முதலீட்டுக்குத் தயாராவதற்கு உதவும் ஒரு கட்டமைக்கப்பட்ட நான்கு-படி பயணம்.' },
      steps: [
        { num: '01', title: 'மதிப்பீடு', desc: 'ஸ்டார்ட்அப் தயார்நிலை படிவத்தை பூர்த்தி செய்யுங்கள். AI 6 பரிமாணங்களில் உங்கள் முதிர்ச்சியை மதிப்பிடுகிறது மற்றும் உங்கள் வளர்ச்சி இடைவெளிகளை அடையாளம் காட்டுகிறது.' },
        { num: '02', title: 'நிதி திட்டம்', desc: 'உங்கள் துறை மற்றும் நிலைக்கு ஏற்ப ஏஐ உங்கள் தனிப்பயனாக்கப்பட்ட நிதி வரைபடத்தை பொருந்தும் திட்டங்கள் மற்றும் இன்குபேட்டர்களுடன் உருவாக்குகிறது.' },
        { num: '03', title: 'கண்டறிந்து விண்ணப்பிக்கவும்', desc: 'பொருந்தும் திட்டங்கள் மற்றும் இன்குபேட்டர்களை ஆராயுங்கள். AI-தயாரிக்கப்பட்ட சரிபார்ப்பு பட்டியல்கள் மற்றும் தகுதி முன் பரிசோதனையுடன் விண்ணப்பிக்கவும்.' },
        { num: '04', title: 'வழிகாட்டுதல் பெறுங்கள்', desc: 'பிட்ச் சுத்திகரிப்பு, இணக்க வழிகாட்டுதல் மற்றும் தொடர்ச்சியான வளர்ச்சி உத்தி ஆதரவுக்காக AI வழிகாட்டியுடன் அரட்டையடிக்கவும்.' }
      ],
      impact: { label: 'தாக்கம்', title: 'ஐநா நிலையான வளர்ச்சி இலக்குகளுடன் சீரமைக்கப்பட்டது', sub: 'SheLaunch AI நான்கு உலகளாவிய வளர்ச்சி இலக்குகளில் அளவிடக்கூடிய தாக்கத்தை ஏற்படுத்துகிறது.' },
      sdgs: [
        { num: '5', title: 'பாலின சமத்துவம்', desc: 'AI வழிகாட்டுதல் மற்றும் ஜனநாயகப்படுத்தப்பட்ட நிதி அணுகல் மூலம் பெண்களுக்கு அதிகாரம் அளித்தல்.' },
        { num: '8', title: 'கௌரவமான வேலை மற்றும் வளர்ச்சி', desc: 'ஸ்டார்ட்அப் நிலைத்தன்மையை விரைவுபடுத்துதல் மற்றும் அளவிடக்கூடிய பொருளாதார தாக்கத்தை ஏற்படுத்துதல்.' },
        { num: '9', title: 'தொழில் மற்றும் கண்டுபிடிப்பு', desc: 'சமமான கண்டுபிடிப்பு அணுகலை வழங்கும் AI-ஆற்றல் கொண்ட டிஜிட்டல் உள்கட்டமைப்பு.' },
        { num: '10', title: 'சமத்துவமின்மை குறைப்பு', desc: 'அனைவருக்கும் அரசு திட்டங்கள், வழிகாட்டிகள் மற்றும் மூலதனத்திற்கான அணுகலை ஜனநாயகப்படுத்துதல்.' }
      ],
      cta: { title: 'உங்கள் ஸ்டார்ட்அப்பைத் தொடங்கத்<br>தயாரா?', sub: 'யோசனையிலிருந்து நிதியுதவி பெறுவது வரையிலான உங்கள் ஸ்டார்ட்அப் பயணத்தை விரைவுபடுத்த AI-ஐப் பயன்படுத்தும் ஆயிரக்கணக்கான பெண் தொழில்முனைவோருடன் இணையுங்கள்.', btns: { assessment: 'இலவச மதிப்பீட்டைத் தொடங்குங்கள்', mentor: 'AI வழிகாட்டியுடன் பேசுங்கள்' } },
      footer: { logo: 'SheLaunch AI', impacts: 'ஐநா SDG இலக்குகள் 5 · 8 · 9 · 10 உடன் சீரமைக்கப்பட்டது', copyright: '© 2025 SheLaunch AI. பெண் தொழில்முனைவோருக்காக உருவாக்கப்பட்டது.' }
    },
    te: {
      title: 'SheLaunch AI — స్టార్టప్ గ్రోత్ అడ్వైజర్',
      navLinks: { modules: 'మాడ్యూల్స్', how: 'ఇది ఎలా పనిచేస్తుంది', impact: 'ప్రభావం' },
      navBtns: { signIn: 'సైన్ ఇన్', startFree: 'ఉచితంగా ప్రారంభించండి' },
      heroBadge: 'AI-ఆధారిత స్టార్టప్ గ్రోత్ అడ్వైజర్',
      heroTitlePrefix: 'మీ ',
      heroTitleEm: 'తెలివైన',
      heroTitleSuffix: ' మార్గం<br>ఆలోచన నుండి నిధులు పొందే స్టార్టప్ వరకు',
      heroSub: 'వ్యక్తిగతీకరించిన సంసిద్ధత స్కోర్లు, నిధుల రోడ్‌మ్యాప్‌లు, పథకాల ఆవిష్కరణ మరియు AI మెంటర్షిప్ — ప్రత్యేకంగా మహిళా పారిశ్రామికవేత్తల కోసం నిర్మించబడింది.',
      heroActions: { assessment: 'సంసిద్ధత అంచనాను ప్రారంభించండి', mentor: 'AI మెంటర్‌తో మాట్లాడండి' },
      stats: { schemes: 'ప్రభుత్వ పథకాలు', partners: 'ఇంකියుబేటర్ భాగస్వాములు', modules: 'AI మాడ్యూల్స్', sdg: 'UN SDG సమలేఖనం చేయబడింది' },
      preview: { title: 'SheLaunch AI డాష్‌బోర్డ్', status: 'లైవ్ అనాలిసిస్', readiness: 'సంసిద్ధత స్కోర్', growthReady: 'వృద్ధికి సిద్ధంగా ఉంది · MVP స్టేజ్', fundingTarget: '₹20L లక్ష్యం', sectorMatch: 'సెక్టార్ మ్యాచ్', schemesMatched: '✓ 3 పథకాలు సరిపోలాయి', mentorTag: 'AI మెంటర్ · ఇప్పుడే', mentorAdvice: 'మీ మార్కెట్ ధ్రువీకరణ బలంగా ఉంది. రాబోయే 90 రోజుల్లో ఏంజెల్ ఇన్వెస్టర్లను ఆకర్షించడానికి ఆర్థిక అంచనాలపై దృష్టి పెట్టండి — మీ ట్రాక్షన్ మెట్రిక్స్ ఆకర్షణీయంగా ఉన్నాయి.' },
      modules: { label: '5 తెలివైన మాడ్యూల్స్', title: 'మీరు ప్రారంభించడానికి మరియు వృద్ధి చెందడానికి కావలసినవన్నీ', sub: 'మహిళా పారిశ్రామికవేత్తల కోసం ప్రత్యేకంగా నిర్మించిన ఐదు విభిన్న పోర్టల్‌లు, సలహాదారులు మరియు డైరెక్టరీలను భర్తీ చేసే ఒక ఏకీకృత AI ప్లాట్‌ఫారమ్.' },
      moduleCards: [
        { name: 'AI మెంటర్', desc: 'జెమిని ద్వారా నడిచే సంభాషణ AI మెంటర్. నిజ సమయంలో పిచ్ విశ్లేషణ, బిజినెస్ మోడల్ ధ్రువీకరణ మరియు వ్యూహాత్మక మార్గదర్శకత్వం పొందండి.', tags: ['పిచ్ అనాలిసిస్', 'PDF అప్‌లోడ్', 'మల్టీమోడల్ AI'], link: 'మెంటరింగ్ ప్రారంభించండి' },
        { name: 'సంసిద్ధత అంచనా', desc: 'AI-ఆధారిత స్టార్టప్ మెచ్యూరిటీ స్కోరింగ్. వ్యక్తిగతీకరించిన 30-60 రోజుల కార్యాకరణ రోడ్‌మ్యాప్‌తో మీ 0-100 సంసిద్ధత స్కోర్‌ను పొందండి.', tags: ['0–100 స్కోర్', 'AI స్కోరింగ్', 'రోడ్‌మ్యాప్'], link: 'ఇప్పుడే అంచనా వేయండి' },
        { name: 'ఫండింగ్ పాత్‌వే అడ్వైజర్', desc: 'RAG-ఆధారిత ఫండింగ్ వ్యూహాల సృష్టి. మీ స్టార్టప్‌కు అనుగుణంగా క్రమబద్ధీకరించిన గ్రాంట్ → ఇంකියుబేటర్ → ఏంజెల్ → VC రోడ్‌మ్యాప్‌ను పొందండి.', tags: ['RAG ఆర్కిటెక్చర్', 'ఫండింగ్ రోడ్‌మ్యాప్', 'టైమ్‌లైన్'], link: 'నిధుల ప్రణాళిక' },
        { name: 'ప్రభుత్వ పథక అగ్రిగేటర్', desc: 'మహిళా పారిశ్రామికవేత్తల కోసం 12+ క్యూరేటెడ్, ధృవీకరించబడిన ప్రభుత్వ పథకాలు. సెక్టార్, స్టేజ్ మరియు ఫండింగ్ రకం ద్వారా తక్షణమే ఫిల్టర్ చేయండి.', tags: ['12+ పథకాలు', 'ధృవీకరించబడిన డేటా', 'స్మార్ట్ ఫిల్టర్'], link: 'పథకాలను అన్వేషించండి' },
        { name: 'ఇంකියుబేటర్ అగ్రిగేటర్', desc: 'AI-ఆధారిత ఇంකියుబేటర్ మ్యాచింగ్. మ్యాచ్ స్కోర్‌లు, ఈక్విటీ వివరాలు మరియు దరఖాస్తు మార్గదర్శకత్వంతో 12+ అగ్రశ్రేణి ఇంකියుబేటర్‌లను కనుగొనండి.', tags: ['AI మ్యాచింగ్', '12+ ఇంකියుబేటర్‌లు', 'మ్యాచ్ స్కోర్'], link: 'ఇంකියుబేటర్లను కనుగొనండి' }
      ],
      process: { label: 'ప్రక్రియ', title: 'నమోదు నుండి నిధులు పొందే స్టార్టప్ వరకు', sub: 'సాధ్యమైనంత తక్కువ సమయంలో మిమ్మల్ని అంచనా నుండి పెట్టుబడికి సిద్ధంగా ఉండేలా రూపొందించబడిన నాలుగు-దశల ప్రయాణం.' },
      steps: [
        { num: '01', title: 'అంచనా', desc: 'స్టార్టప్ సంసిద్ధత ఫారమ్‌ను పూర్తి చేయండి. AI 6 కోణాల్లో మీ మెచ్యూరిటీని స్కోర్ చేస్తుంది మరియు మీ వృద్ధి అంతరాలను గుర్తిస్తుంది.' },
        { num: '02', title: 'ఫండింగ్ ప్లాన్', desc: 'AI మీ సెక్టార్ మరియు స్టేజ్‌కు అనుగుణంగా సరిపోలే పథకాలు మరియు ఇంකියుబేటర్లతో మీ వ్యక్తిగతీకరించిన ఫండింగ్ రోడ్‌మ్యాప్‌ను రూపొందిస్తుంది.' },
        { num: '03', title: 'కనుగొనండి మరియు దరఖాస్తు చేయండి', desc: 'సరిపోలే పథకాలు మరియు ఇంකියుబేటర్లను అన్వేషించండి. AI-తయారు చేసిన చెక్‌లిస్ట్‌లు మరియు అర్హత ప్రీ-స్క్రీనింగ్‌తో దరఖాస్తు చేసుకోండి.' },
        { num: '04', title: 'మెంటర్షిప్ పొందండి', desc: 'పిచ్ రిఫైన్‌మెంట్, సమ్మతి మార్గదర్శకత్వం మరియు నిరంతర వృద్ధి వ్యూహ మద్దతు కోసం AI మెంటర్‌తో చాట్ చేయండి.' }
      ],
      impact: { label: 'ప్రభావం', title: 'UN సుస్థిర అభివృద్ధి లక్ష్యాలతో సమలేఖనం చేయబడింది', sub: 'SheLaunch AI నాలుగు గ్లోబల్ డెవలప్‌మెంట్ లక్ష్యాలలో కొలవగల ప్రభావాన్ని చూపుతుంది.' },
      sdgs: [
        { num: '5', title: 'లింగ సమానత్వం', desc: 'AI మెంటర్షిప్ మరియు ప్రజాస్వామ్య ఫండింగ్ యాక్సెస్ ద్వారా మహిళా సాధికారత.' },
        { num: '8', title: 'మర్యాదపూర్వకమైన పని మరియు వృద్ధి', desc: 'స్టార్టప్ స్థిరత్వాన్ని వేగవంతం చేయడం మరియు కొలవగల ఆర్థిక ప్రభావాన్ని చూపడం.' },
        { num: '9', title: 'పరిశ్రమ మరియు ఆవిష్కరణ', desc: 'సమాన ఆవిష్కరణ ప్రాప్యతను అందించే AI-ధారిత డిజిటల్ మౌలిక సదుపాయాలు.' },
        { num: '10', title: 'అసమానతల తగ్గింపు', desc: 'అందరికీ ప్రభుత్వ పథకాలు, మెంటర్లు మరియు మూలధన ప్రాప్యతను ప్రజాస్వామ్యం చేయడం.' }
      ],
      cta: { title: 'మీ స్టార్టప్‌ని ప్రారంభించడానికి<br>సిద్ధంగా ఉన్నారా?', sub: 'ఆలోచన నుండి నిధుల సేకరణ వరకు మీ స్టార్టప్ ప్రయాణాన్ని వేగవంతం చేయడానికి AIని ఉపయోగించే వేలాది మంది మహిళా పారిశ్రామికవేత్తలతో చేరండి.', btns: { assessment: 'ఉచిత అంచనాను ప్రారంభించండి', mentor: 'AI మెంటర్‌తో మాట్లాడండి' } },
      footer: { logo: 'SheLaunch AI', impacts: 'UN SDG లక్ష్యాలు 5 · 8 · 9 · 10 తో సమలేఖనం చేయబడింది', copyright: '© 2025 SheLaunch AI. మహిళా పారిశ్రామికవేత్తల కోసం నిర్మించబడింది.' }
    },
  };

  const t = translations[lang] || translations.en;

  return `
<!DOCTYPE html>
<html lang="${lang}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t.title}</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&display=swap" rel="stylesheet">
<style>
  :root {
    --bg: #0a0b0e;
    --bg-2: #0f1117;
    --bg-3: #141720;
    --bg-card: #13161e;
    --border: rgba(255,255,255,0.07);
    --border-accent: rgba(180,140,255,0.25);
    --text: #e8e6f0;
    --text-muted: #7a7890;
    --text-dim: #4a4860;
    --accent: #b48cff;
    --accent-soft: rgba(180,140,255,0.12);
    --accent-2: #7ee8d8;
    --accent-2-soft: rgba(126,232,216,0.10);
    --gold: #e8c87a;
    --gold-soft: rgba(232,200,122,0.10);
  }

  * { margin: 0; padding: 0; box-sizing: border-box; }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'DM Sans', sans-serif;
    font-weight: 300;
    overflow-x: hidden;
    line-height: 1.7;
  }

  /* NOISE TEXTURE */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events: none;
    z-index: 0;
    opacity: 0.4;
  }

  /* AMBIENT GLOWS */
  .glow-orb {
    position: absolute;
    border-radius: 50%;
    filter: blur(120px);
    pointer-events: none;
    z-index: 0;
  }
  .glow-orb-1 { width: 600px; height: 600px; background: rgba(180,140,255,0.06); top: -200px; right: -100px; }
  .glow-orb-2 { width: 500px; height: 500px; background: rgba(126,232,216,0.05); top: 300px; left: -150px; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    background: rgba(10,11,14,0.85);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.4rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    color: var(--text);
  }
  .nav-logo span { color: var(--accent); }

  .nav-links {
    display: flex; gap: 36px; list-style: none;
  }
  .nav-links a {
    color: var(--text-muted); text-decoration: none;
    font-size: 0.83rem; letter-spacing: 0.06em; text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--text); }

  .nav-cta {
    display: flex; gap: 12px; align-items: center;
  }

  /* Language Picker */
  .lang-picker {
    display: flex; gap: 8px; margin-right: 20px;
    padding: 6px 12px; background: var(--bg-3);
    border: 1px solid var(--border); border-radius: 6px;
  }
  .lang-link {
    font-size: 0.7rem; text-decoration: none; color: var(--text-dim);
    font-family: 'DM Mono', monospace;
    transition: color 0.2s;
  }
  .lang-link:hover { color: var(--text-muted); }
  .lang-link.active { color: var(--accent); font-weight: 500; }

  .btn {
    display: inline-flex; align-items: center; gap: 8px;
    padding: 10px 22px; border-radius: 6px;
    font-size: 0.83rem; font-weight: 400; letter-spacing: 0.04em;
    cursor: pointer; text-decoration: none; transition: all 0.25s;
    font-family: 'DM Sans', sans-serif;
  }
  .btn-ghost {
    background: transparent; border: 1px solid var(--border);
    color: var(--text-muted);
  }
  .btn-ghost:hover { border-color: var(--border-accent); color: var(--text); }

  .btn-primary {
    background: var(--accent); border: 1px solid var(--accent);
    color: #0a0b0e; font-weight: 500;
  }
  .btn-primary:hover { background: #c9a8ff; box-shadow: 0 0 30px rgba(180,140,255,0.3); }

  .btn-outline-accent {
    background: transparent; border: 1px solid var(--border-accent);
    color: var(--accent);
  }
  .btn-outline-accent:hover { background: var(--accent-soft); }

  /* HERO */
  .hero {
    position: relative; min-height: 100vh;
    display: flex; flex-direction: column; justify-content: center; align-items: center;
    text-align: center; padding: 140px 60px 80px;
    overflow: hidden;
  }

  .hero-badge {
    display: inline-flex; align-items: center; gap: 8px;
    background: var(--accent-soft); border: 1px solid var(--border-accent);
    border-radius: 100px; padding: 6px 16px;
    font-size: 0.76rem; color: var(--accent); letter-spacing: 0.08em; text-transform: uppercase;
    margin-bottom: 36px;
    animation: fadeUp 0.8s ease both;
  }

  .hero-badge::before {
    content: ''; width: 6px; height: 6px; border-radius: 50%;
    background: var(--accent); display: block;
    box-shadow: 0 0 8px var(--accent);
  }

  .hero-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(3rem, 7vw, 6rem);
    font-weight: 300;
    line-height: 1.1;
    letter-spacing: -0.01em;
    max-width: 800px;
    animation: fadeUp 0.8s 0.1s ease both;
  }

  .hero-title em {
    font-style: italic; color: var(--accent);
  }

  .hero-sub {
    font-size: 1.05rem; color: var(--text-muted); max-width: 560px;
    margin: 24px auto 0; font-weight: 300;
    animation: fadeUp 0.8s 0.2s ease both;
  }

  .hero-actions {
    display: flex; gap: 14px; margin-top: 44px; justify-content: center; flex-wrap: wrap;
    animation: fadeUp 0.8s 0.3s ease both;
  }

  .hero-actions .btn { padding: 14px 28px; font-size: 0.88rem; }

  .hero-stats {
    display: flex; gap: 48px; margin-top: 72px; justify-content: center; flex-wrap: wrap;
    animation: fadeUp 0.8s 0.4s ease both;
  }

  .stat {
    display: flex; flex-direction: column; align-items: center;
    border-left: 1px solid var(--border); padding-left: 48px;
  }
  .stat:first-child { border-left: none; padding-left: 0; }

  .stat-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.2rem; font-weight: 500; color: var(--text); line-height: 1;
  }
  .stat-label { font-size: 0.76rem; color: var(--text-muted); letter-spacing: 0.06em; margin-top: 4px; }

  /* DASHBOARD PREVIEW */
  .dashboard-preview {
    position: relative; margin: 0 auto; max-width: 1000px;
    padding: 0 60px 100px;
    animation: fadeUp 0.8s 0.5s ease both;
  }

  .preview-card {
    background: var(--bg-card);
    border: 1px solid var(--border);
    border-radius: 16px;
    padding: 32px;
    box-shadow: 0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03);
    overflow: hidden;
    position: relative;
  }

  .preview-card::before {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 1px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0.5;
  }

  .preview-header {
    display: flex; justify-content: space-between; align-items: center;
    margin-bottom: 28px;
  }

  .preview-title {
    font-size: 0.72rem; color: var(--text-muted); letter-spacing: 0.1em; text-transform: uppercase;
  }

  .preview-status {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.72rem; color: var(--accent-2);
  }
  .preview-status::before {
    content: ''; width: 5px; height: 5px; border-radius: 50%;
    background: var(--accent-2); display: block;
    box-shadow: 0 0 6px var(--accent-2);
    animation: pulse 2s infinite;
  }

  .preview-grid {
    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px;
  }

  .preview-metric {
    background: var(--bg-3); border: 1px solid var(--border);
    border-radius: 10px; padding: 20px;
  }

  .metric-label {
    font-size: 0.7rem; color: var(--text-dim); letter-spacing: 0.08em; text-transform: uppercase; margin-bottom: 8px;
  }
  .metric-value {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2rem; font-weight: 500; color: var(--text); line-height: 1;
  }
  .metric-sub { font-size: 0.72rem; color: var(--text-muted); margin-top: 4px; }

  .score-ring {
    display: flex; align-items: center; gap: 16px;
  }
  .ring-visual {
    width: 56px; height: 56px; border-radius: 50%;
    background: conic-gradient(var(--accent) 0deg, var(--accent) 280deg, var(--bg) 280deg);
    display: flex; align-items: center; justify-content: center;
    position: relative;
  }
  .ring-visual::after {
    content: '';
    position: absolute; inset: 8px; border-radius: 50%;
    background: var(--bg-3);
  }
  .ring-score {
    position: relative; z-index: 1;
    font-family: 'DM Mono', monospace;
    font-size: 0.75rem; color: var(--accent);
  }

  .pathway-row {
    display: flex; align-items: center; gap: 8px; margin-top: 4px;
  }
  .path-step {
    font-size: 0.7rem; padding: 3px 10px; border-radius: 100px;
    font-family: 'DM Mono', monospace;
  }
  .path-step.active { background: var(--accent-soft); color: var(--accent); border: 1px solid var(--border-accent); }
  .path-step.next { background: var(--bg); color: var(--text-dim); border: 1px solid var(--border); }
  .path-arrow { color: var(--text-dim); font-size: 0.7rem; }

  .ai-chat-box {
    margin-top: 16px; background: var(--bg-3); border: 1px solid var(--border);
    border-radius: 10px; padding: 16px;
    display: flex; align-items: flex-start; gap: 12px;
  }
  .ai-avatar {
    width: 28px; height: 28px; border-radius: 50%;
    background: linear-gradient(135deg, var(--accent), var(--accent-2));
    flex-shrink: 0; display: flex; align-items: center; justify-content: center;
    font-size: 0.65rem; font-weight: 600; color: #0a0b0e;
  }
  .ai-text {
    font-size: 0.8rem; color: var(--text-muted); line-height: 1.5;
  }
  .ai-tag {
    display: inline-block; font-size: 0.65rem; color: var(--accent);
    background: var(--accent-soft); border-radius: 100px; padding: 2px 8px; margin-bottom: 4px;
  }

  /* SECTION SHARED */
  section { position: relative; padding: 100px 60px; }

  .section-label {
    font-size: 0.72rem; color: var(--accent); letter-spacing: 0.12em; text-transform: uppercase;
    margin-bottom: 16px;
  }

  .section-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2rem, 4vw, 3.2rem); font-weight: 300; line-height: 1.15;
    max-width: 600px;
  }

  .section-sub {
    color: var(--text-muted); max-width: 520px;
    margin-top: 16px; font-size: 0.95rem;
  }

  /* MODULES */
  .modules-section { background: var(--bg-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

  .modules-header { margin-bottom: 56px; }

  .modules-grid {
    display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2px;
  }

  .module-card {
    background: var(--bg-card); padding: 36px 32px;
    border: 1px solid var(--border);
    position: relative; overflow: hidden;
    transition: border-color 0.3s, background 0.3s;
    cursor: default;
  }
  .module-card:hover {
    border-color: var(--border-accent);
    background: linear-gradient(135deg, var(--bg-card), rgba(180,140,255,0.03));
  }
  .module-card::after {
    content: '';
    position: absolute; top: 0; left: 0; right: 0; height: 2px;
    background: linear-gradient(90deg, transparent, var(--accent), transparent);
    opacity: 0; transition: opacity 0.3s;
  }
  .module-card:hover::after { opacity: 1; }

  .module-icon {
    width: 44px; height: 44px; border-radius: 10px;
    display: flex; align-items: center; justify-content: center;
    margin-bottom: 20px; font-size: 1.2rem;
  }

  .icon-purple { background: var(--accent-soft); border: 1px solid var(--border-accent); }
  .icon-teal { background: var(--accent-2-soft); border: 1px solid rgba(126,232,216,0.2); }
  .icon-gold { background: var(--gold-soft); border: 1px solid rgba(232,200,122,0.2); }

  .module-name {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.3rem; font-weight: 500; margin-bottom: 10px;
  }

  .module-desc { font-size: 0.84rem; color: var(--text-muted); line-height: 1.65; margin-bottom: 20px; }

  .module-tags { display: flex; flex-wrap: wrap; gap: 6px; }
  .tag {
    font-size: 0.68rem; padding: 3px 10px; border-radius: 100px;
    background: var(--bg-3); border: 1px solid var(--border);
    color: var(--text-dim); letter-spacing: 0.04em; font-family: 'DM Mono', monospace;
  }

  .module-link {
    display: flex; align-items: center; gap: 6px;
    font-size: 0.78rem; color: var(--accent); text-decoration: none;
    margin-top: 24px; letter-spacing: 0.04em;
    transition: gap 0.2s;
  }
  .module-link:hover { gap: 10px; }

  /* HOW IT WORKS */
  .how-section { max-width: 1200px; margin: 0 auto; }

  .steps-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px;
    margin-top: 56px; background: var(--border);
    border: 1px solid var(--border); border-radius: 12px; overflow: hidden;
  }

  .step-card {
    background: var(--bg-card); padding: 36px 28px;
    position: relative;
  }

  .step-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 3.5rem; font-weight: 300; color: var(--text-dim);
    line-height: 1; margin-bottom: 16px;
  }

  .step-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; font-weight: 500; margin-bottom: 10px;
  }

  .step-desc { font-size: 0.82rem; color: var(--text-muted); line-height: 1.65; }

  /* SDGs */
  .sdg-section { background: var(--bg-2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }

  .sdg-grid {
    display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px;
  }

  .sdg-card {
    background: var(--bg-card); border: 1px solid var(--border);
    border-radius: 12px; padding: 28px 24px;
    transition: border-color 0.3s;
  }
  .sdg-card:hover { border-color: var(--border-accent); }

  .sdg-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 2.5rem; font-weight: 300; color: var(--accent); line-height: 1; margin-bottom: 4px;
  }

  .sdg-title {
    font-size: 0.78rem; font-weight: 500; color: var(--text); letter-spacing: 0.04em; margin-bottom: 10px;
  }

  .sdg-desc { font-size: 0.78rem; color: var(--text-muted); line-height: 1.6; }

  /* CTA */
  .cta-section {
    text-align: center; padding: 120px 60px;
    position: relative; overflow: hidden;
  }

  .cta-section::before {
    content: '';
    position: absolute; inset: 0;
    background: radial-gradient(ellipse 800px 400px at 50% 100%, rgba(180,140,255,0.06), transparent);
  }

  .cta-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 300; line-height: 1.15;
    max-width: 700px; margin: 0 auto 20px;
  }

  .cta-sub { color: var(--text-muted); max-width: 500px; margin: 0 auto 44px; }

  .cta-buttons { display: flex; gap: 14px; justify-content: center; flex-wrap: wrap; }
  .cta-buttons .btn { padding: 14px 32px; font-size: 0.88rem; }

  /* FOOTER */
  footer {
    border-top: 1px solid var(--border);
    padding: 40px 60px;
    display: flex; justify-content: space-between; align-items: center;
    flex-wrap: wrap; gap: 16px;
  }

  .footer-logo {
    font-family: 'Cormorant Garamond', serif;
    font-size: 1.2rem; font-weight: 500; color: var(--text);
  }
  .footer-logo span { color: var(--accent); }

  .footer-text { font-size: 0.76rem; color: var(--text-dim); }

  /* DIVIDER */
  .divider {
    width: 100%; max-width: 1200px; margin: 0 auto;
    border: none; border-top: 1px solid var(--border);
  }

  /* ANIMATIONS */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.4; }
  }

  /* CONTAINER */
  .container { max-width: 1200px; margin: 0 auto; }

  /* RESPONSIVE */
  @media (max-width: 768px) {
    nav { padding: 16px 24px; }
    .nav-links { display: none; }
    section { padding: 70px 24px; }
    .hero { padding: 120px 24px 60px; }
    .dashboard-preview { padding: 0 24px 70px; }
    .preview-grid { grid-template-columns: 1fr; }
    .steps-grid { grid-template-columns: 1fr 1fr; }
    .sdg-grid { grid-template-columns: 1fr 1fr; }
    .modules-grid { grid-template-columns: 1fr; }
    .hero-stats { gap: 24px; }
    .stat { border-left: none; padding-left: 0; border-top: 1px solid var(--border); padding-top: 20px; }
    .stat:first-child { border-top: none; padding-top: 0; }
    footer { flex-direction: column; text-align: center; padding: 30px 24px; }
    .cta-section { padding: 80px 24px; }
  }
</style>
</head>
<body>

<!-- NAV -->
<nav>
  <div class="nav-logo">${t.footer.logo.replace('AI', '<span>AI</span>')}</div>
  <ul class="nav-links">
    <li><a href="#modules">${t.navLinks.modules}</a></li>
    <li><a href="#how">${t.navLinks.how}</a></li>
    <li><a href="#sdg">${t.navLinks.impact}</a></li>
  </ul>
  <div class="nav-cta">
    <div class="lang-picker">
      <a href="/" class="lang-link ${lang === 'en' ? 'active' : ''}">EN</a>
      <a href="/hi" class="lang-link ${lang === 'hi' ? 'active' : ''}">हि</a>
      <a href="/kn" class="lang-link ${lang === 'kn' ? 'active' : ''}">ಕ</a>
      <a href="/ta" class="lang-link ${lang === 'ta' ? 'active' : ''}">த</a>
      <a href="/te" class="lang-link ${lang === 'te' ? 'active' : ''}">తె</a>
    </div>
    <a href="/assessment" class="btn btn-ghost">${t.navBtns.signIn}</a>
    <a href="/assessment" class="btn btn-primary">${t.navBtns.startFree}</a>
  </div>
</nav>

<!-- HERO -->
<div class="hero">
  <div class="glow-orb glow-orb-1"></div>
  <div class="glow-orb glow-orb-2"></div>

  <div class="hero-badge">${t.heroBadge}</div>

  <h1 class="hero-title">
    ${t.heroTitlePrefix}<em>${t.heroTitleEm}</em>${t.heroTitleSuffix}
  </h1>

  <p class="hero-sub">${t.heroSub}</p>

  <div class="hero-actions">
    <a href="/assessment" class="btn btn-primary">${t.heroActions.assessment}</a>
    <a href="/mentor" class="btn btn-outline-accent">${t.heroActions.mentor}</a>
  </div>

  <div class="hero-stats">
    <div class="stat">
      <span class="stat-num">12+</span>
      <span class="stat-label">${t.stats.schemes}</span>
    </div>
    <div class="stat">
      <span class="stat-num">12+</span>
      <span class="stat-label">${t.stats.partners}</span>
    </div>
    <div class="stat">
      <span class="stat-num">5</span>
      <span class="stat-label">${t.stats.modules}</span>
    </div>
    <div class="stat">
      <span class="stat-num">4</span>
      <span class="stat-label">${t.stats.sdg}</span>
    </div>
  </div>
</div>

<!-- DASHBOARD PREVIEW -->
<div class="dashboard-preview">
  <div class="preview-card">
    <div class="preview-header">
      <span class="preview-title">${t.preview.title}</span>
      <span class="preview-status">${t.preview.status}</span>
    </div>
    <div class="preview-grid">
      <div class="preview-metric">
        <div class="metric-label">${t.preview.readiness}</div>
        <div class="score-ring">
          <div class="ring-visual">
            <span class="ring-score">78</span>
          </div>
          <div>
            <div class="metric-value">78<span style="font-size:1rem;color:var(--text-muted)">/100</span></div>
            <div class="metric-sub">${t.preview.growthReady}</div>
          </div>
        </div>
      </div>
      <div class="preview-metric">
        <div class="metric-label">${t.preview.fundingTarget}</div>
        <div class="metric-value" style="font-size:1.1rem;margin-bottom:10px;">₹20L Target</div>
        <div class="pathway-row">
          <span class="path-step active">Grant</span>
          <span class="path-arrow">→</span>
          <span class="path-step next">Incubator</span>
          <span class="path-arrow">→</span>
          <span class="path-step next">Angel</span>
        </div>
      </div>
      <div class="preview-metric">
        <div class="metric-label">${t.preview.sectorMatch}</div>
        <div class="metric-value" style="font-size:1.3rem;">FinTech</div>
        <div class="metric-sub" style="color:var(--accent-2);">${t.preview.schemesMatched}</div>
      </div>
    </div>
    <div class="ai-chat-box">
      <div class="ai-avatar">AI</div>
      <div class="ai-text">
        <span class="ai-tag">${t.preview.mentorTag}</span><br>
        ${t.preview.mentorAdvice}
      </div>
    </div>
  </div>
</div>

<!-- MODULES -->
<section class="modules-section" id="modules">
  <div class="container">
    <div class="modules-header">
      <div class="section-label">${t.modules.label}</div>
      <h2 class="section-title">${t.modules.title}</h2>
      <p class="section-sub">${t.modules.sub}</p>
    </div>

    <div class="modules-grid">
      ${t.moduleCards.map((m, i) => `
      <div class="module-card">
        <div class="module-icon ${i === 2 ? 'icon-gold' : i % 2 === 0 ? 'icon-purple' : 'icon-teal'}">${i === 0 ? '🧠' : i === 1 ? '📊' : i === 2 ? '🗺️' : i === 3 ? '🏛️' : '🏢'}</div>
        <div class="module-name">${m.name}</div>
        <p class="module-desc">${m.desc}</p>
        <div class="module-tags">
          ${m.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
        </div>
        <a href="/${m.link === 'Start Mentoring' ? 'mentor' : m.link === 'Assess Now' ? 'assessment' : m.link === 'Plan Funding' ? 'funding' : m.link === 'Explore Schemes' ? 'schemes' : 'incubators'}" class="module-link">${m.link} <span>→</span></a>
      </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section id="how" style="padding:100px 60px;">
  <div class="container">
    <div class="section-label">${t.process.label}</div>
    <h2 class="section-title">${t.process.title}</h2>
    <p class="section-sub">${t.process.sub}</p>

    <div class="steps-grid">
      ${t.steps.map(s => `
      <div class="step-card">
        <div class="step-num">${s.num}</div>
        <div class="step-title">${s.title}</div>
        <p class="step-desc">${s.desc}</p>
      </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- SDG -->
<section class="sdg-section" id="sdg">
  <div class="container">
    <div class="section-label">${t.impact.label}</div>
    <h2 class="section-title">${t.impact.title}</h2>
    <p class="section-sub">${t.impact.sub}</p>

    <div class="sdg-grid">
      ${t.sdgs.map(s => `
      <div class="sdg-card">
        <div class="sdg-num">${s.num}</div>
        <div class="sdg-title">${s.title}</div>
        <p class="sdg-desc">${s.desc}</p>
      </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="cta-section">
  <h2 class="cta-title">${t.cta.title}</h2>
  <p class="cta-sub">${t.cta.sub}</p>
  <div class="cta-buttons">
    <a href="/assessment" class="btn btn-primary">${t.cta.btns.assessment}</a>
    <a href="/mentor" class="btn btn-ghost">${t.cta.btns.mentor}</a>
  </div>
</section>

<!-- FOOTER -->
<footer>
  <div class="footer-logo">${t.footer.logo.replace('AI', '<span>AI</span>')}</div>
  <div class="footer-text">${t.footer.impacts}</div>
  <div class="footer-text">${t.footer.copyright}</div>
</footer>

</body>
</html>
`;
};
