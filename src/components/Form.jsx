export default function Form({ formItems, formTitle, onChange }) {
  const formElements = formItems.map((item) => {
    return (
      <div key={item.id}>
        <label htmlFor={item.id}>{item.label + ":"}</label>
        {item.type === "textarea" ? (
          <textarea
            id={item.id}
            defaultValue={item.value}
            onChange={(e) => onChange(item.id, e.target.value)}
          ></textarea>
        ) : (
          <input
            type={item.type}
            id={item.id}
            onChange={(e) => onChange(item.id, e.target.value)}
            value={item.value}
          />
        )}
      </div>
    );
  });
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <fieldset>
        <legend>{formTitle}</legend>
        {formElements}
      </fieldset>
    </form>
  );
}
