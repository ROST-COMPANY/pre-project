import { GestureResponderEvent } from 'react-native/types';

export type PressHandler = (e: GestureResponderEvent) => void;
export type TouchEffect = 'opacity' | 'none';
export type FontWeight =
	| '100'
	| '200'
	| '300'
	| '400'
	| '500'
	| '600'
	| '700'
	| '800'
	| '900';
