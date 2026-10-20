import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Button from './Button';

export default function Card({ item, onPressAction }) {
    return (
        <View style={styles.cardContainer}>
            <Image
                source={{ uri: item.imageUrl }}
                style={styles.image}
                resizeMode="cover"
            />
            <View style={styles.infoContainer}>
                <View style={styles.categoryBadge}>
                    <Text style={styles.categoryText}>{item.category}</Text>
                </View>
                <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
                    {item.title}
                </Text>
                <Text style={styles.rating}>⭐ {item.rating.toFixed(1)}</Text>
                <Text style={styles.price}>{item.price}</Text>
                <Button
                    title="Beli Sekarang"
                    variant="primary"
                    onPress={() => onPressAction(item)}
                    style={styles.actionButton}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 12,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignItems: 'center',
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 8,
        backgroundColor: '#F2F2F7',
    },
    infoContainer: {
        flex: 1,
        marginLeft: 14,
    },
    categoryBadge: {
        alignSelf: 'flex-start',
        backgroundColor: '#E5F1FF',
        paddingHorizontal: 8,
        paddingVertical: 2,
        borderRadius: 4,
        marginBottom: 4,
    },
    categoryText: {
        fontSize: 11,
        color: '#007AFF',
        fontWeight: '600',
    },
    title: {
        fontSize: 16,
        fontWeight: '600',
        color: '#1C1C1E',
    },
    rating: {
        fontSize: 12,
        color: '#8E8E93',
        marginVertical: 2,
    },
    price: {
        fontSize: 15,
        fontWeight: '700',
        color: '#34C759',
        marginBottom: 8,
    },
    actionButton: {
        alignSelf: 'flex-start',
        paddingVertical: 6,
        paddingHorizontal: 12,
    },
});

export { Card };