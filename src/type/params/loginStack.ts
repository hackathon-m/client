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
  GiftArchiveScreen: undefined;
  QuicknessGameScreen: undefined;
  BallonGameScreen: undefined;
  MakeBattleScreen: undefined;
  TimerGameScreen: undefined;
  CreateGiftScreen: undefined;
  BattleLoadingScreen: undefined;
  RegistGifticonScreen: undefined;
  chooseGiftScreen: undefined;
};

export type MainScreenProps = NativeStackScreenProps<LoginStackParamList, 'MainScreen'>;
export type HomeScreenProps = NativeStackScreenProps<LoginStackParamList, 'HomeScreen'>;
export type MyCouponScreenProps = NativeStackScreenProps<LoginStackParamList, 'MyCouponScreen'>;
export type SuggestionScreenProps = NativeStackScreenProps<LoginStackParamList, 'SuggestionScreen'>;
export type MyPageScreenProps = NativeStackScreenProps<LoginStackParamList, 'MyPageScreen'>;
export type CreateGameScreenProps = NativeStackScreenProps<LoginStackParamList, 'CreateGameScreen'>;
export type MakeBattleScreenProps = NativeStackScreenProps<LoginStackParamList, 'MakeBattleScreen'>;
export type TimerGameScreenScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'TimerGameScreen'
>;
export type QuicknessGameScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'QuicknessGameScreen'
>;
export type BallonGameScreenProps = NativeStackScreenProps<LoginStackParamList, 'BallonGameScreen'>;

export type CreateGiftScreenProps = NativeStackScreenProps<LoginStackParamList, 'CreateGiftScreen'>;

export type BattleLoadingScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'BattleLoadingScreen'
>;

export type RegistGifticonScreenProps = NativeStackScreenProps<
  LoginStackParamList,
  'GiftArchiveScreen'
>;
