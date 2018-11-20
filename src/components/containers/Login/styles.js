import { StyleSheet } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';
import { theme } from '../../../styles';

const styles = StyleSheet.create({
    containers: {
        flex: 1,
        padding: 20,
        backgroundColor: theme.WHITE_COLOR,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContainers: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    footerContainers: {
        flex: isIphoneX() ? 0.6 : 0.5,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    },
    logo: {
        width: 150,
        height: 150,
        margin: 20
    }
});

export default styles;
