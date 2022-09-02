const { purge } = require("../bin/purgecss");

const css = {
  raw: "body { font-size: 16px; color: #000000 } a { color: #0000FF; } .col { width: 100%; } .position-relative, header { position: relative; }",
};

const html = {
  extension: "html",
  raw: '<html><body><header>header</header><p>lorem ipsum <a href="#">link</a></p></body></html>',
};

(async () => {
  const r = await purge(css.raw, html.raw, {
    safelist: ["col"],
    rejected: true,
    rejectedCss: true,
  });

  console.log(r);
})();
