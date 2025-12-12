import React, { useState } from "react";
import "./BrandGuidelinesGenerator.css";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";

const BrandGuidelinesGenerator = () => {
  const [inputData, setInputData] = useState("");
  const [parsedData, setParsedData] = useState(null);
  const [activeTab, setActiveTab] = useState("input");
  const [error, setError] = useState("");

  const extractBrandData = (rawInput) => {
    try {
      const parsed = JSON.parse(rawInput);
      
      // Extract from candidates structure if present
      if (parsed.candidates && parsed.candidates[0]?.content?.parts?.[0]?.text) {
        let textContent = parsed.candidates[0].content.parts[0].text;
        
        // Remove markdown code block markers
        textContent = textContent.replace(/^```json\n/, '').replace(/\n```$/, '');
        
        return JSON.parse(textContent);
      }
      
      // Direct JSON object
      return parsed;
    } catch (err) {
      throw new Error("Invalid JSON format");
    }
  };

  const handleGenerate = () => {
    try {
      setError("");
      const brandData = extractBrandData(inputData);
      setParsedData(brandData);
      setActiveTab("preview");
    } catch (err) {
      setError(err.message);
    }
  };

  const renderBrandPreview = () => {
    if (!parsedData) return null;

    const {
      brand_summary,
      visual_identity,
      verbal_identity,
      tagline_or_headline,
      keywords,
      guideline_document,
    } = parsedData;

    return (
      <div className="brand-preview">
        {/* Brand Summary */}
        <Card className="brand-section">
          <h3>Brand Summary</h3>
          <h2>{brand_summary?.brand_name}</h2>
          <p>{brand_summary?.short_description}</p>
          <div className="tagline">
            <strong>Tagline:</strong> {tagline_or_headline?.value}
          </div>
        </Card>

        {/* Color Palette */}
        <Card className="brand-section">
          <h3>Color Palette</h3>
          <div className="color-section">
            <h4>Primary Colors</h4>
            <div className="color-grid">
              {visual_identity?.primary_colors?.map((color, index) => (
                <div key={index} className="color-item">
                  <div 
                    className="color-swatch" 
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="color-info">
                    <strong>{color.hex}</strong>
                    <span>{color.role}</span>
                  </div>
                </div>
              ))}
            </div>
            <h4>Secondary Colors</h4>
            <div className="color-grid">
              {visual_identity?.secondary_colors?.slice(0, 6).map((color, index) => (
                <div key={index} className="color-item">
                  <div 
                    className="color-swatch" 
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="color-info">
                    <strong>{color.hex}</strong>
                    <span>{color.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Card>

        {/* Typography */}
        <Card className="brand-section">
          <h3>Typography</h3>
          <div className="typography-section">
            <div className="font-item">
              <h4>Primary Font</h4>
              <div style={{ fontFamily: visual_identity?.typography?.primary_font?.name || 'Inter' }}>
                <strong>{visual_identity?.typography?.primary_font?.name}</strong>
                <p>The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
            <div className="font-item">
              <h4>Secondary Font</h4>
              <div style={{ fontFamily: visual_identity?.typography?.secondary_font?.web_fallback || 'serif' }}>
                <strong>{visual_identity?.typography?.secondary_font?.name}</strong>
                <p>The quick brown fox jumps over the lazy dog</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Messaging Pillars */}
        <Card className="brand-section">
          <h3>Messaging Pillars</h3>
          <div className="pillars-grid">
            {verbal_identity?.messaging_pillars?.map((pillar, index) => (
              <div key={index} className="pillar-item">
                <h4>{pillar.title}</h4>
                <p>{pillar.one_line}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* Tone of Voice */}
        <Card className="brand-section">
          <h3>Tone of Voice</h3>
          <p><strong>{verbal_identity?.tone_of_voice?.label}</strong></p>
          <div className="tone-examples">
            {verbal_identity?.tone_of_voice?.examples?.map((example, index) => (
              <blockquote key={index}>"{example}"</blockquote>
            ))}
          </div>
        </Card>

        {/* Keywords */}
        <Card className="brand-section">
          <h3>Brand Keywords</h3>
          <div className="keywords-section">
            <div className="keyword-group">
              <h4>Positive Keywords</h4>
              <div className="keyword-tags">
                {keywords?.positive_keywords?.slice(0, 10).map((keyword, index) => (
                  <span key={index} className="keyword-tag positive">{keyword}</span>
                ))}
              </div>
            </div>
            <div className="keyword-group">
              <h4>Avoid These</h4>
              <div className="keyword-tags">
                {keywords?.negative_keywords?.slice(0, 8).map((keyword, index) => (
                  <span key={index} className="keyword-tag negative">{keyword}</span>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Guidelines */}
        <Card className="brand-section">
          <h3>Brand Guidelines</h3>
          <div className="guidelines-section">
            <div className="guideline-group">
              <h4>Do's</h4>
              <ul>
                {guideline_document?.dos?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="guideline-group">
              <h4>Don'ts</h4>
              <ul>
                {guideline_document?.donts?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </Card>
      </div>
    );
  };

  return (
    <div className="brand-guidelines-container">
      <h2>Brand Guidelines Generator</h2>
      
      <div className="tab-navigation">
        <Button
          variant={activeTab === "input" ? "primary" : "secondary"}
          onClick={() => setActiveTab("input")}
        >
          Input Data
        </Button>
        <Button
          variant={activeTab === "json" ? "primary" : "secondary"}
          onClick={() => setActiveTab("json")}
        >
          JSON View
        </Button>
        <Button
          variant={activeTab === "preview" ? "primary" : "secondary"}
          onClick={() => setActiveTab("preview")}
        >
          Brand Preview
        </Button>
      </div>

      <div className="tab-content">
        {activeTab === "input" && (
          <Card>
            <div className="input-section">
              <label>Paste your brand data (JSON or API response):</label>
              <textarea
                value={inputData}
                onChange={(e) => setInputData(e.target.value)}
                placeholder='{"candidates":[{"content":{"parts":[{"text":"..."}]}}]} or direct JSON'
                rows={10}
              />
              {error && <div className="error-message">{error}</div>}
              <Button onClick={handleGenerate} disabled={!inputData.trim()}>
                Generate Brand Guidelines
              </Button>
            </div>
          </Card>
        )}

        {activeTab === "json" && parsedData && (
          <Card>
            <pre className="json-display">
              {JSON.stringify(parsedData, null, 2)}
            </pre>
          </Card>
        )}

        {activeTab === "preview" && (
          <Card>
            {parsedData ? renderBrandPreview() : (
              <p>Generate brand guidelines first to see the preview.</p>
            )}
          </Card>
        )}
      </div>
    </div>
  );
};

export default BrandGuidelinesGenerator;