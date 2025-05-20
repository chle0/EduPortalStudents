import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const navigation = useNavigation();

  const menuItems = [
    { label: 'Notification', image: require('../assets/images/school_info.png'), bgColor: '#DBFAE3' },
    { label: 'Fee History', image: require('../assets/images/dues_image.png'), bgColor: '#FFE7D4' },
    { label: 'Results', image: require('../assets/images/results.png'), bgColor: '#FCDCDD' },
    { label: 'Attendance', image: require('../assets/images/finger_scan.png'), bgColor: '#D3F1E3' },
    { label: 'Time Table', image: require('../assets/images/time_table.png'), bgColor: '#E4E2FD' },
    { label: 'View Diary', image: require('../assets/images/diary.png'), bgColor: '#DEF9F7' },
    { label: 'Date Sheet', image: require('../assets/images/date_sheet.png'), bgColor: '#FFF3E2' },
    { label: 'Online Lecture', image: require('../assets/images/lecture.png'), bgColor: '#F4ECFD' },
    { label: 'School Info', image: require('../assets/images/school_info.png'), bgColor: '#DBFAE3' },
    { label: 'Complaints', image: require('../assets/images/complaints.png'), bgColor: '#F1F1C9' },
  ];
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props} contentContainerStyle={{ flexGrow: 1 }}>

        <ImageBackground
          style={styles.header}
          source={require('../assets/images/header.png')}
          imageStyle={{ borderRadius: 10 }}
        >
          <View style={styles.contentContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.studentProfile}>Student Profiles</Text>
              <Text style={styles.cardText}>Tap the card and enter profiles</Text>
            </View>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: 'https://images.pexels.com/photos/31887348/pexels-photo-31887348/free-photo-of-elegant-spring-white-flowers-in-bloom.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' }}
                style={styles.profileImage}
              />
            </View>
          </View>
        </ImageBackground>


        <View style={{ marginTop: 10 }}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.menuItem}
              onPress={() => {
                if (item.label === 'Notification') {
                  navigation.navigate('NotificationScreen');
                }
                else if (item.label === 'Fee History') {
                  navigation.navigate('FeeHistory');

                }
                else if (item.label === 'View Diary') {
                  navigation.navigate('DiaryScreen');

                }
                else if (item.label == "Results") {
                  navigation.navigate('ResultScreen');

                }
              }}
            >
              <View
                style={[styles.drawerImageView, { backgroundColor: item.bgColor }]}
              >
                <Image source={item.image} style={styles.menuImage} />
              </View>
              <Text style={styles.menuLabel}>{item.label}</Text>
              <Image source={require('../assets/images/arrow_right.png')} style={styles.arrowImage} />
            </TouchableOpacity>
          ))}
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>

      <TouchableOpacity style={styles.logoutButton} onPress={() => console.log('Logout')}>
        <Icon name="logout" size={24} color="red" />
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({

  header: {
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#007BFF',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  studentProfile: {
    fontSize: 22,
    fontWeight: '700',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.8)',
    fontWeight: '500',

  },
  textContainer: {
    flex: 1,
  },
  imageContainer: {
    borderWidth: 2,
    borderColor: '#FF7F50',
    borderRadius: 50,
    overflow: 'hidden',
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 50,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
  },
  logoutText: {
    marginLeft: 10,
    fontSize: 16,
    color: 'red',
    fontWeight: 'bold',
  },
  drawerImageView: {
    width: '10%',
    alignItems: 'center',
    padding: 10,
    borderRadius: 8,
  },


  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuImage: {
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#4F4F4F',
    marginLeft: 12
  },
  arrowImage: {
    width: 10,
    height: 12,
    resizeMode: 'contain',
    color: '#343434',
    marginRight: 15
  },
});

export default CustomDrawer;
