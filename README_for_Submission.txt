Assignment 3 — Using JavaScript and Deploying a Website
Student: <your name here>

What I implemented
1) booking.js
   - Click weekdays (Mon–Fri) to toggle selection. Selected days get the .clicked class.
   - Choose Half or Full day rate. Defaults to Full.
   - Rates used: Half = $20, Full = $35 (adjust if your instructor specified otherwise).
   - “clear days” button resets selections.
   - The total updates in #calculated-cost.

2) contact.js
   - Clicking “Good dog!” prevents form submit and shows a message:
     “Thank you for your message” in 24px font (just below the form).

3) styles.css
   - Base layout, font, palette (mustard #E5AF42, cornflower blue #4278e5).
   - Hover effects via .blue-hover, button styles via .fake-button and .small-button.
   - Booking layout: .day-selector as a horizontal list; selected items highlighted.
   - Contact layout: 2-column form (150px labels + content column), textarea = 150px height,
     spacing rules, and aligned submit button.

How to run locally
- Open asn-js-PROVIDED/index.html in your browser.

How to deploy (GitHub Pages)
1) Create a new GitHub repo and push the contents of asn-js-PROVIDED/ to the repo root.
2) On GitHub: Settings → Pages → “Deploy from a branch” → choose branch “main” and folder “/ (root)”. Save.
3) Your site will be live at https://<your-username>.github.io/<repo-name>/

How to validate
- CSS: Copy styles.css into https://jigsaw.w3.org/css-validator/
- JS: Use https://jshint.com/ or ESLint locally to lint scripts/booking.js and scripts/contact.js

Files to submit
- Brightspace: your GitHub Pages URL + a zip export of this folder structure.
