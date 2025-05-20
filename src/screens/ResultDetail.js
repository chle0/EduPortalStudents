import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    ImageBackground,
    Image,
    PanResponder,
} from 'react-native';

const ResultDetail = () => {
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
        <SafeAreaView style={styles.safeArea}>
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
                <View style={styles.headerContainer}>
                    <View style={{ alignSelf: 'center' }}>
                        <Text style={styles.performanceText}>
                            You are Excellent,
                        </Text>
                        <Text style={styles.highlightText}>Maryam !!</Text>
                    </View>
                    <ImageBackground
                        style={{ width: 90, height: 90 }}
                        source={require('../assets/images/img_grade.png')}
                        imageStyle={{ borderRadius: 10 }}

                    >
                        <View style={styles.gradeBadge}>
                            <View style={styles.gradeBadgeInner}>
                                <Text style={styles.gradePercentage}>85%</Text>
                                <Text style={styles.gradeText}>GRADE A</Text>
                            </View>
                            <View style={styles.starBadge}>
                                <Text style={styles.starText}>★</Text>
                            </View>
                        </View>
                    </ImageBackground>

                </View>

                <View style={styles.tableContainer}>
                    <View style={styles.marksColumnBackground}></View>
                    <View style={styles.gradeColumnBackground}></View>

                    {[
                        { subject: 'English', marks: 100, grade: 'B' },
                        { subject: 'Urdu', marks: 100, grade: 'B' },
                        { subject: 'Science', marks: 100, grade: 'B' },
                        { subject: 'Math', marks: 100, grade: 'B' },
                        { subject: 'Social Study', marks: 100, grade: 'B' },
                        { subject: 'Drawing', marks: 100, grade: 'B' },
                        { subject: 'Computer', marks: 100, grade: 'A' },
                    ].map((item, index) => (
                        <View key={index} style={styles.row}>
                            <Text style={styles.column1}>{item.subject}</Text>
                            <Text style={styles.column2}>{item.marks}</Text>
                            <Text style={styles.column3}>{`${item.grade === 'A' ? '96' : '74'}  —  ${item.grade}`}</Text>
                        </View>
                    ))}
                </View>


                <TouchableOpacity style={styles.downloadButton}>
                    <Text style={styles.downloadText}>DOWNLOAD PDF</Text>
                    <Image
                        source={require('../assets/images/pdf_icon.png')}
                        style={styles.icon}
                    />
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        width: '100%'

    },
    container: {
        width: '100%',
        justifyContent: 'flex-start',
        paddingHorizontal: 8,
        flexGrow: 1,
        backgroundColor: "white",
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
    headerContainer: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    performanceText: {
        fontSize: 15,
        fontWeight: '400',
        color: '#313131',
        textAlign: 'center',
    },
    highlightText: {
        fontWeight: '700',
        color: '#313131',
        fontSize: 26
    },
    gradeBadge: {
        marginTop: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#C2D7F2',
        borderRadius: 50,
        width: 75,
        height: 75,
        position: 'relative',
        marginLeft: 7
    },
    gradeBadgeInner: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    gradePercentage: {
        fontSize: 25,
        fontWeight: '700',
        color: '#000000',
    },
    gradeText: {
        fontSize: 10,
        fontWeight: '700',
        color: '#000000',
    },
    starBadge: {
        position: 'absolute',
        bottom: 5,
        left: -5,
        backgroundColor: '#FF7C1B',
        borderRadius: 20,
        width: 20,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    starText: {
        color: '#FFF',
        fontSize: 14,
        fontWeight: '700',
    },

    tableContainer: {
        position: 'relative',
        backgroundColor: '#FFF',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 1.5,
        overflow: 'hidden',
        paddingHorizontal: 16,
        paddingVertical: 10
    },
    marksColumnBackground: {
        position: 'absolute',
        left: '50%',
        top: 0,
        bottom: 0,
        width: '30%',
        backgroundColor: '#FFF4D1',
        zIndex: -1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    gradeColumnBackground: {
        position: 'absolute',
        left: '80%',
        top: 0,
        bottom: 0,
        width: '30%',
        backgroundColor: '#6AC25933',
        zIndex: -1,
    },
    row: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 16,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    column1: {
        flex: 2,
        fontSize: 14,
        color: '#313131',
        textAlign: 'left',
        fontWeight: '400',
    },
    column2: {
        flex: 1,
        fontSize: 14,
        fontWeight: '700',
        color: '#3A3A3A',
        textAlign: 'center',
    },
    column3: {
        flex: 1,
        fontSize: 14,
        color: '#3A3A3A',
        textAlign: 'right',
        fontWeight: '700',
    },


    downloadButton: {
        flexDirection: 'row',
        backgroundColor: '#FF7C1B',
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 20,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 1,
        justifyContent: 'center',
        marginBottom: 20
    },
    downloadText: {
        color: 'white',
        fontWeight: '700',
        marginRight: 5,
        fontSize: 14
    },
    icon: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
});

export default ResultDetail;