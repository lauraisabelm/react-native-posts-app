// REACT NATIVE
import { I18nManager, StyleSheet, ViewProps } from 'react-native';

// LIBS
import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

// UTILS
import { theme } from '../../utils/theme';
import { isIos, responsiveSize } from '../../utils/responsive';

export const AnimatedIconContainer = styled(RectButton)({
  alignItems: 'center',
  flexDirection: I18nManager.isRTL ? 'row-reverse' : 'row',
  backgroundColor: theme.bittersweet,
  flex: 1,
  justifyContent: 'flex-end',
});

export const BlueDot = styled.View({
  backgroundColor: theme.blue,
  borderRadius: responsiveSize(5),
  height: responsiveSize(10),
  width: responsiveSize(10),
});

export const Item = styled(RectButton)({
  backgroundColor: isIos ? theme.white : theme.gray98,
  flexDirection: 'row',
  paddingVertical: responsiveSize(15),
});

type LeftContainerProps = {
  isRead: boolean;
} & ViewProps;

export const LeftContainer = styled.View(({ isRead }: LeftContainerProps) => ({
  alignItems: 'center',
  justifyContent: 'center',
  width: responsiveSize(!isRead && !isIos ? 15 : 30),
}));

type MiddleContainerProps = {
  isFavorite: boolean;
} & ViewProps;

export const MiddleContainer = styled.View(({ isFavorite }: MiddleContainerProps) => ({
  flex: 1,
  justifyContent: 'center',
  marginRight: isFavorite && !isIos ? responsiveSize(10) : 0,
}));

export const RightContainer = styled.View({
  alignItems: isIos ? 'center' : 'flex-start',
  justifyContent: 'center',
  width: responsiveSize(isIos ? 40 : 30),
});

export const NativeStyles = StyleSheet.create({
  animatedIcon: {
    marginHorizontal: responsiveSize(10),
    width: responsiveSize(30),
  },
});

export const Separator = styled.View({
  alignSelf: 'flex-end',
  backgroundColor: theme.gainsboro,
  height: 1,
  width: isIos ? '95%' : '100%',
});

export const Title = styled.Text({
  color: theme.grey,
  fontSize: 16,
  lineHeight: '22px',
});
