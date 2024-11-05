/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
// CountryCodeDropdown.js
import React from 'react';
import { Select, FormControl, CheckIcon } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import countryCodeData from '../data/country_code.json';
import { Colors } from './Utils/Constants';
import { Text } from 'react-native';

const CountryCodeDropdown = ({ value, onChange, countries }) => {
    return (
        <FormControl>
            <Select
                borderRadius="lg"
                borderWidth="1"
                borderColor={Colors.ButtonColorLight}
                bgColor="#f0f0f0"
                mb={4}
                selectedValue={value}
                onValueChange={(itemValue) => onChange(itemValue)}
                _selectedItem={{
                    bg: 'teal.600',
                    endIcon: <CheckIcon size="5" />,
                }}
                dropdownIcon={
                    <Icon name="angle-down" size={20} color="#BDBDBD" style={{ marginRight: 8 }} />
                }
            >
                {countryCodeData.countries.map((country, index) => (
                    <Select.Item
                        key={index}
                        label={`${country.code}`}
                        value={country.code}
                    />
                ))}
            </Select>
        </FormControl>
    );
};

export default CountryCodeDropdown;