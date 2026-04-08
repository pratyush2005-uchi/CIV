This is a game inspired by how the scientific community acts like your enemy until you succeed, but when you succeed, they act like they were your best friends all along. This particular game will be played from the perspective of Stephen Wolframs as he defends his theory-of-everything.

Here is the complete 5-stage game tree, including mechanics, player logic, enemy logic, and win/loss states, ready to be pasted directly into your AI coding tool.

Core Game Mechanics & Logic
Player Health Bars:

Sanity (Max 100): Represents mental health. If it hits 0, you lose.

Funding (Max 100): Represents resources. If it hits 0, you lose.

Player Variables:

Evidence Multiplier (Starts at 1x): Builds up when you do research. Multiplies the damage of your attacks. Resets to 1x after you land a successful "Publish/Defend" attack.

Universal Player Move Set:

Theorize (Compute Automata): +1.5x to Evidence Multiplier. Cost: -10 Sanity. (You stay up late running simulations).

Present/Publish (Attack): Deals 20 Damage * Evidence Multiplier to Enemy Dogma. Cost: -15 Funding. (Submitting papers and traveling to conferences costs money).

Write Grant Proposal: Restores +30 Funding. Cost: -15 Sanity. (Soul-crushing paperwork).

Touch Grass: Restores +30 Sanity. Cost: -10 Funding. (Taking a mental health day).

Losing Conditions (Game Over Screens):

If Sanity = 0: "Burnout." The screen turns gray. Text: "You abandoned the discrete universe theory, took a job in management consulting, and now optimize ad-click revenues for a tech monopoly."

If Funding = 0: "Defunded." Text: "Your lab was shut down. You now post 100-page theoretical manifestos on Reddit that get downvoted to oblivion."

The 5-Stage Game Tree
Stage 1: Early Ideas & Seeking Support
Enemy: The Apathetic Department Chair

Enemy HP (Dogma): 50

Context: You are trying to explain that the universe is a cellular automaton, not a continuous equation. The Chair just wants you to publish something normal so the department ranking goes up.

Enemy Move Set (RNG based):

Scoff: "This sounds like science fiction." (-15 Sanity)

Deny Lab Space: "We need this room for string theorists." (-20 Funding)

Suggest 'Safer' Topic: "Just do standard quantum mechanics." (Reduces your Evidence Multiplier by 0.5x)

Stage 2: First Draft & Looking for Assistants
Enemy: The Cynical Grad Students

Enemy HP (Dogma): 80

Context: You need a team to write the code for your simulations, but the grad students are terrified that working on your fringe theory will ruin their careers.

Enemy Move Set:

Ghost Meeting: They just don't show up. (-20 Sanity)

Demand First Authorship: "I'll code it, but I want my name first." (-25 Funding, as you have to pay them more to compromise).

Find a Math Error: "Wait, rule 30 doesn't do that..." (Resets your Evidence Multiplier to 1x).

Stage 3: Finished Paper & Publishing
Enemy: Reviewer #2 (The anonymous gatekeeper)

Enemy HP (Dogma): 120

Context: You submitted to Nature. Reviewer #1 liked it. Reviewer #2 has decided to make it their life's mission to destroy you.

Enemy Move Set:

Reject Without Reading: "Fundamentally flawed premise." (-30 Sanity)

Demand 10 More Citations: "The author fails to cite my completely unrelated work." (-20 Funding to run more tests).

Moving the Goalposts: Heals Reviewer #2 for +30 HP.

Stage 4: Defense in Front of the Scientific Community
Enemy: The Tenured Traditionalist (The Final Boss)

Enemy HP (Dogma): 200

Context: You are on stage at the biggest physics conference of the decade. The establishment is trying to publicly dismantle your theory to protect the status quo.

Enemy Move Set (High Damage):

Cite 40-Year-Old Paradigm: "As we've known since the 1980s..." (Massive +50 HP Heal to Enemy).

Public Humiliation: "Are you seriously suggesting continuous mathematics is a lie?" (-40 Sanity)

Threaten Tenure Track: "This will not look good for your career." (-40 Funding)

Stage 5: The Paradigm Shift (Win State)
Enemy: The Sycophantic Committee

Enemy HP: N/A (Invincible, but they don't attack).

Context: You defeated the Traditionalist. The paradigm has shifted. Suddenly, everyone is acting like they were your best friend all along.

Mechanic Shift: The battle UI remains, but the game logic changes.

Enemy Dialogue (Auto-scrolls every turn):

"My dear boy! I always knew you were a genius!"

"We were just testing your rigor, of course!"

"Let's co-author a follow-up book!"

Your New Move Set:

Accept Nobel Prize (Triggers final Confetti Screen)

Smirk (Does nothing but feels good)

Ignore Emails (Restores Sanity to 100)