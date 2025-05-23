import React, { useContext } from "react";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorContext } from "../../Context/ColorContext"; // عدلي حسب مكانك

const Typograph = ({ variant, children, className, color, bold }) => {
  const colors = useContext(ColorContext);

  const variants = {
    h1: "h1 display-1",
    h2: "h2 display-2",
    h3: "h3 display-3",
    h4: "h4 display-4",
    h5: "h5",
    h6: "h6",
    p: "p",
    lead: "lead",
    small: "small",
    muted: "text-muted",
    blockquote: "blockquote",
    button: "btn",
  };

  const Tag = variants[variant] ? variant : "p";

  const defaultColor = colors.Neutrals[1]; // أو اختاري Primary[1] لو حابة

  const styles = {
    color: color || defaultColor,
    fontWeight: bold ? "bold" : "normal",
    fontFamily: "Poppins, sans-serif",
  };

  const classes = `${variants[variant] || ""} ${className || ""}`.trim();

  return (
    <Tag className={classes} style={styles}>
      {children}
    </Tag>
  );
};

Typograph.propTypes = {
  variant: PropTypes.oneOf([
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "p",
    "lead",
    "small",
    "muted",
    "blockquote",
    "button",
  ]),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.string,
  bold: PropTypes.bool,
};

Typograph.defaultProps = {
  variant: "p",
  className: "",
  color: "",
  bold: false,
};

export default Typograph;
