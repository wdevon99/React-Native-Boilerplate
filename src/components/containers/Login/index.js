//@flow
import React, { Component } from 'react';
import { View, Image, Animated, Text } from 'react-native';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';
import styles from './styles';
import { theme } from '../../../styles';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            logoFadeAnimationValue: new Animated.Value(0),
            logoMoveAnimationValue: new Animated.Value(-60),
            loginAreaFadeAnimationValue: new Animated.Value(0),
        };              
    }

    componentDidMount() {
        //starting amination
        this.startLogoFadeInAnimation();
        this.startLoginButtonAppearAnimation();
    }

    /**
     * 
     * startLogoFadeInAnimation() : logo fadein amination 
     * 
     */
    startLogoFadeInAnimation = () => {
        Animated.timing(                 
            this.state.logoFadeAnimationValue,           
            {
              toValue: 3,                  
              duration: 2000,      
            }
        ).start();
    }

    /**
     * 
     * startLoginButtonAppearAnimation() : logo move up and login button fade in amination 
     * 
     */
    startLoginButtonAppearAnimation = () => {
        Animated.sequence([
            Animated.timing(                 
                this.state.logoMoveAnimationValue,           
                {
                  toValue: 1,                    
                }
            ),
            Animated.timing(                 
                this.state.loginAreaFadeAnimationValue,           
                {
                  toValue: 1,    
                  duration: 500,                      
                }
            )
        ]).start(); 
    }

    render() {
        return (
            <View style={styles.containers}>
                <View style={styles.headerContainers}>
                    <Animated.View
                        style={{
                            opacity: this.state.logoFadeAnimationValue,
                            bottom: this.state.logoMoveAnimationValue
                        }}
                    >
                        <Image style={styles.logo} source={require('../../../../assets/logos/logoPlaceholder.jpg')} />
                    </Animated.View>    
                    <Animated.View
                        style={{
                            ...this.props.style,
                            opacity: this.state.loginAreaFadeAnimationValue
                        }}
                    >
                        <Button  
                            small
                            backgroundColor={theme.PRIMARY_COLOR}
                            color={theme.WHITE_COLOR}
                            rounded
                            icon={{ name: 'sign-in', type: 'font-awesome', color: theme.WHITE_COLOR }}
                            title='Login to App'
                            onPress={() => { this.props.navigation.navigate('App'); }}

                        />
                    </Animated.View>
                </View>
                <Animated.View 
                    style={[styles.footerContainers, { opacity: this.state.logoFadeAnimationValue }]}
                >
                    <Text>Developed by Team XYZ</Text>
                </Animated.View>
            </View>
        );
    }
}

//mapStateToProps function
const mapStateToProps = (state) => ({
    
});

//mapDispatchToProps function
const mapDispatchToProps = (dispatch) => {
    return {
       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

