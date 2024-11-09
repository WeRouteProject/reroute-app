/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {
    Modal,
    View,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    Dimensions,
} from 'react-native';
import { Box, Text, VStack, HStack } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AppButton from '../../Common/AppButton';
import LinearGradient from 'react-native-linear-gradient';

const FeedbackModal = ({ isVisible, onClose, onSubmit }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState('');

    const handleStarPress = (selectedRating) => {
        setRating(selectedRating);
    };

    const handleSubmit = () => {
        onSubmit({ rating, comment });
        setRating(0);
        setComment('');
        onClose();
    };

    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <TouchableOpacity
                    key={i}
                    onPress={() => handleStarPress(i)}
                    style={styles.starContainer}
                >
                    <Icon
                        name={i <= rating ? 'star' : 'star-border'}
                        size={40}
                        color={i <= rating ? '#FFD700' : '#808080'}
                    />
                </TouchableOpacity>
            );
        }
        return stars;
    };

    return (
        <Modal
            visible={isVisible}
            transparent
            animationType="fade"
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <LinearGradient
                    colors={['#1E3B70', '#1e5a7c']}
                    style={styles.modalContent}
                >
                    <VStack space={4} alignItems="center">
                        <Text style={styles.title}>How was your experience?</Text>

                        <Box>
                            <Text style={styles.subtitle}>Rate our service</Text>
                            <HStack space={2} justifyContent="center" mt={2}>
                                {renderStars()}
                            </HStack>
                        </Box>

                        <Box width="100%">
                            <Text style={styles.subtitle}>Additional Comments</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Share your thoughts..."
                                placeholderTextColor="#666"
                                value={comment}
                                onChangeText={setComment}
                                multiline
                                numberOfLines={4}
                            />
                        </Box>

                        <HStack space={2} width="50%" justifyContent="center" mt={2}>
                            <AppButton
                                title="Cancel"
                                onPress={onClose}
                                style={styles.cancelButton}
                            />
                            <AppButton
                                title="Submit"
                                onPress={handleSubmit}
                                disabled={rating === 0}
                                style={styles.submitButton}
                            />
                        </HStack>
                    </VStack>
                </LinearGradient>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        width: Dimensions.get('window').width * 0.9,
        padding: 20,
        borderRadius: 15,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 14,
        color: '#fff',
        marginBottom: 5,
    },
    starContainer: {
        padding: 5,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        textAlignVertical: 'top',
        marginTop: 5,
        color: '#000',
    },
    cancelButton: {
        backgroundColor: '#6c757d',
        width: '40%',
    },
    submitButton: {
        width: '40%',
    },
});

export default FeedbackModal;
