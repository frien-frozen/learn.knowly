module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/learn.knowly/context/LanguageContext.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProviderInner({ children }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 1. Source of Truth: URL (default to 'uz')
    const lang = searchParams.get('lang') || 'uz';
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // 2. Sync LocalStorage on mount/change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        localStorage.setItem('knowly_lang', lang);
    }, [
        lang
    ]);
    // 3. Toggle Handler
    const toggleLanguage = ()=>{
        setIsTranslating(true);
        const nextLang = lang === 'uz' ? 'en' : 'uz';
        // Update URL
        const params = new URLSearchParams(searchParams.toString());
        params.set('lang', nextLang);
        router.push(`${pathname}?${params.toString()}`);
        // Keep overlay up briefly
        setTimeout(()=>setIsTranslating(false), 1500);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            isTranslating,
            toggleLanguage
        },
        children: [
            isTranslating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-gray-100 border-t-[#D92D20] rounded-full animate-spin mb-6"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-extrabold text-[#101828] animate-pulse text-center px-4",
                        children: lang === 'en' ? "Ingliz tiliga tarjima qilinmoqda..." : "O'zbek tiliga tarjima qilinmoqda..."
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-2 font-medium",
                        children: "Applying AI Translations..."
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                        lineNumber: 52,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                lineNumber: 47,
                columnNumber: 17
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
function LanguageProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
            lineNumber: 63,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageProviderInner, {
            children: children
        }, void 0, false, {
            fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
        lineNumber: 63,
        columnNumber: 9
    }, this);
}
const useLanguage = ()=>{
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
}),
"[project]/learn.knowly/components/ScrollToTop.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
'use client';
;
;
function ScrollToTop() {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Force scroll to top whenever the route changes
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'instant' // Instant jump (prevent smooth scroll fighting)
        });
    }, [
        pathname
    ]);
    return null;
}
}),
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
"[project]/learn.knowly/hooks/useGlobalSearch.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalSearch",
    ()=>useGlobalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/fuse.js/dist/fuse.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/utils/mockData.ts [app-ssr] (ecmascript)");
;
;
;
const useGlobalSearch = ()=>{
    const searchIndex = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const index = [];
        Object.entries(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_CURRICULUMS"]).forEach(([slug, curr])=>{
            index.push({
                id: `curr-${slug}`,
                type: 'curriculum',
                title: curr.title,
                subtitle: curr.subtitle,
                link: `/curriculum/${slug}`,
                breadcrumbs: [
                    'Curriculum'
                ]
            });
            const subjects = __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MOCK_SUBJECTS"][slug] || [];
            subjects.forEach((subj)=>{
                index.push({
                    id: `subj-${subj.slug}`,
                    type: 'subject',
                    title: subj.title,
                    subtitle: `Code: ${subj.code}`,
                    link: `/curriculum/${slug}/${subj.slug}`,
                    breadcrumbs: [
                        curr.title
                    ]
                });
                const syllabus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$utils$2f$mockData$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getSyllabus"])(subj.slug, subj.title);
                syllabus.forEach((unit)=>{
                    unit.topics.forEach((topic)=>{
                        index.push({
                            id: `topic-${topic}`,
                            type: 'topic',
                            title: topic,
                            subtitle: `Unit: ${unit.title}`,
                            link: `/curriculum/${slug}/${subj.slug}`,
                            breadcrumbs: [
                                curr.title,
                                subj.title
                            ]
                        });
                    });
                });
            });
        });
        return index;
    }, []);
    const fuse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](searchIndex, {
            keys: [
                {
                    name: 'title',
                    weight: 0.7
                },
                {
                    name: 'subtitle',
                    weight: 0.2
                },
                {
                    name: 'breadcrumbs',
                    weight: 0.1
                }
            ],
            threshold: 0.3,
            ignoreLocation: true
        }), [
        searchIndex
    ]);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((query)=>{
        if (!query) return [];
        return fuse.search(query).map((res)=>res.item);
    }, [
        fuse
    ]);
    return {
        search
    };
};
}),
"[project]/learn.knowly/hooks/useT.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
;
;
const useT = (text)=>{
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lang = searchParams.get('lang') || 'uz'; // URL Driver
    const [translated, setTranslated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(text);
    const isFetching = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const translate = async ()=>{
            // If English, return original
            if (lang === 'en') {
                setTranslated(text);
                return;
            }
            // Check Cache
            const cacheKey = `tr_${lang}_${text}`;
            const cached = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (isFetching.current) return;
            // Fetch API
            try {
                isFetching.current = true;
                const res = await fetch('/api/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text,
                        targetLang: lang
                    })
                });
                const data = await res.json();
                if (data.translatedText) {
                    setTranslated(data.translatedText);
                    localStorage.setItem(cacheKey, data.translatedText);
                }
            } catch (e) {
            // silent fail
            } finally{
                isFetching.current = false;
            }
        };
        translate();
    }, [
        text,
        lang
    ]); // Re-run when URL lang changes
    return translated;
};
}),
"[project]/learn.knowly/components/ui/T.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>T,
    "getCurrentLang",
    ()=>getCurrentLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useT$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useT.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function TInner({ children, className }) {
    const translated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useT$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useT"])(children);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: translated
    }, void 0, false, {
        fileName: "[project]/learn.knowly/components/ui/T.tsx",
        lineNumber: 8,
        columnNumber: 12
    }, this);
}
function T({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/learn.knowly/components/ui/T.tsx",
            lineNumber: 14,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(TInner, {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/learn.knowly/components/ui/T.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn.knowly/components/ui/T.tsx",
        lineNumber: 14,
        columnNumber: 9
    }, this);
}
const getCurrentLang = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return 'uz';
};
}),
"[project]/learn.knowly/components/Header.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useLangRouter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useGlobalSearch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/use-debounce/dist/index.module.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/context/LanguageContext.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
// UI Dictionary
const NAV_TEXT = {
    en: {
        curriculums: "Curriculums",
        courses: "Courses",
        teaching: "Start Teaching",
        placeholder: "Search for physics, algebra..."
    },
    uz: {
        curriculums: "O'quv dasturlari",
        courses: "Kurslar",
        teaching: "Ta'lim berishni boshlang",
        placeholder: "Mavzuni qidirish..."
    }
};
function Header() {
    const { push, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLangRouter"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { search } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobalSearch"])();
    const t = NAV_TEXT[lang] || NAV_TEXT.uz;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- FIX: HANDLE HASH LINKS CORRECTLY ---
    const handleHashNav = (hash)=>{
        router.push(`/?lang=${lang}${hash}`);
    };
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDebouncedCallback"])(async (term)=>{
        if (!term || term.length < 2) {
            setResults([]);
            setIsSearching(false);
            return;
        }
        setIsSearching(true);
        let searchTerm = term;
        // AI Translation for Dropdown
        if (lang === 'uz') {
            try {
                const res = await fetch('/api/translate', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: term,
                        targetLang: 'en'
                    })
                });
                const data = await res.json();
                if (data.translatedText) searchTerm = data.translatedText;
            } catch (e) {
            // Silent fail
            }
        }
        const matches = search(searchTerm);
        setResults(matches);
        setIsSearching(false);
    }, 500);
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && query.length > 0) {
            setIsFocused(false);
            push(`/search?q=${encodeURIComponent(query)}`);
            setResults([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return ()=>document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 h-24 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>push('/'),
                    className: "cursor-pointer flex-shrink-0 hover:scale-105 transition-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/logos/knowly-header.png",
                        alt: "KNOWLY",
                        className: "h-14 w-auto object-contain"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/components/Header.tsx",
                        lineNumber: 91,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/components/Header.tsx",
                    lineNumber: 90,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden xl:flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200 mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleHashNav('#curriculums'),
                            className: "px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap",
                            children: t.curriculums
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleHashNav('#courses'),
                            className: "px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap",
                            children: t.courses
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: "https://teacher.knowly.uz",
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: "px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#FDB022] hover:shadow-sm transition-all whitespace-nowrap",
                            children: t.teaching
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 108,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/learn.knowly/components/Header.tsx",
                    lineNumber: 95,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: searchRef,
                            className: "relative hidden lg:block group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-gray-100 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-[#D92D20]/20 transition-all w-64 xl:w-80",
                                    children: [
                                        isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 text-[#D92D20] mr-2.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4 text-gray-400 mr-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 113
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: query,
                                            onChange: (e)=>{
                                                setQuery(e.target.value);
                                                handleSearch(e.target.value);
                                            },
                                            onKeyDown: handleKeyDown,
                                            onFocus: ()=>setIsFocused(true),
                                            placeholder: t.placeholder,
                                            className: "bg-transparent border-none outline-none text-sm font-bold text-gray-700 w-full placeholder-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 123,
                                            columnNumber: 29
                                        }, this),
                                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setQuery('');
                                                setResults([]);
                                            },
                                            className: "text-gray-400 hover:text-red-500 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                className: "w-3 h-3"
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Header.tsx",
                                                lineNumber: 132,
                                                columnNumber: 160
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 132,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/learn.knowly/components/Header.tsx",
                                    lineNumber: 121,
                                    columnNumber: 25
                                }, this),
                                isFocused && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full mt-3 right-0 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 z-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 py-2 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Best Matches"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 43
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Header.tsx",
                                                    lineNumber: 138,
                                                    columnNumber: 37
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300",
                                                    children: [
                                                        results.length,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            children: "found"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 139,
                                                            columnNumber: 86
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/learn.knowly/components/Header.tsx",
                                                    lineNumber: 139,
                                                    columnNumber: 37
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 137,
                                            columnNumber: 33
                                        }, this),
                                        results.slice(0, 5).map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    push(res.link);
                                                    setIsFocused(false);
                                                    setQuery('');
                                                },
                                                className: "px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4 border-b border-gray-50 last:border-0 group/item transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all",
                                                        children: res.type === 'curriculum' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            className: "w-4 h-4 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 74
                                                        }, this) : res.type === 'subject' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "w-4 h-4 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 74
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
                                                            className: "w-4 h-4 text-green-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                                        lineNumber: 147,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-gray-800 truncate group-hover/item:text-[#D92D20] transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    children: res.title
                                                                }, void 0, false, {
                                                                    fileName: "[project]/learn.knowly/components/Header.tsx",
                                                                    lineNumber: 154,
                                                                    columnNumber: 49
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Header.tsx",
                                                                lineNumber: 153,
                                                                columnNumber: 45
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs text-gray-400 truncate",
                                                                children: res.breadcrumbs.join(' > ')
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Header.tsx",
                                                                lineNumber: 156,
                                                                columnNumber: 45
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                                        lineNumber: 152,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, res.id, true, {
                                                fileName: "[project]/learn.knowly/components/Header.tsx",
                                                lineNumber: 142,
                                                columnNumber: 37
                                            }, this)),
                                        results.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                push(`/search?q=${encodeURIComponent(query)}`);
                                                setIsFocused(false);
                                            },
                                            className: "px-5 py-3 text-center text-xs font-bold text-[#D92D20] hover:bg-red-50 cursor-pointer transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                children: "View all results"
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Header.tsx",
                                                lineNumber: 167,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 163,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/learn.knowly/components/Header.tsx",
                                    lineNumber: 136,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 120,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleLanguage,
                            className: "flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors font-bold text-sm text-gray-700 active:scale-95",
                            children: lang === 'uz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "🇺🇿"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "O'zb"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 81
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "🇬🇧"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 106
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "Eng"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 143
                                    }, this)
                                ]
                            }, void 0, true)
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 174,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/learn.knowly/components/Header.tsx",
                    lineNumber: 119,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/learn.knowly/components/Header.tsx",
            lineNumber: 87,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn.knowly/components/Header.tsx",
        lineNumber: 86,
        columnNumber: 9
    }, this);
}
}),
"[project]/learn.knowly/components/Footer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/mail.js [app-ssr] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/phone.js [app-ssr] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/instagram.js [app-ssr] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/send.js [app-ssr] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/youtube.js [app-ssr] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "bg-[#101828] text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D92D20] via-[#FDB022] to-[#D92D20]"
            }, void 0, false, {
                fileName: "[project]/learn.knowly/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/logos/kn-icon.png",
                                                alt: "KN",
                                                width: 40,
                                                height: 40,
                                                className: "w-10 h-10 rounded-lg"
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 21,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-2xl font-nunito font-extrabold tracking-tight",
                                                children: "KNOWLY"
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 28,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 20,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 leading-relaxed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Your AI-powered learning companion for Cambridge, Edexcel, and more."
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                            lineNumber: 31,
                                            columnNumber: 29
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 30,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
                                        ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                    className: "w-5 h-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                    lineNumber: 36,
                                                    columnNumber: 37
                                                }, this)
                                            }, i, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 35,
                                                columnNumber: 33
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                lineNumber: 19,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-lg mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Platform"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                            lineNumber: 44,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 44,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4 text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Curriculums"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 46,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                    lineNumber: 46,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 46,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Teachers"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 47,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                    lineNumber: 47,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 47,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Our Mission"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 48,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                    lineNumber: 48,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 48,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        children: "Success Stories"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 49,
                                                        columnNumber: 96
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 49,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 45,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-lg mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Contact Us"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                            lineNumber: 55,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 55,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+998944101777",
                                                className: "flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-[#FDB022]/10 flex items-center justify-center text-[#FDB022]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                            lineNumber: 61,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    children: "Call Us"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 109
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 64,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-lg",
                                                                children: "+998 94 410 17 77"
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 65,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 63,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:contact@knowly.uz",
                                                className: "flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-[#D92D20]/10 flex items-center justify-center text-[#D92D20]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                            lineNumber: 72,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    children: "Email"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                    lineNumber: 75,
                                                                    columnNumber: 109
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 75,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-lg",
                                                                children: "contact@knowly.uz"
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 70,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-5 h-5"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                            lineNumber: 83,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 82,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                                    children: "Location"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                    lineNumber: 86,
                                                                    columnNumber: 109
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 86,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "font-bold text-lg",
                                                                children: "Ferghana, Uzbekistan"
                                                            }, void 0, false, {
                                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                                lineNumber: 81,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 56,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                lineNumber: 54,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                        lineNumber: 16,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                    children: "© 2025 KNOWLY. All rights reserved."
                                }, void 0, false, {
                                    fileName: "[project]/learn.knowly/components/Footer.tsx",
                                    lineNumber: 97,
                                    columnNumber: 24
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                lineNumber: 97,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Privacy Policy"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                            lineNumber: 99,
                                            columnNumber: 66
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 99,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            children: "Terms of Service"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Footer.tsx",
                                            lineNumber: 100,
                                            columnNumber: 66
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                                        lineNumber: 100,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/components/Footer.tsx",
                                lineNumber: 98,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/learn.knowly/components/Footer.tsx",
                        lineNumber: 96,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learn.knowly/components/Footer.tsx",
                lineNumber: 15,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/learn.knowly/components/Footer.tsx",
        lineNumber: 10,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__50b8be53._.js.map