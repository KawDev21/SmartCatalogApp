import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SectionHeader({ title, subtitle }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {subtitle ? <Text style={styles.subtitle}>{subtitle}</Text> : null}
        </View>
    );
}

export { SectionHeader };

const styles = StyleSheet.create({
    container: {
        marginBottom: 12,
    },
    title: {
        fontSize: 20,
        fontWeight: '700',
        color: '#1C1C1E',
    },
    subtitle: {
        fontSize: 14,
        color: '#6E6E73',
        marginTop: 2,
    },
});