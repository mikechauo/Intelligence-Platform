import discoveryTranscript from "../../intelligence-demo/mockData/discoveryTranscript";
import extractedJson from "../../intelligence-demo/mockData/extractedJson";
import validationResults from "../../intelligence-demo/mockData/validationResults";
import claims from "../../intelligence-demo/mockData/claims";
import { generateApplicationBlueprint } from "./applicationBlueprint";


function groupClaimsById(claims) {
  return claims.reduce((acc, claim) => {
    if (!acc[claim.id]) acc[claim.id] = [];
    acc[claim.id].push(claim);
    return acc;
  }, {});
}

function detectConflicts(groupedClaims) {
  const conflicts = [];

  Object.entries(groupedClaims).forEach(([claimId, claims]) => {
    const uniqueValues = new Set(claims.map(c => c.value));

    if (uniqueValues.size > 1) {
      conflicts.push({
        claim_id: claimId,
        values: Array.from(uniqueValues),
        claims,
        status: "unresolved"
      });
    }
  });

  return conflicts;
}

export async function GET() {
  const groupedClaims = groupClaimsById(claims);
  const conflicts = detectConflicts(groupedClaims);
  const tasks = generateTasksFromConflicts(conflicts);

  const applicationBlueprint = generateApplicationBlueprint({
    extracted: extractedJson,
    claims,
    conflicts,
    validation: validationResults
  });

  return Response.json({
    transcript: discoveryTranscript,
    extracted: extractedJson,
    claims,
    groupedClaims,
    conflicts,
    tasks,
    applicationBlueprint,
    validation: validationResults
  });
}


function generateTasksFromConflicts(conflicts) {
  return conflicts.map((conflict, index) => ({
    task_id: `confirm_${conflict.claim_id}_${index}`,
    type: "confirmation_required",
    status: "open",
    assigned_to: "sales",
    title: `Please confirm ${conflict.claim_id}`,
    description: `Multiple values detected for ${conflict.claim_id}: ${conflict.values.join(
      " vs "
    )}`,
    related_claim_id: conflict.claim_id,
    evidence: conflict.claims.map(c => c.source.ref)
  }));
}









