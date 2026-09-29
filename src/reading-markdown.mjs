import MarkdownIt from "markdown-it";

const markdown = new MarkdownIt({ html: false });

export function renderReadingPage(source, filename) {
  const tokens = markdown.parse(source, {});
  if (tokens[0]?.type !== "heading_open" || tokens[0].tag !== "h1") {
    throw new Error(`${filename}: Markdown body must start with a # heading`);
  }
  if (tokens.slice(3).some((token) => token.type === "heading_open" && token.tag === "h1")) {
    throw new Error(`${filename}: only one # heading is allowed`);
  }
  const firstSection = tokens.findIndex((token, index) => index > 2 && token.type === "heading_open" && token.tag === "h2");
  if (firstSection === -1 || firstSection === 3) {
    throw new Error(`${filename}: add intro content followed by a ## section`);
  }

  const title = tokens[1].children
    .filter((token) => ["text", "code_inline"].includes(token.type))
    .map((token) => token.content)
    .join("");
  if (!title) throw new Error(`${filename}: # heading must contain text`);

  const render = (parts) => markdown.renderer.render(parts, markdown.options, {});
  return {
    title,
    heading: render(tokens.slice(0, 3)),
    intro: render(tokens.slice(3, firstSection)),
    sections: render(tokens.slice(firstSection)),
  };
}
