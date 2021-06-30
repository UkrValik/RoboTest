import React from 'react';
import { View, Text, Image, TouchableNativeFeedback } from 'react-native';

const RoboItem = (props) => {

    return (
        <TouchableNativeFeedback onPress={() => props.setPressedRobo(props.robo)}>
            <View
                style={{
                    flexDirection: 'row',
                    width: '95%',
                    borderWidth: 0.5,
                    borderRadius: 7,
                    padding: 10,
                    marginVertical: '1%',
                }}>
                <Image
                    source={{uri: props.robo.avatar}}
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 50,
                    }}
                    />
                <View
                    style={{
                        justifyContent: 'center',
                    }}>
                    <Text
                        style={{
                            marginLeft: 20,
                            fontSize: 25,
                            fontWeight: '600',
                        }}>
                        {props.robo.name}
                    </Text>
                </View>
            </View>
        </TouchableNativeFeedback>
    );
}

export default RoboItem;
