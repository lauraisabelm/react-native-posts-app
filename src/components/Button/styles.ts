// REACT NATIVE
import { TouchableOpacityProperties } from 'react-native';

// LIBS
import styled from 'styled-components/native';

// UTILS
import { responsiveSize } from '../../utils/responsive';
import { theme } from '../../utils/theme';

type ButtonContainerProps = {
  backgroundColor: string;
  width: number | string;
} & TouchableOpacityProperties;

export const Container = styled.TouchableOpacity(
  ({ backgroundColor, width }: ButtonContainerProps) => ({
    alignItems: 'center',
    backgroundColor,
    height: responsiveSize(40),
    justifyContent: 'center',
    paddingHorizontal: responsiveSize(20),
    paddingVertical: responsiveSize(6),
    width,
  }),
);

export const Title = styled.Text({
  color: theme.white,
  fontSize: 17,
});
