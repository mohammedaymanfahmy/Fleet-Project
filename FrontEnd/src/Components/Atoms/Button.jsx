import React from "react";
import PropTypes from "prop-types";
import "../Styles/atoms.css";


const Button = ({ 
  children, 
  color = "blue", 
  shape = "default", 
  size = "small", 
  icon, 
  iconSize = 24, 
  iconPosition = "left", 
  iconcolor = "white", 
  onClick, 
  disabled 
}) => {
  return (
    <button
      className={`button ${color} ${shape} ${size}`}  
      onClick={onClick}
      disabled={disabled}
    >
      {icon && iconPosition === "left" && (
        <span className="icon" style={{ fontSize: `${iconSize}px`, color: iconcolor }}>{icon}</span>
      )}

      {children}

      {icon && iconPosition === "right" && (
        <span className="icon" style={{ fontSize: `${iconSize}px`, color: iconcolor }}>{icon}</span>
      )}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node, 
  color: PropTypes.oneOf(["blue", "trans", "white", "black", "trans-no-border "]),
  shape: PropTypes.oneOf(["default", "small-circle", "large-circle"]),
  size: PropTypes.oneOf(["small", "defaultt", "large"]),
  icon: PropTypes.node,
  iconSize: PropTypes.number, 
  iconPosition: PropTypes.oneOf(["left", "right"]), 
  iconcolor: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  color: "blue",
  shape: "default",
  size: "small",
  iconSize: 24, 
  iconPosition: "left",
  iconcolor: "white",
  onClick: () => {},
  disabled: false,
};

export default Button;
