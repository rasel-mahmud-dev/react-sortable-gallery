import "./button.scss"
import PropTypes from "prop-types";

const Button = ({children, variant="solid", className = "", ...other}) => {

    let genClass = className ?? ""
    genClass += ` btn btn-${variant}`

    return (
        <button className={genClass} {...other}>{children}</button>
    );
};


Button.propTypes = {
    children: PropTypes.node,
    variant: PropTypes.oneOf(["text", "solid"]),
    className: PropTypes.string,
    other: PropTypes.object,
};

export default Button;