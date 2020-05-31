import React, { Component } from 'react';
import { View, TouchableOpacity, ActivityIndicator, Dimensions } from 'react-native';
import { Text, Button, Divider } from 'react-native-elements';
import { connect } from 'react-redux';
import { LineChart } from 'react-native-chart-kit';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';
import { logoutUser, getUser, getSleep } from '../redux/actions';
import { ScrollView } from 'react-native-gesture-handler';

class Profile extends Component {
    componentWillMount() {
        this.props.getUser();
        this.props.getSleep();
    }

    state = {
        coinHistory: true,
    };

    // renderChart = () => {
    //     if (this.props.auth.user.sleepData && this.props.auth.user.coinData.length > 0) {
    //         return (
    //             <LineChart
    //                 data={{
    //                     datasets: [
    //                         {
    //                             data: this.state.coinHistory
    //                                 ? this.props.auth.user.coinData
    //                                 : this.props.auth.user.sleepData,
    //                         },
    //                     ],
    //                 }}
    //                 width={vw(80)}
    //                 height={300}
    //                 chartConfig={{
    //                     backgroundGradientFrom: 'purple',
    //                     backgroundGradientTo: 'purple',
    //                     decimalPlaces: 3,
    //                     color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //                     labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    //                     style: {
    //                         borderRadius: 16,
    //                     },
    //                 }}
    //                 bezier
    //                 style={{ marginTop: 10 }}
    //             />
    //         );
    //     }

    //     return null;
    // };

    renderChart = (data) => {
        data.substring(1, data.length - 1).split(',');
        return (
            <LineChart
                data={{
                    datasets: [
                        {
                            data: JSON.parse(data),
                            color: (opacity = 1) => `rgba(157, 157, 252, ${1})`,
                            strokeWidth: 1,
                        },
                    ],
                }}
                width={200}
                height={70}
                chartConfig={{
                    backgroundGradientFrom: '#FFFFFF',
                    backgroundGradientFromOpacity: 0,
                    backgroundGradientTo: '#FFFFFF',
                    backgroundGradientToOpacity: 0,

                    color: (opacity = 1) => `rgba(24, 24, 24, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                withDots={false}
                withHorizontalLabels={false}
                withVerticalLabels={false}
                withInnerLines={false}
                withOuterLines={false}
                withShadow={false}
                yLabelsOffset={-10}
                bezier
                style={{ marginTop: -12 }}
            ></LineChart>
        );
    };

    render() {
        console.log(this.props.sleep);
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#181818',
                    alignItems: 'center',
                    paddingTop: vh(12),
                }}
            >
                <Text style={{ marginBottom: vh(3), fontSize: 20 }}>
                    {this.props.auth.user.userName}
                </Text>

                {this.props.auth.refreshing ? (
                    <ActivityIndicator size="large" color="#9D9DFC" />
                ) : (
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text h1 style={{ fontSize: 50, fontFamily: 'Lato-Light' }}>
                            {this.props.auth.user.balance} SC
                        </Text>
                    </View>
                )}
                <ScrollView style={{ width: vw(82), marginTop: vh(8) }}>
                    <Text style={{ fontSize: 20 }}>Your Purchase History</Text>
                    <Divider style={{ backgroundColor: '#4A4B6B', marginVertical: 15 }} />

                    {coinDummyData.map((purchase) => (
                        <>
                            <View
                                style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                }}
                            >
                                <Text>{purchase.name}</Text>
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Text>{purchase.date}</Text>
                                    <View
                                        style={{
                                            borderRadius: 5,
                                            backgroundColor: '#9D9DFC',
                                            padding: 6,
                                            marginLeft: 10,
                                        }}
                                    >
                                        <Text style={{ color: '#181818', fontFamily: 'Lato-Bold' }}>
                                            {purchase.cost} SC
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <Divider style={{ backgroundColor: '#4A4B6B', marginVertical: 15 }} />
                        </>
                    ))}
                    <Text style={{ fontSize: 20, marginTop: 15 }}>Your Past Nights</Text>
                    <Divider style={{ backgroundColor: '#4A4B6B', marginVertical: 15 }} />
                    {this.props.sleep.nights
                        ? this.props.sleep.nights.map((sleep) => {
                              let date = new Date(sleep.date);
                              return (
                                  <>
                                      <TouchableOpacity
                                          style={{
                                              flex: 1,
                                              flexDirection: 'row',
                                              justifyContent: 'space-between',
                                              alignItems: 'center',
                                          }}
                                          onPress={() =>
                                              this.props.navigation.navigate('SleepDetails', sleep)
                                          }
                                      >
                                          <Text>
                                              {days[date.getDay()]} {date.getMonth() + 1}/
                                              {date.getDate()}
                                          </Text>
                                          <View
                                              style={{
                                                  flexDirection: 'row',
                                                  alignItems: 'center',
                                              }}
                                          >
                                              {this.renderChart(sleep.data)}
                                              <View
                                                  style={{
                                                      borderRadius: 5,
                                                      backgroundColor: '#9D9DFC',
                                                      padding: 6,
                                                      marginLeft: 10,
                                                  }}
                                              >
                                                  <Text
                                                      style={{
                                                          color: '#181818',
                                                          fontFamily: 'Lato-Bold',
                                                      }}
                                                  >
                                                      {sleep.balance} SC
                                                  </Text>
                                              </View>
                                          </View>
                                      </TouchableOpacity>
                                      <Divider
                                          style={{ backgroundColor: '#4A4B6B', marginVertical: 15 }}
                                      />
                                  </>
                              );
                          })
                        : null}
                </ScrollView>

                <Button
                    title="Logout"
                    type="outline"
                    titleStyle={{ fontSize: 20, color: '#9D9DFC' }}
                    onPress={() => {
                        this.props.logoutUser();
                        this.props.navigation.navigate('Welcome');
                    }}
                />
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth, sleep } = state;
    return { auth, sleep };
};

export default connect(mapStateToProps, { logoutUser, getUser, getSleep })(Profile);

const coinDummyData = [
    {
        name: 'GoPro Hero 5',
        date: 'WED 3/21',
        cost: 18,
    },
    {
        name: '$25 Uber Gift Card',
        date: 'TUES 2/10',
        cost: 5,
    },
];

const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
