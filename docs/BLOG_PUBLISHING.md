# Blog publishing guide

The blog lives at `https://www.legacywealthadvisory.ca/blog`. Each article is one
Markdown file in `content/blog/`. No code changes are needed to add, edit or remove an article.

## Add an article

1. Copy `content/blog/_TEMPLATE.md` to `content/blog/<slug>.md`.
   The file name becomes the URL, for example `rrsp-contribution-room-canada-2026.md`
   becomes `/blog/rrsp-contribution-room-canada-2026`. Use lowercase letters, numbers and hyphens.
2. Fill in the fields at the top (all are required except `image`, `imageAlt` and `updated`).
3. Write the article below the `---` line using Markdown (`##` for headings, `-` for lists).
4. Keep `status: draft` until the article has passed fact-checking and compliance review.
5. Commit to a new branch, open a pull request, and check the Vercel preview link.
6. When approved, set `status: published` and merge into `master`.

## Scheduled (daily) publishing

An article is shown only when **both** are true:

- `status` is `published`, and
- its `date` has arrived in Toronto time.

So you can merge a week of approved articles at once, each with its own date, and one will appear
each day on its own. The blog listing, article pages and sitemap refresh at least once an hour,
so a scheduled article appears within about an hour after midnight on its date. No cron job,
deploy hook or secret is needed for this on Vercel.

## Edit an article

Change the file, add `updated: YYYY-MM-DD`, and open a pull request as above.

## Unpublish an article

Set `status: draft` (or delete the file) and merge. The page will return "Article not found"
and drop out of the sitemap at the next hourly refresh.

## Images

Optional. Put the image in `public/images/blog/` and set `image: /images/blog/<file>` and a
descriptive `imageAlt`. Articles without an image show the Legacy Wealth Advisory logo card.

## Compliance checklist before publishing

- Figures (contribution limits, thresholds, deadlines) checked against CRA / Government of Canada sources
- No personalized recommendations or guarantees of investment or insurance outcomes
- Educational explanation clearly separated from advice (the standard disclaimer is added to every article automatically)
- Review existing articles each January for limits and thresholds that change yearly
