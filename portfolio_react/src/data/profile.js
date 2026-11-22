// Anything left as an empty string ('') or empty array ([]) is not rendered,
// so TODO items stay hidden on the live site until you fill them in.

export const contact = {
    email: 'kwami.akudominguez@gmail.com',
    linkedin: 'https://www.linkedin.com/in/kwami-aku-dominguez-7018a028b/',
    github: 'https://github.com/kwamcelo',
    // TODO: export your current resume (fix the "silica surfaced" typo first) to
    // portfolio_react/public/resume.pdf, then set this to '/resume.pdf'.
    resume: '',
};

export const schools = [
    {
        name: 'University of British Columbia',
        image: '/ubc-logo.png',
        degree: 'Bachelor of Computer Science',
        status: 'Expected May 2027',
    },
    {
        name: 'University of Alberta',
        image: '/uofa-logo.png.webp',
        degree: 'Bachelor of Science with Honours in Chemistry',
        status: 'Completed 2021',
    },
];

export const skills = [
    {
        label: 'Languages',
        items: ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'C++', 'SQL', 'HTML', 'CSS'],
    },
    {
        label: 'Frameworks & Tools',
        items: [
            'React', 'Next.js', 'Node.js', 'FastAPI', 'Flask', 'SQLAlchemy', 'Three.js', 'Vite',
            'AWS (Lambda, S3)', 'Supabase', 'Git / GitHub', 'GitHub Actions', 'Pandas', 'scikit-learn',
            'Codex', 'Claude Code',
        ],
    },
    {
        label: 'Testing',
        items: ['pytest', 'Vitest', 'Mocha', 'Chai'],
    },
    {
        label: 'Concepts',
        items: ['Object-Oriented Programming', 'SOLID', 'REST APIs', 'Automated testing', 'CI', 'Agile development'],
    },
];

export const projects = [
    {
        title: 'Grocery Savings',
        tech: ['Next.js', 'React', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'Supabase Auth', 'Gemini API', 'GitHub Actions'],
        summary: [
            'Built a full-stack grocery price tracker that turns receipt photos into per-store unit-price comparisons using Gemini, helping shoppers use their purchase history to find the cheapest store.',
            'Designed REST APIs and a product normalization pipeline using aliases, fuzzy matching, and unit-aware comparisons to match equivalent products across stores.',
            'Implemented Supabase auth with per-user privacy controls and opt-in price sharing; set up GitHub Actions CI with 160+ pytest tests, including record/replay tests on real receipts.',
        ],
        links: {
            code: 'https://github.com/kwamcelo/grocery_savings',
            live: '', // TODO: live demo URL, if deployed
        },
        // TODO: add screenshots to public/images/grocery_savings/ and list them here
        // (e.g. dashboard, OCR review, price comparison).
        images: [],
    },
    {
        title: 'b.shell',
        tech: ['React', 'JavaScript', 'Vite', 'Vitest', 'Netlify'],
        summary: [
            'Built and deployed a phone-first French conjugation trainer covering ~150 verbs and 13 tenses, installable as an offline-capable PWA.',
            'Designed a learning engine with mastery-based answer choices, review caps, and streaks, covered by 62 unit tests.',
            'Wrote a data pipeline that generates conjugation data from verb frequency rankings and the Lefff lexicon.',
        ],
        links: {
            code: 'https://github.com/kwamcelo/b.shell',
            live: 'https://bshell.netlify.app',
        },
        images: [
            '/images/b.shell/home.jpg',
            '/images/b.shell/practice.jpg',
            '/images/b.shell/results.jpg',
        ],
    },
    {
        title: 'Pointer Realms (DubHacks 2025)',
        tech: ['React', 'TypeScript', 'Three.js', 'AWS Lambda', 'Node.js'],
        summary: [
            'Designed a 3D game concept mapping C memory constructs (pointers, allocations, distinct types such as int/char/short) to interactive game-board entities using Three.js.',
            'Developed backend parsing logic to transform user-submitted C code into structured memory-state visualizations.',
        ],
        links: {
            code: 'https://github.com/Oldhoon/dubhacks2025', // TODO: team GitHub repo URL
            live: '', // TODO: Devpost URL
        },
        images: [
            '/images/pointer_realms/different_variable_types.png',
            '/images/pointer_realms/incremented_integer.png',
            '/images/pointer_realms/assigning_a_pointer.png',
        ],
    },
    {
        title: 'InsightUBC (CPSC 310)',
        tech: ['TypeScript', 'Node.js', 'REST APIs', 'Mocha', 'Chai'],
        summary: [
            'Built a full-stack query system that lets UBC instructors upload course and campus datasets, analyze the data with chart visualizations, and display specific course/building data in tables.',
            'Developed automated test suites covering asynchronous workflows, regressions, and API correctness.',
            'Collaborated in a Git-based team environment using code reviews, debugging, and iterative refactoring.',
        ],
        // Course project (CPSC 310): code is not public.
        links: {},
        images: [
            '/images/insight_ubc/upload_zip.png',
            '/images/insight_ubc/courses_uploaded.png',
            '/images/insight_ubc/course_insights.png',
        ],
    },
    {
        title: 'EZBooks (UBC BizTech KickStart 2025)',
        tech: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Tesseract OCR'],
        summary: [
            'Built a full-stack receipt management app that turns uploaded receipt images and PDFs into organized expense records.',
            'Implemented OCR extraction for vendor, date, amount, tax, and card details using Flask, SQLAlchemy, SQLite, and Tesseract.',
            'Added categorization, job tracking, inline editing, batch approval, and CSV/PDF exports for accountant-ready workflows.',
        ],
        links: {
            code: 'https://github.com/kwamcelo/EzBooks',
        },
        images: [
            '/images/ezbooks/homepage.png',
            '/images/ezbooks/ezbooksdashboard.png',
        ],
    },
    {
        title: 'Contextify (StormHacks 2025)',
        tech: ['JavaScript', 'Chrome Extension APIs', 'Gemini API'],
        summary: [
            'Built a Gemini-powered Chrome extension that gives language learners context-aware explanations for highlighted text.',
            'Used surrounding page context to generate definitions, explanations, and example sentences that match the actual reading situation.',
            'Stored lookup history locally so learners can review and manage past definitions.',
        ],
        links: {
            code: '', // TODO: team GitHub repo URL
            live: '', // TODO: Devpost or Chrome Web Store URL
        },
        images: [
            '/images/contextify/find_defition.gif',
            '/images/contextify/view_history.gif',
            '/images/contextify/deleting_history.gif',
        ],
    },
];

export const experience = [
    {
        role: 'Specialist',
        org: 'Apple',
        dates: 'July 2026 – Present',
        summary: [
            'Achieved a personal customer satisfaction rating of 98/100 by connecting with customers to understand their needs and recommend Apple products that add value to their lives.',
            'Assisted customers with setting up new devices and transferring data, explaining technical concepts around product hardware and AI performance/security to match their level of knowledge.',
        ],
    },
    {
        role: 'Chemistry/Math Tutor',
        org: 'Tutor Teach',
        dates: 'Aug 2020 – Present',
        summary: [
            'Delivered 300+ tutoring sessions in chemistry and math, improving student performance by at least a letter grade over the course of a semester.',
            'Personalized each session based on the rapport built with the student, applying different teaching strategies based on their extracurricular interests and general strengths and weaknesses.',
        ],
    },
    {
        role: 'Treasurer',
        org: 'BCS Student Association',
        dates: 'Jan 2026 – Present',
        summary: [
            'Manage budgeting and financial records for student events and programming, coordinating with the team to allocate resources effectively.',
        ],
    },
    {
        role: 'Undergraduate Teaching Assistant / Researcher',
        org: 'University of Alberta',
        dates: 'May 2018 – Jun 2021',
        summary: [
            'Performed computational chemistry research (see the Research page); led seminars, labs, and office hours for organic chemistry undergraduates; graded coursework and assessments.',
        ],
    },
    {
        role: 'Soccer Coach',
        org: 'Edmonton Scottish United Soccer Club',
        dates: 'Jul 2023 – Aug 2024',
        summary: [
            'Mentored youth on teamwork, communication, and leadership in a positive, engaging environment that encouraged participation and growth.',
        ],
    },
];

export const research = [
    {
        title: 'Main Group Chemistry - Rivard Group',
        image: '/images/research_group/rivard2019-christmas.jpg',
        paperTitle: 'Metastable Germanium Polymers',
        paper: 'https://pubs.rsc.org/en/content/articlelanding/2021/dt/d1dt02850b',
        description: 'Conducted inert-atmosphere chemistry research into the synthesis of germanium-coated silica surfaces and the effect of different alkoxides and N-heterocyclic carbenes on the synthesis of germanium dihydride and germanium polymers.',
    },
    {
        title: 'Computational Chemistry - Brown Group',
        image: '/images/research_group/brown2017.png',
        paperTitle: 'Genetically Encoded Wittig Reaction Substrates',
        paper: 'https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc04146k',
        description: 'NSERC USRA recipient in summer 2018 and 2019. Used Gaussian to perform a variety of quantum computations: examining the thermodynamics of potential reaction pathways, calculating structural and spectral properties of emissive RNA analogues, and simulating transition states of peptides for Wittig reactions.',
    },
];
