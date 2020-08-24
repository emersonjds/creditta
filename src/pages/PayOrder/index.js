import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {
  Container,
  TopContainer,
  FirstTitle,
  Title,
  DataBox,
  ContainerTop,
  ContainerIcon,
  ContainerDataBox,
  ContainerDescription,
  TitleBilling,
  TextBillingAccount,
  TitleContainerTitleCircle,
} from './styles.js';
import {Button} from 'react-native-paper';
import boleto from '../../assets/img/boleto-colorido-1.png';
import sabesp from '../../assets/img/sabesp.jpg';
import claro from '../../assets/img/claro.png';
import enel from '../../assets/img/enel.png';
import net from '../../assets/img/net.png';

export default function PayOrder({navigation}) {
  return (
    <Container>
      <TopContainer>
        <Image source={boleto} />
        <FirstTitle style={{color: '#8257E5'}}>Meus Boletos</FirstTitle>
        <Title>Estes foram os boletos identificados a partir do seu CPF.</Title>

        <TitleContainerTitleCircle>Meus Boletos</TitleContainerTitleCircle>

        <ScrollView>
          <DataBox>
            <ContainerDataBox>
              <ContainerTop>
                <ContainerIcon>
                  <Image
                    source={net}
                    style={{
                      width: 50,
                      height: 50,
                      position: 'absolute',
                      resizeMode: 'contain',
                    }}
                  />
                </ContainerIcon>
                <ContainerDescription>
                  <TitleBilling>Boleto de NET SA</TitleBilling>
                  <TextBillingAccount>
                    00000.00000 00000.000000 00000.000000 0 00000000000000
                  </TextBillingAccount>
                </ContainerDescription>
              </ContainerTop>
            </ContainerDataBox>
          </DataBox>

          <DataBox>
            <ContainerDataBox>
              <ContainerTop>
                <ContainerIcon>
                  <Image
                    source={enel}
                    style={{
                      width: 50,
                      height: 50,
                      position: 'absolute',
                      resizeMode: 'contain',
                    }}
                  />
                </ContainerIcon>
                <ContainerDescription>
                  <TitleBilling>Boleto de ENEL Ltda</TitleBilling>
                  <TextBillingAccount>
                    00000.00000 00000.000000 00000.000000 0 00000000000000
                  </TextBillingAccount>
                </ContainerDescription>
              </ContainerTop>
            </ContainerDataBox>
          </DataBox>

          <DataBox>
            <ContainerDataBox>
              <ContainerTop>
                <ContainerIcon>
                  <Image
                    source={claro}
                    style={{
                      width: 50,
                      height: 50,
                      position: 'absolute',
                      resizeMode: 'contain',
                    }}
                  />
                </ContainerIcon>
                <ContainerDescription>
                  <TitleBilling>Boleto de CLARO SA</TitleBilling>
                  <TextBillingAccount>
                    00000.00000 00000.000000 00000.000000 0 00000000000000
                  </TextBillingAccount>
                </ContainerDescription>
              </ContainerTop>
            </ContainerDataBox>
          </DataBox>
          <DataBox>
            <ContainerDataBox>
              <ContainerTop>
                <ContainerIcon>
                  <Image
                    source={sabesp}
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
            </ContainerDataBox>
          </DataBox>
        </ScrollView>
        <Button
          onPress={() => navigation.navigate('ReceiptOrder')}
          style={{marginTop: 30, width: 300}}
          mode="contained"
          color={'#27AE60'}>
          Gerar Boleto Unico
        </Button>
      </TopContainer>
    </Container>
  );
}
