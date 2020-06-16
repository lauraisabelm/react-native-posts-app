// REACT NATIVE
import React from 'react';
// import Icon from 'react-native-vector-icons/FontAwesome5';

// LIBS
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

// STYLES & UTILS
import { Container, Title } from './styles';
import { isIos } from '../../utils/responsive';
import { theme } from '../../utils/theme';

interface Props {
  color: string;
  iconName: string;
  name: string;
  onPress: () => void;
  width: number | string;
}

const Button = ({ color, iconName, name, onPress, width }: Props) => {
  if (isIos) {
    return (
      <Container activeOpacity={0.7} backgroundColor={color} onPress={onPress} width={width}>
        <Title>{name}</Title>
      </Container>
    );
  }

  return (
    <ActionButton
      buttonColor={color}
      onPress={onPress}
      renderIcon={() => <Icon color={theme.white} name={iconName} size={25} />}
    />
  );
};

export default Button;
