# Adjei Bismarck — Portfolio

Personal portfolio site of **Adjei Bismarck (Nii Adjetey)**, an Embedded Systems Engineer who also works across backend development, web engineering, and data analytics. Built as a plain multi-page static site: no framework, no build step.

**Live:** https://adjetey.vercel.app

---

## Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Hero, selected projects, experience, and skills overview |
| About | `about.html` | Bio, photo, and tabs for Skills / Experience / Education, plus CV download |
| Services | `services.html` | Cards for the services offered |
| Portfolio | `portfolio.html` | Project cards with hover overlays, live/GitHub links, and a "Not Deployed Yet" modal for projects without a live URL |
| Album | `album.html` | Photo archive with Deck and Grid views and a lightbox |
| Wall | `wall.html` | Public signature wall. Visitors leave notes, and notes can be exported as a branded snapshot image |
| Coffee | `coffee.html` | "Buy me a coffee" support page with preset amounts and Paystack checkout |
| Dashboard | `dashboard.html` | Summary stats (projects, experience, skills, certifications) |
| Contact | `contact.html` | Contact form and details. Linked from the footer and hidden from the top nav |

## Tech Stack

- **HTML / CSS / vanilla JavaScript**, one shared stylesheet (`style.css`)
- **Fonts:** Inter (body), JetBrains Mono (nav, labels, tags), Caveat (handwritten wall signatures), all via Google Fonts
- **Icons:** Font Awesome 6
- **Wall backend:** Firebase Firestore (collection `wallPosts`)
- **Snapshots:** html2canvas
- **Payments:** Paystack inline checkout (GHS)
- **Hosting:** Vercel

## Project Structure

```
.
├── index.html
├── about.html
├── services.html
├── portfolio.html
├── album.html
├── wall.html
├── coffee.html
├── dashboard.html
├── contact.html
├── style.css          # shared styles for every page
├── images/            # profile photo, project screenshots, album photos
└── documents/
    └── cv.pdf         # served by the "Download CV" buttons
```

## Running Locally

No install needed. Open `index.html` in a browser, or serve the folder to avoid any file-path quirks:

```bash
# Python
python -m http.server 8000

# or Node
npx serve .
```

Then visit `http://localhost:8000`.

## Configuration

### Wall (Firebase)
`wall.html` contains a `firebaseConfig` block near the bottom. To point the wall at your own Firebase project, replace those values with your own project's web config. Firebase web config values are not secret, so protect the data with **Firestore security rules** instead (for example, allow public reads and restrict writes to valid note shapes and lengths).

### Coffee page (Paystack)
In `coffee.html`, set your public key:

```js
const PAYSTACK_PUBLIC_KEY = 'pk_test_YOUR_PUBLIC_KEY_HERE';
```

Until a real key is set, the page shows a "Paystack key not set up yet" message instead of opening checkout. Use a `pk_test_...` key while testing and switch to `pk_live_...` when going live. Never put a secret key (`sk_...`) in this file.

### Portfolio project links
Each card in `portfolio.html` has two data attributes:

```html
<div class="portfolio-card"
     data-github="https://github.com/your-username/your-repo"
     data-live="https://your-live-url.com">
```

Leave `data-live=""` empty and the "View Project" button opens the "Not Deployed Yet" modal, which links to the GitHub repo instead.

## Customizing

- **Colors:** text colors and the pink/orange accent (`#ff004f`, `#ff6f3d`) are defined in `style.css`. Check the `:root` block at the top for text color variables.
- **Navigation:** every page has its own copy of the nav markup. When you add or rename a page, update the nav and footer link lists in **each** HTML file.
- **Hidden Contact link:** `style.css` hides any top-nav link pointing to `contact.html`. Delete the two `contact.html` rules under the nav styles to show it again.
- **Home page content:** projects and experience entries are plain HTML blocks (`.project-row` and `.experience-row`) in `index.html`. Copy a block to add another.

## Deployment

Deployed on Vercel. Push to the connected repo and Vercel redeploys automatically.

**Cache note:** every page links the stylesheet as `style.css?v=2`. After you change `style.css`, bump the number (`?v=3`, `?v=4`, ...) in all HTML files so visitors' browsers fetch the new file instead of a cached copy.

## Author

**Adjei Bismarck**

- GitHub: [@adjetey0](https://github.com/adjetey0)
- LinkedIn: [niiadjetey]([https://www.linkedin.com/in/niiadjetey](https://www.linkedin.com/in/niiadjetey/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BDItn%2FcJ5TE%2B9t%2BPG31f7aA%3D%3D))
- X: [@mradjeteynii](https://x.com/mradjeteynii)
- Instagram: [@west.xds](https://www.instagram.com/west.xds)

&copy; 2025 Adjei Bismarck. All rights reserved.
