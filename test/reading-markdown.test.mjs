import assert from "node:assert/strict";
import test from "node:test";
import { renderReadingPage } from "../src/reading-markdown.mjs";

test("splits the first heading and intro from Markdown sections", () => {
  const page = renderReadingPage(
    `# Research needs a home it can own.

An [identity](https://aster.place/) researchers can carry.

Another intro paragraph.

## Why we're building it

First paragraph.

Second paragraph with **emphasis**.

- Publish
- Discuss

### A detail

More text.

## What we believe

Final paragraph.`,
    "sample.md",
  );

  assert.equal(page.title, "Research needs a home it can own.");
  assert.match(page.heading, /<h1>Research needs a home it can own\.<\/h1>/);
  assert.match(page.intro, /<a href="https:\/\/aster\.place\/">identity<\/a>/);
  assert.equal((page.intro.match(/<p>/g) || []).length, 2);
  assert.doesNotMatch(page.intro, /<h2>/);
  assert.match(page.sections, /<strong>emphasis<\/strong>/);
  assert.match(page.sections, /<ul>/);
  assert.match(page.sections, /<h3>A detail<\/h3>/);
  assert.equal((page.sections.match(/<h2>/g) || []).length, 2);
});

test("escapes raw HTML and rejects unsafe link schemes", () => {
  const page = renderReadingPage("# Title\n\n<script>alert(1)</script>\n\n## More\n\n[click](javascript:alert(1))", "sample.md");
  assert.match(page.intro, /&lt;script&gt;/);
  assert.doesNotMatch(page.sections, /href="javascript:/);
});

test("requires an intro and paper section", () => {
  assert.throws(() => renderReadingPage("Body without heading", "sample.md"), /must start with a # heading/);
  assert.throws(() => renderReadingPage("# Title\n\n## Section", "sample.md"), /add intro content/);
  assert.throws(() => renderReadingPage("# Title\n\nIntro", "sample.md"), /add intro content/);
  assert.throws(() => renderReadingPage("# Title\n\nIntro\n\n## Section\n\n# Another", "sample.md"), /only one # heading/);
});
