# Villa Essentials · WebLuxe website template

> **All content is an example.** WebLuxe Villa is a made-up business: the names, addresses, phone numbers, prices, photos (Unsplash), reviews and booked dates are samples to show the template. Replace them with the client's own before launch, and set `demo.enabled` to `false`.

Part of the **WebLuxe Villa** set: [Low](https://webluxe.github.io/LowTier_Villa/) · [Mid](https://webluxe.github.io/MidTier_Villa/) · [High](https://webluxe.github.io/HighTier_Villa/). Rebrand it for each client in `config.js` or from `/admin/`.

**Live demo:** https://webluxe.github.io/LowTier_Villa/ · **Admin demo:** https://webluxe.github.io/LowTier_Villa/admin/?demo


## Files

| File | What it is |
|---|---|
| `index.html` | The single page: hero with price tag, why book direct, the villa at a glance, amenities, photos, rates table, reviews, availability calendar with the request form, FAQ, location and contact. |
| `config.js` | **Everything about the client.** The only file you edit for a new client. |
| `css/style.css` | All the styles. Colours and fonts come from `config.js`. |
| `js/main.js` | Builds the page from `config.js`. Do not edit. |
| `assets/` | Logo, favicon and the client's own photos. |

## How to rebrand for a new client (about 30 minutes)

1. **Copy the whole folder** and rename it for the client.
2. Open **`config.js`** and work down it from the top. Each block has a comment explaining it.
   - **The business:** `name`, `legalName`, `tagline`, `logo` (put a logo file in `assets/` and write its path in `logo.image`, or leave it empty to use the letter mark).
   - **Brand:** `colors.primary`, `colors.accent`, `colors.dark`, `colors.light`. The text colour on buttons is chosen automatically so it stays readable. `fonts.heading` and `fonts.body` take any Google Fonts name.
   - **Contact:** `phone`, `whatsapp` (country code + number, digits only, e.g. `23057001234`), `whatsappMessage`, `email`, `responseTime`, the address lines, `lat`/`lng`, and `mapEmbed` (Google Maps → Share → Embed a map → copy the link inside `src="…"`).
   - **Social:** paste the links you have. Empty ones are hidden.
   - **SEO:** `seo.title`, `seo.description`, `seo.image` (the picture shown when the link is shared), `seo.priceRange` and `seo.siteUrl` (the final web address).
   - **Form:** create a free form at formspree.io and paste its link into `form.endpoint`. With no link, the request opens the visitor's email app instead. `booking.sendVia` is `"both"`, `"endpoint"` or `"whatsapp"`.
   - **The villa** (`villa`): `price` (rupees per night for the whole villa), `minNights`, `guests`, `checkIn`/`checkOut`, the `facts` under the hero and the four `stats` boxes.
   - **Booked dates** (`villa.booked`): each booking is `["check-in day", "check-out day"]`, e.g. `["2026-12-20", "2027-01-03"]`. Those nights are crossed out in the calendar and guests cannot pick them. Add a line whenever a booking comes in (the demo uses `soon(...)` so it always shows some; replace those).
   - **Rates** (`sections.rates`): `seasons` with `from`/`to` as `"MM-DD"` (they may cross New Year), their own `price` and `minNights`. The availability form checks the minimum stay for the season the guest arrives in. Also `included` and the three `notes` (check-in, deposit, cancellation).
   - **Sections:** `hero`, `direct` (the four reasons to book direct), `about`, `amenities` (icon names), `gallery` (9 photos fill the grid exactly; 5 also works), `reviews`, `book`, `faq` and `location` (with the four distance `facts`).
   - **Wording:** every piece of text has an English and a French version: `{ en: "...", fr: "..." }`.
3. **Turn off demo mode:** set `demo.enabled` to `false`. In demo mode WhatsApp, calls, emails and forms only show a pop-up, and Google is told not to index the site.
4. **Update the head of `index.html`:** `<title>`, the description and the three `og:` lines. WhatsApp, Facebook and LinkedIn read these when someone shares a link. Also update the Google Fonts link if you changed fonts, and the hero photo preload line.
5. **Replace `assets/favicon.svg`** with the client's icon (any square SVG or PNG; update the `<link rel="icon">` path if it's a PNG).
6. **Check it:** open `index.html` on a phone at 360px wide, pick dates in the calendar, send an availability request, and tap WhatsApp.

### Google set-up (before launch)

1. **`seo.siteUrl`** in `config.js`: the final address, e.g. `https://www.edenvilla.mu/`. This turns on the canonical link Google reads on every page.
2. **`sitemap.xml` and `robots.txt`**: replace `https://www.your-domain.mu/` with the same address.
3. **Google Search Console**: add the site, paste the verification tag into the marked line in `index.html` (or verify by DNS), then submit `sitemap.xml`.
4. **`contact.googleBusiness`**: the client's Google Business / Maps link. "Get directions" uses it and the schema.org data tells Google the site and the listing are the same place.
5. **`404.html`** is ready: a mistyped address shows a branded page with a way home instead of the host's error page.

### Hiding things

- A whole section: add `enabled: false` to it in `config.sections`.
- One item: delete it from its list.
- One line of text: set it to `""`.

### Photos

Unsplash links get sized automatically for each screen. For the client's own photos, put them in `assets/` (JPEG or WebP, about 2000px wide, under 400 KB each) and write the path, e.g. `img("assets/photos/pool.jpg", { en: "...", fr: "..." })`.

## Built in

- Phone first: designed at 360px, then tablet and desktop. 44px+ tap targets, with no sideways scrolling.
- Sticky header that slims as you scroll and highlights the section on screen, animated mobile menu, scroll-in animations, and respect for "reduce motion" settings.
- Add-ons you switch on in `config.js`: the French version (`languages: ["en", "fr"]`, all French text is already written) and a light/dark switch (`darkMode: true`).
- Rates table in rupees with the euro shown next to it (`currency.secondary`).
- Availability calendar: booked nights crossed out, guests tap arrival then departure, minimum stay by season, ranges through booked nights refused.
- Live price estimate night by night with the seasonal rates, in rupees with the euro beside it.
- The request sends to Formspree, by email, or as a WhatsApp message with dates, guests and the estimate written out.
- "Why book direct" strip and an FAQ.
- Phones: a bottom bar with the price, WhatsApp and "Check dates" (no floating button over the page; it steps aside while the form is on screen).
- Photo grid that opens full screen (swipe on phones, arrow keys on computers).
- Floating WhatsApp button with a pre-filled message, click-to-call and email links.
- Google ("Basics"): title, description, Open Graph tags, schema.org LodgingBusiness data with price and rating, canonical link, sitemap.xml, robots.txt, a Search Console slot and a 404 page.
- No trackers and no cookies. Works over HTTPS.

---
Template by [WebLuxe](https://webluxe.github.io/WebLuxe/), Mauritius. Sample photos from [Unsplash](https://unsplash.com). The villa, people, prices and reviews in the demo are invented.

## Admin panel (`/admin/`)

Open **`/admin/`** on the website. It edits business details, every text in English and French, the home page, the about section, prices and seasons, the gallery photos (uploaded from a phone and made smaller automatically), reviews, questions and the **availability calendar** (block the nights you are full).

- **Preview** opens the real website with the changes that are not published yet (on that device only).
- **Publish** saves them to `data/site.js` in this repository; GitHub Pages shows them about a minute later. `config.js` stays the starting point: delete `data/site.js` to go back to it.
- **Try the admin without signing in** is a demo mode for prospects: nothing is saved online.

### Signing in

Each person signs in with a GitHub key for **WebLuxe/LowTier_Villa**. The key stays on their device.

1. On github.com: **Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token**.
2. **Repository access → Only select repositories →** this repository.
3. **Permissions → Repository → Contents: Read and write**. Set an expiry, generate, and paste the key into the sign-in.

Fine-grained keys only work on repositories owned by the person's own account (or an organisation they belong to). For a client who will manage the site themselves, **transfer the repository to their GitHub account** (Settings → Transfer) and update `admin.repo` in `config.js`. Someone added as a collaborator on another person's repository uses a **classic** token with only **public_repo** ticked.
