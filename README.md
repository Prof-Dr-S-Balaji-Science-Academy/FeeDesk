# FeeDesk

**Fee collection and receipt management for tutors and tuition centres.**

Free · Open source · Your data lives in your Google Drive.

---

## What it does

- Student CRM with configurable fields
- Batch and academic year management
- Fast payment recording
- Professional PDF receipts
- Dashboard and collection reports
- Everything stored in your own Google Drive — nothing on our servers

## Getting started

### 1. Clone and install

```bash
git clone https://github.com/your-username/FeeDesk.git
cd FeeDesk
npm install
```

### 2. Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a project (or select an existing one)
3. Enable **Google Drive API** and **Google Identity Services**
4. Create an **OAuth 2.0 Client ID** (Web application type)
5. Add authorised JavaScript origins:
   - `http://localhost:5173` (development)
   - `https://your-username.github.io` (production)
6. Copy the Client ID

```bash
cp .env.example .env
# Edit .env and paste your Client ID
```

### 3. Add your logo

Place your logo files at:

```
public/icons/icon-16.png    (16×16)
public/icons/icon-32.png    (32×32)
public/icons/icon-180.png   (180×180 — Apple touch icon)
public/icons/icon-192.png   (192×192 — PWA home screen)
public/icons/icon-512.png   (512×512 — PWA splash)
```

### 4. Run locally

```bash
npm run dev
```

### 5. Build for production

```bash
npm run build
npm run preview   # test the production build locally
```

## Deployment (GitHub Pages)

Push to your `main` branch. The included GitHub Actions workflow will build and deploy automatically.

## Tech stack

- React 19 + TypeScript + Vite
- Tailwind CSS
- React Router (hash-based for GitHub Pages)
- Dexie.js (IndexedDB)
- Google Identity Services
- Google Drive API
- vite-plugin-pwa

## Data model

See [`DATA_MODEL.md`](DATA_MODEL.md) for full schema documentation.

## Architecture

See [`ARCHITECTURE.md`](ARCHITECTURE.md) for technical architecture decisions.

## License

MIT
