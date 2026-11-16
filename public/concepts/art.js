// Flat drawn illustrations. Colours come from CSS vars: --a1 ink, --a2 accent, --a3 soft, --a4 paper.
const S = (vb, body) => `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true" style="width:100%;height:auto;display:block">${body}</svg>`;
const f = (v) => `var(${v})`;
const art = {
  // a skyline of ledgers: bars become buildings, one is "yours", the extension is added on top
  skyline: () => S('0 0 480 320', `
    <rect width="480" height="320" fill="${f('--a3')}"/>
    <circle cx="380" cy="80" r="38" fill="${f('--a4')}"/>
    <rect x="30" y="170" width="70" height="130" fill="${f('--a1')}"/>
    <rect x="110" y="120" width="80" height="180" fill="${f('--a1')}"/>
    <rect x="200" y="200" width="70" height="100" fill="${f('--a1')}"/>
    <rect x="280" y="90" width="90" height="210" fill="${f('--a1')}"/>
    <rect x="280" y="40" width="90" height="46" fill="${f('--a2')}"/>
    <rect x="380" y="160" width="70" height="140" fill="${f('--a1')}"/>
    ${[...Array(5)].map((_, r) => [...Array(2)].map((_, c) => `<rect x="${124 + c * 34}" y="${136 + r * 30}" width="20" height="16" fill="${f('--a4')}"/>`).join('')).join('')}
    ${[...Array(6)].map((_, r) => [...Array(2)].map((_, c) => `<rect x="${296 + c * 38}" y="${108 + r * 30}" width="22" height="16" fill="${f('--a4')}"/>`).join('')).join('')}
    <rect x="0" y="298" width="480" height="22" fill="${f('--a1')}"/>`),
  // your firm (solid) plus extended team (accent) seated round one table
  team: () => S('0 0 480 320', `
    <rect width="480" height="320" fill="${f('--a3')}"/>
    <rect x="60" y="210" width="360" height="26" rx="4" fill="${f('--a1')}"/>
    ${[[110, '--a1'], [190, '--a1'], [270, '--a2'], [350, '--a2']].map(([x, c]) => `<circle cx="${x}" cy="120" r="26" fill="${f(c)}"/><path d="M${x - 40} 210 q0-58 40-58 q40 0 40 58z" fill="${f(c)}"/>`).join('')}
    <rect x="96" y="176" width="28" height="20" fill="${f('--a4')}"/><rect x="176" y="176" width="28" height="20" fill="${f('--a4')}"/>
    <rect x="256" y="176" width="28" height="20" fill="${f('--a4')}"/><rect x="336" y="176" width="28" height="20" fill="${f('--a4')}"/>
    <rect x="70" y="236" width="12" height="60" fill="${f('--a1')}"/><rect x="398" y="236" width="12" height="60" fill="${f('--a1')}"/>`),
  // an audit file: sheets, tick marks, a sign-off stamp that stays with the client
  file: () => S('0 0 480 320', `
    <rect width="480" height="320" fill="${f('--a3')}"/>
    <rect x="110" y="40" width="250" height="250" fill="${f('--a1')}" transform="rotate(-6 235 165)"/>
    <rect x="120" y="30" width="250" height="250" fill="${f('--a4')}"/>
    ${[0, 1, 2, 3].map((i) => `<rect x="148" y="${64 + i * 40}" width="22" height="22" fill="${f('--a2')}"/><path d="M153 ${76 + i * 40} l6 6 l9-12" stroke="${f('--a4')}" stroke-width="4" fill="none"/><rect x="186" y="${68 + i * 40}" width="${150 - i * 22}" height="14" fill="${f('--a1')}"/>`).join('')}
    <circle cx="340" cy="240" r="46" fill="${f('--a2')}"/><path d="M318 240 l16 16 l30-34" stroke="${f('--a4')}" stroke-width="9" fill="none"/>`),
};
document.querySelectorAll('[data-art]').forEach((el) => { el.innerHTML = art[el.dataset.art](); });
