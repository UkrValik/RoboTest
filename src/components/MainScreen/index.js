import React from 'react';
import { SafeAreaView, View, Text, Modal } from 'react-native';
import { useSelector } from 'react-redux';
import RoboList from './RoboList';
import DetailsModal from './DetailsModal';
import { selectRobots, fetchRobots } from '../../redux/reducers/robots';

const MainScreen = (props) => {

    const robots = useSelector(selectRobots);

    const [pressedRobo, setPressedRobo] = React.useState(null);
    
    return (
        <SafeAreaView
            style={{
                flex: 1,
            }}>
            <Modal
                visible={pressedRobo !== null}
                transparent
                >
                <SafeAreaView
                    style={{
                        flex: 1,
                        backgroundColor: '#000000ef'
                    }}>
                    <DetailsModal
                        robo={pressedRobo}
                        setPressedRobo={setPressedRobo}
                        />
                </SafeAreaView>
            </Modal>
            <View
                style={{
                    width: '100%',
                    height: 60,
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderBottomWidth: 2,

                }}>
                <Text
                    style={{
                        fontSize: 30,
                        fontWeight: '700',
                    }}>
                    ROBOTS
                </Text>
            </View>
            <RoboList
                setPressedRobo={setPressedRobo}
                robots={robots}
                />
        </SafeAreaView>
    );
}

export default MainScreen;
