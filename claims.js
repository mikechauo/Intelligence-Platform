const claims = [
  {
    id: "monthly_transaction_volume",
    value: 4200,
    unit: "transactions_per_month",
    asserted_by: "client",
    speaker: "Aaron",
    organization: "Aaron Logistics",
    channel: "video_call",
    timestamp: "2026-04-13T14:22:00Z",
    confidence: 0.82,
    source: {
      type: "transcript",
      ref: "call_v1",
      excerpt: "We process about forty-two hundred transactions a month."
    }
  },
  {
    id: "monthly_transaction_volume",
    value: 2000,
    unit: "transactions_per_month",
    asserted_by: "client",
    speaker: "Tina",
    organization: "Aaron Logistics",
    channel: "email",
    timestamp: "2026-04-20T09:41:00Z",
    confidence: 0.76,
    source: {
      type: "email",
      ref: "email_v3",
      excerpt: "Our volume is closer to 2,000 transactions per month."
    }
  },
  {
    id: "settlement_speed",
    value: "same_day",
    asserted_by: "client",
    speaker: "Tina",
    organization: "Aaron Logistics",
    channel: "email",
    timestamp: "2026-04-20T09:43:00Z",
    confidence: 0.81,
    source: {
      type: "email",
      ref: "email_v3",
      excerpt: "We require same-day settlement."
    }
  }
];

export default claims;
