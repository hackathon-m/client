import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type TabNavigatorParamList = {
  HomeScreen: undefined;
  MyCouponScreen: undefined;
  SuggestionScreen: undefined;
  MyPageScreen: undefined;
};

export type LoginStackParamList = {
  MainScreen: undefined;
  MyCouponScreen: undefined;
  SuggestionScreen: undefined;
  MyPageScreen: undefined;
  HomeScreen: undefined;
  CreateGameScreen: undefined;

  QuicknessGameScreen: undefined;
  BallonGameScreen: undefined;

  TimerGameScreen: undefined;
};

export type MainScreenProps = NativeStackScreenProps<LoginStackParamList, 'MainScreen'>;
export type HomeScreenProps = NativeStackScreenProps<LoginStackParamList, 'HomeScreen'>;
export type MyCouponScreenProps = NativeStackScreenProps<LoginStackParamList, 'MyCouponScreen'>;
export type SuggestionScreenProps = NativeStackScreenProps<LoginStackParamList, 'SuggestionScreen'>;
export type MyPageScreenProps = NativeStackScreenProps<LoginStackParamList, 'MyPageScreen'>;
export type CreateGameScreenProps = NativeStackScreenProps<LoginStackParamList, 'CreateGameScreen'>;
export type TimerGameScreenScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'TimerGameScreen'
>;
