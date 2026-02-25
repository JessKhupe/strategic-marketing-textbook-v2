---
title: Chapter 6: Customer Analytics
description: RFM, cohort analysis, funnel optimization, and predictive behavioral analytics.
---

# Chapter 6: Customer Analytics

!!! note "Bloom's Level & Duration"
    **Bloom's Level:** Analyze, Evaluate  
    **Duration:** 2–3 weeks

## Summary

This chapter teaches students the quantitative frameworks for understanding customer behavior. Topics span RFM segmentation, cohort analysis, funnel optimization, churn prediction, and lifetime value modeling. Students learn both the math and the business interpretation.

## Learning Objectives

1. Compute and interpret RFM segments; design targeted campaigns per segment.  
2. Run cohort analyses to isolate causal effects of marketing interventions.  
3. Build and optimize conversion funnels; diagnose drop-off drivers.  
4. Build predictive models (CLV, churn, next purchase) and act on them.

## Core Concepts

### RFM Segmentation

**Recency:** How long since last purchase? Recent = more engaged.  
**Frequency:** How many purchases in a period? High freq = loyal.  
**Monetary:** Total or average order value? High value = priority.

Segments (e.g., 5x5x5 grid):
- **Champions:** Recent, frequent, high value → VIP retention, cross-sell.  
- **At-Risk:** Was frequent but hasn't bought recently → win-back campaign.  
- **New Customers:** Just purchased → nurture, early churn prevention.  
- **Lost:** Long time since purchase → remarketing or churn acceptance.

### Cohort Analysis

**Cohort:** Group of customers acquired/active in same time period (cohort = "Jan 2024 sign-ups," etc.).

**Metrics:**
- Retention rate by cohort: % of Jan cohort still active in Feb, Mar, etc.  
- Month-N retention: "X% of our users remain active N months after signup."  
- Helps isolate true retention vs. seasonality.

**Use Case:** Compare retention of users acquired via paid ads vs. organic. If paid cohort has lower retention, it signals quality issue (higher CPA unmatched by quality).

### Funnel Analysis

**Conversion funnel:** Awareness → Consideration → Purchase → Retention.

**Metrics:**
- Drop-off rate per step: % loss from step N to N+1.  
- Conversion rate: final purchase / initial visit.  
- Time-to-convert: median days from first touch to purchase.

**Optimization:**
- Identify step with largest drop-off; investigate UX, messaging, or targeting issues.  
- Run A/B tests on suspected pain points.  
- Mobile vs. desktop funnels often differ; optimize separately.

### Predictive Analytics

**Customer Lifetime Value (CLV):**
- Total revenue customer will generate over lifetime.  
- Simple: CLV = ARPU × (1 / churn rate).  
- Advanced: Probabilistic models (BG/NBD, Gamma-Gamma) using purchase history.  
- Use for budget allocation: higher CLV segments get more marketing spend.

**Churn Prediction:**
- Binary classification: will customer churn in next 30/90 days?  
- Features: RFM, purchase frequency trend, customer support interactions, product engagement.  
- Use for churn prevention: proactive outreach, retention offers.

**Next Purchase Prediction:**
- When will customer buy next?  
- Survival analysis (time-to-event) or direct regression.  
- Use for optimal email timing, dynamic discounts.

## Frameworks

| Framework | Purpose | Example |
|---|---|---|
| **Retention Curve & Cohort Stacking** | Visualize retention over time; spot seasonality vs. true decay | "Holiday cohorts retain better" vs. "All cohorts follow same decay" |
| **Funnel Visualization** | Identify bottleneck steps | "Add-to-cart → Checkout has 60% drop; investigate payment friction" |
| **Segmentation by Value & Risk** | Prioritize marketing actions | "High CLV at-risk segment" gets urgent retention messaging |
| **Incrementality Testing** | Measure true impact of campaign beyond correlation | Randomized holdout group to isolate causal effect |

## Tools & Platforms

| Tool | Purpose | Notes |
|---|---|---|
| **SQL / dbt** | Data transformation for analytics | Build RFM tables, cohort queries from raw event data |
| **Amplitude / Mixpanel** | Behavioral analytics platform | Pre-built cohort, funnel, retention dashboards |
| **Tableau / Looker** | Data visualization & dashboarding | Self-service BI for marketing teams |
| **Python (pandas, scikit-learn)** | Custom modeling & analysis | CLV, churn prediction, advanced statistics |
| **Experimentation Platform** | A/B testing & holdout groups | Optimizely, VWO for funnel optimization |

## Practical Workflows

### RFM-Based Campaign Design

```
Segment customers by RFM scores  
  ↓  
Champions: exclusive early access, loyalty program  
At-Risk: win-back email sequence + discount  
Lost: remarketing ads with new product benefit  
New: 7-day nurture sequence to drive 2nd purchase
```

### Cohort Analysis for Product Launch

```
Launch feature in Week 1; cohorts 1–4 have it; cohorts 5+ don't  
  ↓  
Measure retention/engagement for both groups over 12 weeks  
  ↓  
Cohort 1–4 (feature) → higher retention = feature working ✓  
  ↓  
Roll out feature to all users; update models for new baseline
```

## Ethical Checkpoints

!!! warning "Analytics Ethics"
    - **Correlation ≠ Causation:** Just because at-risk segment has low engagement doesn't mean sending promo will help. Use experimentation to verify.  
    - **Selection Bias:** High-value customers may be high-value because of better treatment (not inherent: "chicken and egg"). Randomize treatment to separate.  
    - **Privacy:** Don't use sensitive features (age, health status, ethnicity) for targeting unless explicit consent.  
    - **Transparency:** Share cohort/segment definitions with stakeholders; allow nontechnical review.  
    - **Fairness:** Ensure retention budget allocation doesn't systematically exclude groups (e.g., lower-income segments).

## MicroSim: The Analytics Lab

An interactive tool where students:
1. Load a sample customer transaction dataset (×1000s of customers, ×months).  
2. Compute and visualize RFM segments.  
3. Run cohort analysis: compare retention curves of different acquisition cohorts.  
4. Build a retention funnel; identify drop-off steps.  
5. Train a CLV or churn prediction model; view feature importance.  
6. Design a segmented campaign strategy based on insights.  
7. Simulate campaign results and measure ROI.  
8. Export dashboard & insights deck.

## Case Studies

**Spotify:**  
- RFM-based "At-Risk" listeners targeted with discovery playlists.  
- Cohort analysis revealed new users who skip >50% of songs churn faster.  
- Improved recommendation accuracy for new users → lower new-user churn.

**Shopify:**  
- Cohort analysis showed merchants onboarded with personal setup support had 3x higher 6-month retention.  
- Scaled support program; now a product differentiator.

**The Athletic (Sports News Subscription):**  
- Used CLV models to decide geographic expansion order.  
- High CLV markets warrant larger marketing investment.  
- Churn predictions triggered early renewal discounts for at-risk users.

---

**Key Takeaway:** Customer analytics transforms raw data into actionable segments. Combine descriptive analysis (RFM, cohorts) with predictive models to optimize lifetime value and retention. Always validate causality through experimentation.

Proceed to [Chapter 7: Attribution & Performance Marketing](#chapter-7).
