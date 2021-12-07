import React from "react";

// eslint-disable-next-line
export default ({
                    field,
                    hideField,
                    styledComponents,
                    value
                }) => {
    let { description, label, cssClass, width, id } = field;

    const { Box = "div", Label = "label" } = styledComponents || false;

    return (
        // eslint-disable-next-line
        <Box
            width={width}
            className={`form-field ${cssClass}`}
            style={{ display: hideField ? "none" : undefined }}
        >
            <Label className="gf-label">
                {label}
            </Label>
            <Label className="gf-label gf-price">
                Total: <span className="gf-price-value">{value}</span>
            </Label>
            <div
                className="html-content"
                dangerouslySetInnerHTML={{ __html: description }}
            />
        </Box>
    );
};
