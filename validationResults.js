const validationResults = {
  overall_deal_health: "Medium Risk",

  checks: [
    {
      category: "Settlement Model",
      status: "Aligned",
      message: "Predictable settlement matches platform capabilities."
    },
    {
      category: "Transaction Size",
      status: "Warning",
      message: "High-ticket transactions may trigger enhanced underwriting."
    },
    {
      category: "Sales vs Risk Policy",
      status: "Conflict",
      message: "Sales commitments exceed documented risk thresholds."
    },
    {
      category: "Technical Readiness",
      status: "Aligned",
      message: "Node/React stack fully supported."
    }
  ]
};

export default validationResults;
