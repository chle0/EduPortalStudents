import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
  PanResponder,
} from 'react-native';
import Background from '../components/Background';
import theme from '../config/theme';
import { useEffect, useState } from 'react';


const DiaryDetail = ({ route }) => {
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


          <View style={styles.detailsContainer}>
            <Text style={styles.subject}>{item.subject}</Text>

            <View style={{ height: 20 }} />

            <View style={styles.datesContainer}>
              <View style={styles.dateBox}>
                <Text style={styles.dateLabel}>Assign Date</Text>
                <Text style={styles.dateValue}>{item.assignDate}</Text>
              </View>

              <View style={styles.verticalLine} />

              <View style={styles.dateBox}>
                <Text style={[styles.dateLabel, { marginLeft: 5 }]}>
                  Last Submission Date
                </Text>

                <Text style={styles.dateValue}>{item.lastSubmission}</Text>
              </View>
            </View>

            <View style={styles.horizontalLine} />

            <View style={styles.descriptionContainer}>
              <Text style={styles.title}>{item.heading}</Text>
              <Text style={styles.descriptionLabel}>Description</Text>
              <Text style={styles.description}>
                In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to
                demonstrate the visual form of a document or a typeface without relying on meaningful
                content. Lorem ipsum may be used as a placeholder before the final copy is available.
              </Text>
            </View>
          </View>

        </ScrollView>
      </SafeAreaView>
    </Background>
  );
};

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  container: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    flexGrow: 1
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
    marginTop: 10
  },
  session: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: '500',
    color: 'rgba(255, 255, 255, 0.8)',
  },

  subject: {
    backgroundColor: 'rgba(248, 198, 163, 0.2)',
    alignSelf: 'flex-start',
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 15,
    fontSize: 14,
    fontWeight: '500',
    color: '#FF7C1B',
  },

  detailsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    margin: 10,
    padding: 15,
    elevation: 2,
  },

  datesContainer: {
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    marginVertical: 0,
  },
  dateBox: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10
  },
  dateLabel: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 5,
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: theme.fonts.dmSansMedium
  },
  dateValue: {
    fontSize: 12,
    fontWeight: '700',
    color: '#3A3A3A',
    textAlign: 'center',
    fontFamily: theme.fonts.dmSansBlack
  },

  verticalLine: {
    width: 1,
    backgroundColor: '#D9D9D9',
    height: 50,
    alignSelf: 'center',
  },


  horizontalLine: {
    height: 1,
    backgroundColor: '#D9D9D9',
    alignSelf: 'stretch',
    marginVertical: 0,
    marginBottom: 10
  },
  descriptionContainer: {
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#343434',
    marginBottom: 10,
    fontFamily: theme.fonts.dmSansBlack
  },
  descriptionLabel: {
    fontSize: 13,
    fontWeight: '500',
    color: '#FF7C1B',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#777777',
    lineHeight: 20,
    fontWeight: '400',

  },



});

export default DiaryDetail;
