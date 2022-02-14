import styled from "styled-components";
import {View, TouchableOpacity, Text} from 'react-native';

export const SignInButton = styled(TouchableOpacity)`
    background: ${({theme}) => theme.colors.white};
    width: 80%;
    height: 50px;
    flex-direction: row;
    margin-top: -20px;
    border-radius: 4px;
`

export const SignInButtonText = styled(Text)`
    color: ${({theme}) => theme.colors.signInButtonText};
`;

export const TextContainer = styled(View)`
    align-items: center;
    justify-content: center;

    width: 80%;
`;