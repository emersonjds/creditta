import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  TopContainer,
  Container,
  Title,
  FirstTitle,
  DataBox,
  ContainerDataBox,
  ContainerIcon,
  ContainerDescription,
  ContainerTop,
  TextBillingAccount,
  TitleBilling,
  ContainerTitleCircle,
  Circle,
  TitleContainerTitleCircle,
} from './styles.js';
import credito from '../../assets/img/credito.png';
import {Button} from 'react-native-paper';
import remove from '../../assets/img/remover.png';

export default class PayOrderForMe extends Component {
  render() {
    return (
      <>
        <Container>
          <TopContainer>
            <Image source={credito} />
            <FirstTitle>Pagar para mim</FirstTitle>
            <Title>
              Escolha seus boletos e solicite o pagamento. Analizaremos o seu
              pedido e respondemos o seu requerimento.
            </Title>
          </TopContainer>
          <ContainerTitleCircle>
            <Circle />
            <TitleContainerTitleCircle>
              Selecionar Boletos
            </TitleContainerTitleCircle>
          </ContainerTitleCircle>

          <DataBox>
            <ContainerDataBox>
              <ContainerTop>
                <ContainerIcon>
                  <Image
                    source={remove}
                    style={{
                      width: 50,
                      height: 50,
                      position: 'absolute',
                      resizeMode: 'contain',
                    }}
                  />
                </ContainerIcon>
                <ContainerDescription>
                  <TitleBilling>Boleto de Sabesp LTDA</TitleBilling>
                  <TextBillingAccount>
                    00000.00000 00000.000000 00000.000000 0 00000000000000
                  </TextBillingAccount>
                </ContainerDescription>
              </ContainerTop>

              <Button
                mode="contained"
                onPress={() => console.log('Pressed')}
                style={{width: 200, marginTop: 20}}>
                Adicionar Boleto
              </Button>
            </ContainerDataBox>
          </DataBox>
          <ContainerTitleCircle>
            <Circle />
            <TitleContainerTitleCircle>
              Data de Pagamento
            </TitleContainerTitleCircle>
          </ContainerTitleCircle>
        </Container>
      </>
    );
  }
}
