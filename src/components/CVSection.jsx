export default function CVSection({ cvItems, cvSection }) {
  const cvElements = cvItems.map((item) => {
    return (
      <p key={item.id}>
        {item.label + ":"} {item.value}
      </p>
    );
  });
  return (
    <div>
      <h1>{cvSection}</h1>
      {cvElements}
    </div>
  );
}
