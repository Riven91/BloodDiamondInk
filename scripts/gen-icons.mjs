import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = process.cwd();
const srcLogo = path.join(root, "public", "brand", "bdi-logo-transparent.webp");
const outDir = path.join(root, "public", "icons");

async function ensureDir(p) {
  await fs.promises.mkdir(p, { recursive: true });
}

async function main() {
  if (!fs.existsSync(srcLogo)) {
    console.error(`[gen-icons] Quelle fehlt: ${srcLogo}`);
    process.exit(1);
  }
  await ensureDir(outDir);

  const tasks = [
    { size: 192, name: "icon-192.png" },
    { size: 512, name: "icon-512.png" },
    { size: 512, name: "maskable-512.png", maskable: true },
  ];

  for (const t of tasks) {
    const dest = path.join(outDir, t.name);
    const s = sharp(srcLogo)
      .resize(t.size, t.size, { fit: "contain", background: { r: 10, g: 10, b: 11, alpha: 1 } })
      .png();
    await s.toFile(dest);
    console.log(`[gen-icons] erzeugt: ${path.relative(root, dest)}`);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
