import { useEffect, useRef, useState } from 'react';
import '../../styles/pulse.css';
import { DAYS, LOCAL, crewFor } from './pulseData.js';
import { stageOf, AmineProgress2, AmineRail, StayTuned, CreatorsFound } from './amine.jsx';
import FixedTable from './tableFix.jsx';

/*
  Campaign Pulse v34 — single experience (v33's C), kept lean for polishing:
  stat row + Amine stage rail + creators table + right rail, driven by the
  DAYS/CREW demo states. The A–D/W/Y/Z/0 exploration lives in v33 and git.
  v37: a COLLAB TYPE toggle (product | local) sits at the very top — local
  collabs swap the order stages for Confirmed/Visited and never mention
  shipping (Julia, Jul 27).
*/

// Survive captured-DOM remounts.
let persistedIdx = 3; // open on Day 9 — the dead middle is the thesis
let persistedMode = 'product';
/* v39 locks Julia's picks (Jul 28): table F only · rail A (split cards) ·
   stage = ramp dot + word (3A) · actions = calm (4C) · icons off.
   Undecided dims ship at their F defaults: edu footnote (B) · late quiet (7A) ·
   header grey #f8f9fa · ship band · amber buttons. Flip here if she re-opens one. */
const F_OPTS = { edu: 'b', stage: 'dots', act: 'calm', late: 'quiet', icons: 'off', btn: 'amber' };
// the dims Julia kept open (Jul 28): header tint + ship-flow placement +
// table layout (F = status/button share one slot · G = dedicated columns)
let persistedToggles = { head: 'grey', ship: 'band', table: 'g', ring: 'solid' };

export default function CampaignPulse() {
  const [idx, setIdx] = useState(persistedIdx);
  const [mode, setMode] = useState(persistedMode);
  const [tg, setTg] = useState(persistedToggles);
  const setToggle = (k, v) => setTg((o) => ({ ...o, [k]: v }));
  const [openCrew, setOpenCrew] = useState(() => new Set());
  const [stageFilter, setStageFilter] = useState(null);
  const rootRef = useRef(null);
  // some days only exist for one collab type (day 10 = CSV shipping)
  const days = mode === 'local' ? DAYS.filter((d) => !d.productOnly) : DAYS;
  const base = days[Math.min(idx, days.length - 1)];
  const scene = mode === 'local'
    ? { ...base, mode, upNext: LOCAL.upNext[base.day] ?? base.upNext, recap: LOCAL.recap[base.day] ?? base.recap }
    : { ...base, mode };
  const phase = scene.phase; // 'sourcing' | 'review' | undefined (live dashboard)

  const switchMode = (m) => {
    if (m === mode) return;
    const day = days[Math.min(idx, days.length - 1)].day;
    const nextDays = m === 'local' ? DAYS.filter((d) => !d.productOnly) : DAYS;
    const at = nextDays.findIndex((d) => d.day === day);
    setIdx(at >= 0 ? at : Math.min(idx, nextDays.length - 1));
    setMode(m);
  };

  useEffect(() => { persistedIdx = idx; }, [idx]);
  useEffect(() => { persistedToggles = tg; }, [tg]);
  useEffect(() => { persistedMode = mode; }, [mode]);
  useEffect(() => { setStageFilter(null); }, [idx, mode]);

  const toggleCrew = (k) =>
    setOpenCrew((prev) => {
      const next = new Set(prev);
      if (next.has(k)) next.delete(k); else next.add(k);
      return next;
    });

  // The pulse view replaces the Dashboard tab's own content; the grey
  // #f9fafb pane fills everything below the tabs (tabs strip stays white).
  useEffect(() => {
    const wrap = rootRef.current?.parentElement;
    const column = wrap?.classList.contains('cp-host') ? wrap.parentElement : wrap;
    if (!column) return undefined;
    const pane = column.parentElement;
    column.classList.add('cp-crew-mode');
    if (!phase) {
      column.classList.add('cp-crew-mode--labs');
      pane?.classList.add('cp-labs-pane');
    }
    return () => {
      column.classList.remove('cp-crew-mode', 'cp-crew-mode--labs');
      pane?.classList.remove('cp-labs-pane');
    };
  }, [phase]);

  // Recruiting pill (Figma #fff0ce/#a85321) while sourcing/reviewing; Active after.
  useEffect(() => {
    const pill = document.querySelector('.workflow-header-main .phase-pill');
    const label = pill?.querySelector('span:last-child');
    const dot = pill?.querySelector('.phase-pill-dot');
    if (!pill || !label) return undefined;
    if (!phase) return undefined;
    label.textContent = 'Recruiting';
    pill.style.background = '#fff0ce';
    pill.style.color = '#a85321';
    if (dot) dot.style.background = '#a85321';
    return () => {
      label.textContent = 'Active';
      pill.style.background = '';
      pill.style.color = '';
      if (dot) dot.style.background = '';
    };
  }, [phase]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.target.closest?.('input, textarea')) return;
      if (e.key === 'ArrowRight') setIdx((i) => Math.min(i + 1, days.length - 1));
      if (e.key === 'ArrowLeft') setIdx((i) => Math.max(i - 1, 0));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [days.length]);

  const needsAction = (c) => (c.mystery && c.found) || (!c.mystery && !!c.action);
  const crewRows = crewFor(scene.day, mode)
    .filter((c) => {
      if (stageFilter == null) return true;
      if (stageFilter === 'casting') return !!c.mystery;
      if (stageFilter === 'needs') return needsAction(c);
      return !c.mystery && stageOf(c, scene.day) === stageFilter;
    })
    // action items float to the top of the list
    .sort((a, b) => Number(needsAction(b)) - Number(needsAction(a)));

  return (
    <div className="cp-root cp-root--c" ref={rootRef}>
      {/* demo control — collab type, at the very top (Julia, Jul 27) */}
      <div className="cp-mode" role="group" aria-label="Collab type">
        <span className="cp-scrub-tag">COLLAB TYPE</span>
        <button type="button" className={mode === 'product' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => switchMode('product')}>
          Product
        </button>
        <button type="button" className={mode === 'local' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => switchMode('local')}>
          Local
        </button>
        <span className="cp-mode-sep" aria-hidden />
        <span className="cp-scrub-tag">HEADER</span>
        <button type="button" title="#f8f9fa header tint" className={tg.head === 'grey' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('head', 'grey')}>Grey</button>
        <button type="button" title="White header" className={tg.head === 'white' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('head', 'white')}>White</button>
        <span className="cp-mode-sep" aria-hidden />
        <span className="cp-scrub-tag">SHIP</span>
        <button type="button" title="Steps band under the header" className={tg.ship === 'band' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('ship', 'band')}>Band</button>
        <button type="button" title="Steps + download inside the header" className={tg.ship === 'head' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('ship', 'head')}>Header</button>
        <span className="cp-mode-sep" aria-hidden />
        <span className="cp-scrub-tag">TABLE</span>
        <button type="button" title="F — status and button share one slot" className={tg.table === 'f' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'f')}>F</button>
        <button type="button" title="G — dedicated status column + action column" className={tg.table === 'g' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'g')}>G</button>
        <button type="button" title="H — G with the two columns swapped (action before status)" className={tg.table === 'h' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'h')}>H</button>
        <button type="button" title="I — no action column; the ghost button replaces the status dot" className={tg.table === 'i' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'i')}>I</button>
        <button type="button" title="J — like I, with the button's dot aligned to the status dots" className={tg.table === 'j' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'j')}>J</button>
        <button type="button" title="K — J with the moment band folded into the header (no Send-yours button)" className={tg.table === 'k' ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('table', 'k')}>K</button>
        <span className="cp-mode-sep" aria-hidden />
        <span className="cp-scrub-tag">RING</span>
        {[['grad', 'Gradient ring (original)'], ['solid', 'Solid green ring'], ['soft', 'Soft pastel ring'], ['halo', 'Quiet outer halo'], ['badge', 'No ring — corner ✓ badge']].map(([v, tip]) => (
          <button key={v} type="button" title={tip} className={tg.ring === v ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setToggle('ring', v)}>
            {v[0].toUpperCase() + v.slice(1)}
          </button>
        ))}
      </div>


      {phase === 'sourcing' ? (
        <StayTuned />
      ) : phase === 'review' ? (
        <CreatorsFound count={crewFor(scene.day, mode).length} />
      ) : (
        <>
          <AmineProgress2 scene={scene} filter={stageFilter} onFilter={setStageFilter} />
          <div className={`cp-crew2 tf-noicons${tg.head === 'grey' ? ' tf-heads-grey' : ''}`} key={`b-${scene.day}`}>
            <div className="cp-crew-cols cp-crew-cols--left">
              <div className="cp-crew-left">
                <FixedTable
                  scene={scene}
                  rows={crewRows}
                  filter={stageFilter}
                  onFilter={setStageFilter}
                  openCrew={openCrew}
                  toggleCrew={toggleCrew}
                  opts={{ ...F_OPTS, ...tg, layout: tg.table }}
                />
              </div>

              <aside className="cp-tile-stack">
                <AmineRail scene={scene} railVar="a" />
              </aside>
            </div>
          </div>
        </>
      )}

      {/* demo scrubber — presenter control, not product UI */}
      <nav className="cp-scrubber" aria-label="Demo controls">
        <span className="cp-scrub-tag">PULSE DEMO</span>
        <button type="button" className="cp-scrub-arrow" disabled={idx === 0} onClick={() => setIdx(idx - 1)}>←</button>
        {days.map((d, i) => (
          <button type="button" key={d.day} className={i === idx ? 'cp-scrub-day cp-scrub-day--active' : 'cp-scrub-day'} onClick={() => setIdx(i)}>
            {i === idx ? d.scrubLabel : `D${d.day}`}
          </button>
        ))}
        <button type="button" className="cp-scrub-arrow" disabled={idx === days.length - 1} onClick={() => setIdx(idx + 1)}>→</button>
      </nav>
    </div>
  );
}
