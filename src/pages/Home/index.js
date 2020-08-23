import React from 'react';
import {Text, SafeAreaView, View} from 'react-native';
import {
  Container,
  TopContainer,
  BottomContainer,
  RightContainerBottom,
  LeftContainerBottom,
} from './styles';
import {Avatar, Button} from 'react-native-paper';

export default function Home() {
  return (
    <Container>
      <TopContainer>
        <Avatar.Image
          size={100}
          source={require('../../assets/img/avatar.jpg')}
        />
        <Text>Emerson</Text>
        <Text>Emerson</Text>
        <Button mode="contained" onPress={() => console.log('Pressed')}>
          Editar
        </Button>
      </TopContainer>
      <BottomContainer>
        <LeftContainerBottom />
        <LeftContainerBottom />
      </BottomContainer>
    </Container>
  );
}
