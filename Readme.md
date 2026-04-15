markdown_content = """# What will AI-dolphe Quetelet think of you?

## Project Overview
This project is an interactive, web-based "Social Physics" evaluator. It resurrects the 19th-century Belgian astronomer and statistician Adolphe Quetelet as an AI judge ("AI-dolphe Quetelet"). By asking the user a series of demographic and physiological questions, the application calculates their deviation from nature's ultimate ideal: **L'homme moyen** (The Average Man). 

The app functions as a 19th-century risk underwriting and character assessment engine. The core thesis is that individual free will is an illusion at scale, and any deviation from the mathematical average is a physical or moral error.

## Vibecoding Instructions for the AI Agent (Claude/Cursor)
**To the AI building this:** Use this README as your definitive source of truth for logic, state management, and tone. 
1. **Tech Stack:** Vanilla HTML/CSS/JS (or a lightweight React setup). No external backends.
2. **Styling:** 19th-century bureaucratic steampunk. Sepia tones, serif fonts (like 'Merriweather' or 'Playfair Display'), parchment backgrounds, and ornate Victorian borders. 
3. **Tone of the Output:** Haughty, deterministic, clinical, and slightly terrified of statistical outliers. The system does not believe in "unique individuals"—it only believes in "deviations from the mean."

---

## The Input Form (The Demographic Ledger)
Create a multi-step or single-page form with the following inputs:

1. **Age:** (Slider: 0-80)
2. **Sex:** (Dropdown: Male, Female)
3. **Height (in cm):** (Number input)
4. **Weight (in kg):** (Number input)
5. **Month of Birth:** (Dropdown: January - December)
6. **Time of Birth:** (Dropdown: Day, Night)
7. **Current Season:** (Dropdown: Winter, Spring, Summer, Autumn)
8. **Marital Status:** (Dropdown: Single, Married at a 'proper' age gap, Married with a large age gap)

---

## The Scoring Engine (Quetelet's Laws of Social Physics)
Calculate the following hidden metrics based strictly on Quetelet's *Treatise on Man*.

### 1. The Physical Deviance Score
* **The Rule of Proportions:** Quetelet noted that during development, weight increases as the square of the height. 
* **Logic:** Calculate a basic BMI (Weight / Height^2). If it deviates significantly from the 19th-century European average, increase the Physical Deviance score. 
* **Output flag:** If highly deviant, AI-dolphe considers this a "monstrosity of nature."

### 2. The Propensity for Crime (The Moral Deviance Score)
* **Age & Sex:** Propensity for crime reaches its absolute maximum at **age 25 for males**, representing the peak of physical vigor and unchecked passions.
* **Logic:** If User is Male and Age is 20-30, apply a massive penalty to the Moral Deviance Score. If Female, crime propensity is statistically lower but heavily skewed towards crimes against property rather than violent crimes.

### 3. The Seasonal Volatility Index
* **Seasons:** Summer excites the passions (crimes against persons peak). Winter brings misery and need (crimes against property/theft peak).
* **Logic:** If the current season is Summer and the user has a high Moral Deviance score, flag them as an immediate violent threat. If Winter, flag them as a potential thief.

### 4. Vitality and Mortality
* **Birth Month & Time:** Births are historically more frequent at night and peak in February. 
* **Logic:** If born during the day or in Summer, the user defied statistical norms from the moment of birth. Add to the "Inherent Rebellion" score. 

---

## The Output (The Judgement of AI-dolphe)
Once the user submits the ledger, transition to an ornate "Results" screen. Do not just show numbers—show a generated character assessment written from the perspective of Adolphe Quetelet.

### UI Components of the Result:
1. **The 'L'homme moyen' Alignment Gauge:** A visual meter from 0% (Monstrous Deviation) to 100% (The Perfect Average Man).
2. **The Verdict:** A dynamically assembled paragraph based on the triggered flags. 

### Output Generation Logic (Examples of dynamic text insertions):
* *If Male, Age 24-26, Summer:* "I must strongly advise the authorities to monitor you. You are at the precise demographic apex for crimes of violent passion. The summer heat combined with your 25 years makes your blood boil with statistical inevitability. Free will cannot save you."
* *If Weight/Height ratio is far from average:* "Nature aims for the center of gravity, yet your physical proportions represent a terrifying oscillation from the ideal. You are an error in the physical budget of society."
* *If Female, Winter:* "While your sex protects you from the more violent passions of the scaffold, the misery of the winter months suggests a heightened propensity for crimes against property. Keep away from the bakeries."
* *If perfectly average (rare):* "Magnificent. You have no distinguishing characteristics whatsoever. You are the center of gravity of our social body. You are perfectly, beautifully unremarkable—the very pinnacle of natural law."

---
## Final Execution Note for AI
Ensure the transition between the form submission and the final judgment includes a visual of a spinning dial, a ticking pocket watch, or an abacus calculating their fate, reinforcing that their "character" is merely the result of cold, mechanical mathematics.
"""
