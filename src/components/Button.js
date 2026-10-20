import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({
    title,
    onPress,
    variant = 'primary',
    disabled = false,
    style,
}) {
    const isDisabled = disabled || variant === 'disabled';

    const getButtonStyle = () => {
        if (variant === 'secondary') return [styles.button, styles.secondaryButton, style];
        if (isDisabled) return [styles.button, styles.disabledButton, style];
        return [styles.button, styles.primaryButton, style];
    };

    const getTextStyle = () => {
        if (variant === 'secondary') return [styles.text, styles.secondaryText];
        if (isDisabled) return [styles.text, styles.disabledText];
        return [styles.text, styles.primaryText];
    };

    return (
        <TouchableOpacity
            style={getButtonStyle()}
            onPress={onPress}
            disabled={isDisabled}
            activeOpacity={0.7}
        >
            <Text style={getTextStyle()}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        paddingVertical: 10,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButton: {
        backgroundColor: '#007AFF',
    },
    secondaryButton: {
        backgroundColor: '#E5E5EA',
    },
    disabledButton: {
        backgroundColor: '#D1D1D6',
    },
    text: {
        fontSize: 14,
        fontWeight: '600',
    },
    primaryText: {
        color: '#FFFFFF',
    },
    secondaryText: {
        color: '#1C1C1E',
    },
    disabledText: {
        color: '#8E8E93',
    },
});

export { Button };