import React, { Component } from 'react';
import { View, ScrollView, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavigationService from './NavigationService';
import { theme } from '../../styles';

class CustomDrawer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.headerContainer} >
                    <View style={styles.header} >
                        <TouchableOpacity 
                            style={{ flexDirection: 'row', paddingRight: 14 }}
                            onPress={() => { NavigationService.navigate('PersonalProfile'); }}
                        >
                            <Icon name="user-circle" size={50} color={theme.PRIMARY_COLOR_DARK} />
                            <View style={{ paddingLeft: 8 }}>
                                <Text style={styles.headerTextLarge}>Devon Wijesinghe</Text> 
                                <Text style={styles.headerTextSmall}>wdevon99@gmail.com <Icon name="angle-down" size={15} color={theme.WHITE_COLOR} /></Text> 
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>

                <ScrollView style={styles.navigationLinksContainer} >
                    <TouchableOpacity style={styles.navigationLink} onPress={() => { NavigationService.navigate('TodaysViewStack'); }}>
                        <Icon name="home" size={25} color={theme.DARK_GREY} />
                        <Text style={styles.navigationLinkText} >Home</Text> 
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.navigationLink} onPress={() => { NavigationService.navigate('AuthStack'); }}>
                        <Icon name="sign-out" size={25} color={theme.DARK_GREY} />
                        <Text style={styles.navigationLinkText}>Logout</Text> 
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );   
    }
}


//mapStateToProps function
const mapStateToProps = (state) => ({
    userProfile: state.userReducer.userProfile
});

export default connect(mapStateToProps)(CustomDrawer);

//styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: theme.WHITE_COLOR,
    },
    headerContainer: {
        flexDirection: 'row'
    },
    header: {
        flexDirection: 'row',
        flex: 1,
        borderTopWidth: isIphoneX() ? 35 : 25,
        borderColor: isIphoneX() ? theme.PRIMARY_COLOR : theme.PRIMARY_COLOR_DARK,
        backgroundColor: theme.PRIMARY_COLOR,
        padding: 20
    },
    headerTextLarge: {
        color: theme.WHITE_COLOR,
        fontSize: 18,
        paddingVertical: 3
    },
    headerTextSmall: {
        color: theme.WHITE_COLOR,
        fontSize: 13
    },
    navigationLinksContainer: {
        flexDirection: 'column',
        padding: 20,
    },
    navigationLink: {
        flexDirection: 'row',
        padding: 10,
    },
    navigationLinkText: {
        marginLeft: 15,
        marginBottom: 10,
        fontSize: 18,
    }
});
