function AccordionItem({ item, selected, onClick }) {
  return (
    <div style={{ padding: 10, border: "1px solid  #333" }} onClick={onClick}>
      <h4>{item.title}</h4>
      {selected && <p>{item.body}</p>}
    </div>
  );
}

export default AccordionItem;
