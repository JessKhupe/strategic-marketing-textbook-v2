---
title: Chapter 9: Ethical AI in Marketing
description: Responsible AI principles, bias detection and mitigation, transparency, consent, and regulatory compliance in marketing.
---

# Chapter 9: Ethical AI in Marketing

!!! note "Bloom's Level & Duration"
    **Bloom's Level:** Analyze, Evaluate  
    **Duration:** 2–3 weeks

## Summary

This chapter embeds ethics into all marketing AI decisions. Topics include fairness definitions, bias detection, explainability, consent frameworks, regulatory compliance (GDPR, CCPA), and organizational governance. Students learn that ethical AI is not optional but foundational to trust and long-term brand value.

## Learning Objectives

1. Audit AI marketing systems for demographic bias and fairness issues.  
2. Implement bias mitigation strategies (data balancing, fairness constraints, threshold adjustment).  
3. Design explainability workflows using SHAP, LIME, model cards.  
4. Build consent and governance workflows meeting GDPR/CCPA requirements.

## Core Concepts

### Fairness Definitions

**Fairness:** No single definition. Context-dependent.

**Key Dimensions:**
- **Demographic Parity:** Model should have equal positive prediction rate across demographic groups (not always desired).  
- **Equal Opportunity:** Model gives equal chance of positive outcome if real outcome would be positive (FPR or FNR equal across groups).  
- **Equalized Odds:** Both TPR and FNR equal across groups (strict; hard to achieve).  
- **Calibration:** Model confidence should be calibrated; if 50% confidence, should be positive 50% of the time (across all groups).

**Classic Tensions:**
- Maximizing accuracy vs. fairness: sometimes fairness requires accepting lower overall accuracy.  
- Individual fairness vs. group fairness: treating similar individuals similarly may conflict with equal group outcomes.

### Bias Sources

**Data Bias:**  
- Training data reflects historical inequities (e.g., past hiring data biased against women).  
- Solution: audit data for representativeness; use stratified sampling; reweight minority groups.

**Algorithmic Bias:**  
- Model learns spurious patterns that correlate with demographic attributes.  
- Solution: remove protected attributes; use fairness constraints; regularize.

**Measurement Bias:**  
- Target variable is biased proxy (e.g., "historical churn" affected by treatment bias).  
- Solution: collect unbiased g- Solution: collect unbiased g- Solution: collect unbiased g- Solution: collect unbiasar- Solution: collect unbiased g- Solution: collect unbiased g- Solution: collect unbiased g- Solution: collect unbiasar- Solution: odel- Solution: ctify bias- Solution: collect unbiased g- Solution: collect unbiased g- Solution: colechniques:**
- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ca- **Model Ce c- **Model Ca- *eac- **Model Ca-prediction for individual and aggregate.  
- **LIME:** Approximate local decision boundary with simple interpretable model.  
- **Attention Visualization:** For neural networks, show which inputs inf- **Attention Visualiz# - **Attention Visualization:** For neural networks, show which inputs inf- *it - **Attention Visualization:** For neural networks, show which inputs inf- **e disparate impact ratio fo- **Attention Visualization:** For neural networks, show which inputs inf- **Attention Vght; approval for high-risk deployments | Board reviews high-stakes models (pricing, credit decisions) |
| **Consent & Transparency Tree** | Document data use, derived inferences, user choices | "Infer gender from purchase history for personalization — users can opt-out" |
| **Bias Mitigation Strategy Matrix** | Choose mitigation: pre-processing (data), in-processing (model), post-processing (threshold) | Pre-process if data bias; in-process if algorithmic; post-process if error rate disparity |

## Tools & Platforms

| Tool | Purpose | Notes |
|---|---|---|
| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re|fin| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| ti| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Re| *e)| **Re| **Re| **Re| **Re| **Re| **Re| **Re| **Rate| **Re| **Re| **Re|0.9) often problematic.

### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Root Ca### Step 3: Ro't dismiss or delay).  
    - **Hidden Costs:** Fairness mitigations often reduce accuracy or deploy complexity. Be transparent on tradeoffs with stakeholders.  
    - **Scope Creep:** Don't use AI for decisions it wasn't designed for (e.g., risk scoring model repurposed for hiring without validation).

## MicroSim: The Fairness Audit Lab

An interactive tool where students:
1. Load a dataset with demographic attributes and target (e.g., conversion).  
2. Train a classification model.  
3. Audit for bias: compute metrics by group (TPR, FPR, precision, calibration).  
4. Visualize disparate impact.  
5. Try mitigation strategies: reweight data, adjust thresholds, add fairness constraints.  
6. Measure tradeoffs: accuracy, fairness metrics, interpretability.  
7. Generate model card and fairness report.  
8. Document decisions for governance review.

## Case Studies

**Amazon Recruiting AI:**  
- Algorithm trained on historical hiring data (company skewed male in tech).  
- Model learned to penalize resumes with "- Model learned to  
- Model learned to penalize resumes with "- Model learned to  
ale in tech).  
nstraints.  
 model repurposed for hiring without validatppeared to offer lower limits to women than men.  
- Explanations lacked transparency; regulators investigated.  
- Prompted discussion on algori- Prompted discussion on algori- Prvi- Prompted discussion on algori- Ping algorithm showed job ads differently by gender (e.g., STEM ads more to men).  
- LinkedIn restricted targeting to reduce discrimination.  
- Now audits continuously for disparate impact.

---

**Key Takeaway:** Ethical AI is not a compliance checkbox—it's a competitive advantage. Companies that audit, mitigate, and transparently disclose bias build user trust. Invest in fairness as an ongoing practice, not a one-time audit.

Proceed to [Chapter 10: Accessibility & Inclusive Marketing](#chapter-10).
