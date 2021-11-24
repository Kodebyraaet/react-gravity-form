import React, {useState} from 'react';
import InputLabel from '../FormElements/InputLabel';

export default ({
                    field,
                    value,
                    validationMessage,
                    touched,
                    setTouched,
                    hideField,
                    updateForm,
                    styledComponents,
                    error,
                    unsetError,
                    setFocusClass,
                    cssClass,
                    ...props
                }) => {
    const {
        id,
        formId,
        type,
        label,
        placeholder,
        isRequired,
        maxLength,
        description,
        descriptionPlacement,
        labelPlacement,
        width,
        customName,
    } = field;
    const {Input = 'input', Label = 'label', Box = 'div'} = styledComponents || false;

    const setDisabled = () => cssClass === 'field--street' || cssClass === 'field--city';

    const [listItems, setListItems] = useState([''])

    const addItem = (index) => {
        const items = [
            ...listItems.slice(0, index + 1),
            '',
            ...listItems.slice(index + 1)
        ];

        setListItems(items);
    }

    const removeItem = (index) => {
        const items = [
            ...listItems.slice(0, index),
            ...listItems.slice(index + 1)
        ];

        setListItems(items);
    }

    const updateValue = (index, value) => {
        const items = listItems;
        listItems[index] = value;
        setListItems(items);
    }

    return (
        <Box
            width={width}
            className={
                (validationMessage && touched) || error
                    ? `form-field error ${cssClass}`
                    : `form-field ${cssClass}`
            }
            style={{display: hideField ? 'none' : undefined}}
        >
            <div className={type}>
                <InputLabel
                    formId={formId}
                    id={id}
                    label={label}
                    labelPlacement={labelPlacement}
                    isRequired={isRequired}
                    styledComponent={styledComponents}
                />
                {descriptionPlacement === 'above' && description && (
                    <div className="description">{description}</div>
                )}
                {listItems.map((item, index) => (
                    <div className={'list-item'} key={'list-item-' + index}>
                        <Input
                            id={`input_${formId}_${id}_${index}`}
                            name={(customName || `input_${id}`) + '[]'}
                            type={'text'}
                            value={item}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            required={isRequired}
                            onChange={(event) => {
                                updateValue(index, event.target.value);
                                updateForm(event, field);
                                unsetError(id);
                            }}
                            onBlur={(event) => {
                                updateForm(event, field);
                                setTouched(id);
                                setFocusClass(item !== '');
                            }}
                            disabled={setDisabled()}
                            onFocus={() => setFocusClass(true)}
                            aria-label={label}
                            aria-describedby={`error_${formId}_${id}`}
                            aria-invalid={(!!validationMessage && touched) || !!error}
                        />
                        <button className={'list-item-button'} type={'button'} onClick={() => addItem(index)}>+</button>
                        {listItems.length > 1 && (<button className={'list-item-button'} type={'button'} onClick={() => removeItem(index)}>-</button>)}
                    </div>
                ))}
                {descriptionPlacement !== 'above' && description && (
                    <div className="description">{description}</div>
                )}
                {((validationMessage && touched) || error) && (
                    <span className="error-message" id={`error_${formId}_${id}`}>
            {validationMessage || error}
          </span>
                )}
            </div>
        </Box>
    );
};
