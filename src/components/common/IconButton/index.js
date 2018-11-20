import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { theme } from '../../../styles';

const IconButton = (props) => (
    <TouchableOpacity style={[styles.iconContainer, { marginLeft: props.marginLeft || 15, marginRight: props.marginRight || 15 }]} onPress={props.onButtonPressed}>
        {!props.name || <Icon name={props.name} size={props.size || 25} color={props.color} />} 
        <Text style={[styles.btnText, { color: props.color }, { ...props.aditionalStyles }]}> 
            {props.text} 
        </Text>
    </TouchableOpacity>
);

//styles
const styles = StyleSheet.create({
    iconContainer: {
        flexDirection: 'row',  
        alignItems: 'center'
    },
    btnText: {
        color: theme.WHITE_COLOR,
        marginLeft: 5,
        fontSize: 18
    }
});

export default IconButton;
