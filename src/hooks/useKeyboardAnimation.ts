import {useCallback} from 'react';
import {useFocusEffect} from '@react-navigation/native';
import {
  AndroidSoftInputModes,
  KeyboardController,
  useKeyboardContext,
} from 'react-native-keyboard-controller';

export function useKeyboardAnimation() {
  useFocusEffect(
    useCallback(() => {
      KeyboardController.setInputMode(AndroidSoftInputModes.SOFT_INPUT_ADJUST_PAN)

      return () => KeyboardController.setDefaultMode();
    }, []),
  );

  const context = useKeyboardContext();

  return context.animated;
}
