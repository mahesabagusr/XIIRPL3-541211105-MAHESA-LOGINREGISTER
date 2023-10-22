import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';

export default function Login() {
  const [text, onChangeText] = React.useState('');

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={require('../../assets/img/logo.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading2}>Hello,</Text>
          <Text style={styles.subheading3}>Masuk untuk melanjutkan yahh</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <View style={styles.formContainer}></View>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Username"
            />
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder="Password"
            />
          </View>
          <Text style={{ fontWeight: 'light', color: 'grey', marginTop: 10, alignSelf: 'flex-end' }}>Lupa Password?</Text>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>Masuk</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 32 }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
            <View>
              <Text style={{ width: 50, textAlign: 'center', color: 'grey' }}>Atau</Text>
            </View>
            <View style={{ flex: 1, height: 1, backgroundColor: 'grey' }} />
          </View>

          <TouchableOpacity style={styles.registerButton}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: 'black' }}>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, }}>
          <Text style={{ fontSize: 13, paddingRight: 2 }}>Belum Punya Akun?</Text>
          <Text style={{ fontSize: 14, fontWeight: 600, color: '#638CCE' }}>Daftar sekarang</Text>
        </View>

      </View>
    </ScrollView >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    // backgroundColor: '#B40505'
  },
  logoContainer: {
    flex: 1,
    width: 90,
    height: 90,
    backgroundColor: '#FE5B6E',
    borderRadius: 10,
    justifyContent: 'center'
  },
  textContainer: {
    marginTop: 24,
    marginBottom: 12,
  },
  formContainer: {
    flex: 1,
    marginTop: 16,
  },
  input: {
    height: 60,
    color: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    borderColor: 'grey',
  },
  logoImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3B95FF',
    marginTop: 32,
  },
  registerButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: '#F4F9FF',
    marginTop: 32,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  heading1: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 32,
  },
  heading2: {
    color: 'black',
    fontWeight: 'bold',
    justifyContent: 'center',
    fontSize: 28,
  },
  subheading3: {
    color: 'black',
    fontWeight: 'light',
    fontSize: 14,
    marginTop: 10
  },

})