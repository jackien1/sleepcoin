import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

import { changeLoginEmail, changeLoginPassword, handleLogin } from '../redux/actions';
import TabBar from '../components/TabBar';

class Login extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-around',
                    backgroundColor: '#181818',
                }}
            >
                <View
                    style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        backgroundColor: '#181818',
                    }}
                >
                    <Text h3 style={{ marginBottom: 50 }}>
                        Login
                    </Text>
                    <Input
                        placeholderTextColor="#9D9DFC"
                        placeholder="Email"
                        value={this.props.auth.loginEmail}
                        inputStyle={{ fontFamily: 'Lato', color: '#9D9DFC' }}
                        onChangeText={(text) => this.props.changeLoginEmail(text)}
                        titleStyle={{ fontSize: 18 }}
                    />
                    <Input
                        placeholderTextColor="#9D9DFC"
                        placeholder="Password"
                        value={this.props.auth.loginPassword}
                        inputStyle={{ fontFamily: 'Lato', color: '#9D9DFC' }}
                        onChangeText={(text) => this.props.changeLoginPassword(text)}
                        secureTextEntry={true}
                        titleStyle={{ fontSize: 18 }}
                    />
                    <Button
                        title="Start Sleeping"
                        buttonStyle={{ width: vw(50), marginTop: 50, borderRadius: 25 }}
                        titleStyle={{ fontSize: 20 }}
                        onPress={() => {
                            this.props.handleLogin(
                                this.props.auth.loginEmail,
                                this.props.auth.loginPassword,
                                () => this.props.navigation.navigate('Main')
                            );
                        }}
                    />
                    <Button
                        title="Back"
                        type="clear"
                        containerStyle={{ marginTop: 10 }}
                        titleStyle={{ fontSize: 20, color: '#9D9DFC' }}
                        onPress={() => this.props.navigation.goBack()}
                    />
                </View>
                <TabBar navigation={this.props.navigation} />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
};

export default connect(mapStateToProps, { changeLoginEmail, changeLoginPassword, handleLogin })(
    Login
);
