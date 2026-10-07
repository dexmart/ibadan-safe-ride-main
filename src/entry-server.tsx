import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, type HelmetServerState } from "react-helmet-async";
import App from "./App";

export { SITE } from "./seo/site";
export { LANDING_PAGES } from "./seo/pages";
export { HOME_FAQS } from "./seo/faqs";

// Used by scripts/prerender.mjs to turn each route into static HTML.
export const render = (url: string) => {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App />
      </StaticRouter>
    </HelmetProvider>,
  );
  const { helmet } = helmetContext;
  const head = helmet
    ? [
        helmet.title.toString(),
        helmet.meta.toString(),
        helmet.link.toString(),
        helmet.script.toString(),
      ].join("\n    ")
    : "";
  const htmlAttributes = helmet ? helmet.htmlAttributes.toString() : "";
  return { html, head, htmlAttributes };
};
