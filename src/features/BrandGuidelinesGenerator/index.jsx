import React, { useState } from "react";
import "./brand.css";
import Data from "./data.json";

export default function BrandGuideline() {
  const [tab, setTab] = useState("json");

  const {
    brand_summary,
    visual_identity,
    verbal_identity,
    messaging_pillars,
    asset_recommendations,
    tagline_or_headline,
    typography,
  } = Data;

  return (
    <div className="app-wrapper">
      {/* Tabs */}
      <div className="tabs">
        <button
          className={tab === "json" ? "active" : ""}
          onClick={() => setTab("json")}
        >
          JSON Input
        </button>
        <button
          className={tab === "ui" ? "active" : ""}
          onClick={() => setTab("ui")}
        >
          UI Preview
        </button>
      </div>

      {/* Content */}
      <div className="content">
        {tab === "json" && (
          <pre className="json-viewer">
            {JSON.stringify(Data, null, 2)}
          </pre>
        )}

        {tab === "ui" && (
          <div
            className="ui-preview"
            style={{
              fontFamily: visual_identity.typography.primary_font.name || "Inter",
              background: visual_identity.color_usage_recommendation.background,
              color: visual_identity.color_usage_recommendation.text,
            }}
          >
            {/* HERO */}
            <section className="hero">
              <h1>{tagline_or_headline.value}</h1>
              <p style={{ opacity: 0.8 }}>{brand_summary.short_description}</p>
              <button
                style={{
                  background: visual_identity.color_usage_recommendation.cta,
                  color: "#fff",
                  padding: "12px 28px",
                  borderRadius: "6px",
                  border: "none",
                  marginTop: "20px",
                  cursor: "pointer",
                  fontFamily: visual_identity.typography.primary_font.name,
                }}
              >
                Get Started
              </button>
            </section>

            {/* FEATURES */}
            <section className="features">
              <h2>Key Features</h2>

              <div className="feature-grid">
                {verbal_identity.messaging_pillars.slice(0, 3).map((pillar) => (
                  <div className="feature-card" key={pillar.id}>
                    <div className="icon-placeholder">⬛</div>
                    <h3>{pillar.title}</h3>
                    <p>{pillar.one_line}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* FOOTER */}
            <footer>
              <p style={{ opacity: 0.6 }}>
                © {new Date().getFullYear()} Notion – brand simulation demo
              </p>
            </footer>
          </div>
        )}
      </div>
    </div>
  );
}
