import styled from "styled-components";
import {View, TouchableOpacity, Text} from 'react-native';

export const PurpleView = styled(View)`
    height: 70%;
    background: ${({theme}) => theme.colors.purple};
    padding: 48px;
`

export const OrangeView = styled(View)`
    height: 30%;
    background: ${({theme}) => theme.colors.orange};
    align-items: center;
`

export const LogoView = styled(View)`
    margin-top: 60px;
    flex-direction: row;
    align-items: center;
`

export const LogoText = styled(Text)`
    margin-left: 20px;
    font-size: 22px;
    color: ${({theme}) => theme.colors.white};
`

export const InfoText = styled(Text)`
    margin-top: 50px;
    font-size: 30px;
    color: ${({theme}) => theme.colors.white};
`
export const LoginText = styled(Text)`
    margin-top: 80px;
    font-size: 16px;
    width: 180px;
    color: ${({theme}) => theme.colors.white};
`
