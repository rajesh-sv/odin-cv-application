import CVSection from "./CVSection";

export default function CV({ cvItems }) {
  return (
    <div className="cv">
      <CVSection
        cvItems={cvItems.filter((item) => item.form === "Personal Info")}
        cvSection="Personal Info"
      />
      <CVSection
        cvItems={cvItems.filter((item) => item.form === "Education")}
        cvSection="Education"
      />
      <CVSection
        cvItems={cvItems.filter((item) => item.form === "Experience")}
        cvSection="Experience"
      />
    </div>
  );
}
