import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("builds the one-screen homepage and separate academic pages", async () => {
  const [home, research, teaching, contact] = await Promise.all([
    readFile(new URL("index.html", outputRoot), "utf8"),
    readFile(new URL("research/index.html", outputRoot), "utf8"),
    readFile(new URL("teaching/index.html", outputRoot), "utf8"),
    readFile(new URL("contact/index.html", outputRoot), "utf8"),
  ]);

  assert.match(home, /<title>Yanting He \| Assistant Professor of Marketing<\/title>/i);
  assert.match(home, /The Chinese University of Hong Kong, Shenzhen/i);
  assert.match(home, /Portrait of Yanting He/i);
  assert.match(home, /https:\/\/yantinghe0208\.github\.io\/og\.png/i);
  assert.match(home, /href="\/research\/"/i);
  assert.match(home, /href="\/Yanting-He-CV\.pdf"/i);
  assert.doesNotMatch(home, /Private Messaging in the Creator Economy/i);

  assert.match(research, /<title>Research \| Yanting He<\/title>/i);
  assert.match(research, /Private Messaging in the Creator Economy/i);
  assert.doesNotMatch(research, /View complete research record in my CV/i);
  assert.doesNotMatch(research, /https:\/\/yantinghe0208\.github\.io\/og\.png/i);

  assert.match(teaching, /<title>Teaching \| Yanting He<\/title>/i);
  assert.match(teaching, /Teaching Excellence Award Recipient/i);
  assert.doesNotMatch(teaching, /https:\/\/yantinghe0208\.github\.io\/og\.png/i);

  assert.match(contact, /<title>Contact \| Yanting He<\/title>/i);
  assert.match(contact, /Nuonuo, occasional research assistant/i);
  assert.match(contact, /Outside research, I enjoy Zumba, live music/i);
  assert.match(contact, /heyanting@cuhk\.edu\.cn/i);
  assert.doesNotMatch(contact, /https:\/\/yantinghe0208\.github\.io\/og\.png/i);

  for (const html of [home, research, teaching, contact]) {
    assert.doesNotMatch(html, /Starter Project|codex-preview|SkeletonPreview/i);
  }
});

test("ships the public CV and profile photo", async () => {
  await Promise.all([
    access(new URL("Yanting-He-CV.pdf", outputRoot)),
    access(new URL("profile.jpg", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL("nuonuo.jpg", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
  ]);
});
