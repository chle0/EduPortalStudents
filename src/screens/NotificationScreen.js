import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Image } from "react-native";

const notifications = [
    {
        id: "1",
        title: "March Date sheet",
        description: "Applications for Google companies have entered for company review",
        time: "5 minutes ago",
        image: require('../assets/images/date_sheet.png'),
        backgroundColor: "#FFECDE",
        imageBackgroundColor: '#FFFFFF'
    },
    {
        id: "2",
        title: "Last month test Result",
        description: "Applications for Dribbble companies have entered for company review",
        time: "45 minutes ago",
        image: require('../assets/images/results.png'),
        backgroundColor: "#FFFFFF",
        imageBackgroundColor: '#F3DBDC'

    },
    {
        id: "3",
        title: "This month Fees Pending",
        description: "Applications for Twitter companies have entered for company review",
        time: "5 Hours ago",
        image: require('../assets/images/dues_image.png'),
        backgroundColor: "#FFFFFF",
        imageBackgroundColor: '#FFE7D4'

    },
];


const NotificationScreen = (props) => {
    const navigation = useNavigation();


    const renderItem = ({ item }) => (
        <TouchableOpacity

            onPress={() => navigation.navigate("NotificationDetail", { item })}
            style={[styles.notificationItem, { backgroundColor: item.backgroundColor,marginHorizontal:16 }]}>

            <View

                style={[styles.notificationImageBg, { backgroundColor: item.imageBackgroundColor }]}
            >
                <Image source={item.image} style={styles.notificationImage} />
            </View>
            <View style={styles.notificationContent}>
                <Text style={styles.notificationTitle}>{item.title}</Text>
                <Text style={styles.notificationDescription}>{item.description}</Text>
                <View style={styles.itemSpace}>
                    <Text style={styles.notificationTime}>{item.time}</Text>
                    <Text style={styles.deleteText}>Delete</Text>

                </View>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
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
            <FlatList
                data={notifications}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </View>
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
        elevation: 1

    },
    arrowIcon: {
        marginLeft: 10,
        color: '#000'
    },
    headerTitle: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        color: "#000000",
        marginRight: 10
    },
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20,
        backgroundColor: "#FFF",
        marginRight: 16,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 4,
    },
    description: {
        fontSize: 14,
        color: "#6B7280",
        marginBottom: 8,
    },
    itemSpace: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    time: {
        fontSize: 12,
        color: "#9CA3AF",
    },
    deleteText: {
        fontSize: 12,
        color: "#FF7C1B",
        fontWeight: "400",
        marginRight: 10
    },

    notificationItem: {
        flexDirection: 'row',
        padding: 15,
        marginVertical: 5,
        borderRadius: 10,
    },

    notificationImageBg: {
        padding: 10,
        borderRadius: 30,
        width: 40,
        height: 40,
        marginRight: 15,
        marginTop: 15
    },
    notificationImage: {
        width: 20,
        height: 18,
        resizeMode: 'contain',
        marginRight: 15,
    },
    notificationContent: {
        flex: 1,
    },
    notificationTitle: {
        fontSize: 14,
        fontWeight: '700',
        color: '#150B3D',
    },
    notificationDescription: {
        fontSize: 12,
        color: '#524B6B',
        fontWeight: '400',
        marginVertical: 5,
    },
    notificationTime: {
        fontSize: 12,
        color: '#AAA6B9',
        fontWeight: '400',
    },
});

export default NotificationScreen;
