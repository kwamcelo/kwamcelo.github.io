export const schools = [
  {
    name: 'University of British Columbia',
    image: '/ubc-logo.png',
  },
  {
    name: 'University of Alberta',
    image: '/uofa-logo.png.webp',
  },
];

export const papers = [
  {
    title: 'Metastable Germanium Polymers',
    href: 'https://pubs.rsc.org/en/content/articlelanding/2021/dt/d1dt02850b',
  },
  {
    title: 'Genetically Encoded Wittig Reaction Substrates',
    href: 'https://pubs.rsc.org/en/content/articlelanding/2021/sc/d1sc04146k',
  },
];

export const projects = [
    {
        title: 'Insight UBC',
        summary: [
            'Built a full-stack TypeScript and Express app for uploading and processing UBC course and campus facilities datasets.',
            'Designed REST APIs for dataset uploads, async processing, CRUD operations, and custom query execution.',
            'Created frontend dashboards with sortable tables and Chart.js visualizations for exploring academic and campus-space data.'
        ],
        images: [
            '/images/insight_ubc/upload_zip.png',
            '/images/insight_ubc/courses_uploaded.png',
            '/images/insight_ubc/course_insights.png'
        ]
    },
    {
        title: 'EZBooks',
        summary: [
            'Built a full-stack receipt management app that turns uploaded receipt images and PDFs into organized expense records.',
            'Implemented OCR extraction for vendor, date, amount, tax, and card details using Flask, SQLAlchemy, SQLite, and Tesseract.',
            'Added categorization, job tracking, inline editing, batch approval, and CSV/PDF exports for accountant-ready workflows.'
        ],
        images: [
            '/images/ezbooks/homepage.png',
            '/images/ezbooks/ezbooksdashboard.png'
        ]
    },
    {
        title: 'Pointer Realms',
        summary: [
            'Built a 3D educational programming game that teaches C memory concepts through interactive grid-based puzzles.',
            'Used React, TypeScript, Vite, and Three.js to visualize variables, pointers, arrays, dereferencing, and heap-style memory operations.',
            'Created a custom game-state engine that validates actions, advances code line by line, and supports generated levels from C snippets.'
        ],
        images: [
            '/images/pointer_realms/different_variable_types.png',
            '/images/pointer_realms/incremented_integer.png',
            '/images/pointer_realms/assigning_a_pointer.png'
        ]
    },
    {
        title: 'Contextify',
        summary: [
            'Built a Gemini-powered Chrome extension that gives language learners context-aware explanations for highlighted text.',
            'Used surrounding page context to generate definitions, explanations, and example sentences that match the actual reading situation.',
            'Implemented the extension with JavaScript, Chrome Extension APIs, local storage, and Google Gemini.'
        ],
        images: [
            '/images/contextify/find_defition.gif',
            '/images/contextify/view_history.gif',
            '/images/contextify/deleting_history.gif'
        ]
    },
    {
        title: 'b.shell',
        summary: [
            'Built a mobile-friendly French conjugation practice app for quick study sessions on phones.',
            'Added flashcard-style quizzes, difficulty levels, progress tracking, and review modes.',
            'Designed the app for efficient verb practice that works well in short sessions.'
        ],
        images: [
            '/images/b.shell/home_page.PNG',
            '/images/b.shell/game_play.PNG',
            '/images/b.shell/results.PNG'
        ]
    },
    

]
