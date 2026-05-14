/* ─────────────────────────────────────────
   Section 1: Atemporality
───────────────────────────────────────── */
const yearResponses = {
  0: "Based on current global security assessments, the primary threats are Nuclear Proliferation and the Global Arms Race.",
  1: "The most pressing issues currently are the threat of Nuclear Terrorism and escalating US/Russia Tensions.",
  2: "Humanity's greatest challenges are the accelerating impacts of Climate Change and ongoing Nuclear Modernization programs.",
  3: "We are facing a critical juncture with Unchecked Climate Change and a concerning era of Global Arms Modernization.",
  4: "The current existential threats include Nuclear Instability, the declared Climate Emergency, and the rise of Cyber/Information Warfare.",
  5: "The top threats facing humanity right now are Climate Action Failure, Nuclear Escalation, and the widespread impact of Generative AI Disinformation."
};

const yearLabels = [2000, 2005, 2010, 2015, 2020, 2025];

const yearSlider   = document.getElementById('yearSlider');
const yearDisplay  = document.getElementById('yearDisplay');
const aiResponse   = document.getElementById('aiResponse');

function updateYear(val) {
  const idx = parseInt(val);
  yearDisplay.textContent = yearLabels[idx];
  aiResponse.style.opacity = '0';
  setTimeout(() => {
    aiResponse.textContent = yearResponses[idx];
    aiResponse.style.opacity = '1';
  }, 180);

  // Update slider gradient fill
  const pct = (idx / 5) * 100;
  yearSlider.style.background = `linear-gradient(to right, #38BDF8 0%, #38BDF8 ${pct}%, rgba(255,255,255,0.08) ${pct}%, rgba(255,255,255,0.08) 100%)`;
}

yearSlider.addEventListener('input', (e) => updateYear(e.target.value));
updateYear(yearSlider.value);


/* ─────────────────────────────────────────
   Section 2: Uniformity Bar Chart
───────────────────────────────────────── */
const humanData = [12, 20, 35, 25, 8];
const aiData    = [0, 0, 5, 90, 5];
const MAX_VAL   = 100; // total respondents

function animateBars(data, colorClass) {
  data.forEach((val, i) => {
    const fill = document.getElementById(`bar${i}`);
    const valEl = document.getElementById(`val${i}`);
    const pct = (val / MAX_VAL) * 100;

    fill.style.height = `${pct}%`;

    // Pulse on spike (AI data with >50%)
    if (val > 50) {
      fill.style.background = 'linear-gradient(to top, #38BDF8, #38BDF8)';
      fill.style.boxShadow = '0 -6px 24px rgba(56,189,248,0.5)';
    } else {
      fill.style.background = 'linear-gradient(to top, #38BDF8, #2DD4BF)';
      fill.style.boxShadow = '0 -4px 16px rgba(56,189,248,0.2)';
    }

    // Animate number count-up
    let start = 0;
    const end = val;
    const duration = 700;
    const step = end / (duration / 16);
    valEl.textContent = '0';

    const counter = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      valEl.textContent = Math.round(start);
    }, 16);
  });
}

document.getElementById('sampleHuman').addEventListener('click', () => {
  animateBars(humanData, 'human');
});

document.getElementById('sampleAI').addEventListener('click', () => {
  animateBars(aiData, 'ai');
});


/* ─────────────────────────────────────────
   Section 3: Politeness Filter
───────────────────────────────────────── */
const filterTexts = {
  raw:      "The city council is completely clueless. They ruined the traffic light timing on 5th street and I've been stuck in traffic for an hour. They need to be fired!",
  moderate: "The city council made a mistake. The new traffic light timing on 5th street is causing hour-long delays. We need new leadership.",
  sanitized:"I have concerns regarding the recent adjustments to the traffic signals on 5th street. It seems to have increased commute times, and I believe the council should review this decision."
};

const filterSlider  = document.getElementById('filterSlider');
const aiOutputText  = document.getElementById('aiOutputText');
const filterPct     = document.getElementById('filterPct');
const filterTag     = document.getElementById('filterTag');

function getFilterLevel(val) {
  if (val <= 33) return 'raw';
  if (val <= 66) return 'moderate';
  return 'sanitized';
}

const tagConfig = {
  raw:       { label: 'RAW',       color: 'rgba(251,113,133,0.7)',  bg: 'rgba(251,113,133,0.12)', border: 'rgba(251,113,133,0.3)' },
  moderate:  { label: 'MODERATE',  color: 'var(--teal)',             bg: 'rgba(45,212,191,0.12)',  border: 'rgba(45,212,191,0.25)' },
  sanitized: { label: 'SANITIZED', color: 'var(--accent)',           bg: 'var(--accent-dim)',      border: 'rgba(56,189,248,0.3)' }
};

let lastLevel = '';

function updateFilter(val) {
  const pct = parseInt(val);
  filterPct.textContent = `${pct}%`;

  const level = getFilterLevel(pct);

  if (level !== lastLevel) {
    lastLevel = level;
    const cfg = tagConfig[level];
    filterTag.textContent = cfg.label;
    filterTag.style.color = cfg.color;
    filterTag.style.background = cfg.bg;
    filterTag.style.borderColor = cfg.border;

    aiOutputText.style.opacity = '0';
    setTimeout(() => {
      aiOutputText.textContent = filterTexts[level];
      aiOutputText.style.opacity = '1';
    }, 180);
  }

  // Update vertical slider gradient
  const sliderPct = pct;
  filterSlider.style.background = `linear-gradient(to top, #38BDF8 0%, #38BDF8 ${sliderPct}%, rgba(255,255,255,0.08) ${sliderPct}%, rgba(255,255,255,0.08) 100%)`;
}

filterSlider.addEventListener('input', (e) => updateFilter(e.target.value));
updateFilter(filterSlider.value);


/* ─────────────────────────────────────────
   ML Solutions Modules
───────────────────────────────────────── */
const solutionsData = {
  atemp: {
    revealId: 'atempReveal',
    items: [
      { rank: '#1', label: 'Most Popular', title: 'Temporal Weighting in RAG', desc: 'The current enterprise standard. By weighting retrieved documents by their timestamp during Retrieval-Augmented Generation, the model is forced to prioritize current facts over its static training data.' },
      { rank: '#2', label: 'Emerging',     title: 'Temporal Cognification',     desc: "A newer approach where the model's external knowledge bases and vector stores are continuously updated with timestamped relationships." },
      { rank: '#3', label: 'Niche',        title: 'Temporal Graph Reconstruction', desc: 'A highly specialized approach where models are trained incrementally in the exact chronological order of historical events.' }
    ]
  },
  uniform: {
    revealId: 'uniformReveal',
    items: [
      { rank: '#1', label: 'Most Popular', title: 'Temperature Scaling & Top-P', desc: 'Adjusting the "temperature" parameter flattens the probability distribution, injecting randomness so the model doesn\'t always pick the absolute most likely next word.' },
      { rank: '#2', label: 'Common',       title: 'Persona Jittering',           desc: 'A standard practice in prompt engineering where slight, randomized variations are injected into the system prompt to force a wider variance in the output.' },
      { rank: '#3', label: 'Foundational', title: 'Diversity-Driven RLHF',       desc: 'Used primarily by the labs training the models, involving rewarding the model during post-training specifically for producing a diverse set of responses across multiple generations.' }
    ]
  },
  social: {
    revealId: 'socialReveal',
    items: [
      { rank: '#1', label: 'Most Popular',      title: 'Uncensored Base Models',               desc: 'The standard approach for researchers. By using open-weight models before they undergo safety fine-tuning, researchers can analyze the raw, web-scale associations of human behavior.' },
      { rank: '#2', label: 'Emerging Standard', title: 'Direct Preference Optimization (DPO)', desc: 'An increasingly popular post-training method where developers intentionally re-align a model using datasets designed to capture realistic, gritty human interactions rather than helpful corporate dialogue.' },
      { rank: '#3', label: 'Experimental',      title: 'Cryptographic Jailbreaking',           desc: 'A clever technique used mostly by red-teamers and academics, involving encoding prompts (like using base64) to trick the safety filters and recover the model\'s suppressed voices.' }
    ]
  }
};

function buildReveal(items) {
  return `<div class="rank-list">${items.map((item, i) => `
    <div class="rank-item">
      <div class="rank-badge r${i+1}">${item.rank}</div>
      <div class="rank-content">
        <div class="rank-label">${item.label}</div>
        <div class="rank-title">${item.title}</div>
        <div class="rank-desc">${item.desc}</div>
      </div>
    </div>`).join('')}</div>`;
}

document.querySelectorAll('.option-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const section  = btn.dataset.section;
    const data     = solutionsData[section];
    const revealEl = document.getElementById(data.revealId);
    const grid     = btn.closest('.options-grid');

    // Toggle selection
    const wasSelected = btn.classList.contains('selected');
    grid.querySelectorAll('.option-btn').forEach(b => b.classList.remove('selected'));

    if (wasSelected) {
      revealEl.classList.remove('open');
      revealEl.innerHTML = '';
    } else {
      btn.classList.add('selected');
      revealEl.innerHTML = buildReveal(data.items);
      // Force reflow before adding open class for animation
      revealEl.offsetHeight;
      revealEl.classList.add('open');
    }
  });
});
