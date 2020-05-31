import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';
import { LineChart } from 'react-native-chart-kit';

import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

class SleepDetails extends Component {
    renderAsleep = (slide) => {
        const newData = JSON.parse(slide.data);
        return (newData.length / 3600).toFixed(3);
    };

    render() {
        console.log('sleep details');
        let sleep = this.props.route.params;
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#181818',
                    height: vh(100),
                    paddingTop: vh(10),
                    paddingHorizontal: vw(5),
                }}
            >
                <Text style={{ textAlign: 'left', fontSize: 20, marginBottom: vh(9) }}>
                    Your night on {days[new Date(sleep.date).getDay()]},{' '}
                    {`${months[new Date(sleep.date).getMonth()]} ${new Date(sleep.date).getDate()}`}
                    :
                </Text>

                <Text style={{ textAlign: 'left', fontSize: 20, marginBottom: 15 }}>
                    You went to bed at 10:41 PM
                </Text>
                <Text style={{ textAlign: 'left', fontSize: 20 }}>You woke up at 8:09 AM</Text>

                {sleep.data ? (
                    <LineChart
                        data={{
                            datasets: [
                                {
                                    data: JSON.parse(sleep.data),
                                    color: (opacity = 1) => `rgba(157, 157, 252, ${1})`,
                                    strokeWidth: 2,
                                },
                            ],
                        }}
                        width={vw(90)}
                        height={300}
                        chartConfig={{
                            backgroundGradientFrom: '#FFFFFF',
                            backgroundGradientFromOpacity: 0,
                            backgroundGradientTo: '#FFFFFF',
                            backgroundGradientToOpacity: 0,

                            color: (opacity = 1) => `rgba(157, 157, 252, ${opacity})`,
                            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                        }}
                        bezier
                        withHorizontalLabels={false}
                        withVerticalLabels={false}
                        withInnerLines={false}
                        withDots={false}
                        withOuterLines={true}
                        style={{ marginLeft: -20, marginTop: 40 }}
                    />
                ) : null}

                <View style={{ marginTop: 20 }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Text h4>{sleep.balance} SC</Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default SleepDetails;

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
