import styled, {css} from '@emotion/native';
import {EditText, IconButton, Typography, useDooboo} from 'dooboo-ui';
import {Stack} from 'expo-router';

import {t} from '../src/STRINGS';
import {View} from 'react-native';
import {useState} from 'react';
import {KeyboardAvoidingView} from 'react-native-keyboard-controller';

const Container = styled.View`
  background-color: ${({theme}) => theme.bg.basic};

  flex: 1;
  align-self: stretch;
  justify-content: center;
  align-items: center;
`;

export default function Index(): JSX.Element {
  const {theme} = useDooboo();
  const [text, setText] = useState('');

  return (
    <Container>
      <Stack.Screen
        options={{
          title: t('HOME'),
        }}
      />
      <KeyboardAvoidingView
        style={css`
          flex: 1;
          width: 100%;
        `}
        behavior="padding"
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
        <EditText
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
