import { GestureResponderEvent } from 'react-native/types';

export type PressHandler = (e: GestureResponderEvent) => void;
export type TouchEffect = 'opacity' | 'none';
