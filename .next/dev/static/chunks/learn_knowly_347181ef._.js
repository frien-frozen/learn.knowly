(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/learn.knowly/context/LanguageContext.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LanguageProvider",
    ()=>LanguageProvider,
    "useLanguage",
    ()=>useLanguage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const LanguageContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(undefined);
function LanguageProviderInner({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    // 1. Source of Truth: URL (default to 'uz')
    const lang = searchParams.get('lang') || 'uz';
    const [isTranslating, setIsTranslating] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 2. Sync LocalStorage on mount/change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LanguageProviderInner.useEffect": ()=>{
            localStorage.setItem('knowly_lang', lang);
        }
    }["LanguageProviderInner.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageContext.Provider, {
        value: {
            lang,
            isTranslating,
            toggleLanguage
        },
        children: [
            isTranslating && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-[9999] bg-white/95 backdrop-blur-md flex flex-col items-center justify-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-16 h-16 border-4 border-gray-100 border-t-[#D92D20] rounded-full animate-spin mb-6"
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                        lineNumber: 48,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-2xl md:text-3xl font-extrabold text-[#101828] animate-pulse text-center px-4",
                        children: lang === 'en' ? "Ingliz tiliga tarjima qilinmoqda..." : "O'zbek tiliga tarjima qilinmoqda..."
                    }, void 0, false, {
                        fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
                        lineNumber: 49,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(LanguageProviderInner, "9uzf9n3rpQTr8wZsIaapQmG1q/g=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = LanguageProviderInner;
function LanguageProvider({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {}, void 0, false, {
            fileName: "[project]/learn.knowly/context/LanguageContext.tsx",
            lineNumber: 63,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LanguageProviderInner, {
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
_c1 = LanguageProvider;
const useLanguage = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LanguageContext);
    if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
    return context;
};
_s1(useLanguage, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c, _c1;
__turbopack_context__.k.register(_c, "LanguageProviderInner");
__turbopack_context__.k.register(_c1, "LanguageProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/components/ScrollToTop.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollToTop
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ScrollToTop() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollToTop.useEffect": ()=>{
            // Force scroll to top whenever the route changes
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'instant' // Instant jump (prevent smooth scroll fighting)
            });
        }
    }["ScrollToTop.useEffect"], [
        pathname
    ]);
    return null;
}
_s(ScrollToTop, "V/ldUoOTYUs0Cb2F6bbxKSn7KxI=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = ScrollToTop;
var _c;
__turbopack_context__.k.register(_c, "ScrollToTop");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/hooks/useLangRouter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useLangRouter",
    ()=>useLangRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const useLangRouter = ()=>{
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
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
_s(useLangRouter, "k8CgOCoCWptimp6sb2fX3Xw196E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/app/actions/data:dd8f62 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchSearchIndex",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"0038f47f950c3bb61d6b820d5406a2739cc68422c2":"fetchSearchIndex"},"learn.knowly/app/actions/search.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("0038f47f950c3bb61d6b820d5406a2739cc68422c2", __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "fetchSearchIndex");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vc2VhcmNoLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc2VydmVyJztcblxuaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYi9wcmlzbWEnO1xuaW1wb3J0IHsgU2VhcmNoUmVzdWx0IH0gZnJvbSAnQC9ob29rcy91c2VHbG9iYWxTZWFyY2gnO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZmV0Y2hTZWFyY2hJbmRleCgpOiBQcm9taXNlPFNlYXJjaFJlc3VsdFtdPiB7XG4gICAgY29uc3QgaW5kZXg6IFNlYXJjaFJlc3VsdFtdID0gW107XG5cbiAgICAvLyBGZXRjaCBhbGwgcmVxdWlyZWQgZGF0YSBpbiBhIGZldyBxdWVyaWVzIHRvIGF2b2lkIE4rMVxuICAgIGNvbnN0IGN1cnJpY3VsdW1zID0gYXdhaXQgcHJpc21hLmN1cnJpY3VsdW0uZmluZE1hbnkoe1xuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBzdWJqZWN0czoge1xuICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgdW5pdHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3BpY3M6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBjdXJyIG9mIGN1cnJpY3VsdW1zKSB7XG4gICAgICAgIGluZGV4LnB1c2goe1xuICAgICAgICAgICAgaWQ6IGBjdXJyLSR7Y3Vyci5pZH1gLFxuICAgICAgICAgICAgdHlwZTogJ2N1cnJpY3VsdW0nLFxuICAgICAgICAgICAgdGl0bGU6IGN1cnIubmFtZSxcbiAgICAgICAgICAgIHN1YnRpdGxlOiAnQ3VycmljdWx1bScsXG4gICAgICAgICAgICBsaW5rOiBgL2N1cnJpY3VsdW0vJHtjdXJyLm5hbWV9YCxcbiAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbJ0N1cnJpY3VsdW0nXVxuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKGNvbnN0IHN1Ymogb2YgY3Vyci5zdWJqZWN0cykge1xuICAgICAgICAgICAgaW5kZXgucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGBzdWJqLSR7c3Viai5pZH1gLFxuICAgICAgICAgICAgICAgIHR5cGU6ICdzdWJqZWN0JyxcbiAgICAgICAgICAgICAgICB0aXRsZTogc3Viai5uYW1lLFxuICAgICAgICAgICAgICAgIHN1YnRpdGxlOiBgU3ViamVjdGAsXG4gICAgICAgICAgICAgICAgbGluazogYC9jdXJyaWN1bHVtLyR7Y3Vyci5uYW1lfS8ke3N1YmouaWR9YCxcbiAgICAgICAgICAgICAgICBicmVhZGNydW1iczogW2N1cnIubmFtZV1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHVuaXQgb2Ygc3Viai51bml0cykge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdG9waWMgb2YgdW5pdC50b3BpY3MpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogYHRvcGljLSR7dG9waWMuaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0b3BpYycsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdG9waWMudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWJ0aXRsZTogYFVuaXQ6ICR7dW5pdC50aXRsZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGluazogYC9jdXJyaWN1bHVtLyR7Y3Vyci5uYW1lfS8ke3N1YmouaWR9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFkY3J1bWJzOiBbY3Vyci5uYW1lLCBzdWJqLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBpbmRleDtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoidVNBS3NCLDZMQUFBIn0=
}),
"[project]/learn.knowly/hooks/useGlobalSearch.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useGlobalSearch",
    ()=>useGlobalSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/fuse.js/dist/fuse.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$app$2f$actions$2f$data$3a$dd8f62__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/learn.knowly/app/actions/data:dd8f62 [app-client] (ecmascript) <text/javascript>");
var _s = __turbopack_context__.k.signature();
;
;
;
const useGlobalSearch = ()=>{
    _s();
    const [searchIndex, setSearchIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useGlobalSearch.useEffect": ()=>{
            // Fetch search data from database
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$app$2f$actions$2f$data$3a$dd8f62__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["fetchSearchIndex"])().then({
                "useGlobalSearch.useEffect": (data)=>{
                    setSearchIndex(data);
                }
            }["useGlobalSearch.useEffect"]).catch({
                "useGlobalSearch.useEffect": (err)=>{
                    console.error('Failed to load search index:', err);
                }
            }["useGlobalSearch.useEffect"]);
        }
    }["useGlobalSearch.useEffect"], []);
    const fuse = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useGlobalSearch.useMemo[fuse]": ()=>new __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$fuse$2e$js$2f$dist$2f$fuse$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"](searchIndex, {
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
            })
    }["useGlobalSearch.useMemo[fuse]"], [
        searchIndex
    ]);
    const search = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useGlobalSearch.useCallback[search]": (query)=>{
            if (!query || searchIndex.length === 0) return [];
            return fuse.search(query).map({
                "useGlobalSearch.useCallback[search]": (res)=>res.item
            }["useGlobalSearch.useCallback[search]"]);
        }
    }["useGlobalSearch.useCallback[search]"], [
        fuse,
        searchIndex
    ]);
    return {
        search,
        isLoading: searchIndex.length === 0
    };
};
_s(useGlobalSearch, "kmr6ZP2EZnQFtZ9D4PwkY/CkNbg=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/hooks/useT.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
;
const useT = (text)=>{
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const lang = searchParams.get('lang') || 'uz'; // URL Driver
    const [translated, setTranslated] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(text);
    const isFetching = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useT.useEffect": ()=>{
            const translate = {
                "useT.useEffect.translate": async ()=>{
                    // If English, return original
                    if (lang === 'en') {
                        setTranslated(text);
                        return;
                    }
                    // Check Cache
                    const cacheKey = `tr_${lang}_${text}`;
                    const cached = ("TURBOPACK compile-time truthy", 1) ? localStorage.getItem(cacheKey) : "TURBOPACK unreachable";
                    if (cached && cached !== text) {
                        setTranslated(cached);
                        return;
                    }
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
                }
            }["useT.useEffect.translate"];
            translate();
        }
    }["useT.useEffect"], [
        text,
        lang
    ]); // Re-run when URL lang changes
    return translated;
};
_s(useT, "+7HO5XRtqQ97FK2Xi4lir0TXyO4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/components/ui/T.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>T,
    "getCurrentLang",
    ()=>getCurrentLang
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useT.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function TInner({ children, className }) {
    _s();
    const translated = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"])(children);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: className,
        children: translated
    }, void 0, false, {
        fileName: "[project]/learn.knowly/components/ui/T.tsx",
        lineNumber: 8,
        columnNumber: 12
    }, this);
}
_s(TInner, "SphrqFXLQr4qAUKACo6yGn/rpyQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useT$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useT"]
    ];
});
_c = TInner;
function T({ children, className }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: className,
            children: children
        }, void 0, false, {
            fileName: "[project]/learn.knowly/components/ui/T.tsx",
            lineNumber: 14,
            columnNumber: 29
        }, void 0),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TInner, {
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
_c1 = T;
const getCurrentLang = ()=>{
    if ("TURBOPACK compile-time truthy", 1) {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang') || 'uz';
    }
    //TURBOPACK unreachable
    ;
};
var _c, _c1;
__turbopack_context__.k.register(_c, "TInner");
__turbopack_context__.k.register(_c1, "T");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/components/Header.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Header
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useLangRouter.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/hooks/useGlobalSearch.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/use-debounce/dist/index.module.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/book-open.js [app-client] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/circle-play.js [app-client] (ecmascript) <export default as PlayCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/context/LanguageContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    _s();
    const { push, lang } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLangRouter"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { toggleLanguage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"])();
    const { search } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalSearch"])();
    const t = NAV_TEXT[lang] || NAV_TEXT.uz;
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [results, setResults] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isFocused, setIsFocused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSearching, setIsSearching] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const searchRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // --- FIX: HANDLE HASH LINKS CORRECTLY ---
    const handleHashNav = (hash)=>{
        router.push(`/?lang=${lang}${hash}`);
    };
    const handleSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"])({
        "Header.useDebouncedCallback[handleSearch]": async (term)=>{
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
        }
    }["Header.useDebouncedCallback[handleSearch]"], 500);
    const handleKeyDown = (e)=>{
        if (e.key === 'Enter' && query.length > 0) {
            setIsFocused(false);
            push(`/search?q=${encodeURIComponent(query)}`);
            setResults([]);
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Header.useEffect": ()=>{
            const handleClickOutside = {
                "Header.useEffect.handleClickOutside": (event)=>{
                    if (searchRef.current && !searchRef.current.contains(event.target)) {
                        setIsFocused(false);
                    }
                }
            }["Header.useEffect.handleClickOutside"];
            document.addEventListener('mousedown', handleClickOutside);
            return ({
                "Header.useEffect": ()=>document.removeEventListener('mousedown', handleClickOutside)
            })["Header.useEffect"];
        }
    }["Header.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "fixed top-0 left-0 right-0 z-50 h-24 bg-white/90 backdrop-blur-lg border-b border-gray-100 transition-all",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "w-full max-w-7xl mx-auto px-6 h-full flex items-center justify-between gap-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    onClick: ()=>push('/'),
                    className: "cursor-pointer flex-shrink-0 hover:scale-105 transition-transform",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                    className: "hidden xl:flex items-center gap-1 bg-gray-100 p-1 rounded-full border border-gray-200 mx-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleHashNav('#curriculums'),
                            className: "px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap",
                            children: t.curriculums
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 96,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>handleHashNav('#courses'),
                            className: "px-6 py-2.5 rounded-full text-sm font-extrabold text-gray-600 hover:bg-white hover:text-[#D92D20] hover:shadow-sm transition-all whitespace-nowrap",
                            children: t.courses
                        }, void 0, false, {
                            fileName: "[project]/learn.knowly/components/Header.tsx",
                            lineNumber: 102,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                            href: `https://teacher.knowly.uz/?lang=${lang}`,
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-4 flex-shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            ref: searchRef,
                            className: "relative hidden lg:block group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center bg-gray-100 rounded-full px-4 py-2.5 focus-within:ring-2 focus-within:ring-[#D92D20]/20 transition-all w-64 xl:w-80",
                                    children: [
                                        isSearching ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                            className: "w-4 h-4 text-[#D92D20] mr-2.5 animate-spin"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 44
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                            className: "w-4 h-4 text-gray-400 mr-2.5"
                                        }, void 0, false, {
                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                            lineNumber: 122,
                                            columnNumber: 113
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                        query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setQuery('');
                                                setResults([]);
                                            },
                                            className: "text-gray-400 hover:text-red-500 transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                                isFocused && results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-full mt-3 right-0 w-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden py-2 animate-in fade-in slide-in-from-top-2 z-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-5 py-2 text-[10px] font-extrabold text-gray-400 uppercase tracking-wider flex justify-between",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-300",
                                                    children: [
                                                        results.length,
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                        results.slice(0, 5).map((res)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                onClick: ()=>{
                                                    push(res.link);
                                                    setIsFocused(false);
                                                    setQuery('');
                                                },
                                                className: "px-5 py-3 hover:bg-gray-50 cursor-pointer flex items-center gap-4 border-b border-gray-50 last:border-0 group/item transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0 group-hover/item:bg-white group-hover/item:shadow-sm transition-all",
                                                        children: res.type === 'curriculum' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                            className: "w-4 h-4 text-red-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 148,
                                                            columnNumber: 74
                                                        }, this) : res.type === 'subject' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"], {
                                                            className: "w-4 h-4 text-blue-500"
                                                        }, void 0, false, {
                                                            fileName: "[project]/learn.knowly/components/Header.tsx",
                                                            lineNumber: 149,
                                                            columnNumber: 74
                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PlayCircle$3e$__["PlayCircle"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "overflow-hidden flex-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-bold text-sm text-gray-800 truncate group-hover/item:text-[#D92D20] transition-colors",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                        results.length > 5 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onClick: ()=>{
                                                push(`/search?q=${encodeURIComponent(query)}`);
                                                setIsFocused(false);
                                            },
                                            className: "px-5 py-3 text-center text-xs font-bold text-[#D92D20] hover:bg-red-50 cursor-pointer transition-colors",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: toggleLanguage,
                            className: "flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-full border border-gray-200 transition-colors font-bold text-sm text-gray-700 active:scale-95",
                            children: lang === 'uz' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "🇺🇿"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 44
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "O'zb"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 81
                                    }, this)
                                ]
                            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-lg",
                                        children: "🇬🇧"
                                    }, void 0, false, {
                                        fileName: "[project]/learn.knowly/components/Header.tsx",
                                        lineNumber: 178,
                                        columnNumber: 106
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
_s(Header, "LSLXUkuE4u2bZYfNeGijzguULjM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useLangRouter$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLangRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$context$2f$LanguageContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLanguage"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$hooks$2f$useGlobalSearch$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useGlobalSearch"],
        __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$use$2d$debounce$2f$dist$2f$index$2e$module$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebouncedCallback"]
    ];
});
_c = Header;
var _c;
__turbopack_context__.k.register(_c, "Header");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/learn.knowly/components/Footer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Footer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/send.js [app-client] (ecmascript) <export default as Send>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__ = __turbopack_context__.i("[project]/learn.knowly/node_modules/lucide-react/dist/esm/icons/youtube.js [app-client] (ecmascript) <export default as Youtube>");
var __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/learn.knowly/components/ui/T.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        id: "footer",
        className: "bg-[#101828] text-white pt-24 pb-12 rounded-t-[3rem] mt-12 relative overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#D92D20] via-[#FDB022] to-[#D92D20]"
            }, void 0, false, {
                fileName: "[project]/learn.knowly/components/Footer.tsx",
                lineNumber: 13,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full max-w-7xl mx-auto px-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-400 leading-relaxed",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-4",
                                        children: [
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$send$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Send$3e$__["Send"],
                                            __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$youtube$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Youtube$3e$__["Youtube"]
                                        ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D92D20] transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-lg mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-4 text-gray-400",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: "#",
                                                    className: "hover:text-[#FDB022] transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "lg:col-span-2 space-y-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "font-bold text-lg mb-6",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "tel:+998944101777",
                                                className: "flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-[#FDB022]/10 flex items-center justify-center text-[#FDB022]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "mailto:contact@knowly.uz",
                                                className: "flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 hover:bg-gray-800 transition-colors border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-[#D92D20]/10 flex items-center justify-center text-[#D92D20]",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "md:col-span-2 flex items-center gap-4 p-4 rounded-2xl bg-gray-800/50 border border-gray-700",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
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
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-xs text-gray-400 uppercase font-bold tracking-wider",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "#",
                                        className: "hover:text-white",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$learn$2e$knowly$2f$components$2f$ui$2f$T$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_c = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=learn_knowly_347181ef._.js.map