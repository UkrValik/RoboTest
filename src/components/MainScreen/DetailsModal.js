import React from 'react';
import { View, Text, Image, Pressable, StyleSheet } from 'react-native';

const DetailsModal = (props) => {

    return (
        <View
            style={{
                flex: 1,
            }}>
            <Pressable
                onPress={() => props.setPressedRobo(null)}
                >
                <View
                    style={{
                        width: 20,
                        height: 20,
                        borderWidth: 1,
                        borderRadius: 20,
                        borderColor: '#BEB7A4',
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'flex-end',
                        marginRight: 10,
                    }}>
                    <Text
                        style={{
                            color: '#BEB7A4',
                        }}>
                        X
                    </Text>
                </View>
            </Pressable>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 25,
                        fontWeight: '600',
                        color: '#BEB7A4',
                    }}>
                    {props.robo.name}
                </Text>
            </View>
            <View
                style={{
                    width: '95%',
                    alignSelf: 'center',
                    borderWidth: 2,
                    borderColor: '#BEB7A4',
                    marginTop: '2%',
                }}>
                <Image
                    source={{uri: props.robo.avatar}}
                    style={{
                        width: '100%',
                        aspectRatio: 1,
                    }}
                    />
            </View>
            <View
                style={{
                    marginTop: '5%',
                    marginHorizontal: '2.5%',
                }}>
                <Text style={styles.detailsText}>
                    pet: {props.robo.pet}
                </Text>
                <Text style={styles.detailsText}>
                    plant: {props.robo.plant}
                </Text>
                <Text style={styles.detailsText}>
                    description: {props.robo.description}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsText: {
        color: '#BEB7A4',
        fontSize: 18,
        marginVertical: 3,
    }
});

export default DetailsModal;
