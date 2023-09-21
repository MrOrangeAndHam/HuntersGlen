import {SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useAppDispatch, useAppSelector} from './AppStore';
import React, {ReactElement} from 'react';
import {counter} from './Counter/CounterSlice';

export const Home = (): ReactElement => {
  const dispatch = useAppDispatch();
  const count = useAppSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch(counter.actions.increment());
  };

  const handleDecrement = () => {
    dispatch(counter.actions.decrement());
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Counter App</Text>
        <Text>count: {count}</Text>

        <TouchableOpacity onPress={handleIncrement}>
          <Text>Increment</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleDecrement}>
          <Text>Decrement</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
