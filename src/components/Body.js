import React, { useState, useRef } from "react";
import "../components/Styling/Body.css";
import { ArrowDown } from "react-feather";
import Editor from "./Editor";
import Resume from "./Resume";
import ReactToPrint from "react-to-print";

const Body = () => {
  const colors = ["#ff6347", "#239ce2", "#32cd32", "#ffa500", "#800080"];

  const sections = {
    basicInfo: "Basic Info",
    workExp: "Work Experience",
    project: "Projects",
    education: "Education",
    achievement: "Achievements",
    summary: "Summary",
    other: "Other",
  };

  const resumeRef = useRef();

  const [activeColor, setActiveColor] = useState(colors[0]);

  const [resumeInformation, setResumeInformation] = useState({
    [sections.basicInfo]: {
      id: sections.basicInfo,
      sectionTitle: sections.basicInfo,
      detail: {},
    },
    [sections.workExp]: {
      id: sections.workExp,
      sectionTitle: sections.workExp,
      details: [],
    },
    [sections.project]: {
      id: sections.project,
      sectionTitle: sections.project,
      details: [],
    },
    [sections.education]: {
      id: sections.education,
      sectionTitle: sections.education,
      details: [],
    },
    [sections.achievement]: {
      id: sections.achievement,
      sectionTitle: sections.achievement,
      points: [],
    },
    [sections.summary]: {
      id: sections.summary,
      sectionTitle: sections.summary,
      detail: "",
    },
    [sections.other]: {
      id: sections.other,
      sectionTitle: sections.other,
      detail: "",
    },
  });

  return (
    <div id="create-resume" className="B-container">
      <p className="B-heading"><span>Resume</span> Builder</p>
      <div className="B-toolbar">
        <div className="B-colors">
          {colors.map((item) => (
            <span
              key={item}
              style={{ backgroundColor: item }}
              className={`B-color ${activeColor === item ? "B-active" : ""}`}
              onClick={() => setActiveColor(item)}
            />
          ))}
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button>
                Download <ArrowDown />
              </button>
            );
          }}
          content={() => resumeRef.current}
        />
      </div>
      <div className="B-main">
        <Editor
          sections={sections}
          information={resumeInformation}
          setInformation={setResumeInformation}
        />
        <Resume
          ref={resumeRef}
          sections={sections}
          information={resumeInformation}
        />
        activeColor={activeColor}
      </div>
    </div>
  );
};

export default Body;
