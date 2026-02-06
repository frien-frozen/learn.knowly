import { Calculator, Zap, FlaskConical, Dna, Laptop, Globe, BookOpen, PenTool, Atom } from 'lucide-react';

export const MOCK_CURRICULUMS = {
    'igcse': { title: 'Cambridge IGCSE', subtitle: 'International General Certificate of Secondary Education', color: 'bg-[#D92D20]' },
    'a-levels': { title: 'Cambridge A-Levels', subtitle: 'Advanced Level qualifications for university preparation', color: 'bg-white border-2 border-gray-200' },
    'pearson': { title: 'Pearson Edexcel', subtitle: 'International qualifications recognized worldwide', color: 'bg-[#FDB022]' },
    'lower-secondary': { title: 'Lower Secondary', subtitle: 'Foundation for 11-14 year olds', color: 'bg-[#8B5CF6]' }
};

export const MOCK_SUBJECTS: Record<string, any[]> = {
    'igcse': [
        { title: 'Mathematics', code: '0580', slug: 'math-0580', icon: Calculator },
        { title: 'Physics', code: '0625', slug: 'physics-0625', icon: Zap },
        { title: 'Chemistry', code: '0620', slug: 'chemistry-0620', icon: FlaskConical },
        { title: 'Biology', code: '0610', slug: 'biology-0610', icon: Dna },
        { title: 'Computer Science', code: '0478', slug: 'cs-0478', icon: Laptop },
        { title: 'English', code: '0500', slug: 'english-0500', icon: BookOpen }
    ],
    'a-levels': [
        { title: 'Mathematics', code: '9709', slug: 'math-9709', icon: Calculator },
        { title: 'Physics', code: '9702', slug: 'physics-9702', icon: Zap },
        { title: 'Chemistry', code: '9701', slug: 'chemistry-9701', icon: FlaskConical },
        { title: 'Computer Science', code: '9618', slug: 'cs-9618', icon: Laptop },
        { title: 'Economics', code: '9708', slug: 'econ-9708', icon: Globe }
    ],
    'pearson': [
        { title: 'Mathematics A', code: '4MA1', slug: 'math-a-4ma1', icon: Calculator },
        { title: 'Physics', code: '4PH1', slug: 'physics-4ph1', icon: Atom },
        { title: 'Chemistry', code: '4CH1', slug: 'chemistry-4ch1', icon: FlaskConical }
    ],
    'lower-secondary': [
        { title: 'Mathematics', code: '1112', slug: 'math-1112', icon: Calculator },
        { title: 'Science', code: '1113', slug: 'science-1113', icon: FlaskConical },
        { title: 'English', code: '1111', slug: 'english-1111', icon: PenTool }
    ]
};

// Helper to generate generic topics if we get lazy
const generateGenericSyllabus = (subjectName: string) => [
    {
        title: `Unit 1: Fundamentals of ${subjectName}`,
        topics: ['1.1 Introduction', '1.2 Core Concepts', '1.3 Basic Principles', '1.4 Practical Applications']
    },
    {
        title: `Unit 2: Advanced ${subjectName}`,
        topics: ['2.1 Complex Systems', '2.2 Theoretical Models', '2.3 Data Analysis', '2.4 Case Studies']
    },
    {
        title: 'Unit 3: Exam Preparation',
        topics: ['3.1 Past Paper Review', '3.2 Key Definitions', '3.3 Mock Exam']
    }
];

export const MOCK_SYLLABUS: Record<string, { title: string; topics: string[] }[]> = {
    // --- IGCSE ---
    'math-0580': [
        { title: '1. Number', topics: ['1.1 Types of Numbers', '1.2 Sets & Venn Diagrams', '1.3 Indices', '1.4 Fractions'] },
        { title: '2. Algebra', topics: ['2.1 Factorising', '2.2 Quadratics', '2.3 Functions', '2.4 Graphs'] },
        { title: '3. Geometry', topics: ['3.1 Similarity', '3.2 Circle Theorems', '3.3 Trigonometry'] }
    ],
    'physics-0625': [
        { title: '1. General Physics', topics: ['1.1 Length & Time', '1.2 Motion', '1.3 Mass & Weight', '1.4 Density'] },
        { title: '2. Thermal Physics', topics: ['2.1 States of Matter', '2.2 Thermal Expansion', '2.3 Heat Transfer'] },
        { title: '3. Waves', topics: ['3.1 Light', '3.2 Sound', '3.3 Electromagnetic Spectrum'] }
    ],
    'chemistry-0620': [
        { title: '1. States of Matter', topics: ['1.1 Solids, Liquids, Gases', '1.2 Diffusion'] },
        { title: '2. Atoms & Elements', topics: ['2.1 Atomic Structure', '2.2 Periodic Table', '2.3 Bonding'] },
        { title: '3. Stoichiometry', topics: ['3.1 The Mole', '3.2 Chemical Equations'] }
    ],
    'biology-0610': [
        { title: '1. Cells & Organisms', topics: ['1.1 Cell Structure', '1.2 Movement In & Out of Cells', '1.3 Enzymes'] },
        { title: '2. Human Biology', topics: ['2.1 Nutrition', '2.2 Respiration', '2.3 Excretion'] },
        { title: '3. Ecology', topics: ['3.1 Food Chains', '3.2 Nutrient Cycles', '3.3 Human Impact'] }
    ],
    'cs-0478': [
        { title: '1. Data Representation', topics: ['1.1 Binary Systems', '1.2 Hexadecimal', '1.3 Data Storage'] },
        { title: '2. Programming', topics: ['2.1 Algorithms', '2.2 Flowcharts', '2.3 Pseudocode'] },
        { title: '3. Hardware & Software', topics: ['3.1 Computer Architecture', '3.2 Operating Systems'] }
    ],
    'english-0500': [
        { title: '1. Reading Skills', topics: ['1.1 Comprehension', '1.2 Analysis', '1.3 Inference'] },
        { title: '2. Writing Skills', topics: ['2.1 Narrative Writing', '2.2 Descriptive Writing', '2.3 Argumentative Essays'] },
        { title: '3. Language Techniques', topics: ['3.1 Literary Devices', '3.2 Grammar', '3.3 Vocabulary'] }
    ],

    // --- A-LEVELS ---
    'math-9709': [
        { title: 'Pure Mathematics 1', topics: ['1.1 Quadratics', '1.2 Functions', '1.3 Coordinate Geometry', '1.4 Circular Measure'] },
        { title: 'Pure Mathematics 2', topics: ['2.1 Algebra', '2.2 Logarithms', '2.3 Trigonometry', '2.4 Differentiation'] },
        { title: 'Mechanics', topics: ['3.1 Forces', '3.2 Kinematics', '3.3 Newton\'s Laws'] }
    ],
    'physics-9702': [
        { title: '1. Physical Quantities', topics: ['1.1 SI Units', '1.2 Errors & Uncertainties'] },
        { title: '2. Kinematics', topics: ['2.1 Equations of Motion', '2.2 Projectile Motion'] },
        { title: '3. Dynamics', topics: ['3.1 Newton\'s Laws', '3.2 Momentum', '3.3 Energy'] }
    ],
    'chemistry-9701': [
        { title: '1. Atomic Structure', topics: ['1.1 Particles', '1.2 Isotopes', '1.3 Electronic Configuration'] },
        { title: '2. Chemical Bonding', topics: ['2.1 Ionic Bonding', '2.2 Covalent Bonding', '2.3 Metallic Bonding'] },
        { title: '3. States of Matter', topics: ['3.1 Gases', '3.2 Liquids', '3.3 Solids'] }
    ],
    'cs-9618': [
        { title: '1. Information Representation', topics: ['1.1 Number Systems', '1.2 Text & Images', '1.3 Sound'] },
        { title: '2. Communication & Internet', topics: ['2.1 Protocols', '2.2 Network Hardware', '2.3 Security'] },
        { title: '3. Programming', topics: ['3.1 Data Types', '3.2 Algorithms', '3.3 OOP'] }
    ],
    'econ-9708': [
        { title: '1. Basic Economic Ideas', topics: ['1.1 Scarcity', '1.2 Opportunity Cost', '1.3 Economic Systems'] },
        { title: '2. Microeconomics', topics: ['2.1 Demand & Supply', '2.2 Market Equilibrium', '2.3 Elasticity'] },
        { title: '3. Macroeconomics', topics: ['3.1 National Income', '3.2 Inflation', '3.3 Unemployment'] }
    ],

    // --- PEARSON ---
    'math-a-4ma1': [
        { title: '1. Numbers & Algebra', topics: ['1.1 Prime Factors', '1.2 Algebraic Fractions', '1.3 Equations'] },
        { title: '2. Geometry', topics: ['2.1 Polygons', '2.2 Pythagoras Theorem', '2.3 Trigonometry'] },
        { title: '3. Statistics', topics: ['3.1 Data Collection', '3.2 Charts & Graphs', '3.3 Probability'] }
    ],
    'physics-4ph1': [
        { title: '1. Forces & Motion', topics: ['1.1 Speed & Velocity', '1.2 Acceleration', '1.3 Forces'] },
        { title: '2. Energy', topics: ['2.1 Energy Stores', '2.2 Energy Transfers', '2.3 Efficiency'] },
        { title: '3. Waves', topics: ['3.1 Wave Properties', '3.2 Electromagnetic Spectrum'] }
    ],
    'chemistry-4ch1': [
        { title: '1. Principles of Chemistry', topics: ['1.1 Atomic Structure', '1.2 Periodic Table', '1.3 Bonding'] },
        { title: '2. Inorganic Chemistry', topics: ['2.1 Group 1', '2.2 Group 7', '2.3 Transition Metals'] },
        { title: '3. Physical Chemistry', topics: ['3.1 Energetics', '3.2 Rates of Reaction', '3.3 Equilibria'] }
    ],

    // --- LOWER SECONDARY ---
    'math-1112': [
        { title: '1. Number Sense', topics: ['1.1 Place Value', '1.2 Operations', '1.3 Fractions & Decimals'] },
        { title: '2. Algebra Basics', topics: ['2.1 Expressions', '2.2 Simple Equations', '2.3 Sequences'] },
        { title: '3. Geometry', topics: ['3.1 Shapes', '3.2 Angles', '3.3 Area & Perimeter'] }
    ],
    'science-1113': [
        { title: '1. Biology Basics', topics: ['1.1 Cells', '1.2 Plants', '1.3 Animals'] },
        { title: '2. Chemistry Basics', topics: ['2.1 Materials', '2.2 Changes', '2.3 Reactions'] },
        { title: '3. Physics Basics', topics: ['3.1 Forces', '3.2 Energy', '3.3 Light & Sound'] }
    ],
    'english-1111': [
        { title: '1. Reading', topics: ['1.1 Fiction', '1.2 Non-Fiction', '1.3 Poetry'] },
        { title: '2. Writing', topics: ['2.1 Stories', '2.2 Reports', '2.3 Letters'] },
        { title: '3. Speaking & Listening', topics: ['3.1 Presentations', '3.2 Discussions', '3.3 Drama'] }
    ]
};

// The "Smart Getter" - Ensures we ALWAYS return data
export const getSyllabus = (slug: string, subjectTitle: string) => {
    return MOCK_SYLLABUS[slug] || generateGenericSyllabus(subjectTitle);
};
