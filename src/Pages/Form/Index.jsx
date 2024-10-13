/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Box, Select, TextArea, Input, ScrollView, Text, VStack, HStack, Button, Pressable, Toast } from 'native-base';
import { StyleSheet, View } from 'react-native';
import DocumentPicker from 'react-native-document-picker';
import AppDropDown from '../../Common/AppDropDown';
import AppButton from '../../Common/AppButton';
import { useNavigation } from '@react-navigation/native';
import AppHeader from '../../Common/AppHeader';
import LinearGradient from 'react-native-linear-gradient';
import { Colors, FontSizes } from '../../Common/Utils/Constants';

const Form = () => {
    const [selectedCountry, setSelectedCountryValue] = useState('');
    const [selectedState, setSelectedStateValue] = useState('');
    const [selectedCity, setSelectedCityValue] = useState('');
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
    const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(false);

    const navigation = useNavigation();


    const options = [
        { label: 'Option 1', value: 'option1' },
        { label: 'Option 2', value: 'option2' },
        // Add more options as needed
    ];

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
        setSelectedProjectType('');
        setSelectedSubService('');
    };

    const handleProjectTypeChange = (newValue) => {
        setSelectedProjectType(newValue);
        setSelectedSubService('');
    };

    const handleSubServiceChange = (newValue) => {
        setSelectedSubService(newValue);
    };

    const handleCurrencyChange = (newValue) => {
        setSelectedCurrency(newValue);
    };

    const handleDurationChange = (newValue) => {
        setProjectDuration(newValue);
    };

    const handleExperienceChange = (newValue) => {
        setExperience(newValue);
    };

    // const handleSubmit = () => {
    //     navigation.navigate('Feedback');
    // };

    const handleOpeningsChange = (newValue) => {
        const value = Math.max(1, Math.min(25, newValue));
        setOpenings(value);
    };
    const selectDoc = async () => {
        try {
            const doc = await DocumentPicker.pick({
                type: [DocumentPicker.types.doc, DocumentPicker.types.docx],
                allowMultiSelection: false,
            });
            setSelectedDocument(doc[0]);
            console.log('Selected document:', doc[0]);
        } catch (err) {
            if (DocumentPicker.isCancel(err)) {
                console.log('Document selection cancelled');
            } else {
                console.error('Error picking document:', err);
            }
        }
    };
    const handleSubmit = async () => {
        const formData = new FormData();

        formData.append('country', selectedCountry);
        formData.append('state', selectedState);
        formData.append('city', selectedCity);
        formData.append('serviceType', selectedService);
        formData.append('projectType', selectedProjectType);
        formData.append('projectTitle', selectedSubService);
        formData.append('projectDuration', projectDuration);
        formData.append('usd', selectedCurrency);
        formData.append('budget', budget);
        formData.append('description', setRequirement);

        if (selectedDocument) {
            formData.append('document', {
                uri: selectedDocument.uri,
                type: selectedDocument.type,
                name: selectedDocument.name,
            });
        }

        try {
            const response = await fetch('https://backend-sec-weroute.onrender.com/backend_sec/User/home', {
                method: 'POST',
                body: formData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log(response);

            if (response.ok) {
                Toast.show({
                    title: "Form Submitted",
                    status: "success",
                    description: "Your form has been successfully submitted.",
                });
                navigation.navigate('Feedback');
            } else {
                throw new Error('Server responded with an error');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            Toast.show({
                title: "Submission Failed",
                status: "error",
                description: "There was an error submitting your form. Please try again.",
            });
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
                            />
                            <AppDropDown
                                value={selectedCountry}
                                onChange={handleCountryChange}
                                placeholder={'Country'}
                                renderSelectItems={() => (
                                    options.map(option => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))
                                )}
                                errorMessage="Please select an option" />
                            <AppDropDown
                                value={selectedState}
                                onChange={handleStateChange}
                                placeholder={'State'}
                                renderSelectItems={() => (
                                    options.map(option => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))
                                )}
                                errorMessage="Please select an option" />
                            <AppDropDown
                                value={selectedCity}
                                onChange={handleCityChange}
                                placeholder={'City'}
                                renderSelectItems={() => (
                                    options.map(option => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))
                                )}
                                errorMessage="Please select an option" />
                            <AppDropDown
                                value={selectedService}
                                onChange={handleServiceChange}
                                placeholder={'Our Services'}
                                renderSelectItems={() => (
                                    serviceOptions.map(option => (
                                        <Select.Item key={option.value} label={option.label} value={option.value} />
                                    ))
                                )}
                                errorMessage="Please select a service" />
                            {/* {selectedService === 'Project' && (
                                <AppDropDown
                                    value={selectedProjectType}
                                    onChange={handleProjectTypeChange}
                                    placeholder={'Project Type'}
                                    renderSelectItems={() => (
                                        projectTypeOptions.map(option => (
                                            <Select.Item key={option.value} label={option.label} value={option.value} />
                                        ))
                                    )}
                                    errorMessage="Please select a project type" />
                            )} */}
                            {selectedService === 'Project' && (
                                <>
                                    <AppDropDown
                                        value={selectedProjectType}
                                        onChange={handleProjectTypeChange}
                                        placeholder={'Project Type'}
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
                                    {/* <AppDropDown
                                        value={projectDuration}
                                        onChange={handleDurationChange}
                                        placeholder={'Project Duration'}
                                        renderSelectItems={() => (
                                            durationOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select project duration"
                                    /> */}
                                    <AppDropDown
                                        value={experience}
                                        onChange={handleExperienceChange}
                                        placeholder={'Years of Experience'}
                                        renderSelectItems={() => (
                                            experienceOptions.map(option => (
                                                <Select.Item key={option.value} label={option.label} value={option.value} />
                                            ))
                                        )}
                                        errorMessage="Please select years of experience"
                                    />
                                    {/* <GradientButton onPress={handlePdfUpload}>
                                        <Text color="white" bold>Upload PDF</Text>
                                    </GradientButton>
                                    {pdfFile && (
                                        <Text>File uploaded: {pdfFile.name}</Text>
                                    )} */}

                                    {/* <HStack space={2} alignItems="center">
                                        <Text color={Colors.white}>Upload JD (Job description): </Text>
                                        <Button
                                            onPress={handlePdfUpload}
                                            startIcon={<Icon name="attachment" color={Colors.white} size={20} />}
                                            bg="transparent"
                                            _text={{ color: Colors.white }}
                                        >
                                            {pdfFile ? 'Change File' : 'Upload'}
                                        </Button>
                                    </HStack>
                                    <View style={{ marginHorizontal: 40 }}>
                                        <Button title="Select Document" onPress={handlePdfUpload} />
                                    </View> */}
                                </>
                            )}
                            <TextArea
                            value={requirement}
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

                <AppButton onPress={handleSubmit} title="Submit" mt={4} />
            </ScrollView>
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
