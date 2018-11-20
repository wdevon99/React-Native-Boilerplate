import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { theme } from '../../../styles';
import IconButton from '../../common/IconButton';

class Dashboard extends Component {
  //navigation config for this screen
  static navigationOptions = ({ navigation }) => ({
    title: 'Dashboard',
    headerLeft: (
        <IconButton 
            name='bars' 
            color={theme.WHITE_COLOR} 
            onButtonPressed={() => { navigation.toggleDrawer(); }}
        />
    )   
  });
  
  render() {
    return (
      <View style={styles.container}>
        <Text> Dashboard </Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps)(Dashboard);
