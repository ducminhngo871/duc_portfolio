# Publishing a new Substack article to the website

Do this **after** the article is published and live on Substack.
The whole thing is ~30 seconds of actual work, once a week.

## Step 1 — Open Terminal

Press `Cmd + Space`, type `Terminal`, press Enter.

## Step 2 — Go to the project folder

Copy-paste this line, press Enter:

```
cd "/Users/ducminhngo871/Desktop/Learn_new_things/AI LEARN/duc-portfolio"
```

## Step 3 — Run the publish command

Copy-paste this line, press Enter:

```
npm run publish
```

## Step 4 — Read the result

- **`Pushed. Site will update in ~1-2 min.`** → Success. The new article is going live.
- **`No new posts — nothing to publish.`** → Nothing new was found. Make sure the
  post is actually published on Substack, then run Step 3 again.

## Step 5 — Verify (optional, ~2 min later)

Open <https://stillhereduc.com/writing>, hard-refresh with `Cmd + Shift + R`.
The new article should be at the top.

---

## Good to know

- **Order matters:** publish on Substack *first*, then run `npm run publish`.
  It reads from the live Substack feed.
- **Safe to run anytime:** if nothing is new, it does nothing. Running it twice
  cannot break anything.
- **Old articles are safe:** every article stays on the site permanently — the
  command only ever adds posts, never removes them.

## Why it's a manual command (not automatic)

Substack sits behind Cloudflare bot protection that blocks automated servers
(GitHub Actions, free proxies) with a 403. Your own Mac's home IP is not
blocked, so running it locally is the only reliable method. This is a
deliberate, reliable choice — no flaky automation to babysit.
