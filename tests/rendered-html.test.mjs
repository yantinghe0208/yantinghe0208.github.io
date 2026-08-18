import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const outputRoot = new URL("../dist/client/", import.meta.url);

test("builds the complete academic homepage", async () => {
  const html = await readFile(new URL("index.html", outputRoot), "utf8");

  assert.match(html, /<title>Yanting He \| Assistant Professor of Marketing<\/title>/i);
  assert.match(html, /Private Messaging in the Creator Economy/i);
  assert.match(html, /The Chinese University of Hong Kong, Shenzhen/i);
  assert.match(html, /Teaching Excellence Award Recipient/i);
  assert.match(html, /heyanting@cuhk\.edu\.cn/i);
  assert.match(html, /Portrait of Yanting He/i);
  assert.match(html, /https:\/\/yantinghe0208\.github\.io\/og\.png/i);
  assert.match(html, /href="\/Yanting-He-CV\.pdf"/i);
  assert.doesNotMatch(html, /Starter Project|codex-preview|SkeletonPreview/i);
});

test("ships the public CV and profile photo", async () => {
  await Promise.all([
    access(new URL("Yanting-He-CV.pdf", outputRoot)),
    access(new URL("profile.jpg", outputRoot)),
    access(new URL("og.png", outputRoot)),
    access(new URL(".nojekyll", outputRoot)),
  ]);
});
