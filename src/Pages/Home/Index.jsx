/* eslint-disable prettier/prettier */
import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import AppDropDown from '../../Common/AppDropDown';
import { Box, Select } from 'native-base'

const Home = () => {
    const [selectedValue, setSelectedValue] = useState('');
    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        // Add more options as needed
    ];

    const handleChange = (newValue) => {
        setSelectedValue(newValue);
    };
    return (
        <Box>
            <AppDropDown
                label="Select an option"
                value={selectedValue}
                onChange={handleChange}
                renderSelectItems={() => (
                    options.map(option => (
                        <Select.Item key={option.value} label={option.label} value={option.value} />
                    ))
                )}
                errorMessage="Please select an option"
            />
        </Box>
    );
};
export default Home