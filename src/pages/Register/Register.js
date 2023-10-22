import { Text, View, SafeAreaView, StyleSheet, Image, Button, Alert, TouchableOpacity, ScrollView, TextInput, Pressable } from 'react-native';
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

export default function Register({ navigation }) {
  const [nama, changeName] = React.useState('');
  const [username, changeUsername] = React.useState('');
  const [password, changePassword] = React.useState('');
  const [conpassword, changeconpassword] = React.useState('');

  return (
    <ScrollView>

      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image style={styles.logoImg} source={require('../../assets/img/logo.png')} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.heading2}>Selamat Datang</Text>
          <Text style={styles.subheading3}>Daftar untuk melanjutkan yahh</Text>
        </View>

        <View style={{ flex: 1 }}>
          <View>
            <View style={styles.formContainer}></View>
            <TextInput
              style={styles.input}
              onChangeText={changeName}
              value={nama}
              placeholder="Nama Lengkap"
            />
          </View>
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              onChangeText={changeUsername}
              value={username}
              placeholder="Username/Email"
            />
          </View>
          <View style={styles.formContainer}>
            <Icon
              name='eye'
              size={20}
              color='grey'
              style={{ position: 'absolute', alignSelf: 'flex-end', paddingEnd: 15 }}
            />
            <TextInput
              style={styles.input}
              onChangeText={changePassword}
              value={password}
              placeholder="Password"
            />
          </View>
          <View style={styles.formContainer}>
            <Icon
              name='eye'
              size={20}
              color='grey'
              style={{ position: 'absolute', alignSelf: 'flex-end', paddingEnd: 15 }}
            />
            <TextInput
              style={styles.input}
              onChangeText={changeconpassword}
              value={conpassword}
              placeholder="Ulang Password"
            />
          </View>
        </View>

        <View style={{ flex: 1 }}>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{ fontSize: 16, fontWeight: 500, color: 'white' }}>Daftar</Text>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: 16, }}>
            <Text style={{ fontSize: 13, paddingRight: 2 }}>Sudah punya akun?</Text>
            <TouchableOpacity
              onPress={() => { navigation.navigate('Login') }}>
              <Text style={{ fontSize: 14, fontWeight: 600, color: '#638CCE' }}>Masuk</Text>
            </TouchableOpacity>
          </View>

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
  formContainer: {
    flex: 1,
    marginTop: 16,
    justifyContent: 'center'
  },
  input: {
    height: 60,
    color: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 30,
    borderColor: 'grey',
    // flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#3B95FF',
    marginTop: 64,
  },
  logoImg: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    justifyContent: 'center'
  },
  textContainer: {
    marginTop: 24,
    marginBottom: 12,
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