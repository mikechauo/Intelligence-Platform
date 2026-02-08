const discoveryTranscript = `
Alex (Sales – NovaPay):
Alright, Sam — thanks for taking the time today. Before we dive in, just to confirm, my understanding is Brightline is looking to switch or add a new payments provider primarily to support higher transaction volume and more automation on the ops side. Is that roughly right?

Sam (CTO – Brightline):
Yeah, that’s fair. We’ve outgrown our current setup. It worked when we were smaller, but now payments are kind of… everywhere. Finance, ops, customer support — everyone touches it, and that’s starting to hurt us.

Alex:
Got it. When you say “outgrown,” what’s the pressure point? Volume, reconciliation, risk, something else?

Sam:
A mix. Volume for sure — we’re doing around 18 to 22 million a month right now, depending on seasonality. But honestly, the bigger issue is fragmentation. Sales tells customers one thing, finance discovers something else later, and then engineering gets pulled in to explain why something isn’t technically possible.

Alex:
That’s… extremely familiar. What kind of transactions are we talking about? Card-present, card-not-present, recurring?

Sam:
Mostly card-not-present. We do logistics services for mid-sized retailers. They get invoiced weekly, sometimes daily. Some want automatic charges, some want manual approval before each payment. It’s messy.

Alex:
And average ticket size?

Sam:
Anywhere from $400 up to $30,000. That’s actually been a sticking point with our current processor — they get nervous with the higher-value charges.

Alex:
Makes sense. Are you operating in the US only, or cross-border?

Sam:
Primarily US and Canada. We’re piloting a few EU customers, but that’s not meaningful volume yet.

Alex:
Okay. Let’s talk tech for a second. What does your current stack look like?

Sam:
Core platform is custom — Node backend, React frontend. Payments are bolted on via a legacy gateway we’ve had forever. Webhooks are unreliable, documentation is outdated, and half the logic lives in spreadsheets owned by finance.

Alex:
I hear the pain already. Ideally, what does “better” look like for you?

Sam:
Single source of truth. If sales promises same-day settlement, that should already be validated against underwriting rules and our actual account configuration. Right now, that promise is made… and discovered to be impossible later.

Alex:
Right. And just to be clear — NovaPay doesn’t currently offer true same-day settlement for high-risk MCCs. Standard is T+1 or T+2 depending on volume and chargeback ratios.

Sam:
That’s fine. Honestly, predictability is more important than speed.

Alex:
Good answer 😄
On the compliance side — how involved is your legal team today?

Sam:
Very. We deal with PCI, obviously. We also have internal risk thresholds we enforce, but sales isn’t always aware of them. That causes friction.

Alex:
So sales might push through a merchant that technically violates internal policy?

Sam:
Exactly. And then underwriting kicks it back two weeks later. Everyone’s mad.

Alex:
Understood. If you don’t mind me asking — how long does it currently take from signed contract to first successful transaction?

Sam:
Best case? Two weeks. Worst case? Two months. Integrations alone can take 20–30 engineering hours per merchant.

Alex:
Okay, that’s actually a big opportunity area for us. NovaPay pre-validates technical requirements during discovery so integration teams don’t get surprised later.

Sam:
That would be huge. But I’m skeptical — we’ve heard that before.

Alex:
Fair. Let me ask you this: when sales is on a call like this today, where does this information live afterward?

Sam:
Honestly? Call recording, some notes in CRM, maybe a Slack thread. No one ever sees the full picture.

Alex:
Right. So imagine if everything you just told me — volumes, assumptions, constraints — was automatically extracted, validated, and compared against your underwriting rules before the deal moved forward.

Sam:
That would eliminate a lot of internal arguing.

Alex:
That’s the goal. One last question — are there any upcoming product launches or volume spikes we should be aware of?

Sam:
Q3 will be big. We’re onboarding two national retailers. If payments break, it’s… bad.

Alex:
Got it. Then we should definitely model those scenarios early.
`;

export default discoveryTranscript;
