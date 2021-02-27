import {FormGroup, InputGroup, NumericInput} from "@blueprintjs/core";

export const IntegerInput = ({label,placeholder,value,onChange}) => {
    return (
        <FormGroup label={label}>
            <NumericInput
                value={value}
                min={0}
                onValueChange={(value)=>onChange(value)}
                placeholder={placeholder}
            />
        </FormGroup>
    )
};

export const Input = ({label,placeholder,value,onChange}) => {
    return (
        <FormGroup label={label}>
            <InputGroup
                value={value}
                onChange={(value)=>onChange(value)}
                placeholder={placeholder}
            />
        </FormGroup>
    )
};
