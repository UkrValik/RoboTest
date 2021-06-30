import React from 'react';
import { ScrollView, RefreshControl, View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { selectLoading, fetchRobots } from '../../redux/reducers/robots';
import RoboItem from './RoboItem';

const RoboList = (props) => {

    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    const onRefresh = () => {
        dispatch(fetchRobots());
    }

    return (
        <ScrollView
            contentContainerStyle={{
                alignItems: 'center',
                marginTop: '1%',
            }}
            refreshControl={
                <RefreshControl
                    refreshing={loading}
                    onRefresh={onRefresh}
                    />
            }
            >
            {props.robots.length > 0 ? props.robots.map((robo) => (
                <RoboItem
                    key={robo.id}
                    robo={robo}
                    setPressedRobo={props.setPressedRobo}
                    />
                ))
            :
                <View
                    style={{
                        marginTop: '5%',
                    }}>
                    <Text>
                        Pull to refresh
                    </Text>
                </View>
            }
        </ScrollView>
    );
}

export default RoboList;
