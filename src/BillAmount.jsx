export const BillAmount = ({ bill, setBill }) => {
  return (
    <div className="category">
      <h3>How much was the bill?</h3>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />
    </div>
  );
};
