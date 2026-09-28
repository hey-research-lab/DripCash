// Draws every brand asset from the owner's mark (scripts/brand-mark.mjs) and
// banner (scripts/brand/banner.webp). Run with `npm run assets`; output is committed.
import { mkdir, writeFile } from "node:fs/promises";
import sharp from "sharp";
import { MARK_H, MARK_PATH, MARK_W } from "./brand-mark.mjs";

const DRIP = "#F15A22";

/** Mark scaled to `height` user units and centred in a `box` square. */
const placed = (box, height, fill) => {
  const k = height / MARK_H;
  const x = (box - MARK_W * k) / 2;
  const y = (box - height) / 2;
  return `<g transform="translate(${x} ${y}) scale(${k})"><path fill="${fill}" fill-rule="evenodd" d="${MARK_PATH}"/></g>`;
};

/** Orange mark on a white tile, as in the owner's icon. */
const tile = (size) => `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#ffffff"/>
  ${placed(64, 48, DRIP)}
</svg>`;

/** Mark alone on transparent ground. */
const bare = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${MARK_W} ${MARK_H}"><path fill="${DRIP}" fill-rule="evenodd" d="${MARK_PATH}"/></svg>`;

async function png(svg, size) {
  return sharp(Buffer.from(svg), { density: 384 }).resize(size, size).ensureAlpha().png().toBuffer();
}

/** ICO container with PNG payloads (RGBA), which every current browser reads. */
function ico(images) {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0);
  header.writeUInt16LE(1, 2);
  header.writeUInt16LE(images.length, 4);
  const entries = [];
  let offset = 6 + images.length * 16;
  for (const { size, data } of images) {
    const e = Buffer.alloc(16);
    e.writeUInt8(size >= 256 ? 0 : size, 0);
    e.writeUInt8(size >= 256 ? 0 : size, 1);
    e.writeUInt8(0, 2);
    e.writeUInt8(0, 3);
    e.writeUInt16LE(1, 4);
    e.writeUInt16LE(32, 6);
    e.writeUInt32LE(data.length, 8);
    e.writeUInt32LE(offset, 12);
    offset += data.length;
    entries.push(e);
  }
  return Buffer.concat([header, ...entries, ...images.map((i) => i.data)]);
}

await mkdir("public/brand", { recursive: true });
await writeFile("src/app/icon.svg", tile(64));
await writeFile("public/brand/dripcash-mark.svg", bare);
const sizes = [16, 32, 48];
await writeFile("src/app/favicon.ico", ico(await Promise.all(sizes.map(async (size) => ({ size, data: await png(tile(size), size) })))));
await writeFile("src/app/apple-icon.png", await sharp(Buffer.from(tile(180)), { density: 384 }).resize(180, 180).flatten({ background: "#ffffff" }).png().toBuffer());
await sharp(Buffer.from(tile(512)), { density: 384 }).resize(512, 512).webp({ quality: 92 }).toFile("public/brand/dripcash-icon.webp");
await sharp(Buffer.from(bare), { density: 384 }).resize(1024, 1024, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } }).webp({ quality: 92 }).toFile("public/brand/dripcash-mark.webp");
// Social card: the owner's banner at full height, cropped so the lockup (which
// sits right of centre in the banner) lands in the middle of the card.
const banner = await sharp("scripts/brand/banner.webp").resize({ height: 630 }).toBuffer();
await sharp(banner).extract({ left: 376, top: 0, width: 1200, height: 630 }).webp({ quality: 90 }).toFile("public/brand/og.webp");
console.log("assets written");
