/* Campaign Pulse data — all demo content lives here.
   Full A–W variant history is archived in benable-brand-prototype-v27. */

export const STAGE_LABELS = ['Invited', 'Confirmed', 'Product', 'Filming', 'Approved', 'Live'];

/* contract deliverable — the number of creator spots the brand gets this
   campaign; invites may exceed it (first SPOTS to accept are matched,
   extras are held for the next campaign) */
export const SPOTS = 6;

/* campaign completion per demo day */
export const PCT = { 1: '4%', 3: '12%', 4: '16%', 9: '34%', 10: '38%', 11: '42%', 16: '58%', 22: '80%', 30: '100%' };
const B = import.meta.env.BASE_URL;
export const PHOTOS = {
  Maya: `${B}creators/maya.jpg`,
  Nia: `${B}creators/nia.jpg`,
  Sofia: `${B}creators/sofia.jpg`,
  Jade: `${B}creators/jade.jpg`,
  Priya: `${B}creators/priya.jpg`,
  Amara: `${B}creators/amara.jpg`,
  Lena: `${B}creators/lena.jpg`,
};

/* status types: shimmer = machine working now · katie = human present ·
   heartbeat = watching (breathe) · celebrate = go-live (emoji bounces) ·
   facts/static = quiet truths */
export const CREW = {
  1: [
    { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Scanning creators…', 'Checking aesthetic fit…', 'Reading engagement quality…', 'Matching to your brief…'] } },
    { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Scanning skincare creators…', 'Filtering by audience…', 'Shortlisting…'] } },
    { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Studying your brief…', 'Browsing look-alikes…', 'Scoring matches…'] } },
  ],
  3: [
    { name: 'Maya', handle: '@maya.skin', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
    { name: 'Nia', handle: '@niaglow', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
    { name: 'Lena', handle: '@lena.lately', stage: 0, status: { type: 'static', phrases: ['Ready for your review ✨'] } },
  ],
  4: [
    { name: 'Maya', handle: '@maya.skin', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
    { name: 'Nia', handle: '@niaglow', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
    { name: 'Lena', handle: '@lena.lately', stage: 0, status: { type: 'facts', phrases: ['Invite sent this morning'] } },
  ],
  9: [
    { name: 'Maya', handle: '@maya.skin', stage: 2, status: { type: 'facts', phrases: ['📦 In transit — arriving Thursday'] } },
    { name: 'Nia', handle: '@niaglow', stage: 2, status: { type: 'facts', phrases: ['🧴 Picked SPF 50 Tinted'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 1, status: { type: 'static', phrases: ['✅ Confirmed — shipping next'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 2, status: { type: 'facts', phrases: ['📬 Delivered yesterday'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 1, status: { type: 'facts', phrases: ['💭 Sketching content ideas'] } },
    { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Sourcing her replacement…', 'Vetting stand-ins…', 'Checking availability…'] } },
  ],
  /* Day 10 · non-Shopify (CSV) fulfillment: the brand ships. Accepted rows
     carry a Mark-shipped action (ship: true) + the header grows a
     Download-orders CSV button. Product mode only. */
  10: [
    { name: 'Maya', handle: '@maya.skin', stage: 2, product: 'SPF 50 Tinted', status: { type: 'facts', phrases: ['📦 Shipped Tuesday — in transit'] } },
    { name: 'Nia', handle: '@niaglow', stage: 2, product: 'Mineral Glow SPF 30', status: { type: 'facts', phrases: ['🚚 Out for delivery'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 2, product: 'SPF 50 Tinted', status: { type: 'facts', phrases: ['📦 In transit — arriving Thursday'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 1, ship: true, product: 'SPF 50 Tinted', action: { cta: 'Mark shipped' }, status: { type: 'static', phrases: ['Order ready to ship'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 1, ship: true, product: 'After-Sun Serum', action: { cta: 'Mark shipped' }, status: { type: 'static', phrases: ['Order ready to ship'] } },
    { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Sourcing her replacement…', 'Vetting stand-ins…', 'Checking availability…'] } },
  ],
  11: [
    { name: 'Maya', handle: '@maya.skin', stage: 3, status: { type: 'facts', phrases: ['📬 Delivered — unboxing soon'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 3, status: { type: 'facts', phrases: ['📬 Delivered yesterday'] } },
    { name: 'Nia', handle: '@niaglow', stage: 2, status: { type: 'facts', phrases: ['🚚 Out for delivery'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 2, status: { type: 'facts', phrases: ['📦 In transit — arriving tomorrow'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 2, status: { type: 'facts', phrases: ['🚚 Out for delivery'] } },
    { mystery: true, found: true, name: 'New match found', stage: 0, status: { type: 'static', phrases: ['Review new matches'] } },
  ],
  /* Draft submissions stay at Order delivered until Katie's team approves the
     draft (Julia, Jul 27) — no brand-approval step in v1, so stage 4 =
     Draft approved and vetting shows as status, not as a stage move. */
  16: [
    { name: 'Jade', handle: '@jadebythesea', stage: 3, status: { type: 'shimmer', phrases: ['Reel submitted — checking quality…', 'Running brand-safety checks…', 'Checking the disclosure tag…'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 3, status: { type: 'shimmer', phrases: ['Story set submitted — checking quality…', 'Running brand-safety checks…'] } },
    { name: 'Maya', handle: '@maya.skin', stage: 3, status: { type: 'facts', phrases: ['🎥 Filming Saturday — confirmed Tuesday'] } },
    { name: 'Nia', handle: '@niaglow', stage: 3, status: { type: 'facts', phrases: ['🤳 Posted a BTS teaser to stories'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 3, status: { type: 'facts', phrases: ['💭 Storyboarding her before/after'] } },
    { name: 'Amara', handle: '@amara.gold', stage: 3, status: { type: 'facts', phrases: ['🎬 First shoot this week'] } },
  ],
  /* content published + not yet thanked ⇒ always an action item nudging the
     thank-you (Julia, Jul 27) */
  22: [
    { name: 'Nia', handle: '@niaglow', stage: 5, action: { cta: 'Say thanks' }, status: { type: 'celebrate', emoji: '🎉', phrases: ['Live — 3× her usual views'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 5, action: { cta: 'Say thanks' }, status: { type: 'celebrate', emoji: '💬', phrases: ['Live on TikTok'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 5, action: { cta: 'Say thanks' }, status: { type: 'celebrate', emoji: '✨', phrases: ['Live — engagement starting'] } },
    { name: 'Maya', handle: '@maya.skin', stage: 4, status: { type: 'facts', phrases: ['⏰ Posting Thursday'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 4, status: { type: 'katie', phrases: ['Katie’s team is scheduling her post'] } },
    { name: 'Amara', handle: '@amara.gold', stage: 3, status: { type: 'facts', phrases: ['🎬 Final edits — due Sunday'] } },
  ],
  30: [
    /* top post ranks by likes + comments, never views (Julia, Jul 27) */
    { name: 'Nia', handle: '@niaglow', stage: 5, status: { type: 'static', phrases: ['🏆 Top post — 63 likes & comments · thank-you sent 💌'] } },
    { name: 'Jade', handle: '@jadebythesea', stage: 5, status: { type: 'static', phrases: ['💜 Fan favorite — 6.1% engagement · thank-you sent 💌'] } },
    { name: 'Sofia', handle: '@sofia.films', stage: 5, status: { type: 'static', phrases: ['✅ 2 posts live · thank-you sent 💌'] } },
    { name: 'Maya', handle: '@maya.skin', stage: 5, status: { type: 'static', phrases: ['✅ Posted — strong debut · thank-you sent 💌'] } },
    { name: 'Priya', handle: '@priyacreates', stage: 5, status: { type: 'static', phrases: ['✅ Posted — her stories landed · thank-you sent 💌'] } },
    { name: 'Amara', handle: '@amara.gold', stage: 5, status: { type: 'static', phrases: ['✅ Posted — strong debut · thank-you sent 💌'] } },
  ],
};

/* Timeline honesty rules (Julia, Jul 28): a step only says what Benable can
   actually KNOW — tracking events, creator confirmations, public posts,
   deadlines we set. No creator feelings, no off-platform scenes ("filmed at
   the beach"), and NEVER a past fact on a future step: future steps render
   NEXT_HINTS (or a step's own `next` override), not their done-state detail. */
export const NEXT_HINTS = {
  product: [
    'Invite goes out on your approval',
    'Waiting on her reply',
    'Product pick + shipping label',
    'Delivery — we watch the tracking',
    'Draft + disclosure pre-checks',
    'Post goes live · we watch the first hours',
    'Your thank-you — right after she posts',
  ],
  local: [
    'Invite goes out on your approval',
    'Waiting on her reply',
    'She emails you to book her visit',
    'Visit day — weekdays only',
    'Draft + disclosure pre-checks',
    'Post goes live · we watch the first hours',
    'Your thank-you — right after she posts',
  ],
};

export const TIMELINES = {
  Maya: [
    { when: 'Jul 16', detail: 'Matched to your brief — 94% aesthetic fit' },
    { when: 'Jul 17', detail: 'Accepted in under 5 hours' },
    { when: 'Jul 21', detail: 'Picked SPF 50 Tinted · arriving Thursday' },
    { next: 'Scheduled for delivery Thursday', when: 'Jul 24', detail: 'Delivered Jul 24 — shoot confirmed for Saturday' },
    { when: 'Jul 30', detail: 'Draft passed quality + disclosure checks' },
    { when: 'Aug 6', detail: 'Post live — tags verified' },
  ],
  Nia: [
    { when: 'Jul 16', detail: 'Matched — her audience loves sun care' },
    { when: 'Jul 16', detail: 'Accepted same day 🎉' },
    { when: 'Jul 19', detail: 'Picked Mineral Glow SPF 30 · arriving Jul 24' },
    { next: 'Scheduled for delivery Jul 24', when: 'Jul 24', detail: 'Delivered Jul 24 — she teased a BTS story' },
    { when: 'Jul 29', detail: 'Passed quality + disclosure checks' },
    { when: 'Aug 5', detail: 'Reel live — her best post this month' },
  ],
  Sofia: [
    { when: 'Jul 16', detail: 'Matched via your “clean girl” aesthetic' },
    { when: 'Jul 18', detail: 'Accepted after a schedule check' },
    { when: 'Jul 22', detail: 'Picked SPF 50 Tinted · arriving Jul 24 in Austin' },
    { next: 'Scheduled for delivery Jul 24', when: 'Jul 24', detail: 'Delivered Jul 24 — angle confirmed with Katie’s team' },
    { when: 'Jul 30', detail: 'Draft approved first pass ✓' },
    { when: 'Aug 6', detail: 'TikTok live — tags verified' },
  ],
  Jade: [
    { when: 'Jul 16', detail: 'Hand-picked by Katie’s team — “the light in her work”' },
    { when: 'Jul 17', detail: 'Accepted + shared her moodboard' },
    { when: 'Jul 21', detail: 'Picked SPF 50 Tinted · arriving Thursday' },
    { next: 'Scheduled for delivery Thursday', when: 'Jul 23', detail: 'Delivered Jul 23 — she unboxed on stories' },
    { when: 'Jul 28', detail: '34s reel submitted — checks passed' },
    { next: 'Goes live after final checks', detail: 'Reel live — tags verified' },
  ],
  Priya: [
    { when: 'Jul 16', detail: 'Matched — strong before/after format' },
    { when: 'Jul 17', detail: 'Accepted, confirmed her angle with Katie’s team' },
    { when: 'Jul 22', detail: 'Picked After-Sun Serum · arriving Jul 24' },
    { next: 'Scheduled for delivery Jul 24', when: 'Jul 24', detail: 'Delivered Jul 24 — filming window through Sunday' },
    { when: 'Jul 29', detail: 'Submitted — pre-checks passed' },
    { next: 'Stories go live this week', detail: 'Stories live — tags verified' },
  ],
  Amara: [
    { when: 'Jul 25', detail: 'Cast as a replacement — 96% fit' },
    { when: 'Jul 25', detail: 'Accepted in 4 hours' },
    { when: 'Jul 26', detail: 'Express-shipped — arriving tomorrow' },
    { next: 'Scheduled for delivery tomorrow', detail: 'Delivered — shoot scheduled this week' },
    { next: 'Draft due Sunday', detail: 'Draft passed checks' },
    { detail: 'Posted — strong debut' },
  ],
  Lena: [
    { when: 'Jul 16', detail: 'Matched to your brief' },
    { detail: 'Invite sent' },
    { detail: 'Product picked' },
    { detail: 'Delivered' },
    { detail: 'Draft checked' },
    { detail: 'Posted' },
  ],
};

export const CASTING_TIMELINE = [
  { label: 'Brief studied', when: 'this morning', detail: 'Palette, tone and audience mapped' },
  { label: 'Scanning', live: true, detail: 'Working through the creator graph' },
  { label: 'Shortlisting', eta: 'next', detail: 'Top matches go to Katie’s team for a human pass' },
  { label: 'Your review', eta: '~2 days', detail: 'Cards land in your queue' },
];

/* ---- local collabs (Julia, Jul 27) ------------------------------------
   Two campaign types: product collabs and local collabs. In local collabs
   stages 2/3 are Confirmed / Visited (no orders, no shipping): the creator
   emails the brand to book a visit; the brand confirms it and sets the date
   (that moves accepted → confirmed); the visit date passing moves
   confirmed → visited. Recap / up-next never mention product picks or
   shipping. Only the days below differ — everything else is shared. */
export const LOCAL = {
  crew: {
    9: [
      { name: 'Maya', handle: '@maya.skin', stage: 2, status: { type: 'facts', phrases: ['📅 Visiting tomorrow at 2pm'] } },
      { name: 'Nia', handle: '@niaglow', stage: 2, status: { type: 'facts', phrases: ['📅 Booked for Saturday morning'] } },
      { name: 'Jade', handle: '@jadebythesea', stage: 2, status: { type: 'facts', phrases: ['📅 Visiting Sunday — asked about parking'] } },
      { name: 'Sofia', handle: '@sofia.films', stage: 1, confirmEmail: true, action: { cta: 'Confirm' }, status: { type: 'static', phrases: ['She emailed you'] } },
      { name: 'Priya', handle: '@priyacreates', stage: 1, status: { type: 'facts', phrases: ['Will email you to book her visit'] } },
      { mystery: true, name: 'Casting…', stage: 0, status: { type: 'shimmer', phrases: ['Sourcing her replacement…', 'Vetting stand-ins…', 'Checking availability…'] } },
    ],
    11: [
      { name: 'Maya', handle: '@maya.skin', stage: 3, status: { type: 'facts', phrases: ['✨ Visited Thursday — content in the works'] } },
      { name: 'Jade', handle: '@jadebythesea', stage: 3, status: { type: 'facts', phrases: ['💅 Visited yesterday — posting soon'] } },
      { name: 'Nia', handle: '@niaglow', stage: 2, status: { type: 'facts', phrases: ['📅 Visiting Friday'] } },
      { name: 'Sofia', handle: '@sofia.films', stage: 2, status: { type: 'facts', phrases: ['📅 Visiting Saturday at 11am'] } },
      { name: 'Priya', handle: '@priyacreates', stage: 2, status: { type: 'facts', phrases: ['📅 Booked for Sunday'] } },
      { mystery: true, found: true, name: 'New match found', stage: 0, status: { type: 'static', phrases: ['Review new matches'] } },
    ],
  },
  upNext: {
    4: [
      { emoji: '💌', text: 'First acceptances land', eta: 'usually within 48h' },
      { emoji: '📧', text: 'Creators email you to book their visits', eta: 'right after each acceptance' },
    ],
    9: [
      { emoji: '💅', text: 'First creator to visit', eta: 'tomorrow' },
      { emoji: '📅', text: 'You have 3 creators visiting next week', eta: 'dates confirmed' },
      { emoji: '🔁', text: 'Replacement picks', eta: 'within 48h — we’ll ping you' },
    ],
    11: [
      { emoji: '✨', text: 'Pick who you want to add to this campaign', eta: 'waiting on you' },
      { emoji: '📅', text: '3 more visits booked', eta: 'Friday through Sunday' },
      { emoji: '🎬', text: 'Content lands after each visit', eta: 'within days' },
    ],
  },
  recap: {
    9: {
      since: 'since Friday',
      items: [
        { emoji: '✉️', bold: '6 invites sent', rest: ' — the moment you approved your picks' },
        { emoji: '✅', bold: '4 of 6 accepted their invite', rest: '' },
        { emoji: '👋', bold: '2 reminders to accept sent', rest: ' — nothing needed your input' },
        { emoji: '🔁', bold: '1 creator declined', rest: ' — we’re already sourcing replacements' },
      ],
      closer: { text: 'Sofia emailed you — set her visit date', cta: 'Confirm visit' },
    },
    11: {
      since: 'since Thursday',
      items: [
        { emoji: '🔁', bold: 'Replacement matches found', rest: ' — profiles ready for your review' },
        { emoji: '💅', bold: '2 creators visited this week', rest: ' — content is on the way' },
        { emoji: '⏰', bold: 'Deadline reminders sent', rest: ' to keep everyone on pace' },
      ],
      closer: { text: 'New matches are waiting', cta: 'Review matches' },
    },
    16: {
      since: 'since Sunday',
      items: [
        { emoji: '💅', bold: '3 creators visited this week', rest: ' — everyone’s been in' },
        { emoji: '👋', bold: '4 filming nudges sent', rest: ' — everyone knows their deadline' },
        { emoji: '🎬', bold: '2 videos submitted for review', rest: ' — Katie’s team is reviewing them for quality' },
      ],
      closer: { text: '2 new videos are ready for a look', cta: 'Watch the first cuts' },
    },
  },
  /* local stage histories — visits, never products (grounded in the Steph
     Khalil / Trilogy spas call, Jul 28: creator emails the brand to book,
     weekday visits only, massage-or-facial pick, practitioner-consent
     filming, draft lands ~7-10 days after the visit) */
  timelines: {
    Maya: [
      { when: 'Jul 16', detail: 'Matched to your brief — 94% aesthetic fit' },
      { when: 'Jul 17', detail: 'Accepted in under 5 hours' },
      { when: 'Jul 21', detail: 'Emailed you — visit set for Tuesday 2pm' },
      { when: 'Jul 23', detail: 'Visited Tuesday 2pm — deep-tissue massage' },
      { when: 'Jul 30', detail: 'Draft passed pre-checks' },
      { when: 'Aug 6', detail: 'Post live — tags verified' },
    ],
    Nia: [
      { when: 'Jul 16', detail: 'Matched — her audience loves self-care' },
      { when: 'Jul 16', detail: 'Accepted same day 🎉' },
      { when: 'Jul 19', detail: 'Booked her Thursday-morning visit' },
      { when: 'Jul 26', detail: 'Visited Thursday morning' },
      { when: 'Jul 29', detail: 'Passed quality + disclosure checks' },
      { when: 'Aug 5', detail: 'Reel live — her best post this month' },
    ],
    Sofia: [
      { when: 'Jul 16', detail: 'Matched via your “clean girl” aesthetic' },
      { when: 'Jul 18', detail: 'Accepted after a schedule check' },
      { when: 'Jul 24', detail: 'Emailed you — visit confirmed for Wednesday' },
      { when: 'Jul 27', detail: 'Visited Wednesday — a quiet midweek slot' },
      { when: 'Jul 30', detail: 'Draft approved first pass ✓' },
      { when: 'Aug 6', detail: 'TikTok live — tags verified' },
    ],
    Jade: [
      { when: 'Jul 16', detail: 'Hand-picked by Katie’s team — “the light in her work”' },
      { when: 'Jul 17', detail: 'Accepted + shared her moodboard' },
      { when: 'Jul 23', detail: 'Visit confirmed — Friday, 11am' },
      { when: 'Jul 25', detail: 'Visited Friday 11am' },
      { when: 'Jul 28', detail: '34s reel submitted — checks passed' },
      { eta: 'after your approval', detail: 'Goes live' },
    ],
    Priya: [
      { when: 'Jul 16', detail: 'Matched — strong voice-over format' },
      { when: 'Jul 17', detail: 'Accepted, confirmed her angle with Katie’s team' },
      { when: 'Jul 22', detail: 'Visit booked for Thursday' },
      { when: 'Jul 24', detail: 'Visited Thursday' },
      { when: 'Jul 29', detail: 'Submitted — running pre-checks' },
      { eta: 'this week', detail: 'Stories go live' },
    ],
    Amara: [
      { when: 'Jul 25', detail: 'Cast as a replacement — 96% fit' },
      { when: 'Jul 25', detail: 'Accepted in 4 hours' },
      { when: 'Jul 26', detail: 'Emailed you — visiting Wednesday' },
      { next: 'Her visit — Wednesday', detail: 'Visited Wednesday' },
      { next: 'Draft due Sunday', detail: 'Draft passed checks' },
      { detail: 'Posted' },
    ],
    Lena: [
      { when: 'Jul 16', detail: 'Matched to your brief' },
      { detail: 'Invite sent' },
      { detail: 'Visit booked' },
      { detail: 'Visited' },
      { detail: 'Draft checked' },
      { detail: 'Posted' },
    ],
  },
};

/* crew rows for a day, honoring the collab type */
export const crewFor = (day, mode) => (mode === 'local' && LOCAL.crew[day]) || CREW[day] || [];

export const DAYS = [
  {
    day: 1,
    phase: 'sourcing',
    scrubLabel: 'Day 1 · Launch',
    race: { you: 8, them: 2, caption: 'Day 1 — most brands are still writing the brief. Yours is already in the field.' },
    upNext: [
      { emoji: '✨', text: 'Your creator shortlist lands for review', eta: 'in ~2 days' },
      { emoji: '💌', text: 'Invites go out the moment you approve', eta: 'right after your review' },
    ],
    recap: {
      since: 'since this morning',
      items: [
        { emoji: '✅', bold: '214 profiles scanned', rest: ' against your brief' },
        { emoji: '✨', bold: '12 creators shortlisted', rest: ' — Katie’s team hand-picked them' },
        { emoji: '💌', bold: 'Availability checks out', rest: ' to our top picks' },
      ],
      closer: { clear: true, text: 'Nothing needs you until your shortlist lands — about 2 days' },
    },
  },
  {
    day: 3,
    phase: 'review',
    scrubLabel: 'Day 3 · Creators ready',
    race: { you: 18, them: 5, caption: 'Day 3 and your shortlist is ready. <strong>Industry average: day 12.</strong>' },
    upNext: [
      { emoji: '💌', text: 'Invites out within hours of your approvals', eta: 'same day' },
      { emoji: '📦', text: 'Product picks + shipping as creators accept', eta: 'this week' },
    ],
    recap: {
      since: 'since Monday',
      items: [
        { emoji: '✨', bold: '6 creators shortlisted', rest: ' — your lineup is ready' },
        { emoji: '🔬', bold: 'Engagement checks passed', rest: ' on all 6 (4.2%+)' },
        { emoji: '🧪', bold: 'Products matched', rest: ' to each creator' },
      ],
      closer: { text: '6 creators are waiting on you', cta: 'Review creators' },
    },
  },
  {
    day: 4,
    scrubLabel: 'Day 4 · Invites out',
    race: { you: 16, them: 6, caption: 'Invites out on day 4 — <strong>most brands are still shortlisting.</strong>' },
    upNext: [
      { emoji: '💌', text: 'First acceptances land', eta: 'usually within 48h' },
      { emoji: '📦', text: 'Product picks + shipping', eta: 'right after each acceptance' },
    ],
    recap: {
      since: 'since yesterday',
      items: [
        { emoji: '✉️', bold: '6 invites sent', rest: ' — the moment you approved your picks' },
      ],
      closer: { clear: true, text: 'Nothing needs you — acceptances usually land within 48h' },
    },
  },
  {
    day: 9,
    scrubLabel: 'Day 9 · Cooking',
    race: { you: 34, them: 12, caption: 'Day 9 — a typical agency would <strong>still be negotiating contracts</strong>. Your products are already in the mail.' },
    upNext: [
      /* never claim "all" unless every creator is actually there — count the
         stage instead (Julia, Jul 27: 2 accepted hadn't shipped, 1 sourcing) */
      { emoji: '📦', text: '3 packages in transit', eta: 'first delivery Thursday' },
      { emoji: '🔁', text: 'Replacement picks', eta: 'within 48h — we’ll ping you' },
      { emoji: '🎬', text: 'First creators start filming', eta: 'this weekend' },
    ],
    recap: {
      since: 'since Friday',
      items: [
        { emoji: '✉️', bold: '6 invites sent', rest: ' — the moment you approved your picks' },
        { emoji: '✅', bold: '4 of 6 accepted their invite', rest: '' },
        { emoji: '👋', bold: '2 reminders to accept sent', rest: ' — nothing needed your input' },
        { emoji: '🔁', bold: '1 creator declined', rest: ' — we’re already sourcing replacements' },
      ],
      closer: { clear: true, text: 'Nothing needs you — first packages land Thursday' },
    },
  },
  {
    /* Day 10 · non-Shopify (CSV) fulfillment — product collabs only */
    day: 10,
    productOnly: true,
    scrubLabel: 'Day 10 · You ship',
    race: { you: 38, them: 14, caption: 'Day 10 — 3 packages already moving. <strong>Typical campaigns are still contracting.</strong>' },
    upNext: [
      { emoji: '📦', text: '2 orders waiting on your shipment', eta: 'mark shipped + add tracking' },
      { emoji: '🚚', text: 'We track every delivery once tracking is in', eta: 'automatic' },
      { emoji: '🎬', text: 'First creators start filming', eta: 'this weekend' },
    ],
    recap: {
      since: 'since Friday',
      items: [
        { emoji: '✅', bold: '4 of 6 accepted their invite', rest: '' },
        { emoji: '🧴', bold: '2 creators picked their products', rest: ' — their orders are ready for you' },
        { emoji: '📦', bold: '3 packages in transit', rest: ' — we’re watching the tracking' },
      ],
      closer: { text: '2 orders are ready to ship', cta: 'Download orders' },
    },
  },
  {
    day: 11,
    scrubLabel: 'Day 11 · Rematch found',
    race: { you: 42, them: 16, caption: 'Day 11 — replacement found in 48 hours. <strong>Most agencies take two weeks.</strong>' },
    upNext: [
      { emoji: '✨', text: 'Pick who you want to add to this campaign', eta: 'waiting on you' },
      { emoji: '📦', text: 'Last packages deliver', eta: 'by tomorrow' },
      { emoji: '🎬', text: 'First creators start filming', eta: 'this weekend' },
    ],
    recap: {
      since: 'since Thursday',
      items: [
        { emoji: '🔁', bold: 'Replacement matches found', rest: ' — profiles ready for your review' },
        { emoji: '📬', bold: '2 packages delivered', rest: ' — 3 more on the truck' },
        { emoji: '⏰', bold: 'Deadline reminders sent', rest: ' to keep everyone on pace' },
      ],
      closer: { text: 'New matches are waiting', cta: 'Review matches' },
    },
  },
  {
    day: 16,
    scrubLabel: 'Day 16 · First content',
    race: { you: 58, them: 24, caption: 'First content on day 16. <strong>Industry average: day 41.</strong>' },
    upNext: [
      { emoji: '📣', text: 'First posts go live', eta: 'after quality checks!' },
      { emoji: '🎬', text: 'Creators submit drafts — Katie’s team vets every one', eta: 'through Sunday' },
    ],
    recap: {
      since: 'since Sunday',
      items: [
        { emoji: '📬', bold: 'All products delivered', rest: ' — the creators are creating!' },
        /* nudges between delivered and draft-approved are always sent — say so */
        { emoji: '👋', bold: '4 filming nudges sent', rest: ' — everyone knows their deadline' },
        { emoji: '🎬', bold: '2 videos submitted for review', rest: ' — Katie’s team is reviewing them for quality' },
      ],
      closer: { text: '2 new videos are ready for a look', cta: 'Watch the first cuts' },
    },
  },
  {
    day: 22,
    scrubLabel: 'Day 22 · Going live',
    race: { you: 80, them: 31, caption: 'Day 22 — you’re moving about <strong>2.6× faster</strong> than a typical campaign.' },
    upNext: [
      { emoji: '💌', text: 'Send your thank-yous', eta: '3 creators are live' },
      { emoji: '⏰', text: 'Last creators go live', eta: 'this week' },
      { emoji: '🏁', text: 'Campaign wrap', eta: 'we’ll send you your campaign recap' },
    ],
    recap: {
      since: 'since Monday',
      items: [
        { emoji: '📣', bold: '3 posts went live', rest: ' on IG & TikTok' },
        /* views only appear above 1,000 total; the comment quote only appears
           when the post has 50+ likes (Julia, Jul 27) */
        { emoji: '👀', bold: '18.2k views', rest: ' and climbing' },
        { emoji: '💬', bold: 'People are loving it', rest: ' — “best SPF I’ve tried, hands down” · @niaglow' },
      ],
      closer: { text: 'Nia’s reel is taking off', cta: 'Open the post' },
    },
  },
  {
    day: 30,
    scrubLabel: 'Day 30 · Wrap',
    race: { you: 100, them: 45, caption: 'Wrapped in 30 days. <strong>Industry average: 67 days.</strong>' },
    upNext: [
      { emoji: '🚀', text: 'Campaign #2 — same crew or fresh faces', eta: 'whenever you’re ready' },
    ],
    recap: {
      since: 'since last week',
      items: [
        { emoji: '🏆', bold: 'Top post: 63 likes & comments', rest: ' — Nia’s reel' },
        { emoji: '💌', bold: 'Thank-yous sent', rest: ' to all 6 creators' },
      ],
      closer: { text: 'Your wrap-up is ready', cta: 'See the wrap-up' },
    },
  },
];
