import React, { Component } from 'react';
import { View, AsyncStorage } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

import {
    changeUserName,
    changeAge,
    changeEmail,
    changePassword,
    changePasswordConfirm,
    handleRegister,
} from '../redux/actions';

class Register extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#181818',
                }}
            >
                <Text h3 style={{ marginBottom: 50 }}>
                    SleepCoin
                </Text>
                <Input
                    placeholder="User Name"
                    placeholderTextColor="#9D9DFC"
                    inputStyle={{ fontFamily: 'Lato', color: '#9D9DFC' }}
                    titleStyle={{ fontSize: 18 }}
                    value={this.props.auth.userName}
                    onChangeText={(text) => this.props.changeUserName(text)}
                />
                <Input
                    placeholder="Age"
                    titleStyle={{ fontSize: 18 }}
                    value={this.props.auth.age}
                    onChangeText={(text) => this.props.changeAge(text)}
                />
                <Input
                    placeholder="Email"
                    titleStyle={{ fontSize: 18 }}
                    value={this.props.auth.email}
                    onChangeText={(text) => this.props.changeEmail(text)}
                />
                <Input
                    placeholder="Password"
                    titleStyle={{ fontSize: 18 }}
                    value={this.props.auth.password}
                    secureTextEntry={true}
                    onChangeText={(text) => this.props.changePassword(text)}
                />
                <Input
                    placeholder="Confirm Password"
                    titleStyle={{ fontSize: 18 }}
                    value={this.props.auth.password_confirm}
                    secureTextEntry={true}
                    onChangeText={(text) => this.props.changePasswordConfirm(text)}
                />
                <Button
                    title="Sign Up"
                    buttonStyle={{ width: vw(50), marginTop: 40, borderRadius: 25 }}
                    titleStyle={{ fontSize: 20 }}
                    onPress={() => {
                        this.props.handleRegister(
                            this.props.auth.userName,
                            Number(this.props.auth.age),
                            this.props.auth.email,
                            this.props.auth.password,
                            this.props.auth.password_confirm,
                            () => this.props.navigation.navigate('Main')
                        );
                    }}
                />
                <Button
                    title="Login"
                    type="clear"
                    buttonStyle={{ marginTop: 10 }}
                    titleStyle={{ fontSize: 20, color: '#9D9DFC' }}
                    onPress={() => this.props.navigation.navigate('Login')}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
};

export default connect(mapStateToProps, {
    changeUserName,
    changeAge,
    changeEmail,
    changePassword,
    changePasswordConfirm,
    handleRegister,
})(Register);
