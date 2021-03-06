import React, { Component } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native';
import ProfileHeader from '../components/ProfileHeader';

export default class User extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <ProfileHeader 
          data={this.props.screenProps}
          navigation = {this.props.navigation}
        />
        <Text style={styles.header}>
          User Profile
        </Text>
        <Button
          onPress={() => navigate('Settings')}
          title="Open Settings Tab"
        />
        <Button
          onPress={() => navigate('Modal')}
          title="Open Modal"
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 20,
    marginVertical: 20,
  },
});