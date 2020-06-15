// REACT NATIVE
import React from 'react';

// LIBS
import Icon from 'react-native-vector-icons/Ionicons';

// STYLES & UTILS
import { Container } from './styles';
import { theme } from '../../utils/theme';

interface Props {
  changeableIcon: boolean;
  iconNameOff: string;
  iconNameOn: string;
  iconSelected?: boolean;
  onButtonPress: () => void;
}

const HeaderButton = ({
  changeableIcon,
  iconNameOff,
  iconNameOn,
  iconSelected,
  onButtonPress,
}: Props) => {
  const getIconName = () => {
    let icon = iconNameOn;
    if (changeableIcon) {
      icon = iconSelected ? iconNameOn : iconNameOff;
    } else {
      icon = iconNameOn;
    }
    return icon;
  };
  return (
    <Container onPress={onButtonPress}>
      <Icon color={theme.white} name={getIconName()} size={25} />
    </Container>
  );
};

HeaderButton.defaultProps = {
  changeableIcon: false,
  iconNameOff: '',
};

export default HeaderButton;
