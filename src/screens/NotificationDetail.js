import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from 'react-native';
import theme from '../config/theme';

const NotificationDetail = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity
                    onPress={() => props.navigation.goBack()}
                >
                    <Image
                        source={require('../assets/images/back_icon.png')}
                        style={styles.arrowIcon}
                    />

                </TouchableOpacity>
                <Text style={styles.headerTitle}>Mark as all read</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.card}>
                    <View style={styles.iconWrapper}>
                        <Image
                            source={require('../assets/images/date_sheet.png')}
                            style={styles.icon}
                        />
                    </View>

                    <Text style={styles.title}>10th Class Test</Text>
                    <Text style={styles.subtitle}>Google Inc · California, USA</Text>

                    <View style={styles.timeInfoWrapper}>
                        <Text style={styles.timeText}>
                            Shipped on March 14, 2024 at 11:30 am
                        </Text>
                        <Text style={styles.timeText}>Updated by recruiter 8 hours ago</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Test details</Text>
                        <Text style={styles.timeText}>March test</Text>
                        <Text style={styles.timeText}>Start time 9:00AM</Text>
                        <Text style={styles.timeText}>End time 1:00PM</Text>
                    </View>

                    <View style={styles.section}>
                        <Text style={styles.title}>Details</Text>
                        <Text style={[styles.timeText, { marginTop: 10 }]}>March test</Text>

                        <TouchableOpacity style={styles.pdfWrapper}>
                            <Image
                                source={require('../assets/images/pdf.png')}
                                style={styles.pdfIcon}
                            />
                            <View style={styles.pdfTextWrapper}>
                                <Text style={styles.pdfTitle}>March date sheet</Text>
                                <Text style={styles.pdfSubtitle}>
                                    867 Kb · 14 March 2024 at 11:30 am
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',

    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 16,
        backgroundColor: 'white',
        height: 50,
        width: '100%',
        padding: 16,
         shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation:1

    },
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
        padding: 16,
        marginHorizontal: 10,
        elevation: 1,
        shadowColor: '#000',
    },
    iconWrapper: {
        backgroundColor: '#DAA35633',
        width: 40,
        height: 40,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    icon: {
        width: 20,
        height: 20,
        color: '#DAA356'
    },
    title: {
        fontSize: 14,
        fontWeight: '700',
        color: '#150B3D',
        textAlign: 'left',
        marginBottom: 4,
        fontFamily: theme.fonts.dmSansBlack
    },
    subtitle: {
        fontSize: 12,
        color: '#150B3D',
        textAlign: 'left',
        fontWeight: '400',
        marginBottom: 16,
        fontFamily: theme.fonts.dmSansLight

    },
    timeInfoWrapper: {
        marginBottom: 16,
    },
    timeText: {
        fontSize: 12,
        fontWeight: '400',
        fontFamily: theme.fonts.dmSansRegular,
        color: '#524B6B',
        textAlign: 'left',
        marginBottom: 4,
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '500',
        color: '#333333',
        marginBottom: 8,
    },
    detailText: {
        fontSize: 14,
        color: '#555555',
        marginBottom: 4,
    },
    pdfWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 124, 27, 0.05)',
        padding: 12,
        borderRadius: 15,
        marginTop: 8,
    },
    pdfIcon: {
        width: 40,
        height: 40,
        marginRight: 12,
    },
    pdfTextWrapper: {
        flex: 1,
    },
    pdfTitle: {
        fontSize: 12,
        fontWeight: '400',
        color: '#150A33',
        fontFamily: theme.fonts.dmSansBlack
    },
    pdfSubtitle: {
        fontSize: 10,
        color: '#B5B6B7',
        fontWeight: '400',

        marginTop: 2,
    },
});

export default NotificationDetail;
