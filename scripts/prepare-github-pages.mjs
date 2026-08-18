import { copyFile, mkdir } from "node:fs/promises";

const outputRoot = new URL("../dist/client/", import.meta.url);

for (const route of ["research", "teaching", "contact"]) {
  const routeDirectory = new URL(`${route}/`, outputRoot);
  await mkdir(routeDirectory, { recursive: true });
  await copyFile(
    new URL(`${route}.html`, outputRoot),
    new URL("index.html", routeDirectory),
  );
}
