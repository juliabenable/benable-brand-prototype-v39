# Campaign dashboard — states & logic (v1 spec for Nisarg)

Source of truth: the v37 prototype (https://juliabenable.github.io/benable-brand-prototype-v37/brand/tonypikora/campaigns/46) + Julia × Katie working sessions, Jul 27 2026. This doc covers the tracker bar, the creators table, **While you were away**, and **Up next** — every state and the logic behind it. Where logic is still open it's marked **OPEN**.

---

## 1. Concepts

- **Campaign types.** Every campaign is either a **product collab** (creator receives a product — fulfilled via Shopify *or* manually via CSV) or a **local collab** (creator visits the business — salon, restaurant…). The type changes the middle stages and all copy (see §6). In the prototype this is the COLLAB TYPE toggle; in production it's a campaign attribute.
- **Spots (deliverable).** The contracted number of creators for the campaign. Invites sent may exceed spots. Rule shown to the brand: *the first `spots` creators who reply are matched; extras are **held for the next campaign*** — never auto-invited (the next brief may not fit them).
- **Stages.** One creator is in exactly one stage. Product: `Invited → Accepted → Order shipped → Order delivered → Draft approved → Content published → Thanked`. Local: same with `Confirmed → Visited` replacing the two order stages. The tracker bar also draws a permanent leading **Sourcing** slot (not a creator stage — a system state).

## 2. Tracker bar — column states

Every column = count slab + stage label + hint (hint = *what's happening now*; label = what has already happened). Columns are click-to-filter for the creators table; amber badges are click-to-filter for "needs you".

| State | When | Slab | Count | Hint |
|---|---|---|---|---|
| **Past** | every active creator is *beyond* this stage | pale green `#eff5f1` | **`✓ N/N` in green** `#17864f` (e.g. `✓ 6/6`) | "All N passed this stage" |
| **Occupied** | ≥1 creator currently here | green ramp fill | count of creators here | stage-specific, e.g. "3 packages in transit", "2 visits booked", "Creator will post soon" |
| **Future (empty)** | stage not reached yet | quiet grey `#f6f7f6` with a light `#e2e5e2` outline — **no stripes** | muted grey `0` | forward-looking, e.g. "Once Katie's team approves drafts" |
| **Needs you** | ≥1 creator here needs brand action | as occupied | as occupied | + **amber badge** with the count; click filters to those creators |

No stripes anywhere (simplified Jul 28): the road ahead is a plain quiet grey slab with a muted 0, and anything completed sits on a pale-green slab reading green — Sourcing a lone ✓, full stages **✓ N/N** — so a glance shows how far along the campaign is. When **every** creator reaches Thanked, the Thanked count gets a sparkle: **`6 ✨`**.

**Sourcing slot** (always drawn, always leftmost, never more than one — even if several spots are being sourced):

| State | When | Rendering |
|---|---|---|
| **Done / idle** | campaign underway, nothing being sourced | pale-green slab, lone **green ✓**, hint **"All done for now"** |
| **Sourcing…** | rematch in progress | pale green `#dbeee3`, hint "(Re)matching you with creators" — no promises, no names |
| **Matches found** | rematch candidates ready | label "Matches found", hint "New profiles to review", **amber badge** → needs-you filter |

## 3. Sourcing / rematch trigger

Rematch (sourcing) starts **only** when the campaign can no longer be filled from the invites already out:

```
max_possible_fills = invites_sent − creator_declines − admin_declines
start sourcing  ⇔  max_possible_fills < spots
```

- `creator_declines` = creators who declined the invite.
- `admin_declines` = creators we declined in admin (e.g. ghosted, so we know they won't fill a spot).
- Example: 7 invites, 1 creator declined, 1 admin-declined → 5 < 6 spots → at least one spot is guaranteed unfillable → start sourcing.
- **Slow replies never trigger sourcing.** 5 accepted + 2 unanswered within the first day is *not* a sourcing state — we nudge instead.
- There is **no "Request more" button** — we detect the shortfall and source ourselves.

## 4. Rematch found — an action item

When rematch candidates are ready, the row + bar become a brand to-do:

- Table row (sorted to the **top**): blurred teaser avatar · title **"New match found"** · subtitle **"To fill your campaign"** · ⚑ "Review new matches" · a **"Review matches" button replaces the stage dashes** (there is no stage yet). **Never a creator name** — invites may exceed spots and declined creators are never exposed (decline privacy).
- Bar: "Matches found" + amber badge (see §2). While-you-were-away gets "Replacement matches found — profiles ready for your review"; Up next gets "Pick who you want to add to this campaign — waiting on you"; the recap closer CTA is "Review matches".
- Clicking review opens the match-review flow (same flow as initial creator review).

## 5. Stage transitions — product collabs

| Transition | Trigger | Notes |
|---|---|---|
| Invited → Accepted | creator accepts | for Shopify collabs, accepting includes picking the product (order is created at acceptance) |
| Accepted → Order shipped | **Shopify:** we monitor the store/shipping links — automatic. **Non-Shopify (CSV):** the brand ships (below) | |
| Order shipped → Order delivered | we track the shipment (Shopify links, or the tracking number the brand entered) — automatic | |
| Order delivered → Draft approved | **only when Katie's team approves the draft** | draft *submission* is never shown as a stage move; vetting appears as a row status ("Reel submitted — checking quality…"). Between delivered and approved we **always send creator nudges — and surface them** in While-you-were-away ("4 filming nudges sent") |
| Draft approved → Content published | post goes live, passes checks | Draft-approved subtitle is **"Creator will post soon"** — no dates (creator delays can't be promised away) |
| Content published → Thanked | brand completes the thank-you flow | while published-but-unthanked: the row always carries a **"Say thanks" action**, the stage gets an amber badge, and the table header shows **"Deepen the relationship and brand love. Send thank yous!"** |

**Non-Shopify (CSV) fulfillment** — the brand ships:

1. When a creator reaches Accepted, the brand gets a **notification** that this creator's product needs to be sent.
2. The creators-table header (right side) shows a **"Download orders"** button → CSV of **all** orders with a shipping-status column (`needs shipping` / `shipped`). The CSV reflects marks in real time — a re-download after marking shows the updated status.
3. Each waiting row has a **"Mark shipped"** button → pop-up with a **tracking number** field.
4. Once we have the tracking number, **we** track the delivery and flip Order shipped → Order delivered automatically.

## 6. Local collabs

Stages `Order shipped / Order delivered` become **`Confirmed / Visited`**. Nothing anywhere may mention product picks, packages, or shipping.

| Transition | Trigger |
|---|---|
| Accepted → Confirmed | the creator emails the brand to arrange the visit. The brand clicks the row's **"Confirm"** action ("creator has emailed me") → pop-up prompts for the **visit date** → confirmed. The date is stored so we can follow up |
| Confirmed → Visited | **automatic once the visit date passes** (kicks off follow-up texts + the content countdown) |

Copy swaps (used in the prototype):

- Bar hints: Accepted "N booking visits" · Confirmed "N visits booked" · Visited "N creating content".
- Up next: **"You have 3 creators visiting next week"**, **"First creator to visit — tomorrow"**, "Creators email you to book their visits — right after each acceptance".
- While you were away: **"3 creators visited this week"**, "Sofia emailed you — set her visit date" (closer CTA "Confirm visit").

## 7. While you were away — content rules

Ranked recap of what happened since the brand's last visit. Rules:

1. **Only claims the system can verify.** Counts come from real per-creator states — never say "all packages delivered" while 2 creators haven't shipped and 1 spot is being sourced. Count the stage instead: "3 packages in transit".
2. **Show the invisible work.** Reminders/nudges we send are always listed ("2 reminders to accept sent — nothing needed your input", "4 filming nudges sent"). This is the work the brand is paying for.
3. Declines are reassurance, never drama: "1 creator declined — we're already sourcing replacements".
4. **Views**: only shown when total views > **1,000** ("18.2k views and climbing" ✓ · 500 views ✗).
5. **Comment quotes** ("People are loving it — '…'"): only when the quoted post has > **50 likes**. **OPEN:** positive-comment detection (AI-classified) before we surface quotes broadly.
6. **Top post** (wrap): ranked by **likes + comments**, never views; show the combined count ("Top post: 63 likes & comments — Nia's reel"). No minimum — highest simply wins.
7. **No link metrics, ever.** Nothing about links shared, link taps, link tabs. (Affiliate links aren't consistently available; brands would ask "what links?")
8. **Closer** (last line): if the brand owes an action → one CTA ("2 orders are ready to ship — Download orders"). Otherwise a green all-clear with an honest horizon ("Nothing needs you — first packages land Thursday").

## 8. Up next — content rules

Forward-looking, derived from current stage counts:

- Timing stays **vague but honest** — "usually within 48h", "this weekend", "soon". Never a hard date for a creator-controlled step (a creator with a family emergency must not make us liars). Dates are OK for things we control or observe (delivery ETAs).
- Never "all/last X" unless literally every creator is at that point — otherwise count ("3 packages in transit — first delivery Thursday").
- Each stage feeds a standard line: acceptances → shipping/visits → filming → "Creators submit drafts — Katie's team vets every one" → "First posts go live after quality checks" → wrap recap → thank-yous ("Send your thank-yous" appears while published-but-unthanked creators exist).

## 9. Creator-row statuses (table)

- Row = avatar · name+handle (verified badge) · latest update (live status) · 7 stage dashes · expandable stage history. Status motion registers: `shimmer` = machine working now · `katie` = human present · `celebrate` = live 🎉 · `facts/static` = quiet truths. Only real work moves.
- Action rows (⚑ amber, **sorted to top**, counted in amber badges): review new matches · Mark shipped (CSV) · Confirm visit (local) · Say thanks (published). Buttons sit in the row; Mark shipped / Confirm open the pop-ups from §5/§6. Pop-ups overlay the **whole screen**, never just the card. **Action-row status copy stays short** (~25 chars) — it shares the cell with the button (e.g. "Order ready to ship", "She emailed you").
- Sourcing row (during rematch): mystery "?" avatar, "Sourcing / New creators for your campaign", **no numbers, no names** in any sourcing status.
- v1 status event set per stage: invite sent → nudge(s) → accepted / declined → (order shipped → delivered | confirmed → visited) → draft submitted (status only) → draft approved → published → thanked. Start small, add statuses as real situations appear.

## 10. Deliberately out of v1 (decided Jul 27)

- **Brand content-approval step** — design exists, deferred; drafts are approved by Katie's team only.
- **Delay explanations** ("Jade is late for a good reason") — not shown; nudges in While-you-were-away carry the reassurance for now.
- Draft-submitted as a visible stage; per-creator "Request more" buttons; link/affiliate metrics; view counts under 1k; comment quotes under 50 likes.
- **OPEN:** rollout scope (all existing campaigns vs new campaigns only); CSV shipped-marking events feeding creator notifications; local-collab visit-date edge cases (creator reschedules).
