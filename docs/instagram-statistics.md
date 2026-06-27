# Instagram statistics tracker

Account: [@romeo_freediving](https://instagram.com/romeo_freediving)  
Source: Zernio CLI/API integration  
Zernio account ID: `6a3fe26a9d9472faae0433df`  
Zernio profile ID: `6a3fe1a3b1412cff6ef5da7c`

Use this file as the weekly source of truth for account health, content performance, and what to change in the next reels.

## Current status

Last checked: 2026-06-27 16:11 UTC

| Item | Status |
| --- | --- |
| Instagram account | Connected |
| Username | `romeo_freediving` |
| Display name | `Подводная съёмка Шарм-Эль-Шэйх, Дахаб` |
| Account type | Business |
| Followers | 624 |
| Connected permissions | `instagram_business_basic`, `instagram_business_content_publish`, `instagram_business_manage_insights`, `instagram_business_manage_comments`, `instagram_business_manage_messages` |
| Token expires | 2026-08-26 14:47 UTC |
| Analytics access | Available |
| Post analytics | No posts synced yet in Zernio |
| Daily analytics | No daily rows returned yet |
| Data delay | Instagram data may lag by up to 48 hours |

## Weekly snapshots

### 2026-06-20 to 2026-06-27

Captured: 2026-06-27 16:11 UTC

| Metric | Value |
| --- | ---: |
| Reach | 142 |
| Views | 23,414 |
| Accounts engaged | 1,476 |
| Total interactions | 1,872 |
| Followers | 624 |

Notes:
- This is the first baseline snapshot after connecting Zernio.
- Zernio currently returns account-level Instagram insights, but no synced post rows for this date range.
- Best-time data is very thin: Thursday 14:00 shows avg engagement 51 from 1 post; Thursday 20:00 shows avg engagement 45 from 1 post. Treat this as a weak signal until we have more posts.

## Content log

Add one row per reel/post after publishing. The goal is to connect creative choices with performance, not just collect numbers.

| Date | Post | Format | Hook / idea | Visual style | Publish time | Views | Reach | Interactions | Saves | Shares | Comments | Follows | Notes |
| --- | --- | --- | --- | --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| 2026-06-27 | Baseline | Account snapshot | Initial Zernio connection | n/a | n/a | 23,414 | 142 | 1,872 | n/a | n/a | n/a | n/a | Account-level data only |

## Creative hypotheses

Track these as simple experiments. Keep the winning ideas and retire weak ones.

| Hypothesis | How to test | Success signal | Status |
| --- | --- | --- | --- |
| Smooth cinematic reels perform better than technical/slideshow edits | Compare blurred crossfade/Ken Burns reel against a more technical caption-heavy reel | Higher watch-through proxy: views, interactions, saves, shares | Active |
| Strong first underwater shot beats title-first openings | Publish one reel with immediate underwater action and one with title card first | Higher views and interactions in first 48 hours | Backlog |
| Destination-specific captions bring more inquiries | Mention Sharm / Dahab / dolphin tour context in caption and CTA | More profile visits, DMs, comments | Backlog |

## Weekly review checklist

Run this once a week, ideally on the same weekday and time.

- Capture account-level metrics for the last 7 days.
- Capture follower count and token/account health.
- Pull post analytics sorted by engagement.
- Add rows for every published reel/post.
- Mark 1-3 creative lessons from the week.
- Decide one edit/caption experiment for the next batch.

## Zernio commands

Use these commands from the repository root. Do not commit API keys or raw secrets.

```bash
zernio accounts:list --pretty
zernio accounts:health --pretty

zernio analytics:get-instagram-account-insights \
  --accountId 6a3fe26a9d9472faae0433df \
  --since YYYY-MM-DD \
  --until YYYY-MM-DD \
  --pretty

zernio analytics:posts \
  --profileId 6a3fe1a3b1412cff6ef5da7c \
  --platform instagram \
  --from YYYY-MM-DD \
  --to YYYY-MM-DD \
  --sortBy engagement \
  --order desc \
  --limit 50 \
  --pretty

zernio analytics:daily \
  --profileId 6a3fe1a3b1412cff6ef5da7c \
  --platform instagram \
  --from YYYY-MM-DD \
  --to YYYY-MM-DD \
  --pretty

zernio analytics:best-time \
  --profileId 6a3fe1a3b1412cff6ef5da7c \
  --platform instagram \
  --pretty
```

## Ads tracking

Organic Instagram insights are available now. Ads reporting still needs a working connected Meta/Facebook ads account in Zernio before we can track campaigns, ad sets, spend, leads, or boosted posts here.

When ads are connected, add:

| Date range | Campaign | Spend | Impressions | Reach | CTR | CPC | Leads | Cost per lead | Notes |
| --- | --- | ---: | ---: | ---: | ---: | ---: | ---: | ---: | --- |
