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
        description: 'Full-stack TypeScript/Express web app that ingests UBC course and facilities datasets, stores normalized records, and provides an interactive frontend for searching, filtering, and visualizing academic and campus-space data. I built REST APIs for dataset uploads, async processing, CRUD operations, custom query execution, and frontend dashboards with sortable tables and Chart.js insights.',
        images: '/images/insight_ubc/'
    },
    {
        title: 'EZBooks',
        description: 'A full-stack smart receipt management app for small business owners that turns uploaded receipt images and PDFs into organized, accountant-ready expense records. Built with Flask, SQLAlchemy, SQLite, Tesseract OCR, and vanilla JavaScript, it supports batch uploads, OCR-based extraction of vendor, date, amount, tax, and card details, automatic categorization through vendor defaults, keyword rules, and fuzzy matching, job/project expense tracking, inline receipt editing, batch approval, and CSV/PDF exports. The project demonstrates backend API design, file processing, OCR integration, database modeling, automation of manual bookkeeping workflows, and a responsive dashboard for reviewing and managing expenses.',
        images: '/images/ezbooks/'
    },
    {
        title: 'Pointer Realms',
        description: 'A 3D educational programming game that teaches C memory concepts through interactive gameplay. Players solve levels by manipulating characters and objects on a grid, with each successful action corresponding to a real line of C code. Built with React, TypeScript, Vite, and Three.js, the app visualizes variables, pointers, arrays, dereferencing, and heap-style memory operations as game mechanics, powered by a custom game-state engine that tracks world state, validates actions, advances line-by-line execution, and supports generated level data from C snippets.',
        images: '/images/pointer_realms/'
    },
    {
        title: 'Contextify',
        description: 'A Gemini-powered Chrome extension built to help language learners stay immersed while reading online. Instead of stopping to look up unfamiliar words, write notes, or make flashcards, users can highlight text on any webpage and instantly receive a context-aware definition, explanation, and example sentence. Unlike traditional dictionary tools that often miss how a word is being used, Contextify uses the surrounding sentence and paragraph to generate feedback that fits the actual reading context. Built with JavaScript, Chrome Extension APIs, local storage, and Google Gemini, the project helps learners spend less time “studying English” in isolation and more time actively using and understanding it.',
        images: '/images/contextify/'
    },
    {
        title: 'b.shell',
        description: 'A mobile-friendly French conjugation practice app built for quick study sessions on phones. It combines flashcard-style quizzes, difficulty levels, progress tracking, and review modes to help learners practice verbs efficiently wherever they are.',
        images: '/images/b.shell/'
    },
    

]
