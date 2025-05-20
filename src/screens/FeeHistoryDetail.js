
import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    TouchableOpacity,
    PanResponder,
} from 'react-native';
import Background from '../components/Background';

const FeeHistoryDetail = ({ route }) => {
    const { item } = route.params;

    const images = [
        'https://images.pexels.com/photos/31449901/pexels-photo-31449901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/31887348/pexels-photo-31887348/free-photo-of-elegant-spring-white-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    ];

  const names = [
    'Grame',
    'Mike',
  ];

  const rollNo = [
    '04',
    '21',
  ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleSwap = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const nextIndex = (currentIndex + 1) % images.length;

    const panResponder = PanResponder.create({
        onMoveShouldSetPanResponder: (evt, gestureState) => {
            return Math.abs(gestureState.dx) > 20;
        },
        onPanResponderRelease: (evt, gestureState) => {
            if (gestureState.dx < -50) {
                handleSwap();
            }
        },
    });

    return (
        <Background useImage={false}>
            <SafeAreaView style={styles.SafeAreaView}>
                <ScrollView contentContainerStyle={styles.container}>
                    <ImageBackground style={styles.header}
                        source={require('../assets/images/header.png')}
                        imageStyle={{ borderRadius: 10 }}
                    >
                        <Text style={styles.schoolName}>The City School</Text>
                        <View style={styles.profileContainer}>
                            <View style={styles.studentInfo}>
                                <Text style={styles.studentName}>{names[currentIndex]}</Text>
                                <Text style={styles.studentDetails}>Class XI-B | {rollNo[currentIndex]}</Text>
                                <View style={styles.sessionContainer}>
                                    <Text style={styles.session}>2023-2024</Text>
                                </View>
                            </View>

                            <View style={styles.imageWrapper} {...panResponder.panHandlers}>
                                <View style={{ flexDirection: 'row', width: '100%', marginLeft: 20 }}>
                                    <View
                                        style={[styles.imageContainer, { borderColor: '#FF7F50', borderWidth: 3 }]}
                                    >
                                        <Image
                                            source={{ uri: images[currentIndex] }}
                                            style={[styles.profileImage, { width: 95, height: 95 }]}
                                        />
                                    </View>
                                    <View
                                        style={[
                                            styles.imageContainer,
                                            styles.backImageContainer,
                                            { borderColor: '#a0d9ef', borderWidth: 2 },
                                        ]}
                                    >
                                        <Image
                                            source={{ uri: images[nextIndex] }}
                                            style={[styles.profileImage, { width: 65, height: 65 }]}
                                        />
                                    </View>
                                </View>

                                <View style={styles.indicatorContainer}>
                                    {images.map((img, idx) => (
                                        <View
                                            key={idx}
                                            style={
                                                idx === currentIndex
                                                    ? [styles.roundedRectangle, { backgroundColor: '#FF7C1B' }]
                                                    : styles.circle
                                            }
                                        />
                                    ))}
                                </View>
                            </View>
                        </View>
                    </ImageBackground>

                    <View style={styles.detailCard}>
                        <View style={styles.row}>
                            <Text style={styles.receiptTitle}>Receipt No.</Text>
                            <Text style={styles.receiptNumber}>#98431</Text>
                        </View>
                        <View style={styles.rowBorder} />
                        <View style={styles.row}>
                            <Text style={styles.label}>Class:</Text>
                            <Text style={styles.value}>XI-B</Text>
                        </View>
                        <View style={styles.rowBorder} />

                        <View style={styles.row}>
                            <Text style={styles.label}>Fee Status:</Text>
                            <View style={[styles.statusIndicator, item.status === 'Paid' ? styles.paid : styles.unpaid]}>
                                <Text style={styles.statusText}>{item.status}</Text>
                            </View>
                        </View>
                        <View style={styles.rowBorder} />

                        <View style={styles.row}>
                            <Text style={styles.label}>Month:</Text>
                            <Text style={styles.value}>February</Text>
                        </View>
                        <View style={styles.rowBorder} />

                        <View style={styles.row}>
                            <Text style={styles.label}>Payment Date:</Text>
                            <Text style={styles.value}>10 Feb 2024</Text>
                        </View>
                        <View style={styles.rowBorder} />

                        <View style={styles.row}>
                            <Text style={styles.label}>Pay Mode:</Text>
                            <Text style={styles.value}>Cash on Counter</Text>
                        </View>
                        <View style={styles.rowBorder} />

                        <View style={styles.row}>
                            <Text style={styles.label}>Total Amount:</Text>
                            <Text style={styles.value}>6400 Rs</Text>
                        </View>
                        <View style={styles.rowBorder} />

                        <TouchableOpacity
                            style={[styles.downloadButton, { backgroundColor: item.status === 'Paid' ? '#FF7C1B' : '#AAAAAA' }]}
                        >
                            <Text style={styles.downloadText}>DOWNLOAD</Text>
                            <Image
                                source={require('../assets/images/download.png')}
                                style={styles.downloadIcon}
                            />
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </SafeAreaView>
        </Background>
    );
};

const styles = StyleSheet.create({
    SafeAreaView: {
        flex: 1,
        width: '100%',
    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
        flexGrow: 1,
    },
    imageWrapper: {
        position: 'relative',
        marginLeft: 25,
        alignSelf: 'center',
    },

    backImageContainer: {
        position: 'absolute',
        top: 20,
        zIndex: 0,
        left: 50,
        borderWidth: 2,
        borderColor: '#a0d9ef',
    },

    imageContainer: {
        borderWidth: 3,
        borderColor: '#FF7F50',
        borderRadius: 75,
        overflow: 'hidden',
        zIndex: 1,
    },

    profileImage: {
        width: 95,
        height: 95,
        borderRadius: 10,
    },

    indicatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 20
    },

    roundedRectangle: {
        width: 25,
        height: 10,
        backgroundColor: '#FF7C1B',
        borderRadius: 7,
        marginRight: 5,
    },

    circle: {
        width: 10,
        height: 10,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
        marginRight: 5,

    },
    header: {
        padding: 20,
        margin: 10,
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: 10,
        overflow: 'hidden',
    },
    schoolName: {
        fontSize: 12,
        fontWeight: '500',
        alignSelf: "flex-start",
        color: 'rgba(255, 255, 255, 0.8)',
    },
    profileContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    studentName: {
        fontSize: 30,
        color: 'white',
        fontWeight: '700',
    },
    studentDetails: {
        fontSize: 14,
        marginTop: 5,
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    sessionContainer: {
        backgroundColor: '#FF7C1B',
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 5,
        alignSelf: 'flex-start',
        marginTop: 10,
    },
    session: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
        color: 'rgba(255, 255, 255, 0.8)',
    },
    detailCard: {
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 15,
        margin: 10,
        elevation: 1,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
    },
    receiptTitle: {
        fontSize: 14,
        fontWeight: '400',
        color: '#777777',
    },
    receiptNumber: {
        fontSize: 14,
        fontWeight: '700',
        color: '#3A3A3A',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        fontWeight: '400',
        color: '#777777',
    },
    value: {
        fontSize: 14,
        fontWeight: '700',
        color: '#3A3A3A',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    rowBorder: {
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
        marginBottom: 10,
    },
    statusIndicator: {
        borderRadius: 10,
        paddingVertical: 3,
        paddingHorizontal: 18,
        marginTop: 5,
    },
    paid: {
        backgroundColor: '#00D115',
    },
    unpaid: {
        backgroundColor: '#FF7C1B',
    },
    statusText: {
        color: 'white',
        fontWeight: '500',
        fontSize: 12
    },

    downloadButton: {
        borderRadius: 10,
        paddingVertical: 10,
        alignItems: 'center',
        marginTop: 20,
        width: '100%',
        paddingHorizontal: 0,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    downloadIcon: {
        width: 15,
        height: 15,
        marginLeft: 5,
        resizeMode: 'cover'
    },
    downloadText: {
        color: 'white',
        fontWeight: '700',
        fontSize: 14,
    },
});

export default FeeHistoryDetail;