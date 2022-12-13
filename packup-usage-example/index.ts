import monacoPromise from "./monacoPromise.ts";

self.MonacoEnvironment = {
  getWorkerUrl: function (_moduleId, label) {
    if (label === "json") {
      return "/json.worker.bundle.js";
    }
    if (label === "css" || label === "scss" || label === "less") {
      return "/css.worker.bundle.js";
    }
    if (label === "html" || label === "handlebars" || label === "razor") {
      return "/html.worker.bundle.js";
    }
    if (label === "typescript" || label === "javascript") {
      return "/ts.worker.bundle.js";
    }
    return "/editor.worker.bundle.js";
  },
};

monacoPromise.then((monaco) => {
  monaco.editor.create(document.body, {
    value: [
      "export default function main() {",
      '  return "Hello world!";',
      "}",
    ].join("\n"),
    language: "typescript",
  });
});
