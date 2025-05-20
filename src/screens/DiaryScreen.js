import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  FlatList,
  PanResponder,
} from 'react-native';
import Background from '../components/Background';
import { useNavigation } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import moment from 'moment';



const DiaryScreen = () => {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState('Today Diary');
  const [currentMonth, setCurrentMonth] = useState(moment().format('YYYY-MM'));
  const [markedDates, setMarkedDates] = useState({});


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

  useEffect(() => {
    const startOfMonth = moment(currentMonth).startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment(currentMonth).endOf('month').format('YYYY-MM-DD');
    const dates = {};

    for (let day = moment(startOfMonth); day.isBefore(endOfMonth); day.add(1, 'days')) {
      const dayKey = day.format('YYYY-MM-DD');
      if (day.day() === 0) {
        dates[dayKey] = {
          selected: true,
          marked: true,
          dotColor: 'transparent',
          color: '#FF7C1B',

        };
      } else {
        dates[dayKey] = { marked: false };
      }
    }

    setMarkedDates(dates);
  }, [currentMonth]);

  const data = [
    {
      id: '1',
      subject: 'Mathematics',
      heading: 'Surface Areas and Volumes',
      assignDate: '10 Nov 24',
      lastSubmission: '10 Dec 24',
    },
    {
      id: '2',
      subject: 'Science',
      heading: 'Electricity and Circuits',
      assignDate: '11 Nov 24',
      lastSubmission: '15 Dec 24',
    },
    {
      id: '3',
      subject: 'English',
      heading: 'Comprehension Practice',
      assignDate: '12 Nov 24',
      lastSubmission: '20 Dec 24',
    },
  ];

  const renderCard = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate("DiaryDetail", { item })}
      style={styles.card}>
      <View style={styles.subjectTitleView}>
        <Text style={styles.subjectTitle}>{item.subject}</Text>

      </View>
      <Text style={styles.cardHeading}>{item.heading}</Text>
      <View style={styles.datesContainer}>
        <Text style={styles.dateText}>Assign Date</Text>
        <Text style={styles.dateValue}>{item.assignDate}</Text>
      </View>
      <View style={styles.datesContainer}>
        <Text style={styles.dateText}>Last Submission Date</Text>
        <Text style={styles.dateValue}>{item.lastSubmission}</Text>
      </View>
    </TouchableOpacity>
  );


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


          <View style={styles.tabContainer}>
            <TouchableOpacity
              style={[
                styles.tab,
                selectedTab === 'Today Diary' && styles.activeTab,
              ]}
              onPress={() => setSelectedTab('Today Diary')}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Today Diary' && styles.activeTabText,
                ]}
              >
                Today Diary
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.tab,
                selectedTab === 'Last Month' && styles.activeTab,
              ]}
              onPress={() => setSelectedTab('Last Month')}
            >
              <Text
                style={[
                  styles.tabText,
                  selectedTab === 'Last Month' && styles.activeTabText,
                ]}
              >
                Last Month
              </Text>
            </TouchableOpacity>
          </View>



          {selectedTab === 'Last Month' && (
            <View style={styles.calendarContainer}>
              <Calendar
                current={currentMonth + '-01'}
                markedDates={markedDates}
                onDayPress={(day) => {
                  console.log('Selected day:', day);
                }}
                hideExtraDays={true}
                style={styles.calendar}
                theme={{
                  selectedDayBackgroundColor: 'rgba(248, 198, 163, 0.3)',
                  selectedDayTextColor: '#343434',
                  todayTextColor: '#FF7C1B',
                  dayTextColor: '#343434',
                  textMonthFontSize: 14,
                  textMonthFontWeight: '700',
                  textDayFontWeight: '400',
                  dotColor: 'transparent',
                  textDayStyle: {
                    fontSize: 14,
                    color: '#343434',
                    fontWeight: '400',
                  },
                  textDayHeaderStyle: {
                    color: '#343434',
                    fontSize: 11,
                    fontWeight: '500',
                  },
                  textDayHeaderFontSize: 11,
                }}
                markingType={'custom'}
              />

            </View>
          )}

          {selectedTab === 'Today Diary' && (
            <FlatList
              data={data}
              renderItem={renderCard}
              keyExtractor={(item) => item.id}
              contentContainerStyle={styles.flatListContainer}
            />
          )}

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
    paddingHorizontal: 5,
    flexGrow: 1
  },
  flatListContainer: {
    paddingHorizontal: 8,
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
    alignSelf: 'flex-start',
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
  tabContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 10,
    backgroundColor: '#FF7C1B',
    borderRadius: 20,
    marginHorizontal: 40

  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 20,
  },
  activeTab: {
    backgroundColor: '#FFF',
    elevation: 2,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FFFFFF',
  },
  activeTabText: {
    color: '#FF7C1B',
    fontWeight: '500',
    fontSize: 14
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 15,
    marginVertical: 5,
    elevation: 1.2,
  },
  subjectTitleView: {
    backgroundColor: 'rgba(248, 198, 163, 0.3)',
    borderRadius: 15,
    paddingHorizontal: 15,
    alignSelf: 'flex-start',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 3,
    marginBottom: 8
  },
  subjectTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#FF7C1B',
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
    alignSelf: "center"
  },
  cardHeading: {
    fontSize: 14,
    fontWeight: '700',
    color: '#343434',
    marginBottom: 10,
  },
  datesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  dateText: {
    fontSize: 14,
    fontWeight: '400',
    color: '#777777',
  },
  dateValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3A3A3A',
  },

  calendarContainer: {
    marginVertical: 2,
  },
  calendarHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },

  calendar: {
    borderRadius: 10,
    overflow: 'hidden',
  },
});

export default DiaryScreen;