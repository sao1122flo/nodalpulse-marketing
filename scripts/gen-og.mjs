// Run once: node scripts/gen-og.mjs
// Generates public/og-default.png (1200×630) from brand SVG.
import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <!-- Background -->
  <rect width="1200" height="630" fill="#FFFFFF"/>

  <!-- Left indigo accent bar -->
  <rect x="0" y="0" width="8" height="630" fill="#6366F1"/>

  <!-- Bottom tint strip -->
  <rect x="0" y="614" width="1200" height="16" fill="#EEF2FF"/>

  <!-- Logo mark (brand/logo/logo-lockup.svg mark portion, scale=2) -->
  <!-- Original path in 56×56 viewBox; scale×2 → 112×112 group -->
  <g transform="translate(48, 50) scale(2)">
    <path d="M4 28 L18 28 L22 14 L26 42 L30 20 L34 32 L38 28 L52 28"
      stroke="#6366F1" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="26" cy="42" r="3" fill="#6366F1"/>
  </g>

  <!-- NodalPulse wordmark (Inter 700, 72px) -->
  <!-- mark right edge: 48 + 52×2 = 152; gap 20px → x=172; baseline y=138 -->
  <text x="172" y="138"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-weight="700" font-size="72" letter-spacing="-2.5">
    <tspan fill="#18181B">Nodal</tspan><tspan fill="#6366F1">Pulse</tspan>
  </text>

  <!-- Thin separator -->
  <line x1="48" y1="178" x2="1152" y2="178" stroke="#E5E5E7" stroke-width="1"/>

  <!-- Main headline — line 1 -->
  <text x="48" y="284"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-weight="700" font-size="68" fill="#18181B" letter-spacing="-2.5">Regulatory Intelligence</text>

  <!-- Main headline — line 2 -->
  <text x="48" y="366"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-weight="700" font-size="68" fill="#18181B" letter-spacing="-2.5">for ERCOT Participants</text>

  <!-- Sub-line -->
  <text x="48" y="440"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-weight="400" font-size="28" fill="#71717A">Cited daily brief · PUCT · ERCOT · FERC · 06:00 CT</text>

  <!-- Domain -->
  <text x="48" y="580"
    font-family="Inter, Arial, Helvetica, sans-serif"
    font-weight="400" font-size="22" fill="#A1A1AA">nodalpulse.com</text>
</svg>`;

const resvg = new Resvg(svg, {
  background: '#FFFFFF',
  fitTo: { mode: 'width', value: 1200 },
  font: { loadSystemFonts: true },
});

const rendered = resvg.render();
const pngBuffer = rendered.asPng();
const outPath = join(__dirname, '../public/og-default.png');
writeFileSync(outPath, pngBuffer);
console.log(`ok  public/og-default.png  ${(pngBuffer.length / 1024).toFixed(0)} kB`);
