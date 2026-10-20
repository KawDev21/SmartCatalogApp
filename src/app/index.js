import React, { useState, useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {

    View,
    FlatList,
    Text,
    StyleSheet,
    Alert,
    ScrollView,
    ActivityIndicator,
} from 'react-native';

// Module Imports (Pertemuan 1 & 2)
import { ITEMS_DATA } from '../data/itemsData';
import Card from '../components/Card';
import Button from '../components/Button';
import SectionHeader from '../components/SectionHeader';
import SearchBar from '../components/SearchBar';

export default function CatalogScreen() {
    // Pertemuan 1: useState Hook untuk State Management
    const [selectedCategory, setSelectedCategory] = useState('Semua');
    const [searchQuery, setSearchQuery] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    // Pertemuan 1: useEffect Hook & Lifecycle Management
    // 1. Mounting Phase: Mengatur efek awal saat komponen pertama kali dirender
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Mengubah state loading setelah 1 detik
        }, 1000);

        // Unmounting Phase: Cleanup function untuk membersihkan timer
        return () => clearTimeout(timer);
    }, []);

    // 2. Updating Phase: Efek samping yang berjalan setiap kali pencarian atau kategori berubah
    useEffect(() => {
        console.log(`[Lifecycle] Kategori: ${selectedCategory} | Kata Kunci: ${searchQuery}`);
    }, [selectedCategory, searchQuery]);

    const categories = ['Semua', 'Elektronik', 'Pakaian', 'Aksesori'];

    // Filter Data Gabungan (Kategori & Pencarian Teks)
    const filteredData = ITEMS_DATA.filter((item) => {
        const matchesCategory =
            selectedCategory === 'Semua' || item.category === selectedCategory;
        const matchesSearch = item.title
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const handleBuy = (item) => {
        // ES6: Template Literals (Pertemuan 2)
        Alert.alert('Transaksi', `Anda memilih untuk membeli: ${item.title}`);
    };

    const renderItem = ({ item }) => (
        <Card item={item} onPressAction={handleBuy} />
    );

    const renderItemSeparator = () => <View style={styles.separator} />;

    const renderListEmpty = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>
                {searchQuery
                    ? `Tidak ada produk dengan kata kunci "${searchQuery}"`
                    : 'Tidak ada produk pada kategori ini.'}
            </Text>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            {isLoading ? (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#007AFF" />
                    <Text style={styles.loadingText}>Memuat Katalog Produk...</Text>
                </View>
            ) : (
                <FlatList
                    data={filteredData}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    ItemSeparatorComponent={renderItemSeparator}
                    ListEmptyComponent={renderListEmpty}
                    contentContainerStyle={styles.listContent}
                    ListHeaderComponent={
                        <View style={styles.headerWrapper}>
                            <SectionHeader
                                title="SmartCatalog App"
                                subtitle="Temukan produk pilihan terbaik Anda di sini"
                            />
                            {/* Integrasi TextInput via SearchBar (Pertemuan 1) */}
                            <SearchBar
                                value={searchQuery}
                                onChangeText={setSearchQuery}
                                placeholder="Cari nama produk..."
                            />
                            {/* Filter Kategori */}
                            <ScrollView
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                contentContainerStyle={styles.filterContainer}
                            >
                                {categories.map((cat) => (
                                    <Button
                                        key={cat}
                                        title={cat}
                                        variant={selectedCategory === cat ? 'primary' : 'secondary'}
                                        onPress={() => setSelectedCategory(cat)}
                                        style={styles.filterButton}
                                    />
                                ))}
                            </ScrollView>
                        </View>
                    }
                />
            )}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    listContent: {
        padding: 16,
    },
    headerWrapper: {
        marginBottom: 16,
    },
    filterContainer: {
        flexDirection: 'row',
        marginTop: 8,
    },
    filterButton: {
        marginRight: 8,
    },
    separator: {
        height: 12,
    },
    emptyContainer: {
        padding: 32,
        alignItems: 'center',
    },
    emptyText: {
        fontSize: 14,
        color: '#8E8E93',
        textAlign: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        marginTop: 12,
        fontSize: 14,
        color: '#8E8E93',
    },
});