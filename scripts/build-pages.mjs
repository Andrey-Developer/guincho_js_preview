import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const outDir = join(root, "dist", "pages");

await rm(outDir, { recursive: true, force: true });
await mkdir(outDir, { recursive: true });
await cp(join(root, "index.html"), join(outDir, "index.html"));
await cp(join(root, "public"), join(outDir, "public"), { recursive: true });
await writeFile(join(outDir, ".nojekyll"), "");
