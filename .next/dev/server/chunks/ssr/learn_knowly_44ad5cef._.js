module.exports = [
"[project]/learn.knowly/hooks/useLangRouter.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLangRouter",
    ()=>useLangRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
const useLangRouter = ()=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lang = searchParams.get('lang') || 'uz';
    // 1. Helper to generate a safe link with the current language
    const getLink = (path)=>{
        const separator = path.includes('?') ? '&' : '?';
        return `${path}${separator}lang=${lang}`;
    };
    // 2. Wrapper for router.push that automatically appends lang
    const push = (path)=>{
        router.push(getLink(path));
    };
    return {
        push,
        getLink,
        lang
    };
};
}),
"[project]/learn.knowly/utils/mockData.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MOCK_CURRICULUMS",
    ()=>MOCK_CURRICULUMS,
    "MOCK_SUBJECTS",
    ()=>MOCK_SUBJECTS,
    "MOCK_SYLLABUS",
    ()=>MOCK_SYLLABUS,
    "getSyllabus",
    ()=>getSyllabus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/calculator.js [app-ssr] (ecmascript) <export default as Calculator>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/zap.js [app-ssr] (ecmascript) <export default as Zap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/flask-conical.js [app-ssr] (ecmascript) <export default as FlaskConical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/dna.js [app-ssr] (ecmascript) <export default as Dna>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/laptop.js [app-ssr] (ecmascript) <export default as Laptop>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/globe.js [app-ssr] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/pen-tool.js [app-ssr] (ecmascript) <export default as PenTool>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/atom.js [app-ssr] (ecmascript) <export default as Atom>");
;
const MOCK_CURRICULUMS = {
    'igcse': {
        title: 'Cambridge IGCSE',
        subtitle: 'International General Certificate of Secondary Education',
        color: 'bg-[#D92D20]'
    },
    'a-levels': {
        title: 'Cambridge A-Levels',
        subtitle: 'Advanced Level qualifications for university preparation',
        color: 'bg-white border-2 border-gray-200'
    },
    'pearson': {
        title: 'Pearson Edexcel',
        subtitle: 'International qualifications recognized worldwide',
        color: 'bg-[#FDB022]'
    },
    'lower-secondary': {
        title: 'Lower Secondary',
        subtitle: 'Foundation for 11-14 year olds',
        color: 'bg-[#8B5CF6]'
    }
};
const MOCK_SUBJECTS = {
    'igcse': [
        {
            title: 'Mathematics',
            code: '0580',
            slug: 'math-0580',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            title: 'Physics',
            code: '0625',
            slug: 'physics-0625',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
        },
        {
            title: 'Chemistry',
            code: '0620',
            slug: 'chemistry-0620',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
        },
        {
            title: 'Biology',
            code: '0610',
            slug: 'biology-0610',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dna$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Dna$3e$__["Dna"]
        },
        {
            title: 'Computer Science',
            code: '0478',
            slug: 'cs-0478',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"]
        },
        {
            title: 'English',
            code: '0500',
            slug: 'english-0500',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"]
        }
    ],
    'a-levels': [
        {
            title: 'Mathematics',
            code: '9709',
            slug: 'math-9709',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            title: 'Physics',
            code: '9702',
            slug: 'physics-9702',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$zap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Zap$3e$__["Zap"]
        },
        {
            title: 'Chemistry',
            code: '9701',
            slug: 'chemistry-9701',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
        },
        {
            title: 'Computer Science',
            code: '9618',
            slug: 'cs-9618',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$laptop$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Laptop$3e$__["Laptop"]
        },
        {
            title: 'Economics',
            code: '9708',
            slug: 'econ-9708',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"]
        }
    ],
    'pearson': [
        {
            title: 'Mathematics A',
            code: '4MA1',
            slug: 'math-a-4ma1',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            title: 'Physics',
            code: '4PH1',
            slug: 'physics-4ph1',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$atom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Atom$3e$__["Atom"]
        },
        {
            title: 'Chemistry',
            code: '4CH1',
            slug: 'chemistry-4ch1',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
        }
    ],
    'lower-secondary': [
        {
            title: 'Mathematics',
            code: '1112',
            slug: 'math-1112',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calculator$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calculator$3e$__["Calculator"]
        },
        {
            title: 'Science',
            code: '1113',
            slug: 'science-1113',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$flask$2d$conical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FlaskConical$3e$__["FlaskConical"]
        },
        {
            title: 'English',
            code: '1111',
            slug: 'english-1111',
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2d$tool$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PenTool$3e$__["PenTool"]
        }
    ]
};
// Helper to generate generic topics if we get lazy
const generateGenericSyllabus = (subjectName)=>[
        {
            title: `Unit 1: Fundamentals of ${subjectName}`,
            topics: [
                '1.1 Introduction',
                '1.2 Core Concepts',
                '1.3 Basic Principles',
                '1.4 Practical Applications'
            ]
        },
        {
            title: `Unit 2: Advanced ${subjectName}`,
            topics: [
                '2.1 Complex Systems',
                '2.2 Theoretical Models',
                '2.3 Data Analysis',
                '2.4 Case Studies'
            ]
        },
        {
            title: 'Unit 3: Exam Preparation',
            topics: [
                '3.1 Past Paper Review',
                '3.2 Key Definitions',
                '3.3 Mock Exam'
            ]
        }
    ];
const MOCK_SYLLABUS = {
    // --- IGCSE ---
    'math-0580': [
        {
            title: '1. Number',
            topics: [
                '1.1 Types of Numbers',
                '1.2 Sets & Venn Diagrams',
                '1.3 Indices',
                '1.4 Fractions'
            ]
        },
        {
            title: '2. Algebra',
            topics: [
                '2.1 Factorising',
                '2.2 Quadratics',
                '2.3 Functions',
                '2.4 Graphs'
            ]
        },
        {
            title: '3. Geometry',
            topics: [
                '3.1 Similarity',
                '3.2 Circle Theorems',
                '3.3 Trigonometry'
            ]
        }
    ],
    'physics-0625': [
        {
            title: '1. General Physics',
            topics: [
                '1.1 Length & Time',
                '1.2 Motion',
                '1.3 Mass & Weight',
                '1.4 Density'
            ]
        },
        {
            title: '2. Thermal Physics',
            topics: [
                '2.1 States of Matter',
                '2.2 Thermal Expansion',
                '2.3 Heat Transfer'
            ]
        },
        {
            title: '3. Waves',
            topics: [
                '3.1 Light',
                '3.2 Sound',
                '3.3 Electromagnetic Spectrum'
            ]
        }
    ],
    'chemistry-0620': [
        {
            title: '1. States of Matter',
            topics: [
                '1.1 Solids, Liquids, Gases',
                '1.2 Diffusion'
            ]
        },
        {
            title: '2. Atoms & Elements',
            topics: [
                '2.1 Atomic Structure',
                '2.2 Periodic Table',
                '2.3 Bonding'
            ]
        },
        {
            title: '3. Stoichiometry',
            topics: [
                '3.1 The Mole',
                '3.2 Chemical Equations'
            ]
        }
    ],
    'biology-0610': [
        {
            title: '1. Cells & Organisms',
            topics: [
                '1.1 Cell Structure',
                '1.2 Movement In & Out of Cells',
                '1.3 Enzymes'
            ]
        },
        {
            title: '2. Human Biology',
            topics: [
                '2.1 Nutrition',
                '2.2 Respiration',
                '2.3 Excretion'
            ]
        },
        {
            title: '3. Ecology',
            topics: [
                '3.1 Food Chains',
                '3.2 Nutrient Cycles',
                '3.3 Human Impact'
            ]
        }
    ],
    'cs-0478': [
        {
            title: '1. Data Representation',
            topics: [
                '1.1 Binary Systems',
                '1.2 Hexadecimal',
                '1.3 Data Storage'
            ]
        },
        {
            title: '2. Programming',
            topics: [
                '2.1 Algorithms',
                '2.2 Flowcharts',
                '2.3 Pseudocode'
            ]
        },
        {
            title: '3. Hardware & Software',
            topics: [
                '3.1 Computer Architecture',
                '3.2 Operating Systems'
            ]
        }
    ],
    'english-0500': [
        {
            title: '1. Reading Skills',
            topics: [
                '1.1 Comprehension',
                '1.2 Analysis',
                '1.3 Inference'
            ]
        },
        {
            title: '2. Writing Skills',
            topics: [
                '2.1 Narrative Writing',
                '2.2 Descriptive Writing',
                '2.3 Argumentative Essays'
            ]
        },
        {
            title: '3. Language Techniques',
            topics: [
                '3.1 Literary Devices',
                '3.2 Grammar',
                '3.3 Vocabulary'
            ]
        }
    ],
    // --- A-LEVELS ---
    'math-9709': [
        {
            title: 'Pure Mathematics 1',
            topics: [
                '1.1 Quadratics',
                '1.2 Functions',
                '1.3 Coordinate Geometry',
                '1.4 Circular Measure'
            ]
        },
        {
            title: 'Pure Mathematics 2',
            topics: [
                '2.1 Algebra',
                '2.2 Logarithms',
                '2.3 Trigonometry',
                '2.4 Differentiation'
            ]
        },
        {
            title: 'Mechanics',
            topics: [
                '3.1 Forces',
                '3.2 Kinematics',
                '3.3 Newton\'s Laws'
            ]
        }
    ],
    'physics-9702': [
        {
            title: '1. Physical Quantities',
            topics: [
                '1.1 SI Units',
                '1.2 Errors & Uncertainties'
            ]
        },
        {
            title: '2. Kinematics',
            topics: [
                '2.1 Equations of Motion',
                '2.2 Projectile Motion'
            ]
        },
        {
            title: '3. Dynamics',
            topics: [
                '3.1 Newton\'s Laws',
                '3.2 Momentum',
                '3.3 Energy'
            ]
        }
    ],
    'chemistry-9701': [
        {
            title: '1. Atomic Structure',
            topics: [
                '1.1 Particles',
                '1.2 Isotopes',
                '1.3 Electronic Configuration'
            ]
        },
        {
            title: '2. Chemical Bonding',
            topics: [
                '2.1 Ionic Bonding',
                '2.2 Covalent Bonding',
                '2.3 Metallic Bonding'
            ]
        },
        {
            title: '3. States of Matter',
            topics: [
                '3.1 Gases',
                '3.2 Liquids',
                '3.3 Solids'
            ]
        }
    ],
    'cs-9618': [
        {
            title: '1. Information Representation',
            topics: [
                '1.1 Number Systems',
                '1.2 Text & Images',
                '1.3 Sound'
            ]
        },
        {
            title: '2. Communication & Internet',
            topics: [
                '2.1 Protocols',
                '2.2 Network Hardware',
                '2.3 Security'
            ]
        },
        {
            title: '3. Programming',
            topics: [
                '3.1 Data Types',
                '3.2 Algorithms',
                '3.3 OOP'
            ]
        }
    ],
    'econ-9708': [
        {
            title: '1. Basic Economic Ideas',
            topics: [
                '1.1 Scarcity',
                '1.2 Opportunity Cost',
                '1.3 Economic Systems'
            ]
        },
        {
            title: '2. Microeconomics',
            topics: [
                '2.1 Demand & Supply',
                '2.2 Market Equilibrium',
                '2.3 Elasticity'
            ]
        },
        {
            title: '3. Macroeconomics',
            topics: [
                '3.1 National Income',
                '3.2 Inflation',
                '3.3 Unemployment'
            ]
        }
    ],
    // --- PEARSON ---
    'math-a-4ma1': [
        {
            title: '1. Numbers & Algebra',
            topics: [
                '1.1 Prime Factors',
                '1.2 Algebraic Fractions',
                '1.3 Equations'
            ]
        },
        {
            title: '2. Geometry',
            topics: [
                '2.1 Polygons',
                '2.2 Pythagoras Theorem',
                '2.3 Trigonometry'
            ]
        },
        {
            title: '3. Statistics',
            topics: [
                '3.1 Data Collection',
                '3.2 Charts & Graphs',
                '3.3 Probability'
            ]
        }
    ],
    'physics-4ph1': [
        {
            title: '1. Forces & Motion',
            topics: [
                '1.1 Speed & Velocity',
                '1.2 Acceleration',
                '1.3 Forces'
            ]
        },
        {
            title: '2. Energy',
            topics: [
                '2.1 Energy Stores',
                '2.2 Energy Transfers',
                '2.3 Efficiency'
            ]
        },
        {
            title: '3. Waves',
            topics: [
                '3.1 Wave Properties',
                '3.2 Electromagnetic Spectrum'
            ]
        }
    ],
    'chemistry-4ch1': [
        {
            title: '1. Principles of Chemistry',
            topics: [
                '1.1 Atomic Structure',
                '1.2 Periodic Table',
                '1.3 Bonding'
            ]
        },
        {
            title: '2. Inorganic Chemistry',
            topics: [
                '2.1 Group 1',
                '2.2 Group 7',
                '2.3 Transition Metals'
            ]
        },
        {
            title: '3. Physical Chemistry',
            topics: [
                '3.1 Energetics',
                '3.2 Rates of Reaction',
                '3.3 Equilibria'
            ]
        }
    ],
    // --- LOWER SECONDARY ---
    'math-1112': [
        {
            title: '1. Number Sense',
            topics: [
                '1.1 Place Value',
                '1.2 Operations',
                '1.3 Fractions & Decimals'
            ]
        },
        {
            title: '2. Algebra Basics',
            topics: [
                '2.1 Expressions',
                '2.2 Simple Equations',
                '2.3 Sequences'
            ]
        },
        {
            title: '3. Geometry',
            topics: [
                '3.1 Shapes',
                '3.2 Angles',
                '3.3 Area & Perimeter'
            ]
        }
    ],
    'science-1113': [
        {
            title: '1. Biology Basics',
            topics: [
                '1.1 Cells',
                '1.2 Plants',
                '1.3 Animals'
            ]
        },
        {
            title: '2. Chemistry Basics',
            topics: [
                '2.1 Materials',
                '2.2 Changes',
                '2.3 Reactions'
            ]
        },
        {
            title: '3. Physics Basics',
            topics: [
                '3.1 Forces',
                '3.2 Energy',
                '3.3 Light & Sound'
            ]
        }
    ],
    'english-1111': [
        {
            title: '1. Reading',
            topics: [
                '1.1 Fiction',
                '1.2 Non-Fiction',
                '1.3 Poetry'
            ]
        },
        {
            title: '2. Writing',
            topics: [
                '2.1 Stories',
                '2.2 Reports',
                '2.3 Letters'
            ]
        },
        {
            title: '3. Speaking & Listening',
            topics: [
                '3.1 Presentations',
                '3.2 Discussions',
                '3.3 Drama'
            ]
        }
    ]
};
const getSyllabus = (slug, subjectTitle)=>{
    return MOCK_SYLLABUS[slug] || generateGenericSyllabus(subjectTitle);
};
}),
"[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CurriculumPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useLangRouter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/arrow-left.js [app-ssr] (ecmascript) <export default as ArrowLeft>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/utils/mockData.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
function CurriculumPage() {
    const params = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useParams"])();
    const { push } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLangRouter"])();
    const slug = Array.isArray(params.curriculumSlug) ? params.curriculumSlug[0] : params.curriculumSlug;
    const curriculum = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CURRICULUMS"][slug];
    const subjects = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_SUBJECTS"][slug];
    // Helper for dynamic colors based on subject title
    const getIconColor = (title)=>{
        if (title.includes('Math')) return 'bg-red-50 text-red-500';
        if (title.includes('Physics')) return 'bg-blue-50 text-blue-500';
        if (title.includes('Chem')) return 'bg-green-50 text-green-500';
        if (title.includes('Bio')) return 'bg-purple-50 text-purple-500';
        if (title.includes('Computer')) return 'bg-indigo-50 text-indigo-500';
        if (title.includes('English')) return 'bg-orange-50 text-orange-500';
        if (title.includes('Econ')) return 'bg-teal-50 text-teal-500';
        if (title.includes('Science')) return 'bg-cyan-50 text-cyan-500';
        return 'bg-gray-50 text-gray-500';
    };
    if (!curriculum) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex flex-col items-center justify-center bg-[#F2F4F7]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-2xl font-bold mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "Curriculum Not Found"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                        lineNumber: 35,
                        columnNumber: 57
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 35,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>push('/'),
                    className: "text-red-600 font-bold hover:underline",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: "Go Home"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                        lineNumber: 36,
                        columnNumber: 102
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 36,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
            lineNumber: 34,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].main, {
        initial: {
            opacity: 0
        },
        animate: {
            opacity: 1
        },
        className: "min-h-screen bg-[#F2F4F7] font-nunito",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-6 pt-32 pb-20 max-w-7xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>push('/'),
                    className: "flex items-center gap-2 text-gray-500 font-bold hover:text-[#D92D20] mb-8 transition-colors",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$left$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowLeft$3e$__["ArrowLeft"], {
                            className: "w-4 h-4"
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 21
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Back to Dashboard"
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                            lineNumber: 49,
                            columnNumber: 55
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "text-4xl font-extrabold text-[#101828] mb-2",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: curriculum.title
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                        lineNumber: 52,
                        columnNumber: 77
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 52,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-xl text-gray-500 mb-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        children: curriculum.subtitle
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                        lineNumber: 53,
                        columnNumber: 60
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 53,
                    columnNumber: 17
                }, this),
                subjects ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: "hidden",
                    animate: "show",
                    variants: {
                        show: {
                            transition: {
                                staggerChildren: 0.1
                            }
                        }
                    },
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: subjects.map((subj)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            variants: {
                                hidden: {
                                    opacity: 0,
                                    y: 20
                                },
                                show: {
                                    opacity: 1,
                                    y: 0
                                }
                            },
                            onClick: ()=>push(`/curriculum/${slug}/${subj.slug}`),
                            whileHover: {
                                scale: 1.02
                            },
                            whileTap: {
                                scale: 0.98
                            },
                            className: "bg-white rounded-[1.5rem] p-8 shadow-sm border border-transparent hover:shadow-xl cursor-pointer flex flex-col items-start",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${getIconColor(subj.title)}`,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(subj.icon, {
                                        className: "w-7 h-7"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                                        lineNumber: 78,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                                    lineNumber: 77,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-extrabold text-[#101828] mb-1",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        children: subj.title
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                                        lineNumber: 81,
                                        columnNumber: 92
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                                    lineNumber: 81,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-gray-400",
                                    children: [
                                        "Code: ",
                                        subj.code
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                                    lineNumber: 82,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, subj.slug, true, {
                            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                            lineNumber: 65,
                            columnNumber: 29
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 56,
                    columnNumber: 21
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white rounded-[1.5rem] p-12 text-center shadow-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-2xl font-bold text-gray-400",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Coming Soon"
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                            lineNumber: 88,
                            columnNumber: 74
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                        lineNumber: 88,
                        columnNumber: 25
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
                    lineNumber: 87,
                    columnNumber: 21
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
            lineNumber: 47,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn.knowly/app/curriculum/[curriculumSlug]/page.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=learn_knowly_44ad5cef._.js.map