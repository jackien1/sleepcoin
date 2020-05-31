import React, { Component } from 'react';
import { View, Dimensions, ActivityIndicator } from 'react-native';
import { Input, Button, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { Accelerometer } from 'expo-sensors';
import { trackSleep, getSleep, getUser } from '../redux/actions';
import { activateKeepAwake, deactivateKeepAwake } from 'expo-keep-awake';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

const SCREEN_WIDTH = Dimensions.get('window').width;
let tracked = [];

class Home extends Component {
    state = {
        tracking: false,
    };

    setData = (data) => {
        tracked.push(data);
    };

    componentDidMount() {
        this.props.getSleep();
    }

    startTracking = () => {
        console.log(tracked);
        Accelerometer.addListener((accelerometerData) => {
            this.setData(accelerometerData.y);
        });
        Accelerometer.setUpdateInterval(1000);
        this.setState({ tracking: true });
        activateKeepAwake();
    };

    endTracking = () => {
        Accelerometer.removeAllListeners();
        this.setState({ tracking: false });
        deactivateKeepAwake();
        var trackedJSON = JSON.stringify(tracked);

        var d = new Date(this.props.sleep.nights[this.props.sleep.nights.length - 1].date);

        this.props.trackSleep(trackedJSON, d, this.props.getSleep, this.props.getUser);
        tracked = [];
    };

    renderEverything = () => {
        if (this.props.sleep.refreshing) return <ActivityIndicator size="large" color="purple" />;

        if (this.state.tracking)
            return (
                <View
                    style={{
                        flex: 1,
                        width: vw(80),
                        paddingTop: vw(30),
                        height: vh(100),
                        alignItems: 'center',
                    }}
                >
                    <ActivityIndicator size="large" color="#9D9DFC" />
                    <Text style={{ fontSize: 20, marginBottom: vh(3), marginTop: vh(7) }}>
                        Time Left
                    </Text>
                    <Text h1 style={{ fontFamily: 'Lato-Light' }}>
                        6:39:52
                    </Text>
                    <Text style={{ fontSize: 20, marginBottom: vh(3), marginTop: vh(7) }}>
                        Use Sounds
                    </Text>
                    <Text h1 style={{ fontFamily: 'Lato-Light' }}>
                        Calm Waves
                    </Text>

                    <Button
                        title="End"
                        buttonStyle={{
                            width: vw(50),
                            marginTop: 50,
                            borderRadius: 25,
                        }}
                        titleStyle={{ fontSize: 20 }}
                        onPress={this.endTracking}
                    />
                </View>
            );

        console.log(this.props.sleep);

        return (
            <View style={{ flex: 1, width: vw(80), paddingTop: vw(30) }}>
                <Text style={{ fontSize: 20, marginBottom: vh(3) }}>Sleep Until</Text>
                <Text h1 style={{ fontFamily: 'Lato-Light' }}>
                    8:00 AM
                </Text>
                <Text style={{ fontSize: 20, marginBottom: vh(3), marginTop: vh(7) }}>
                    Use Sounds
                </Text>
                <Text h1 style={{ fontFamily: 'Lato-Light' }}>
                    Calm Waves
                </Text>
                <Button
                    title="Start Sleeping"
                    buttonStyle={{
                        width: vw(50),
                        marginTop: 50,
                        borderRadius: 25,
                        marginLeft: vw(15),
                    }}
                    titleStyle={{ fontSize: 20 }}
                    onPress={this.startTracking}
                />
            </View>
        );
    };

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
                {this.renderEverything()}
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { sleep } = state;
    return { sleep };
};

export default connect(mapStateToProps, { trackSleep, getSleep, getUser })(Home);
