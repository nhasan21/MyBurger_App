import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StyleSheet,
  ScrollView, Image, Pressable
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function RateScreen() {
  const [location, setLocation] = useState('');
  const [burgerName, setBurgerName] = useState('');
  const [rating, setRating] = useState(0);

  const handleUpload = () => {
    console.log('Upload photo clicked');
  };

  const handleStarPress = (index: number) => {
    const newRating = rating === index + 0.5 ? index + 1 : index + 0.5;
    setRating(newRating > 5 ? 5 : newRating);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>RATE BURGER</Text>

      <View style={styles.row}>
        <TouchableOpacity style={styles.uploadButton} onPress={handleUpload}>
          <Image
            source={{ uri: 'https://cdn-icons-png.flaticon.com/512/685/685655.png' }}
            style={styles.cameraIcon}
          />
          <Text style={styles.uploadText}>Upload Photo</Text>
        </TouchableOpacity>

        <View style={styles.inputColumn}>
          <TextInput
            style={styles.input}
            placeholder="Location Name"
            placeholderTextColor="gray"
            value={location}
            onChangeText={setLocation}
          />
          <TextInput
            style={styles.input}
            placeholder="Burger Name"
            placeholderTextColor="gray"
            value={burgerName}
            onChangeText={setBurgerName}
          />
        </View>
      </View>

      {/* Rating Stars */}
      <View style={styles.ratingSection}>
        <Text style={styles.ratingLabel}>RATING:</Text>
        <View style={styles.stars}>
          {[0, 1, 2, 3, 4].map((i) => {
            const full = i + 1 <= rating;
            const half = !full && i + 0.5 <= rating;
            return (
              <Pressable key={i} onPress={() => handleStarPress(i)}>
                <FontAwesome
                  name={full ? 'star' : half ? 'star-half-full' : 'star-o'}
                  size={30}
                  color={full || half ? '#FFD94D' : 'white'}
                  style={{ marginHorizontal: 2 }}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#D5C8AA',
    padding: 20,
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  uploadButton: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cameraIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  uploadText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center',
  },
  inputColumn: {
    flex: 1,
  },
  input: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    color: 'black',
  },
  ratingSection: {
    marginTop: 30,
    alignItems: 'center',
  },
  ratingLabel: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  stars: {
    flexDirection: 'row',
  },
});




