import { useState } from "react";
import Form from "./Form";
import CV from "./CV.jsx";
import { formItems as formData } from "./formItems.js";
import "../styles/App.css";

function Forms({ formItems, handleChange }) {
  return (
    <div className="form-container">
      <Form
        formItems={formItems.filter((item) => item.form === "Personal Info")}
        formTitle={"Personal Info"}
        onChange={handleChange}
      />
      <Form
        formItems={formItems.filter((item) => item.form === "Education")}
        formTitle={"Education"}
        onChange={handleChange}
      />
      <Form
        formItems={formItems.filter((item) => item.form === "Experience")}
        formTitle={"Experience"}
        onChange={handleChange}
      />
    </div>
  );
}

function App() {
  const [formItems, setFormItems] = useState(formData);

  const handleChange = (itemId, value) => {
    setFormItems(
      formItems.map((item) => {
        if (item.id === itemId) return { ...item, value: value };
        else return item;
      })
    );
  };

  return (
    <div className="app">
      <Forms formItems={formItems} handleChange={handleChange} />
      <CV cvItems={formItems} />
    </div>
  );
}

export default App;
