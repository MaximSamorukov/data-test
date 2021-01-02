import Reveal from "./node_modules/reveal.js";
import Markdown from "./node_modules/reveal.js/plugin/markdown/markdown.esm.js";

let deck = new Reveal({
  plugins: [Markdown]
})
deck.initialize();