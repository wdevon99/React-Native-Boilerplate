import { NavigationActions } from 'react-navigation';

let myNavigator;

const setTopLevelNavigator = (navigatorRef) => { 
  myNavigator = navigatorRef;
};

//this method is used to navigate to any where
const navigate = (routeName, params) => {
  myNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params
    })
  );
};

export default {
  navigate,
  setTopLevelNavigator,
};
