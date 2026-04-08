module.exports = [
"[project]/learn.knowly/app/search/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useLangRouter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useGlobalSearch.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-ssr] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/book-open.js [app-ssr] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-ssr] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-ssr] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
// Quick UI dictionary just for the "Search Results" headers to prevent flashing
const UI_TEXT = {
    en: {
        resultsFor: "Search Results for",
        found: "Found",
        matches: "matches",
        noResults: "No results found"
    },
    uz: {
        resultsFor: "Qidiruv natijalari:",
        found: "Topildi:",
        matches: "ta natija",
        noResults: "Hech narsa topilmadi"
    }
};
function SearchContent() {
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const rawQuery = searchParams.get('q') || '';
    const query = decodeURIComponent(rawQuery);
    const { push, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useLangRouter"])();
    const t = UI_TEXT[lang] || UI_TEXT.uz;
    const { search } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useGlobalSearch"])();
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const runAiSearch = async ()=>{
            setIsSearching(true);
            if (!query) {
                setIsSearching(false);
                return;
            }
            let termToSearch = query;
            // 1. AI TRANSLATION (Only if Uzbek)
            if (lang === 'uz') {
                try {
                    const res = await fetch('/api/translate', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            text: query,
                            targetLang: 'en'
                        })
                    });
                    const data = await res.json();
                    if (data.translatedText) {
                        console.log(`AI Success: ${query} -> ${data.translatedText}`);
                        termToSearch = data.translatedText;
                    }
                } catch (e) {
                    console.error("AI Translation failed, using raw query");
                }
            }
            // 2. SEARCH DATABASE (English content)
            const matches = search(termToSearch);
            setResults(matches);
            setIsSearching(false);
        };
        runAiSearch();
    }, [
        query,
        lang,
        search
    ]);
    const getIcon = (type)=>{
        if (type === 'curriculum') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
            className: "w-6 h-6 text-red-500"
        }, void 0, false, {
            fileName: "[project]/learn.knowly/app/search/page.tsx",
            lineNumber: 67,
            columnNumber: 43
        }, this);
        if (type === 'subject') return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
            className: "w-6 h-6 text-blue-500"
        }, void 0, false, {
            fileName: "[project]/learn.knowly/app/search/page.tsx",
            lineNumber: 68,
            columnNumber: 40
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
            className: "w-6 h-6 text-green-500"
        }, void 0, false, {
            fileName: "[project]/learn.knowly/app/search/page.tsx",
            lineNumber: 69,
            columnNumber: 16
        }, this);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container mx-auto px-6 pt-32 pb-20 max-w-4xl min-h-screen",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-extrabold text-[#101828] mb-2",
                        children: [
                            t.resultsFor,
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-[#D92D20]",
                                children: [
                                    '"',
                                    query,
                                    '"'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                lineNumber: 76,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 75,
                        columnNumber: 17
                    }, this),
                    isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2 text-[#D92D20] font-bold text-sm animate-pulse",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                className: "w-4 h-4 animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                lineNumber: 81,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                children: "Searching..."
                            }, void 0, false, {
                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                lineNumber: 82,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 font-medium text-sm",
                        children: [
                            t.found,
                            " ",
                            results.length,
                            " ",
                            t.matches
                        ]
                    }, void 0, true, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 85,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 74,
                columnNumber: 13
            }, this),
            isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center py-20 text-gray-500 bg-white rounded-3xl border border-dashed border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "w-8 h-8 animate-spin mb-3 text-[#D92D20]"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 93,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-bold text-lg",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            children: "Searching courses..."
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/app/search/page.tsx",
                            lineNumber: 94,
                            columnNumber: 54
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 94,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 92,
                columnNumber: 17
            }, this) : query.length > 0 && results.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                            className: "w-6 h-6 text-gray-400"
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/app/search/page.tsx",
                            lineNumber: 99,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 98,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-bold text-gray-900 mb-1",
                        children: t.noResults
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 101,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 97,
                columnNumber: 17
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "space-y-4",
                children: results.map((res, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 10
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            delay: idx * 0.05
                        },
                        onClick: ()=>push(res.link),
                        className: "group bg-white rounded-2xl p-6 shadow-sm border border-transparent hover:border-red-100 hover:shadow-md cursor-pointer transition-all flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-white group-hover:shadow-sm transition-all",
                                        children: getIcon(res.type)
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-2 text-xs text-gray-400 font-bold mb-0.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "uppercase tracking-wider",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                            children: res.type
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                            lineNumber: 120,
                                                            columnNumber: 84
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                        lineNumber: 120,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "•"
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: res.breadcrumbs.join(' > ')
                                                    }, void 0, false, {
                                                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                        lineNumber: 122,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                lineNumber: 119,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                className: "text-lg font-bold text-[#101828] group-hover:text-[#D92D20] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    children: res.title
                                                }, void 0, false, {
                                                    fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                    lineNumber: 125,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                                lineNumber: 124,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                                        lineNumber: 118,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                lineNumber: 114,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                className: "w-5 h-5 text-gray-300 group-hover:text-[#D92D20] -translate-x-2 group-hover:translate-x-0 opacity-0 group-hover:opacity-100 transition-all"
                            }, void 0, false, {
                                fileName: "[project]/learn.knowly/app/search/page.tsx",
                                lineNumber: 129,
                                columnNumber: 29
                            }, this)
                        ]
                    }, res.id + idx, true, {
                        fileName: "[project]/learn.knowly/app/search/page.tsx",
                        lineNumber: 106,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 104,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/learn.knowly/app/search/page.tsx",
        lineNumber: 73,
        columnNumber: 9
    }, this);
}
function SearchPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen bg-[#F9FAFB] font-nunito",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Suspense"], {
            fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-screen flex items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                    className: "w-8 h-8 animate-spin text-red-500"
                }, void 0, false, {
                    fileName: "[project]/learn.knowly/app/search/page.tsx",
                    lineNumber: 141,
                    columnNumber: 92
                }, void 0)
            }, void 0, false, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 141,
                columnNumber: 33
            }, void 0),
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchContent, {}, void 0, false, {
                fileName: "[project]/learn.knowly/app/search/page.tsx",
                lineNumber: 142,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/learn.knowly/app/search/page.tsx",
            lineNumber: 141,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/learn.knowly/app/search/page.tsx",
        lineNumber: 140,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=learn_knowly_app_search_page_tsx_fefd0609._.js.map