const ROLE_BRIEFS = {
  "City Mediator": {
    focus: "Bridges street tensions, noise, crowd flow, and daily neighborhood peace.",
    spotlight: "City Mediator Lens: Extra harmony & trust payoff when resolving public vs. evening/night friction.",
    bonus: { trust: 2, harmony: 3, budget: 0 }
  },
  "Policy Advisor": {
    focus: "Balances long-term civic rules, fairness, and administrative clarity.",
    spotlight: "Policy Advisor Lens: Sharper structural clarity across rule and fairness choices.",
    bonus: { trust: 2, harmony: 1, budget: 1 }
  },
  "Community Steward": {
    focus: "Keeps shared spaces welcoming, inclusive, and cared for.",
    spotlight: "Community Steward Lens: Stronger local bond when caring for shared spaces.",
    bonus: { trust: 1, harmony: 3, budget: 0 }
  },
  "Urban Planner": {
    focus: "Shapes streets, walkways, public plots, and layout flow.",
    spotlight: "Urban Planner Lens: Better spatial flow across public zones.",
    bonus: { trust: 1, harmony: 2, budget: 1 }
  },
  "Budget Commissioner": {
    focus: "Protects public reserves while funding essential relief.",
    spotlight: "Budget Commissioner Lens: Stronger fiscal cushion on resource moves.",
    bonus: { trust: 0, harmony: 0, budget: 4 }
  },
  "Youth & Campus Envoy": {
    focus: "Represents students, late-evening learners, and young voices.",
    spotlight: "Youth & Campus Lens: Resonates with study, evening, and learning spaces.",
    bonus: { trust: 2, harmony: 1, budget: 0 }
  },
  "Small Business Advocate": {
    focus: "Supports local stalls, shopkeepers, and micro-livelihoods.",
    spotlight: "Small Business Lens: Protects everyday livelihood momentum.",
    bonus: { trust: 1, harmony: 0, budget: 3 }
  },
  "Heritage & Culture Curator": {
    focus: "Safeguards traditions, old landmarks, and cultural gatherings.",
    spotlight: "Heritage Lens: Elevates cultural continuity and public pride.",
    bonus: { trust: 2, harmony: 2, budget: -1 }
  },
  "Ecology & Green Lead": {
    focus: "Champions tree cover, clean air, and low-impact living.",
    spotlight: "Ecology Lens: Boosts long-term environmental harmony.",
    bonus: { trust: 1, harmony: 3, budget: -1 }
  },
  "Water & Utility Director": {
    focus: "Manages essential supply reliability and fair distribution.",
    spotlight: "Utility Lens: Stabilizes essential service confidence.",
    bonus: { trust: 2, harmony: 1, budget: 1 }
  },
  "Transit & Mobility Coordinator": {
    focus: "Smooths parking, pedestrian lanes, and commuter movement.",
    spotlight: "Mobility Lens: Eases congestion friction between movers and residents.",
    bonus: { trust: 1, harmony: 2, budget: 1 }
  },
  "Public Health Liaison": {
    focus: "Prioritizes rest, clean air, clinics, and well-being.",
    spotlight: "Health Lens: Strengthens community care and trust.",
    bonus: { trust: 3, harmony: 1, budget: -1 }
  },
  "Neighborhood Ombudsperson": {
    focus: "Listens to grievances and ensures every voice gets heard.",
    spotlight: "Ombudsperson Lens: Builds fairness and trust across disputes.",
    bonus: { trust: 3, harmony: 2, budget: 0 }
  },
  "Festival & Commons Organizer": {
    focus: "Turns public events into lively, orderly shared celebrations.",
    spotlight: "Commons Organizer Lens: Sparks lively energy and shared joy.",
    bonus: { trust: 2, harmony: 2, budget: -1 }
  },
  "Housing & Tenant Counsel": {
    focus: "Protects home peace, affordability, and residential stability.",
    spotlight: "Tenant Counsel Lens: Guards residential comfort and harmony.",
    bonus: { trust: 2, harmony: 2, budget: 0 }
  },
  "Conflict Resolution Fellow": {
    focus: "Turns sharp disagreements into practical middle-ground steps.",
    spotlight: "Conflict Resolution Lens: Smooths rough edges between rival groups.",
    bonus: { trust: 2, harmony: 3, budget: 0 }
  }
};

const STANCE_BONUSES = {
  "Balanced": { trust: 1, harmony: 1, budget: 1 },
  "Principled": { trust: 2, harmony: -1, budget: 1 },
  "Adaptive": { trust: 1, harmony: 2, budget: 0 },
  "Empathetic": { trust: 2, harmony: 2, budget: -1 },
  "Frugal": { trust: 0, harmony: 0, budget: 4 },
  "Bold Reformer": { trust: 2, harmony: -1, budget: -1 },
  "Consensus Builder": { trust: 2, harmony: 3, budget: 0 },
  "Data & Evidence First": { trust: 1, harmony: 1, budget: 2 },
  "Grassroots Listener": { trust: 3, harmony: 1, budget: 0 },
  "Long-Horizon Visionary": { trust: 2, harmony: 2, budget: -1 },
  "Rapid Troubleshooter": { trust: 1, harmony: 1, budget: 1 },
  "Fairness Guardian": { trust: 2, harmony: 2, budget: 0 },
  "Creative Mediator": { trust: 1, harmony: 3, budget: 0 },
  "Cautious Pilot Lead": { trust: 1, harmony: 1, budget: 2 },
  "Transparent Communicator": { trust: 3, harmony: 1, budget: 0 },
  "Resilience Strategist": { trust: 1, harmony: 2, budget: 1 }
};

const SCENARIOS = [
  {
    id: "midnight-lane",
    tag: "ROUND 1 • CITY MEDIATOR & STREET LIFE",
    title: "The Midnight Book, Chai & Acoustic Lane",
    prompt:
      "Students study and gather at a lively lane of book and tea stalls late into the night, while families ask for quieter nights, cleaner corners, and order.",
    mediatorNote: "City Mediator Focus: Balance late-evening student/vendor energy with family rest & street order.",
    maxSelections: 2,
    options: [
      {
        id: "curfew-10pm",
        title: "10 PM Quiet Closing",
        description: "Close stalls at 10:00 PM on weekdays so families get early rest.",
        tag: "Rule",
        effects: { trust: -6, harmony: 10, budget: -4 },
        reaction: "Residents sleep easier, while late-shift students and vendors lose their busiest hour."
      },
      {
        id: "designated-parking",
        title: "Side-Street Parking & Walk Lane",
        description: "Move vehicles to a nearby lot and keep the main lane pedestrian-friendly.",
        tag: "Space",
        effects: { trust: 8, harmony: 7, budget: -10 },
        reaction: "Traffic eases in the lane, though walking a few extra minutes draws mixed grumbles."
      },
      {
        id: "sound-buffer",
        title: "Acoustic Cap & Warm Lights",
        description: "Allow 11:30 PM hours with strict no-speaker rules and soft warm lighting.",
        tag: "Mediation",
        effects: { trust: 9, harmony: 6, budget: -6 },
        reaction: "Stalls stay open longer without blaring noise, winning cautious approval from both sides."
      },
      {
        id: "mediator-roundtable",
        title: "Weekly Lane Mediation Circle",
        description: "Pair vendor reps, student voices, and residents for a quick weekly check-in.",
        tag: "Dialogue",
        effects: { trust: 10, harmony: 9, budget: -3 },
        reaction: "Small gripes get solved early before turning into loud street standoffs."
      },
      {
        id: "open-status-quo",
        title: "Keep Current Schedule",
        description: "Leave timings and parking untouched to protect vendor earnings right away.",
        tag: "Status Quo",
        effects: { trust: -10, harmony: -12, budget: 4 },
        reaction: "Vendors keep immediate sales, but resident frustration builds toward a formal complaint."
      }
    ]
  },
  {
    id: "festival-square-vs-commute",
    tag: "ROUND 2 • CITY MEDIATOR & PUBLIC SQUARE",
    title: "Festival Fair vs. Morning Commute",
    prompt:
      "A vibrant three-day cultural fair wants the central square, right beside a busy bus and cycle route used by workers and students.",
    mediatorNote: "Vice-Versa Twist: Opening space for festivity can squeeze commuters unless routes and cleanups are paired.",
    maxSelections: 2,
    options: [
      {
        id: "evening-only-fair",
        title: "Evening & Weekend Fair Window",
        description: "Keep weekday mornings clear for commuters and open the fair from 5 PM onward.",
        tag: "Timing",
        effects: { trust: 8, harmony: 8, budget: -4 },
        reaction: "Morning commuters move cleanly while evening visitors still enjoy lively stalls."
      },
      {
        id: "detour-loop-marshals",
        title: "Signed Detour & Volunteers",
        description: "Set up clear detour signs and volunteer guides around the square perimeter.",
        tag: "Flow",
        effects: { trust: 7, harmony: 6, budget: -8 },
        reaction: "Detours stay predictable, though a few impatient drivers still dislike the extra turn."
      },
      {
        id: "zero-waste-deposit",
        title: "Reusable Cup & Cleanup Crew",
        description: "Use deposit cups and scheduled cleanup shifts so litter never piles up.",
        tag: "Cleanliness",
        effects: { trust: 9, harmony: 9, budget: -7 },
        reaction: "The square stays colorful and tidy every morning, winning praise from neighbors."
      },
      {
        id: "relocate-fair-grounds",
        title: "Shift Fair to Open Grounds",
        description: "Move the fair to a wider open ground so street traffic stays untouched.",
        tag: "Relocate",
        effects: { trust: -4, harmony: 5, budget: -5 },
        reaction: "Commuters stay happy, but fair organizers miss the footfall of the central square."
      }
    ]
  },
  {
    id: "shared-water-tank",
    tag: "ROUND 3 • RESOURCE ALLOCATION",
    title: "Dry Spell & Shared Water Supply",
    prompt:
      "A dry week cuts water pressure across the district. You must decide how to distribute the remaining reserve fairly.",
    mediatorNote: "Vice-Versa Twist: Saving money now can strain trust if households feel left dry.",
    maxSelections: 2,
    options: [
      {
        id: "tiered-rationing",
        title: "Tiered Daily Windows",
        description: "Provide scheduled 2-hour morning and evening supply windows for every block.",
        tag: "Fairness",
        effects: { trust: 9, harmony: 6, budget: -5 },
        reaction: "Households plan ahead around fixed timings, reducing panic hoarding."
      },
      {
        id: "priority-essentials",
        title: "Clinics & Schools First",
        description: "Guarantee full pressure for health clinics, schools, and elder homes first.",
        tag: "Care",
        effects: { trust: 11, harmony: 3, budget: -8 },
        reaction: "Essential services stay uninterrupted, earning strong respect across the community."
      },
      {
        id: "tanker-subsidy",
        title: "Subsidized Water Tankers",
        description: "Fund emergency water tankers for high-demand pockets using reserve funds.",
        tag: "Relief",
        effects: { trust: 6, harmony: 8, budget: -16 },
        reaction: "Shortages ease fast, though the sharp dip in budget limits future flexibility."
      },
      {
        id: "flat-surcharge",
        title: "Peak Usage Surcharge",
        description: "Charge extra for heavy consumption to discourage waste without cutting supply.",
        tag: "Incentive",
        effects: { trust: -7, harmony: -4, budget: 10 },
        reaction: "Heavy users cut back on waste, while lower-income families feel squeezed."
      }
    ]
  },
  {
    id: "public-commons",
    tag: "ROUND 4 • LONG-TERM LEGACY",
    title: "Old Park vs. Community Hub",
    prompt:
      "A half-unused plot next to an old shaded park can become a restored green sanctuary, a mixed civic hall, or a trial space.",
    mediatorNote: "Final Round: Your choices shape the lasting feel of the neighborhood.",
    maxSelections: 1,
    options: [
      {
        id: "green-sanctuary",
        title: "Restore as Green Commons",
        description: "Plant native trees, add walking paths, and keep the space lush and peaceful.",
        tag: "Nature",
        effects: { trust: 7, harmony: 9, budget: -9 },
        reaction: "The neighborhood gains a vibrant green refuge that refreshes air and weekend walks."
      },
      {
        id: "hybrid-civic-hall",
        title: "Build Shared Civic & Craft Hub",
        description: "Create a community hall for workshops, study groups, and local craft fairs.",
        tag: "Civic",
        effects: { trust: 10, harmony: 5, budget: -12 },
        reaction: "Locals gain a lively gathering space, though construction noise tests patience."
      },
      {
        id: "phased-pilot",
        title: "Six-Month Weekend Pilot",
        description: "Run weekend community events on a trial basis before locking in permanent plans.",
        tag: "Experiment",
        effects: { trust: 6, harmony: 7, budget: -4 },
        reaction: "Stakeholders get a low-risk test run and can voice feedback before final design."
      }
    ]
  }
];

const INITIAL_STATE = {
  user: {
    name: "",
    role: "",
    stance: ""
  },
  roundIndex: 0,
  selectedIds: [],
  meters: {
    trust: 50,
    harmony: 50,
    budget: 50
  },
  history: [],
  roundSubmitted: false
};

let state = structuredClone(INITIAL_STATE);

const screens = {
  details: document.getElementById("details-screen"),
  options: document.getElementById("options-screen"),
  summary: document.getElementById("summary-screen")
};

const detailsForm = document.getElementById("user-details-form");
const playerNameInput = document.getElementById("player-name");
const playerRoleSelect = document.getElementById("player-role");
const playerStanceSelect = document.getElementById("player-stance");

const hudUser = document.getElementById("hud-user");
const hudRound = document.getElementById("hud-round");
const hudRoleNote = document.getElementById("hud-role-note");

const meterEls = {
  trust: {
    val: document.getElementById("trust-val"),
    bar: document.getElementById("trust-bar")
  },
  harmony: {
    val: document.getElementById("harmony-val"),
    bar: document.getElementById("harmony-bar")
  },
  budget: {
    val: document.getElementById("budget-val"),
    bar: document.getElementById("budget-bar")
  }
};

const scenarioTag = document.getElementById("scenario-tag");
const scenarioTitle = document.getElementById("scenario-title");
const scenarioPrompt = document.getElementById("scenario-prompt");
const mediatorSpotlight = document.getElementById("mediator-spotlight");
const selectionHint = document.getElementById("selection-hint");
const squareGrid = document.getElementById("square-options-grid");
const clearBtn = document.getElementById("clear-selection-btn");
const confirmBtn = document.getElementById("confirm-choices-btn");

const outcomePanel = document.getElementById("round-outcome");
const outcomeSummary = document.getElementById("outcome-summary");
const outcomeReactions = document.getElementById("outcome-reactions");
const nextRoundBtn = document.getElementById("next-round-btn");

const summaryContent = document.getElementById("summary-content");
const restartBtn = document.getElementById("restart-btn");

function clamp(num, min = 0, max = 100) {
  return Math.max(min, Math.min(max, num));
}

function showScreen(targetKey) {
  Object.values(screens).forEach((el) => el.classList.remove("active"));
  screens[targetKey].classList.add("active");
}

function updateHUD() {
  const roleInfo = ROLE_BRIEFS[state.user.role] || { focus: "" };
  hudUser.textContent = `${state.user.name} • ${state.user.role} (${state.user.stance})`;
  hudRound.textContent = `Round ${state.roundIndex + 1} of ${SCENARIOS.length}`;
  hudRoleNote.textContent = roleInfo.focus;

  ["trust", "harmony", "budget"].forEach((key) => {
    const value = state.meters[key];
    meterEls[key].val.textContent = value;
    meterEls[key].bar.style.width = `${value}%`;
  });
}

function renderScenario() {
  const scenario = SCENARIOS[state.roundIndex];
  const roleInfo = ROLE_BRIEFS[state.user.role] || { spotlight: "" };

  state.selectedIds = [];
  state.roundSubmitted = false;

  updateHUD();

  scenarioTag.textContent = scenario.tag;
  scenarioTitle.textContent = scenario.title;
  scenarioPrompt.textContent = scenario.prompt;
  mediatorSpotlight.textContent = `${scenario.mediatorNote} | ${roleInfo.spotlight}`;
  selectionHint.textContent = `Pop-up squares active — select up to ${scenario.maxSelections} option${
    scenario.maxSelections > 1 ? "s" : ""
  } (0/${scenario.maxSelections} selected)`;

  confirmBtn.disabled = true;
  clearBtn.disabled = false;
  outcomePanel.classList.add("hidden");

  squareGrid.innerHTML = "";

  scenario.options.forEach((opt, idx) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "square-card";
    card.style.setProperty("--pop-delay", `${idx * 85}ms`);
    card.dataset.optionId = opt.id;

    card.innerHTML = `
      <div class="square-title">${opt.title}</div>
      <p class="square-desc">${opt.description}</p>
      <div class="square-footer">
        <span>${opt.tag}</span>
        <span class="select-state">Pick</span>
      </div>
    `;

    card.addEventListener("click", () => toggleSquareSelection(opt.id, scenario.maxSelections));
    squareGrid.appendChild(card);
  });
}

function toggleSquareSelection(optionId, maxSelections) {
  if (state.roundSubmitted) return;

  const scenario = SCENARIOS[state.roundIndex];
  const exists = state.selectedIds.includes(optionId);

  if (exists) {
    state.selectedIds = state.selectedIds.filter((id) => id !== optionId);
  } else {
    if (maxSelections === 1) {
      state.selectedIds = [optionId];
    } else if (state.selectedIds.length < maxSelections) {
      state.selectedIds.push(optionId);
    } else {
      state.selectedIds.shift();
      state.selectedIds.push(optionId);
    }
  }

  syncSquareUI(scenario.maxSelections);
}

function syncSquareUI(maxSelections) {
  const cards = squareGrid.querySelectorAll(".square-card");
  cards.forEach((card) => {
    const id = card.dataset.optionId;
    const isSelected = state.selectedIds.includes(id);
    card.classList.toggle("selected", isSelected);
    const stateLabel = card.querySelector(".select-state");
    if (stateLabel) {
      stateLabel.textContent = isSelected ? "Selected ✓" : "Pick";
    }
  });

  selectionHint.textContent = `Pop-up squares active — select up to ${maxSelections} option${
    maxSelections > 1 ? "s" : ""
  } (${state.selectedIds.length}/${maxSelections} selected)`;

  confirmBtn.disabled = state.selectedIds.length === 0;
}

function applyRoundChoices() {
  if (state.selectedIds.length === 0 || state.roundSubmitted) return;

  state.roundSubmitted = true;
  const scenario = SCENARIOS[state.roundIndex];
  const chosenOptions = scenario.options.filter((opt) =>
    state.selectedIds.includes(opt.id)
  );

  const stanceMod = STANCE_BONUSES[state.user.stance] || { trust: 0, harmony: 0, budget: 0 };
  const roleMod = (ROLE_BRIEFS[state.user.role] && ROLE_BRIEFS[state.user.role].bonus) || {
    trust: 0,
    harmony: 0,
    budget: 0
  };

  const delta = { trust: 0, harmony: 0, budget: 0 };
  chosenOptions.forEach((opt) => {
    delta.trust += opt.effects.trust + stanceMod.trust + Math.round(roleMod.trust * 0.5);
    delta.harmony += opt.effects.harmony + stanceMod.harmony + Math.round(roleMod.harmony * 0.5);
    delta.budget += opt.effects.budget + stanceMod.budget + Math.round(roleMod.budget * 0.5);
  });

  state.meters.trust = clamp(state.meters.trust + delta.trust);
  state.meters.harmony = clamp(state.meters.harmony + delta.harmony);
  state.meters.budget = clamp(state.meters.budget + delta.budget);

  state.history.push({
    roundTitle: scenario.title,
    choices: chosenOptions.map((o) => o.title),
    delta
  });

  squareGrid.querySelectorAll(".square-card").forEach((c) => {
    c.disabled = true;
  });
  confirmBtn.disabled = true;
  clearBtn.disabled = true;

  updateHUD();

  const fmt = (n) => (n >= 0 ? `+${n}` : `${n}`);
  outcomeSummary.textContent = `Net changes — Trust ${fmt(delta.trust)}, Harmony ${fmt(
    delta.harmony
  )}, Budget ${fmt(delta.budget)}.`;

  outcomeReactions.innerHTML = "";
  chosenOptions.forEach((opt) => {
    const li = document.createElement("li");
    li.textContent = `${opt.title}: ${opt.reaction}`;
    outcomeReactions.appendChild(li);
  });

  nextRoundBtn.textContent =
    state.roundIndex < SCENARIOS.length - 1 ? "Next Scenario" : "View Final Summary";

  outcomePanel.classList.remove("hidden");
}

function renderSummary() {
  const avgScore = Math.round(
    (state.meters.trust + state.meters.harmony + state.meters.budget) / 3
  );

  let verdict = "Vibrant & Balanced Steward";
  if (avgScore >= 68) verdict = "Inspiring & Trusted Leader";
  else if (avgScore < 45) verdict = "High-Tension & Contested Path";

  const historyItems = state.history
    .map(
      (entry) =>
        `<li><strong>${entry.roundTitle}:</strong> ${entry.choices.join(", ")}</li>`
    )
    .join("");

  summaryContent.innerHTML = `
    <div class="summary-box">
      <p><strong>Advisor:</strong> ${state.user.name} (${state.user.role})</p>
      <p><strong>Starting Approach:</strong> ${state.user.stance}</p>
      <p><strong>Overall Profile:</strong> ${verdict} (Avg Score: ${avgScore}/100)</p>
    </div>
    <div class="summary-box">
      <strong>Final Meters</strong>
      <p style="margin-top:6px;">
        Public Trust: <strong>${state.meters.trust}</strong> •
        Harmony: <strong>${state.meters.harmony}</strong> •
        Budget: <strong>${state.meters.budget}</strong>
      </p>
    </div>
    <div class="summary-box">
      <strong>Decisions Recorded</strong>
      <ul>${historyItems}</ul>
    </div>
  `;

  showScreen("summary");
}

detailsForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = playerNameInput.value.trim();
  if (!name) return;

  state = structuredClone(INITIAL_STATE);
  state.user = {
    name,
    role: playerRoleSelect.value,
    stance: playerStanceSelect.value
  };

  showScreen("options");
  renderScenario();
});

clearBtn.addEventListener("click", () => {
  if (state.roundSubmitted) return;
  const scenario = SCENARIOS[state.roundIndex];
  state.selectedIds = [];
  syncSquareUI(scenario.maxSelections);
});

confirmBtn.addEventListener("click", applyRoundChoices);

nextRoundBtn.addEventListener("click", () => {
  if (state.roundIndex < SCENARIOS.length - 1) {
    state.roundIndex += 1;
    renderScenario();
  } else {
    renderSummary();
  }
});

restartBtn.addEventListener("click", () => {
  state = structuredClone(INITIAL_STATE);
  detailsForm.reset();
  showScreen("details");
});