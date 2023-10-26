"use strict";
exports.id = 976;
exports.ids = [976];
exports.modules = {

/***/ 976:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports["default"] = void 0;
var _router = __webpack_require__(1003);
var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(9565));
var _isDynamic = __webpack_require__(1428);
var _parseRelativeUrl = __webpack_require__(1292);
var _normalizeTrailingSlash = __webpack_require__(2700);
var _routeLoader = __webpack_require__(2497);
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function normalizeRoute(route) {
    if (route[0] !== "/") {
        throw new Error(`Route name should start with a "/", got "${route}"`);
    }
    if (route === "/") return route;
    return route.replace(/\/$/, "");
}
class PageLoader {
    getPageList() {
        if (true) {
            return (0, _routeLoader).getClientBuildManifest().then((manifest)=>manifest.sortedPages
            );
        } else {}
    }
    getMiddlewareList() {
        if (true) {
            return (0, _routeLoader).getMiddlewareManifest();
        } else {}
    }
    /**
   * @param {string} href the route href (file-system path)
   * @param {string} asPath the URL as shown in browser (virtual path); used for dynamic routes
   * @returns {string}
   */ getDataHref({ href , asPath , ssg , flight , locale  }) {
        const { pathname: hrefPathname , query , search  } = (0, _parseRelativeUrl).parseRelativeUrl(href);
        const { pathname: asPathname  } = (0, _parseRelativeUrl).parseRelativeUrl(asPath);
        const route = normalizeRoute(hrefPathname);
        const getHrefForSlug = (path)=>{
            if (flight) {
                return path + search + (search ? `&` : "?") + "__flight__=1";
            }
            const dataRoute = (0, _getAssetPathFromRoute).default((0, _normalizeTrailingSlash).removePathTrailingSlash((0, _router).addLocale(path, locale)), ".json");
            return (0, _router).addBasePath(`/_next/data/${this.buildId}${dataRoute}${ssg ? "" : search}`);
        };
        const isDynamic = (0, _isDynamic).isDynamicRoute(route);
        const interpolatedRoute = isDynamic ? (0, _router).interpolateAs(hrefPathname, asPathname, query).result : "";
        return isDynamic ? interpolatedRoute && getHrefForSlug(interpolatedRoute) : getHrefForSlug(route);
    }
    /**
   * @param {string} route - the route (file-system path)
   */ _isSsg(route) {
        return this.promisedSsgManifest.then((manifest)=>manifest.has(route)
        );
    }
    loadPage(route) {
        return this.routeLoader.loadRoute(route).then((res)=>{
            if ("component" in res) {
                return {
                    page: res.component,
                    mod: res.exports,
                    styleSheets: res.styles.map((o)=>({
                            href: o.href,
                            text: o.content
                        })
                    )
                };
            }
            throw res.error;
        });
    }
    prefetch(route) {
        return this.routeLoader.prefetch(route);
    }
    constructor(buildId, assetPrefix){
        this.routeLoader = (0, _routeLoader).createRouteLoader(assetPrefix);
        this.buildId = buildId;
        this.assetPrefix = assetPrefix;
        this.promisedSsgManifest = new Promise((resolve)=>{
            if (window.__SSG_MANIFEST) {
                resolve(window.__SSG_MANIFEST);
            } else {
                window.__SSG_MANIFEST_CB = ()=>{
                    resolve(window.__SSG_MANIFEST);
                };
            }
        });
    }
}
exports["default"] = PageLoader;
if (typeof exports.default === "function" || typeof exports.default === "object" && exports.default !== null) {
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-loader.js.map


/***/ })

};
;