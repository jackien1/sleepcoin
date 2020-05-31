import React, { Component } from 'react';
import { View, Image, ScrollView, RefreshControl, TouchableOpacity } from 'react-native';
import { Input, Button, Icon, Card, Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { getOffers } from '../redux/actions';
import RBSheet from 'react-native-raw-bottom-sheet';
import axios from 'axios';
import {
    widthPercentageToDP as vw,
    heightPercentageToDP as vh,
} from 'react-native-responsive-screen';

class Shop extends Component {
    state = {
        selectedOffer: {},
    };

    // renderOffers = () => {
    //     return this.props.auth.offers.map((offer) => {
    //         return (
    //             <TouchableOpacity
    //                 style={{ marginBottom: 10, backgroundColor: '#111' }}
    //                 onPress={() => {
    //                     this.setState({ selectedOffer: offer });
    //                     this.RBSheet.open();
    //                 }}
    //                 transparent
    //             >
    //                 <View style={{ flexDirection: 'column', padding: 20 }}>
    //                     <Text
    //                         style={{
    //                             color: 'purple',
    //                             fontWeight: 'bold',
    //                             fontSize: 15,
    //                         }}
    //                     >
    //                         {' '}
    //                         {offer.meta['3']}{' '}
    //                     </Text>
    //                     <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 30 }}>
    //                         {' '}
    //                         {offer.meta['0']}{' '}
    //                     </Text>
    //                     <Text
    //                         style={{
    //                             color: '#999',
    //                             fontWeight: 'bold',
    //                             fontSize: 12,
    //                         }}
    //                     >
    //                         {' '}
    //                         {offer.meta['4']}{' '}
    //                     </Text>
    //                 </View>
    //             </TouchableOpacity>
    //         );
    //     });
    // };

    // renderButton() {
    //     let inside = false;

    //     if (this.state.selectedOffer.meta) {
    //         for (let i = 0; i < this.state.selectedOffer.meta['5'].length; i++) {
    //             if (
    //                 this.state.selectedOffer.meta['5'][i].toLowerCase() ==
    //                 this.props.auth.user.address.toLowerCase()
    //             )
    //                 inside = true;
    //         }
    //     }

    //     if (this.state.selectedOffer.meta && inside) {
    //         return (
    //             <View
    //                 style={{
    //                     justifyContent: 'center',
    //                     alignItems: 'center',
    //                     marginTop: 50,
    //                 }}
    //             >
    //                 <Text style={{ fontSize: 20, color: 'white' }}> Already Claimed </Text>
    //             </View>
    //         );
    //     } else {
    //         return (
    //             <Button
    //                 title="Claim"
    //                 titleStyle={{ fontSize: 20, fontWeight: 'bold' }}
    //                 buttonStyle={{
    //                     backgroundColor: 'purple',
    //                     marginTop: 50,
    //                 }}
    //                 onPress={async () => {
    //                     await axios({
    //                         method: 'post',
    //                         url: 'https://48162b9d.ngrok.io/api/shop/claim',
    //                         data: {
    //                             value: this.state.selectedOffer.meta['3'],
    //                             address: this.state.selectedOffer.offer,
    //                             owner: this.state.selectedOffer.meta['4'],
    //                         },
    //                     });
    //                     this.RBSheet.close();
    //                     // this.props.getOffers();
    //                 }}
    //             />
    //         );
    //     }
    // }

    componentDidMount() {
        // this.props.getOffers();
    }

    //     renderPopup() {
    //         return (                <RBSheet
    //             ref={(ref) => {
    //                 this.RBSheet = ref;
    //             }}
    //             duration={250}
    //             animationType={'slide'}
    //             closeOnDragDown={true}
    //             height={500}
    //             duration={250}
    //             customStyles={{
    //                 container: {
    //                     backgroundColor: 'black',
    //                 },
    //             }}
    //         >
    //             <View style={{ flexDirection: 'column' }}>
    //                 <Text
    //                     style={{
    //                         fontSize: 30,
    //                         color: 'white',
    //                         fontWeight: 'bold',
    //                         marginLeft: 15,
    //                         marginTop: 15,
    //                     }}
    //                 >
    //                     {this.state.selectedOffer.meta
    //                         ? this.state.selectedOffer.meta['0']
    //                         : null}
    //                 </Text>

    //                 <Text
    //                     style={{
    //                         fontSize: 20,
    //                         color: 'white',
    //                         fontWeight: 'bold',
    //                         marginTop: 15,
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     About
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         fontSize: 18,
    //                         color: '#8b8b8b',
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     {this.state.selectedOffer.meta
    //                         ? this.state.selectedOffer.meta['1']
    //                         : null}
    //                 </Text>

    //                 <Text
    //                     style={{
    //                         fontSize: 20,
    //                         color: 'white',
    //                         fontWeight: 'bold',
    //                         marginTop: 15,
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     SleepCoins
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         fontSize: 18,
    //                         color: '#8b8b8b',
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     {this.state.selectedOffer.meta
    //                         ? this.state.selectedOffer.meta['3']
    //                         : null}
    //                 </Text>

    //                 <Text
    //                     style={{
    //                         fontSize: 20,
    //                         color: 'white',
    //                         fontWeight: 'bold',
    //                         marginTop: 15,
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     Remaining
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         fontSize: 18,
    //                         color: '#8b8b8b',
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     {this.state.selectedOffer.meta
    //                         ? this.state.selectedOffer.meta['2'] -
    //                           this.state.selectedOffer.meta['5'].length
    //                         : null}
    //                 </Text>

    //                 <Text
    //                     style={{
    //                         fontSize: 20,
    //                         color: 'white',
    //                         fontWeight: 'bold',
    //                         marginTop: 15,
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     Offerer
    //                 </Text>
    //                 <Text
    //                     style={{
    //                         fontSize: 18,
    //                         color: '#8b8b8b',
    //                         marginLeft: 15,
    //                     }}
    //                 >
    //                     {this.state.selectedOffer.meta
    //                         ? this.state.selectedOffer.meta['4']
    //                         : null}
    //                 </Text>

    //                 {this.renderButton()}
    //             </View>
    //         </RBSheet>
    // )
    //     }

    renderItems = (items) => {
        return (
            <>
                {items.map((item, index) => (
                    <TouchableOpacity
                        style={{
                            width: vw(33),
                            height: vh(22),
                            backgroundColor: item.color,
                            flexDirection: 'column',
                            alignItems: 'flex-end',
                            borderRadius: 10,
                            margin: 10,
                        }}
                        key={index}
                        onPress={() => console.log(item.name)}
                    >
                        <Text
                            style={{
                                backgroundColor: '#181818',
                                marginBottom: -40,
                                marginTop: 10,
                                marginRight: 10,
                                zIndex: 10,
                                height: 30,
                                fontSize: 17,
                                paddingHorizontal: 8,
                                paddingVertical: 4,
                                borderRadius: 15,
                                fontFamily: 'Lato-Bold',
                                overflow: 'hidden',
                            }}
                        >
                            {item.cost} SC
                        </Text>

                        <Image
                            source={{ uri: item.src }}
                            style={{
                                borderTopLeftRadius: 10,
                                borderTopRightRadius: 10,
                                width: vw(33),
                                height: vh(15),
                            }}
                        />
                        <Text
                            style={{
                                color: 'white',
                                fontFamily: 'Lato-Bold',
                                padding: 5,
                                textAlign: 'center',
                                fontSize: 16,
                                width: vw(33),
                            }}
                        >
                            {item.name}
                        </Text>
                    </TouchableOpacity>
                ))}
            </>
        );
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#181818',
                    paddingTop: vh(10),
                }}
            >
                <Text h4 style={{ textAlign: 'center' }}>
                    Sleepcoin Shop
                </Text>

                {/* {this.renderPopup()} */}

                <Text
                    style={{ textAlign: 'left', fontSize: 20, marginTop: vh(4), marginLeft: vw(5) }}
                >
                    Featured
                </Text>

                <ScrollView
                    style={{ marginLeft: vw(5), marginTop: 10 }}
                    horizontal
                    refreshControl={
                        <RefreshControl
                            onRefresh={() => {
                                // this.props.getOffers();
                            }}
                            refreshing={this.props.auth.offerRefreshing}
                            tintColor="white"
                        />
                    }
                >
                    {this.renderItems(featured)}
                </ScrollView>

                <Text
                    style={{ textAlign: 'left', fontSize: 20, marginTop: -10, marginLeft: vw(5) }}
                >
                    Gift Cards
                </Text>
                <ScrollView
                    style={{ marginLeft: vw(5), marginTop: 10 }}
                    horizontal
                    refreshControl={
                        <RefreshControl
                            onRefresh={() => {
                                // this.props.getOffers();
                            }}
                            refreshing={this.props.auth.offerRefreshing}
                            tintColor="white"
                        />
                    }
                >
                    {this.renderItems(featured)}
                </ScrollView>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    const { auth } = state;
    return { auth };
};

export default connect(mapStateToProps, { getOffers })(Shop);

const featured = [
    {
        cost: 20,
        name: '$50 Amazon Gift Card',
        src: 'https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png',
        color: '#FD870A',
    },
    {
        cost: 20,
        name: '$50 Amazon Gift Card',
        src: 'https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png',
        color: '#FD870A',
    },
    {
        cost: 20,
        name: '$50 Amazon Gift Card',
        src: 'https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png',
        color: '#FD870A',
    },
    {
        cost: 20,
        name: '$50 Amazon Gift Card',
        src: 'https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png',
        color: '#FD870A',
    },
    {
        cost: 20,
        name: '$50 Amazon Gift Card',
        src: 'https://cdn3.iconfinder.com/data/icons/cute-flat-social-media-icons-3/512/amazon.png',
        color: '#FD870A',
    },
];
