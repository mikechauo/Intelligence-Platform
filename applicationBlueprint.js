export function generateApplicationBlueprint({
  extracted,
  claims,
  conflicts,
  validation
}) {
  return {
    application_id: "app_" + Math.floor(Math.random() * 100000),

    status: conflicts.length > 0 ? "draft_pending_confirmation" : "ready_for_signature",

    applicant_profile: {
      company: extracted.deal_metadata.prospect_company,
      industry: extracted.deal_metadata.industry,
      geography: extracted.deal_metadata.geography,
      primary_contacts: extracted.deal_metadata.primary_contacts || [],
      sales_rep: extracted.deal_metadata.sales_rep || "Unknown"
    },

    requested_capabilities: {
      monthly_processing_volume_usd:
        extracted.merchant_profile.monthly_processing_volume_usd,
      average_ticket_size_usd:
        extracted.merchant_profile.average_ticket_size_usd,
      cross_border:
        extracted.merchant_profile.cross_border?.enabled || false,
      settlement_expectations:
        extracted.sales_commitments?.settlement_expectations
    },

    underwriting_view: {
      overall_deal_health: validation.overall_deal_health,
      risk_flags: validation.checks
        .filter(c => c.status === "fail")
        .map(c => c.category),
      auto_approvable: conflicts.length === 0
    },

    technical_view: {
      backend: extracted.technical_capabilities.backend,
      frontend: extracted.technical_capabilities.frontend,
      integration_effort_hours:
        extracted.technical_capabilities.current_integration_effort_hours,
      known_issues: [
        extracted.technical_capabilities.documentation_quality === "Outdated"
          ? "Outdated documentation"
          : null,
        extracted.technical_capabilities.webhook_reliability === "Low"
          ? "Webhook reliability issues"
          : null
      ].filter(Boolean)
    },

    unresolved_items: conflicts.map(c => ({
      claim_id: c.claim_id,
      issue: "Conflicting values detected",
      values: c.values
    })),

    assumptions: extracted.implicit_assumptions || [],

    signature_ready: conflicts.length === 0
 



  };
}

