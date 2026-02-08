const extractedJson = {
  deal_metadata: {
    prospect_company: "Brightline Logistics",
    industry: "Logistics / B2B Services",
    primary_contacts: [
      {
        name: "Sam",
        role: "CTO / Head of Operations"
      }
    ],
    sales_rep: "Alex",
    deal_stage: "Discovery",
    geography: ["United States", "Canada"],
    call_duration_minutes: 45
  },

  merchant_profile: {
    business_model: "B2B logistics services with invoiced payments",
    monthly_processing_volume_usd: {
      min: 18000000,
      max: 22000000
    },
    average_ticket_size_usd: {
      min: 400,
      max: 30000
    },
    seasonality: true,
    cross_border: {
      enabled: true,
      regions: ["Canada"],
      future_regions: ["EU"]
    }
  },

  technical_capabilities: {
    backend: "Node.js",
    frontend: "React",
    payments_integration: "Legacy gateway",
    webhook_reliability: "Low",
    documentation_quality: "Outdated",
    current_integration_effort_hours: {
      min: 20,
      max: 30
    },
    desired_state: "Single source of truth for payments and compliance"
  },

  sales_commitments: {
    settlement_expectations: "Predictable settlement preferred over speed",
    same_day_settlement_discussed: true,
    same_day_settlement_promised: false,
    integration_simplicity: "Expected improvement over current provider"
  },

  compliance_and_risk: {
    pci_compliance: true,
    internal_risk_thresholds: true,
    sales_awareness_of_risk_policies: "Low",
    high_value_transactions: true,
    chargeback_sensitivity: "Medium"
  },

  operational_pain_points: [
    "Sales promises not aligned with underwriting rules",
    "Fragmented internal communication",
    "Delayed underwriting feedback",
    "Long integration timelines",
    "Engineering pulled into late-stage surprises"
  ],

  growth_indicators: {
    upcoming_volume_spike: "Q3",
    national_retailers_onboarding: 2,
    business_criticality: "High"
  },

  implicit_assumptions: [
    "Sales teams will continue to make technical promises without validation",
    "Higher volume will increase underwriting scrutiny",
    "Existing risk controls are enforced manually"
  ],

  open_questions: [
    "Exact MCC classification",
    "Chargeback ratios over last 12 months",
    "EU regulatory readiness",
    "Preferred settlement cadence by merchant segment"
  ]
};

export default extractedJson;
