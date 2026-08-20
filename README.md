# jack gerow — personal site

Hand-coded HTML / CSS / JS. GitHub Pages.

Live (once Pages is on): **https://riftfern.github.io/**

## Publish

GitHub CLI is not logged in on this machine. From this folder:

```bash
cd /home/jg/Documents/dev/riftfern.github.io
gh auth login
gh repo create riftfern.github.io --public --source=. --remote=origin --push
```

Then: GitHub → repo **Settings → Pages → Deploy from a branch → `main` / `/ (root)`**.

If `riftfern.github.io` already exists, skip `gh repo create` and:

```bash
git remote add origin git@github.com:riftfern/riftfern.github.io.git
git push -u origin main
```

User site URLs only work if the repo is named `USERNAME.github.io`. A project repo works too, at `https://riftfern.github.io/REPO/`.

## Local

```bash
python3 -m http.server 4173
```

Open http://127.0.0.1:4173

## Pages

| file | what |
|---|---|
| `index.html` | homepage |
| `sun-and-rain.html` | Town & Gardens / systems |
| `outbound.html` | Masterworks |
| `making.html` | agents + python |
| `cv.html` | short cv |
| `soil.html` | hidden |

Pictures on the site are made images, not client photos. Facts on the cv match the master resume: no invented metrics, no degree, no Series 7, COSMIC night-light is a local fork.
