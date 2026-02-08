"use client";

import { useEffect, useState } from "react";

/* -----------------------------------------
   Reusable Feature Module (outside component)
------------------------------------------ */
function FeatureModule({ title, enabled, simulated, blockedReason }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: 12,
        marginBottom: 12,
        opacity: enabled ? 1 : 0.5
      }}
    >
      <strong>{title}</strong>

      {!enabled && blockedReason && (
        <div style={{ color: "red", marginTop: 4 }}>
          ❌ Disabled: {blockedReason}
        </div>
      )}

      {simulated && enabled && (
        <div style={{ color: "#856404", marginTop: 4 }}>
          🧪 Simulated for demo purposes
        </div>
      )}
    </div>
  );
}

/* -----------------------------------------
   Main Component
------------------------------------------ */
export default function AutonomousDealIntelligence() {
  const [tab, setTab] = useState("call");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api/deal-intelligence")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) {
    return <div style={{ padding: 24 }}>Loading…</div>;
  }

  return (
    <div style={{ padding: 24 }}>
      <h2>Autonomous Deal Intelligence</h2>

      {/* Tabs */}
      <div style={{ marginBottom: 16 }}>
        <button onClick={() => setTab("call")}>Discovery Call</button>
        <button onClick={() => setTab("json")} style={{ marginLeft: 8 }}>
          Extracted JSON
        </button>
        <button onClick={() => setTab("validation")} style={{ marginLeft: 8 }}>
          Validation
        </button>
        <button onClick={() => setTab("claims")} style={{ marginLeft: 8 }}>
          Claims
        </button>
        <button onClick={() => setTab("conflicts")} style={{ marginLeft: 8 }}>
          Conflicts
        </button>
        <button onClick={() => setTab("tasks")} style={{ marginLeft: 8 }}>
          Tasks
        </button>
        <button onClick={() => setTab("application")} style={{ marginLeft: 8 }}>
          Application
        </button>
      </div>

      {/* Discovery Call */}
      {tab === "call" && (
        <pre style={{ whiteSpace: "pre-wrap" }}>
          {data.transcript}
        </pre>
      )}

      {/* Extracted JSON */}
      {tab === "json" && (
        <pre style={{ background: "#f5f5f5", padding: 16 }}>
          {JSON.stringify(data.extracted, null, 2)}
        </pre>
      )}

      {/* Validation */}
      {tab === "validation" && (
        <div>
          <h3>Overall Deal Health: {data.validation.overall_deal_health}</h3>
          <ul>
            {data.validation.checks.map((check, i) => (
              <li key={i}>
                <strong>{check.status}</strong> — {check.category}
                <div>{check.message}</div>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Claims */}
      {tab === "claims" && (
        <div>
          {data.claims.map((claim, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                padding: 12,
                marginBottom: 12
              }}
            >
              <strong>{claim.id}</strong>
              <div>
                Value: <b>{claim.value}</b> {claim.unit || ""}
              </div>
              <div>
                Speaker: {claim.speaker} ({claim.channel})
              </div>
              <div>
                Confidence: {(claim.confidence * 100).toFixed(0)}%
              </div>
              <div style={{ fontStyle: "italic", marginTop: 6 }}>
                “{claim.source.excerpt}”
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Conflicts */}
      {tab === "conflicts" && (
        <div>
          {data.conflicts.map((conflict, i) => (
            <div
              key={i}
              style={{
                border: "2px solid red",
                padding: 12,
                marginBottom: 12
              }}
            >
              <strong>{conflict.claim_id}</strong>
              
              <div>Status: {conflict.status}</div>

              <div>
                Conflicting values: {conflict.values.join(" vs ")}
              </div>

              <ul style={{ marginTop: 8 }}>
                {conflict.claims.map((claim, j) => (
                  <li key={j}>
                    {claim.value} — {claim.speaker} ({claim.channel})
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Tasks */}
      {tab === "tasks" && (
        <ul>
          {data.tasks.map(task => (
            <li key={task.task_id} style={{ marginBottom: 12 }}>
              <strong>{task.title}</strong>
              <div>{task.description}</div>
              <div>Status: {task.status}</div>
            </li>
          ))}
        </ul>
      )}

      {/* Application Blueprint */}
      {tab === "application" && data.applicationBlueprint && (
        <div>
          <h3>Generated Application Blueprint</h3>

          {data.applicationBlueprint.status !== "approved" && (
            <div
              style={{
                background: "#fff3cd",
                padding: 12,
                marginBottom: 16,
                border: "1px solid #ffeeba"
              }}
            >
              ⚠️ This application is a simulated draft pending confirmation
            </div>
          )}

          <FeatureModule
            title="Payments Processing"
            enabled={true}
            simulated={false}
          />

          <FeatureModule
            title="Cross-Border Payments"
            enabled={data.applicationBlueprint.requested_capabilities.cross_border}
            simulated={true}
          />

          <FeatureModule
            title="Same-Day Settlement"
            enabled={false}
            blockedReason="Not supported by underwriting rules (T+1 only)"
          />
        </div>
      )}
    </div>
  );
}
