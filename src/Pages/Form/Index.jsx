/* eslint-disable prettier/prettier */
import React, { useState, useEffect } from 'react';
import { Box, Select, TextArea, Input, ScrollView, Text, VStack, HStack, Button, Pressable, Toast } from 'native-base';
import { StyleSheet, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AppDropDown from '../../Common/AppDropDown';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSizes } from '../../Common/Utils/Constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { showMessage } from 'react-native-flash-message';
import FeedbackModal from '../Feedback/Index';

const Form = () => {
    const [selectedCountry, setSelectedCountry] = useState({
        name: '',
        iso2: ''
    });
    const [selectedState, setSelectedState] = useState({
        name: '',
        iso2: ''
    });
    const [selectedCity, setSelectedCity] = useState({
        name: '',
        value: ''
    });

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [selectedService, setSelectedService] = useState('');
    const [selectedProjectType, setSelectedProjectType] = useState('');
    const [selectedSubService, setSelectedSubService] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [openings, setOpenings] = useState(1);
    const [selectedCurrency, setSelectedCurrency] = useState('');
    const [budget, setBudget] = useState('');
    const [projectDuration, setProjectDuration] = useState('');
    const [experience, setExperience] = useState('');
    const [requirement, setRequirement] = useState('');
    const [selectedDocument, setSelectedDocument] = useState(null);
    const [userName, setUserName] = useState('');
    const [showFeedback, setShowFeedback] = useState(false);

    const API_KEY = 'ZEloYWNwT0VGSVh5SGtCcGNnRmRGNk1TZDFENklPVUNwSU9JQlZYYg==';

    // Fetch countries on component mount
    useEffect(() => {
        fetchCountries();
    }, []);

    // Fetch states when country changes
    useEffect(() => {
        if (selectedCountry.iso2) {
            fetchStates(selectedCountry.iso2);
            setSelectedState({ name: '', iso2: '' });
            setSelectedCity({ name: '', value: '' });
            setCities([]);
        }
    }, [selectedCountry.iso2]);

    useEffect(() => {
        if (selectedCountry.iso2 && selectedState.iso2) {
            fetchCities(selectedCountry.iso2, selectedState.iso2);
            setSelectedCity({ name: '', value: '' });
        }
    }, [selectedCountry.iso2, selectedState.iso2]);

    const fetchCountries = async () => {
        try {
            const response = await fetch('https://api.countrystatecity.in/v1/countries', {
                headers: {
                    'X-CSCAPI-KEY': API_KEY
                }
            });
            const data = await response.json();
            setCountries(data.map(country => ({
                label: country.name,
                value: country.iso2,
                name: country.name
            })));
        } catch (error) {
            console.error('Error fetching countries:', error);
            showMessage({
                message: 'Error fetching countries',
                type: 'danger'
            });
        }
    };

    const fetchStates = async (countryCode) => {
        try {
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states`, {
                headers: {
                    'X-CSCAPI-KEY': API_KEY,
                }
            });
            const data = await response.json();
            setStates(data.map(state => ({
                label: state.name,
                value: state.iso2,
                name: state.name
            })));
        } catch (error) {
            console.error('Error fetching states:', error);
            showMessage({
                message: 'Error fetching states',
                type: 'danger'
            });
        }
    };

    const fetchCities = async (countryCode, stateCode) => {
        try {
            const response = await fetch(`https://api.countrystatecity.in/v1/countries/${countryCode}/states/${stateCode}/cities`, {
                headers: {
                    'X-CSCAPI-KEY': API_KEY
                }
            });
            const data = await response.json();
            setCities(data.map(city => ({
                label: city.name,
                value: city.name,
                name: city.name
            })));
        } catch (error) {
            console.error('Error fetching cities:', error);
            showMessage({
                message: 'Error fetching cities',
                type: 'danger'
            });
        }
    };

    const [token, setToken] = useState(null);
    const navigation = useNavigation();

    // Add useEffect for data fetching
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                // Fetch token from AsyncStorage
                const userToken = await AsyncStorage.getItem('userToken');
                const storedName = await AsyncStorage.getItem('userName');

                if (userToken) {
                    setToken(userToken);
                    console.log('Token fetched:', userToken);
                } else {
                    console.log('No token found');
                    navigation.navigate('Login'); // Redirect to login if no token
                }

                if (storedName) {
                    setUserName(storedName);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                Toast.show({
                    title: 'Error',
                    status: 'error',
                    description: 'Failed to fetch user data',
                });
            }
        };

        fetchUserData();
    }, [navigation]);
    console.log('Name: ', userName);

    // Logging options for debugging
    console.log('Initial State Values:');

    const serviceOptions = [
        { label: 'Project', value: 'Project' },
        { label: 'Sourcing', value: 'Sourcing' },
    ];

    const projectTypeOptions = [
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

    // Sourcing options
    const currencyOptions = [
        { label: 'USD', value: 'USD' },
        { label: 'EUR', value: 'EUR' },
        { label: 'GBP', value: 'GBP' },
        { label: 'INR', value: 'INR' },
        // Add more currencies as needed
    ];

    const durationOptions = [
        { label: '1 month', value: '1 month' },
        { label: '3 months', value: '3 months' },
        { label: '6 months', value: '6 months' },
        { label: '1 year', value: '1 year' },
        { label: 'More than 1 year', value: 'More than 1 year' },
    ];

    const experienceOptions = Array.from({ length: 25 }, (_, i) => ({
        // label: `${i + 1} ${i === 0 ? 'year' : 'years'}`,
        label: `${i + 1}`,
        value: `${i + 1}`,
    }));

    const handleCountryChange = (newValue) => {
        const country = countries.find(c => c.value === newValue);
        setSelectedCountry({
            name: country?.name || '',
            iso2: newValue
        });
    };

    const handleStateChange = (newValue) => {
        const state = states.find(s => s.value === newValue);
        setSelectedState({
            name: state?.name || '',
            iso2: newValue
        });
    };

    const handleCityChange = (newValue) => {
        const city = cities.find(c => c.value === newValue);
        setSelectedCity({
            name: city?.name || '',
            value: newValue
        });
    };
    const handleServiceChange = (newValue) => {
        console.log('Service selected:', newValue);
        setSelectedService(newValue);
        setSelectedProjectType('');
        setSelectedSubService('');
    };

    const handleProjectTypeChange = (newValue) => {
        console.log('Project Type selected:', newValue);
        setSelectedProjectType(newValue);
        setSelectedSubService('');
    };

    const handleSubServiceChange = (newValue) => {
        setSelectedSubService(newValue);
    };

    const handleCurrencyChange = (newValue) => {
        console.log('Currency selected:', newValue);
        setSelectedCurrency(newValue);
    };

    const handleDurationChange = (newValue) => {
        console.log('Project Duration selected:', newValue);
        setProjectDuration(newValue);
    };

    const handleExperienceChange = (newValue) => {
        console.log('Years of Experience selected:', newValue);
        setExperience(newValue);
    };

    const handleOpeningsChange = (newValue) => {
        const value = Math.max(1, Math.min(25, newValue));
        console.log('Number of Openings selected:', value);
        setOpenings(value);
    };
    const selectDoc = async () => {
        try {
            const result = await DocumentPicker.pick({
                type: [DocumentPicker.types.doc, DocumentPicker.types.docx],
                allowMultiSelection: false,
            });
            setSelectedDocument(result[0]);
            console.log('Selected document:', result[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document selection cancelled');
            } else {
                console.error('Error picking document:', err);
            }
        }
    };

    const handleSubmit = async () => {
        console.log('Submitting form...');

        // Validate required fields before submission
        if (!selectedCountry.name || !selectedState.name || !selectedCity.name) {
            showMessage({
                message: 'Please fill in all location fields',
                type: 'warning',
            });
            return;
        }

        // Create FormData object
        const formData = new FormData();

        // Append simple string values
        formData.append('country', selectedCountry.name);
        formData.append('state', selectedState.name);
        formData.append('city', selectedCity.name);
        formData.append('serviceType', selectedService);
        formData.append('projectType', selectedProjectType);
        formData.append('projectTitle', selectedSubService);
        formData.append('projectDuration', projectDuration);
        formData.append('jobTitle', jobTitle);
        formData.append('noOfOpenings', openings.toString());
        formData.append('yearsOfExperience', experience);
        formData.append('currency', selectedCurrency);
        formData.append('budget', budget);
        formData.append('description', requirement);

        // Handle document attachment
        if (selectedDocument) {
            // Create file object with correct structure
            const fileToUpload = {
                uri: Platform.OS === 'ios' ?
                    selectedDocument.uri.replace('file://', '') :
                    selectedDocument.uri,
                type: selectedDocument.type || 'application/msword', // fallback mime type
                name: selectedDocument.name || 'document.doc',
            };
            formData.append('document', fileToUpload);
        }

        // Log the formData for debugging
        console.log('Form data prepared:', Object.fromEntries(formData._parts));

        try {
            // Check if we have a valid token
            if (!token) {
                throw new Error('No authentication token found');
            }

            // Set timeout for the fetch request
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout

            const response = await fetch('https://backend-sec-weroute.onrender.com/backend_sec/User/home', {
                method: 'POST',
                body: formData,
                headers: {
                    'Authorization': `Bearer ${token}`,
                    // Don't set Content-Type header - let fetch set it automatically with boundary
                },
                signal: controller.signal
            });

            // Clear timeout
            clearTimeout(timeoutId);

            // Parse response
            let responseData;
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('application/json')) {
                responseData = await response.json();
            } else {
                responseData = await response.text();
            }

            console.log('Response status:', response.status);
            console.log('Response data:', responseData);

            if (response.ok) {
                showMessage({
                    message: 'Got your request! Thank you for your interest',
                    type: 'success',
                });
                setShowFeedback(true);
            } else {
                if (response.status === 401) {
                    // Token expired or invalid
                    await AsyncStorage.removeItem('userToken');
                    showMessage({
                        message: 'Session expired. Please login again',
                        type: 'warning',
                    });
                    navigation.navigate('Login');
                    return;
                }

                throw new Error(responseData.message || 'Internal server error, please check your internet connectivity and try again');
            }
        } catch (error) {
            console.error('Error submitting form:', error);

            if (error.name === 'AbortError') {
                showMessage({
                    message: 'Request timed out. Please check your internet connection',
                    type: 'danger',
                });
            } else if (!navigator.onLine) {
                showMessage({
                    message: 'No internet connection. Please check your network and try again',
                    type: 'danger',
                });
            } else {
                showMessage({
                    message: 'Internal server error, please check your internet connectivity and try again',
                    type: 'danger',
                });
            }
        }
    };

    return (
        <View style={styles.container}>
            <AppHeader
                navigation={navigation}
                title="New Requirement"
            />
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <LinearGradient
                    colors={['#1E3B70', '#1e5a7c']}
                    style={styles.sectionContainer}
                >
                    <Box>
                        <VStack space={4} alignItems="stretch">
                            <Input
                                placeholder="Name"
                                bg="white"
                                borderRadius={20}
                                value={userName}
                            />
                            <AppDropDown
                                value={selectedCountry.iso2}
                                onChange={handleCountryChange}
                                placeholder={'Country'}
                                editable={false}
                                renderSelectItems={() => (
                                    countries.map(country => (
                                        <Select.Item key={country.value} label={country.label} value={country.value} />
                                    ))
                                )}
                                errorMessage="Please select a country"
                            />

                            <AppDropDown
                                value={selectedState.iso2}
                                onChange={handleStateChange}
                                placeholder={'State'}
                                editable={false}
                                renderSelectItems={() => (
                                    states.map(state => (
                                        <Select.Item key={state.value} label={state.label} value={state.value} />
                                    ))
                                )}
                                errorMessage="Please select a state"
                                isDisabled={!selectedCountry.iso2}
                            />

                            <AppDropDown
                                value={selectedCity.value}
                                onChange={handleCityChange}
                                placeholder={'City'}
                                editable={false}
                                renderSelectItems={() => (
                                    cities.map(city => (
                                        <Select.Item key={city.value} label={city.label} value={city.value} />
                                    ))
                                )}
                                errorMessage="Please select a city"
                                isDisabled={!selectedState.iso2}
                            />
                            <AppDropDown
                                value={selectedService}
                                onChange={handleServiceChange}
                                placeholder={'Our Services'}
                                editable={false}
                                renderSelectItems={() => (
                                    serviceOptions.map(option => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))
                                )}
                                errorMessage="Please select a service" />

                            {selectedService === 'Project' && (
                                <>
                                    <AppDropDown
                                        value={selectedProjectType}
                                        onChange={handleProjectTypeChange}
                                        placeholder={'Project Type'}
                                        editable={false}
                                        renderSelectItems={() => (
                                            projectTypeOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select a project type" />
                                    {selectedProjectType && (
                                        <AppDropDown
                                            value={selectedSubService}
                                            onChange={handleSubServiceChange}
                                            placeholder={'Project Title'}
                                            editable={false}
                                            renderSelectItems={() => (
                                                subServiceOptions[selectedProjectType].map(option => (
                                                    <Select.Item key={option.value} label={option.label} value={option.value} />
                                                ))
                                            )}
                                            errorMessage="Please select a sub-service" />
                                    )}
                                    {selectedProjectType && (
                                        <AppDropDown
                                            value={projectDuration}
                                            onChange={handleDurationChange}
                                            placeholder={'Project Duration'}
                                            editable={false}
                                            renderSelectItems={() => (
                                                durationOptions.map(option => (
                                                    <Select.Item key={option.value} label={option.label} value={option.value} />
                                                ))
                                            )}
                                            errorMessage="Please select project duration"
                                        />
                                    )}
                                    <AppDropDown
                                        value={selectedCurrency}
                                        onChange={handleCurrencyChange}
                                        placeholder={'Currency'}
                                        editable={false}
                                        borderColor={0}
                                        renderSelectItems={() => (
                                            currencyOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select a currency"
                                    />
                                    <Input
                                        // w="50%"
                                        placeholder="Budget"
                                        bg="white"
                                        borderRadius={20}
                                        keyboardType="default"
                                        value={budget}
                                        onChangeText={setBudget}
                                    />
                                </>
                            )}

                            {selectedService === 'Sourcing' && (
                                <>
                                    <Input
                                        placeholder="Job Title"
                                        bg="white"
                                        borderRadius={20}
                                        value={jobTitle}
                                        onChangeText={setJobTitle}
                                    />
                                    <HStack space={2} alignItems="center">
                                        <Text color={Colors.white} >No. of Openings:</Text>
                                        <Button
                                            onPress={() => handleOpeningsChange(openings - 1)}
                                            size={FontSizes.tiny}
                                        >
                                            -
                                        </Button>
                                        <Input
                                            w="20%"
                                            placeholder="1"
                                            bg="white"
                                            borderRadius={20}
                                            keyboardType="numeric"
                                            value={openings.toString()}
                                            onChangeText={(text) => handleOpeningsChange(parseInt(text, 10) || 1)}
                                            textAlign="center"
                                            fontSize={FontSizes.small}
                                        />
                                        <Button
                                            onPress={() => handleOpeningsChange(openings + 1)}
                                            size={FontSizes.tiny}
                                        >
                                            +
                                        </Button>
                                    </HStack>

                                    <AppDropDown
                                        value={selectedCurrency}
                                        onChange={handleCurrencyChange}
                                        placeholder={'Currency'}
                                        editable={false}
                                        renderSelectItems={() => (
                                            currencyOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select a currency"
                                    />
                                    <Input
                                        // w="50%"
                                        placeholder="Budget"
                                        bg="white"
                                        borderRadius={20}
                                        keyboardType="default"
                                        value={budget}
                                        onChangeText={setBudget}
                                    />
                                    <AppDropDown
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        placeholder={'Years of Experience'}
                                        editable={false}
                                        renderSelectItems={() => (
                                            experienceOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select years of experience"
                                    />
                                </>
                            )}
                            <TextArea
                                value={requirement}
                                onChangeText={setRequirement}
                                h={20}
                                placeholder="Brief your requirement"
                                w="100%"
                                maxW="350"
                                backgroundColor={Colors.white}
                                mt={2} />
                            <Pressable onPress={selectDoc} bgColor={Colors.primary} padding={10} borderRadius={10} mt={2}>
                                <Text color={Colors.white}>
                                    {selectedDocument ? `Selected: ${selectedDocument.name}` : 'Select Document (.doc/.docx)'}
                                </Text>
                            </Pressable>

                        </VStack>
                    </Box>
                </LinearGradient>

                <Box mb={10} p={5}>
                    <AppButton onPress={handleSubmit} title="Submit" mt={4} />
                </Box>
            </ScrollView>
            <FeedbackModal
                isVisible={showFeedback}
                onClose={() => setShowFeedback(false)}
                onSubmit={async (feedbackData) => {
                    console.log('Feedback:', feedbackData);

                    showMessage({
                        message: 'Thank you for your feedback!',
                        type: 'success',
                    });
                    navigation.navigate('Home');
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
        //marginTop: 10,
        padding: 15,
        // paddingStart: 10,
        // paddingTop: 10,
        //paddingEnd: 10,
        //paddingLeft: 10,
    },
    sectionContainer: {
        //backgroundColor: '#E6E6FA',
        borderRadius: 20,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 8,
        marginBottom: 15,
    },
});

export default Form;
