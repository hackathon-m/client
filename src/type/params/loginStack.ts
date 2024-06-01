import { NativeStackScreenProps } from '@react-navigation/native-stack';

export type LoginStackParamList = {
  MainScreen: undefined;
};

export type MainScreenProps = NativeStackScreenProps<LoginStackParamList, 'MainScreen'>;
