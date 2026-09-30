// scripts/generate-placeholders.js
import fs from "fs";
import path from "path";
import zlib from "zlib";

// Minimal PNG encoder in pure Node.js
function createPNG(width, height, r, g, b) {
  const bytesPerPixel = 4;
  const lineLength = width * bytesPerPixel;
  const rawData = Buffer.alloc((lineLength + 1) * height);

  for (let y = 0; y < height; y++) {
    const offset = y * (lineLength + 1);
    rawData[offset] = 0; // Filter type: None
    for (let x = 0; x < width; x++) {
      const pixelOffset = offset + 1 + x * bytesPerPixel;
      // create subtle gradient or soft border
      const isBorder = x < 4 || x >= width - 4 || y < 4 || y >= height - 4;
      if (isBorder) {
        rawData[pixelOffset] = Math.max(0, r - 30);
        rawData[pixelOffset + 1] = Math.max(0, g - 30);
        rawData[pixelOffset + 2] = Math.max(0, b - 30);
        rawData[pixelOffset + 3] = 255;
      } else {
        const factor = 1 - (y / height) * 0.1;
        rawData[pixelOffset] = Math.round(r * factor);
        rawData[pixelOffset + 1] = Math.round(g * factor);
        rawData[pixelOffset + 2] = Math.round(b * factor);
        rawData[pixelOffset + 3] = 255;
      }
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // PNG Header
  const signature = Buffer.from([
    0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a,
  ]);

  // IHDR chunk
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0);
  ihdr.writeUInt32BE(height, 4);
  ihdr.writeUInt8(8, 8); // 8 bits per channel
  ihdr.writeUInt8(6, 9); // RGBA
  ihdr.writeUInt8(0, 10);
  ihdr.writeUInt8(0, 11);
  ihdr.writeUInt8(0, 12);
  const ihdrChunk = createChunk("IHDR", ihdr);

  // IDAT chunk
  const idatChunk = createChunk("IDAT", compressedData);

  // IEND chunk
  const iendChunk = createChunk("IEND", Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

function createChunk(type, data) {
  const length = Buffer.alloc(4);
  length.writeUInt32BE(data.length, 0);
  const typeBuf = Buffer.from(type, "ascii");
  const crcBuf = Buffer.alloc(4);
  const crc = crc32(Buffer.concat([typeBuf, data]));
  crcBuf.writeUInt32BE(crc, 0);
  return Buffer.concat([length, typeBuf, data, crcBuf]);
}

// Simple CRC32 implementation
function crc32(buf) {
  let crc = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    let byte = buf[i];
    crc = crc ^ byte;
    for (let j = 0; j < 8; j++) {
      crc = (crc >>> 1) ^ (crc & 1 ? 0xedb88320 : 0);
    }
  }
  return (crc ^ 0xffffffff) >>> 0;
}

const projectsDir = path.resolve("public/images/projects");
const imagesDir = path.resolve("public/images");

fs.mkdirSync(projectsDir, { recursive: true });

// Palette colors
// #FFF0F3 = (255, 240, 243)
// #FFAFCC = (255, 175, 204)
// #D6CCC2 = (214, 204, 194)
// #E3D5CA = (227, 213, 202)

const files = [
  {
    name: "profile-placeholder.jpg",
    dir: imagesDir,
    color: [245, 238, 235],
    w: 800,
    h: 1000,
  },
  {
    name: "wanda-cover.jpg",
    dir: projectsDir,
    color: [255, 240, 243],
    w: 1200,
    h: 800,
  },
  {
    name: "wanda-01.jpg",
    dir: projectsDir,
    color: [255, 240, 243],
    w: 1200,
    h: 800,
  },
  {
    name: "wanda-02.jpg",
    dir: projectsDir,
    color: [255, 235, 240],
    w: 1200,
    h: 800,
  },
  {
    name: "medicaly-cover.jpg",
    dir: projectsDir,
    color: [240, 245, 248],
    w: 1200,
    h: 800,
  },
  {
    name: "medicaly-01.jpg",
    dir: projectsDir,
    color: [235, 243, 247],
    w: 1200,
    h: 800,
  },
  {
    name: "thera-art-cover.jpg",
    dir: projectsDir,
    color: [244, 240, 236],
    w: 1200,
    h: 800,
  },
  {
    name: "thera-art-01.jpg",
    dir: projectsDir,
    color: [240, 235, 230],
    w: 1200,
    h: 800,
  },
  {
    name: "drivvy-cover.jpg",
    dir: projectsDir,
    color: [248, 244, 240],
    w: 1200,
    h: 800,
  },
  {
    name: "drivvy-01.jpg",
    dir: projectsDir,
    color: [245, 240, 235],
    w: 1200,
    h: 800,
  },
];

for (const f of files) {
  const filePath = path.join(f.dir, f.name);
  const buf = createPNG(f.w, f.h, f.color[0], f.color[1], f.color[2]);
  fs.writeFileSync(filePath, buf);
  console.log(`Generated: ${filePath}`);
}

// Also create a sample CV file placeholder in public/cv/
const cvDir = path.resolve("public/cv");
fs.mkdirSync(cvDir, { recursive: true });
fs.writeFileSync(
  path.join(cvDir, "Namira-Shifwah-Kumandani-CV.pdf"),
  Buffer.from("%PDF-1.4\n%Placeholder CV for Namira Shifwah Kumandani\n"),
);
console.log("Generated CV placeholder");
