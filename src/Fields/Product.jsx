import React from "react";

// eslint-disable-next-line
export default ({
                    field,
                    saveStateToHtmlField,
                    hideField,
                    styledComponents
                }) => {
    let {description, basePrice, label, cssClass, width, customName, id} = field;

    // only for UAF project
    // you can remove it
    // here I collect valus based on GF field class and save it to the HTML field
    if (saveStateToHtmlField) {
        const {saveStateToHtmlField: states, formValues} = saveStateToHtmlField;
        const classes = Object.keys(states);
        const values = [];
        if (classes) {
            for (const id in formValues) {
                const field = formValues[id];
                const value = "";
                for (let y = 0; y < classes.length; y++) {
                    if (field.cssClass.indexOf(classes[y]) !== -1 && !field.valid) {
                        values[states[classes[y]]] = field.value;
                    }
                }
            }
        }
        if (values) {
            const replacedValues = Object.keys(values);
            for (let i = 0; i < replacedValues.length; i++) {
                if (replacedValues[i] === "%price%") {
                    values[replacedValues[i]] = `€${values[replacedValues[i]]}`;
                }
                content = content.replace(replacedValues[i], values[replacedValues[i]]);
            }
        }
    }

    const {Box = "div", Label = "label"} = styledComponents || false;

    return (
        // eslint-disable-next-line
        <Box
            width={width}
            className={`form-field ${cssClass}`}
            style={{display: hideField ? "none" : undefined}}
        >
            <Label className="gf-label">
                {label}
            </Label>
            <Label className="gf-label gf-price">
                Price: <span className="gf-price-value">{basePrice}</span>
            </Label>
            <div
                className="html-content"
                dangerouslySetInnerHTML={{__html: description}}
            />

            <input type={'hidden'} name={customName || `input_${id}.1`} value={label}/>
            <input type={'hidden'} name={customName || `input_${id}.2`} value={basePrice}/>
        </Box>
    );
};
