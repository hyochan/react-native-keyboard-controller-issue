import styled, {css} from '@emotion/native';
import {EditText, IconButton, Typography, useDooboo} from 'dooboo-ui';
import {Stack} from 'expo-router';

import {t} from '../src/STRINGS';
import {Pressable, View} from 'react-native';
import {ElementRef, useRef, useState} from 'react';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';
import {useHeaderHeight} from '@react-navigation/elements';

const Container = styled.SafeAreaView`
  background-color: ${({theme}) => theme.bg.basic};

  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export default function Index(): JSX.Element {
  const {theme} = useDooboo();
  const [text, setText] = useState('');
  const ref = useRef<ElementRef<typeof EditText>>(null);
  const headerHeight = useHeaderHeight();

  return (
    <Container>
      <Stack.Screen
        options={{
          title: t('HOME'),
        }}
      />
      <KeyboardAvoidingView
        keyboardVerticalOffset={headerHeight}
        style={css`
          flex: 1;
          width: 100%;
        `}
        behavior="padding"
      >
        <Pressable
          onPress={() => ref?.current?.blur()}
          style={css`
            flex: 1;
          `}
        >
          <View
            style={css`
              flex: 1;
              background-color: ${theme.bg.paper};

              justify-content: center;
              align-items: center;
            `}
          >
            <Typography.Heading5>Hi there!</Typography.Heading5>
          </View>
        </Pressable>
        <EditText
          ref={ref}
          onChangeText={setText}
          value={text}
          decoration="boxed"
          style={css`
            background-color: ${theme.bg.basic};
          `}
          endElement={<IconButton icon="Bird" onPress={() => {}} size={24} />}
        />
      </KeyboardAvoidingView>
    </Container>
  );
}
