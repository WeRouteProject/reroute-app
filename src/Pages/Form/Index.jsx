/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Select, TextArea, Input, ScrollView, Text } from 'native-base';
import AppDropDown from '../../Common/AppDropDown';
import AppCenterLayout from '../../Common/AppCenterLayout';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
    const [selectedCountry, setSelectedCountryValue] = useState('');
    const [selectedState, setSelectedStateValue] = useState('');
    const [selectedCity, setSelectedCityValue] = useState('');
    const [selectedService, setSelectedService] = useState('');
    const [selectedSubService, setSelectedSubService] = useState('');

    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        // Add more options as needed
    ];

    const serviceOptions = [
        { label: 'Consulting Services', value: 'Consulting Services' },
        { label: 'Software Development Services', value: 'Software Development Services' },
        { label: 'Design Services', value: 'Design Services' },
        { label: 'Digital Marketing Services', value: 'Digital Marketing Services' },
        { label: 'E-commerce Services', value: 'E-commerce Services' },
        { label: 'Cloud Services', value: 'Cloud Services' },
        { label: 'Cybersecurity Services', value: 'Cybersecurity Services' },
        { label: 'Training and Education Services', value: 'Training and Education Services' },
        { label: 'SaaS Products and Solutions', value: 'SaaS Products and Solutions' },
    ];

    const subServiceOptions = {
        'Consulting Services': [
            { label: 'Strategic consulting', value: 'Strategic consulting' },
            { label: 'Management consulting', value: 'Management consulting' },
            { label: 'Technology consulting', value: 'Technology consulting' },
            { label: 'Financial consulting', value: 'Financial consulting' },
            { label: 'Marketing consulting', value: 'Marketing consulting' },
        ],
        'Software Development Services': [
            { label: 'Custom software development', value: 'Custom software development' },
            { label: 'Web application development', value: 'Web application development' },
            { label: 'Mobile application development (iOS, Android)', value: 'Mobile application development (iOS, Android)' },
            { label: 'Frontend and backend development', value: 'Frontend and backend development' },
            { label: 'Software prototyping and MVP development', value: 'Software prototyping and MVP development' },
        ],
        'Design Services': [
            { label: 'User interface (UI) design', value: 'User interface (UI) design' },
            { label: 'User experience (UX) design', value: 'User experience (UX) design' },
            { label: 'Graphic design', value: 'Graphic design' },
            { label: 'Branding and identity design', value: 'Branding and identity design' },
            { label: 'Product design', value: 'Product design' },
        ],
        'Digital Marketing Services': [
            { label: 'Search engine optimization (SEO)', value: 'Search engine optimization (SEO)' },
            { label: 'Social media marketing', value: 'Social media marketing' },
            { label: 'Content marketing', value: 'Content marketing' },
            { label: 'Email marketing', value: 'Email marketing' },
            { label: 'Pay-per-click (PPC) advertising', value: 'Pay-per-click (PPC) advertising' },
        ],
        'E-commerce Services': [
            { label: 'E-commerce website development', value: 'E-commerce website development' },
            { label: 'Online store setup and optimization', value: 'Online store setup and optimization' },
            { label: 'Payment gateway integration', value: 'Payment gateway integration' },
            { label: 'E-commerce marketing and sales strategy', value: 'E-commerce marketing and sales strategy' },
        ],
        'Cloud Services': [
            { label: 'Cloud infrastructure setup and management', value: 'Cloud infrastructure setup and management' },
            { label: 'Cloud migration services', value: 'Cloud migration services' },
            { label: 'DevOps and continuous integration/continuous deployment (CI/CD) automation', value: 'DevOps and continuous integration/continuous deployment (CI/CD) automation' },
            { label: 'Cloud security consulting', value: 'Cloud security consulting' },
        ],
        'Data Analytics Services': [
            { label: 'Data analysis and visualization', value: 'Data analysis and visualization' },
            { label: 'Business intelligence consulting', value: 'Business intelligence consulting' },
            { label: 'Predictive analytics', value: 'Predictive analytics' },
            { label: 'Data mining and machine learning', value: 'Data mining and machine learning' },
        ],
        'Cybersecurity Services': [
            { label: 'Cybersecurity assessment and auditing', value: 'Cybersecurity assessment and auditing' },
            { label: 'Security testing and vulnerability assessment', value: 'Security testing and vulnerability assessment' },
            { label: 'Security awareness training', value: 'Security awareness training' },
            { label: 'Incident response and threat intelligence', value: 'Incident response and threat intelligence' },
        ],
        'Training and Education Services': [
            { label: 'Corporate training programs', value: 'Corporate training programs' },
            { label: 'Workshops and seminars', value: 'Workshops and seminars' },
            { label: 'Online courses and tutorials', value: 'Online courses and tutorials' },
            { label: 'Certification programs', value: 'Certification programs' },
        ],
        'SaaS Products and Solutions': [
            { label: 'Developing and selling software as a service (SaaS) products', value: 'Developing and selling software as a service (SaaS) products' },
            { label: 'Building industry-specific solutions', value: 'Building industry-specific solutions' },
            { label: 'Providing subscription-based services', value: 'Providing subscription-based services' },
        ],
    };



    const handleCountryChange = (newValue) => {
        setSelectedCountryValue(newValue);
    };
    const handleStateChange = (newValue) => {
        setSelectedStateValue(newValue);
    };
    const handleCityChange = (newValue) => {
        setSelectedCityValue(newValue);
    };

    const handleServiceChange = (newValue) => {
        setSelectedService(newValue);
        setSelectedSubService('');
    };

    const handleSubServiceChange = (newValue) => {
        setSelectedSubService(newValue);
    };

    const navigation = useNavigation();

    const handleSubmit = () => {
        navigation.navigate('Feedback');
    }

    return (
        <AppCenterLayout>
            <ScrollView>

                <Box
                    alignItems="center" w="100%" p={2}
                >
                    <Box
                        mt={10}
                        alignItems={'center'}
                    >
                        <Text
                            fontSize={25}
                            color={'#007bff'}
                            underline
                            bold
                        >Your Requirements</Text>
                    </Box>
                    <Input
                        m={10}
                        variant={'underlined'}
                        fontSize={18}
                    >Name</Input>
                    <AppDropDown
                        value={selectedCountry}
                        onChange={handleCountryChange}
                        placeholder={'Country'}
                        renderSelectItems={() => (
                            options.map(option => (
                                <Select.Item key={option.value} label={option.label} value={option.value} />
                            ))
                        )}
                        errorMessage="Please select an option"
                    />
                    <AppDropDown

                        value={selectedState}
                        onChange={handleStateChange}
                        placeholder={'State'}
                        renderSelectItems={() => (
                            options.map(option => (
                                <Select.Item key={option.value} label={option.label} value={option.value} />
                            ))
                        )}
                        errorMessage="Please select an option"
                    />
                    <AppDropDown
                        value={selectedCity}
                        onChange={handleCityChange}
                        placeholder={'City'}
                        renderSelectItems={() => (
                            options.map(option => (
                                <Select.Item key={option.value} label={option.label} value={option.value} />
                            ))
                        )}
                        errorMessage="Please select an option"
                    />
                    <AppDropDown
                        value={selectedService}
                        onChange={handleServiceChange}
                        placeholder={'Our Services'}
                        renderSelectItems={() => (
                            serviceOptions.map(option => (
                                <Select.Item key={option.value} label={option.label} value={option.value} />
                            ))
                        )}
                        errorMessage="Please select a service"
                    />
                    {selectedService && (
                        <AppDropDown
                            value={selectedSubService}
                            onChange={handleSubServiceChange}
                            placeholder={'Project Title'}
                            renderSelectItems={() => (
                                subServiceOptions[selectedService].map(option => (
                                    <Select.Item key={option.value} label={option.label} value={option.value} />
                                ))
                            )}
                            errorMessage="Please select a sub-service"
                        />
                    )}
                    {selectedService && (
                        <AppDropDown
                            value={selectedSubService}
                            onChange={handleSubServiceChange}
                            placeholder={'Project Title'}
                            renderSelectItems={() => (
                                subServiceOptions[selectedService].map(option => (
                                    <Select.Item key={option.value} label={option.label} value={option.value} />
                                ))
                            )}
                            errorMessage="Please select a sub-service"
                        />
                    )}


                    <TextArea h={20} placeholder="Brief your requirement" w="100%" maxW="300" mt={2} />

                    <AppButton
                        onPress={handleSubmit}
                        title={'Submit'}
                        width={'85%'}
                        mt={60}
                    />
                </Box>
            </ScrollView>
        </AppCenterLayout>
    );
}

export default Form;