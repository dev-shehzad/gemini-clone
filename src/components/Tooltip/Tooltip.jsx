import "./Tooltip.css"; // Make sure to create a corresponding CSS file for styling

const Tooltip = ({ position, content, children }) => {
  // Determine the class for positioning based on the prop
  const positionClass = `tooltip-${position}`; // e.g., 'tooltip-right'

  return (
    <div className="tooltip-container">
      {children}
      <div className={`tooltip-content ${positionClass}`}>{content}</div>
    </div>
  );
};

export default Tooltip;
