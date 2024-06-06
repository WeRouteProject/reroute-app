/* eslint-disable prettier/prettier */
import React from 'react';
import { Select, FormControl, CheckIcon, WarningOutlineIcon, Input } from 'native-base';

const AppDropDown = ({ value, onChange, renderSelectItems, errorMessage }) => {
    const hasError = !value || value === '';
    return (
        <>

            <FormControl isInvalid={hasError}>
                {/* <FormControl.Label >{label}</FormControl.Label> */}
                <Select
                    minWidth="300"
                    borderRadius="lg"
                    borderWidth="1"
                    borderColor="#c8eaf3"
                    bgColor="#f0f0f0"
                    mb={14}
                    m={6}
                    selectedValue={value}
                    onValueChange={itemValue => onChange(itemValue)}
                    _selectedItem={{
                        //bg: 'teal.600',
                        endIcon: <CheckIcon size={5} />,
                    }}
                    mt="1">
                    {renderSelectItems()}
                </Select>
                {
                    hasError && (
                        <FormControl isInvalid={hasError}>
                            <FormControl.ErrorMessage
                                leftIcon={<WarningOutlineIcon size="xs" />}>
                                {errorMessage}
                            </FormControl.ErrorMessage>
                        </FormControl>
                    )
                }
            </FormControl>
        </>
    );
}

export default AppDropDown;
