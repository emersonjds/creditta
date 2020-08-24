import React from 'react';
import {View, Text, Image} from 'react-native';
import {
  Container,
  TopContainer,
  FirstTitle,
  Title,
  PaymentDateText,
  ContainerInformation,
  TitleDocument,
  Subtitle,
} from './styles';
import credito from '../../assets/img/credito.png';

export default function ReceiptOrder() {
  return (
    <Container>
      <TopContainer>
        <Image source={credito} />
        <FirstTitle>Boleto de Pagamento</FirstTitle>
        <Title>
          Tudo certo, basta pagar esse boleto unico, o resto deixa com a gente.
        </Title>
      </TopContainer>
      <Text style={{alignSelf: 'center', marginTop: 20}}>Pago em</Text>
      <PaymentDateText>26/08/2020</PaymentDateText>

      <ContainerInformation>
        <TitleDocument>Descrição</TitleDocument>
        <Subtitle>Sabesp SA</Subtitle>
      </ContainerInformation>
      <ContainerInformation>
        <TitleDocument>Vencimento</TitleDocument>
        <Subtitle>25/08/2020</Subtitle>
      </ContainerInformation>
      <ContainerInformation>
        <TitleDocument>Valor do Documento</TitleDocument>
        <Subtitle>RS 236,40</Subtitle>
      </ContainerInformation>
      <ContainerInformation>
        <TitleDocument>Chave de Validação</TitleDocument>
        <Subtitle>CCHGR455576LJ</Subtitle>
      </ContainerInformation>
      <ContainerInformation>
        <TitleDocument>Tarifa pelo Serviço</TitleDocument>
        <Subtitle>RS 14,38</Subtitle>
      </ContainerInformation>
      <ContainerInformation>
        <TitleDocument>Código de Barras</TitleDocument>
        <Subtitle>
          03399.05465 29100.406536 95720.201011 1 83440000004742
        </Subtitle>
      </ContainerInformation>
    </Container>
  );
}
