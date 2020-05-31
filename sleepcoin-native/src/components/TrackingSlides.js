import React, { Component } from 'react';
import { View, ScrollView, Dimensions } from 'react-native';
import { Button, Text } from 'react-native-elements';
import { useKeepAwake } from 'expo-keep-awake';
import { LineChart } from 'react-native-chart-kit';

let months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderAsleep = (slide) => {
        const newData = JSON.parse(slide.data);
        return (newData.length / 3600).toFixed(3);
    };

    renderSlides() {
        return this.props.data.map((slide, index) => {
            return (
                <View style={styles.slideStyle}>
                    <View style={{ alignItems: 'center', marginTop: 100 }}>
                        <Text style={{ color: 'white', fontSize: 40, fontWeight: 'bold' }}>
                            {days[new Date(slide.date).getDay()]}
                        </Text>
                        <Text style={{ color: 'white', fontSize: 25 }}>
                            {`${months[new Date(slide.date).getMonth()]} ${new Date(
                                slide.date
                            ).getDate()}`}
                        </Text>

                        {slide.data == null ? null : (
                            <LineChart
                                data={{
                                    datasets: [
                                        {
                                            data: JSON.parse(slide.data),
                                        },
                                    ],
                                }}
                                width={0.8 * SCREEN_WIDTH}
                                height={300}
                                chartConfig={{
                                    backgroundGradientFrom: 'purple',
                                    backgroundGradientTo: 'purple',
                                    decimalPlaces: 3,
                                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                                    style: {
                                        borderRadius: 16,
                                    },
                                }}
                                bezier
                                style={{ marginTop: 20 }}
                            />
                        )}

                        {slide.data == null ? (
                            <Button
                                title="Sleep"
                                containerStyle={{ marginTop: 20 }}
                                buttonStyle={{ backgroundColor: 'purple' }}
                                titleStyle={{ fontSize: 20 }}
                                onPress={this.props.handlePress}
                            />
                        ) : (
                            <View style={{ marginTop: 20 }}>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 40 }}>
                                        {this.renderAsleep(slide)}h
                                    </Text>
                                    <Text style={{ color: 'white', marginLeft: 10 }}> Asleep </Text>
                                </View>

                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text style={{ color: 'white', fontSize: 40 }}>
                                        {slide.balance}
                                    </Text>
                                    <Text style={{ color: 'white', marginLeft: 10 }}>
                                        {' '}
                                        SleepCoins{' '}
                                    </Text>
                                </View>
                            </View>
                        )}
                    </View>
                </View>
            );
        });
    }

    render() {
        return (
            <ScrollView
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
                ref={(scroll) => {
                    this.scroll = scroll;
                }}
                onContentSizeChange={() => {
                    this.scroll.scrollToEnd({ animated: true });
                }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = {
    slideStyle: {
        flex: 1,
        width: SCREEN_WIDTH,
    },
    textStyle: {
        fontSize: 30,
        color: 'white',
    },
    buttonStyle: {
        backgroundColor: 'purple',
        marginTop: 15,
    },
};

export default Slides;
