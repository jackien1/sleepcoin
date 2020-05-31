import React, { Component } from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { ThemeProvider } from 'react-native-elements';
import { View } from 'react-native';

import reducers from './src/redux/reducers';
import Router from './src/router';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

class App extends Component {
    state = {
        isLoadingComplete: false,
    };

    async componentDidMount() {
        try {
            await SplashScreen.preventAutoHideAsync();

            // Load fonts
            await Font.loadAsync({
                Lato: require('./assets/fonts/Lato-Regular.ttf'),
                'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
                'Lato-Light': require('./assets/fonts/Lato-Light.ttf'),
            });
            await SplashScreen.hideAsync();
            this.setState({ isLoadingComplete: true });
        } catch (e) {
            // We might want to provide this error information to an error reporting service
            console.warn(e);
        } finally {
        }
    }

    render() {
        const theme = {
            Text: {
                style: {
                    fontFamily: 'Lato',
                    color: '#9D9DFC',
                },
            },
            Button: {
                titleStyle: {
                    fontFamily: 'Lato',
                    color: '#181818',
                },
            },
            Input: {
                inputStyle: { fontFamily: 'Lato', color: '#9D9DFC' },
                placeholderTextColor: '#9D9DFC',
            },
            colors: {
                primary: '#9D9DFC',
                secondary: '#181818',
            },
        };
        if (this.state.isLoadingComplete) {
            return (
                <Provider store={store}>
                    <ThemeProvider theme={theme}>
                        <Router />
                    </ThemeProvider>
                </Provider>
            );
        } else {
            return null;
        }
    }
}

export default App;
