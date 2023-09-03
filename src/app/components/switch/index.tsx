import "./styles.css";
import React from "react";
export default function Switch({
  value,
  onChange,
}: {
  value?: string;
  onChange: (newValue: string) => void;
}) {
  return (
    <label className="bb8-toggle">
      <input
        onChange={() => onChange("dark")}
        // checked={value === "dark"}
        className="bb8-toggle__checkbox"
        type="checkbox"
      />
      <div className="bb8-toggle__container">
        <div className="bb8-toggle__scenery">
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="bb8-toggle__star" />
          <div className="tatto-1" />
          <div className="tatto-2" />
          <div className="gomrassen" />
          <div className="hermes" />
          <div className="chenini" />
          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
          <div className="bb8-toggle__cloud" />
        </div>
        <div className="bb8">
          <div className="bb8__head-container">
            <div className="bb8__antenna" />
            <div className="bb8__antenna" />
            <div className="bb8__head" />
          </div>
          <div className="bb8__body" />
        </div>
        <div className="artificial__hidden">
          <div className="bb8__shadow" />
        </div>
      </div>
    </label>
  );
}
