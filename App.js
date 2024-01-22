import React, { useState } from 'react';
import { View, Text, Modal, StyleSheet, Button, Pressable } from 'react-native';

const App = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={showModal}
        onRequestClose={() => {
          console.log('Modal has been closed');
        }}
      >
        <View style={styles.modal}>
          <Text style={styles.text}>This is modal...</Text>
          <Button
            title="Close"
            color="black"
            onPress={() => {
              setShowModal(!showModal);
            }}
          />
        </View>
      </Modal>
      <Pressable
        style={styles.container}
        onPress={() => {
          setShowModal(!showModal);
        }}
      >
        <Text style={styles.text}>Show modal message</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdeccd',
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdeccd',
    padding: 20,
  },
  text: {
    fontSize: 20,
    marginTop: 20,
    color: 'black',
  },
});

export default App;
