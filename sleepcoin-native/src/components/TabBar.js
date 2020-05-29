import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text, Button, Icon } from 'react-native-elements';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

const TabBar = (props) => {
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-around',

                width: vw(100),
                marginVertical: 40,
            }}
        >
            <Button
                buttonStyle={{ borderRadius: 25, paddingHorizontal: 10 }}
                titleStyle={{
                    fontFamily: 'Lato-Bold',
                    fontSize: 20,
                    marginBottom: 1,
                    marginTop: -1,
                }}
                title="Go to sleep"
                icon={
                    <View style={{ marginRight: 10, marginTop: 2 }}>
                        <Icon name="ios-moon" size={21} color="#181818" type="ionicon" />
                    </View>
                }
                onPress={() => console.log('nav to shopping')}
            />
            <TouchableOpacity
                style={{
                    borderColor: '#9D9DFC',
                    borderWidth: 4,
                    borderRadius: 40,
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => console.log('nav to shopping')}
            >
                <Icon name="shopping" size={25} color="#9D9DFC" type="material-community" />
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    borderColor: '#9D9DFC',
                    borderWidth: 4,
                    borderRadius: 40,
                    width: 45,
                    height: 45,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onPress={() => console.log('nav to shopping')}
            >
                <Icon name="user" size={25} color="#9D9DFC" type="feather" />
            </TouchableOpacity>
        </View>
    );
};

export default TabBar;
