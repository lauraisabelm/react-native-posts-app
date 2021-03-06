// REACT NATIVE
import { StyleSheet } from 'react-native';

// LIBS
import styled from 'styled-components/native';

// UTILS
import { theme } from '../../utils/theme';
import { isIos, responsiveSize } from '../../utils/responsive';

export const Container = styled.View({
  backgroundColor: isIos ? theme.whiteSmoke : theme.gray98,
  flex: 1,
  width: '100%',
});

export const LoadingContainer = styled.View({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center',
});

export const MainContainer = styled.SafeAreaView({
  backgroundColor: theme.red,
  flex: 1,
});

export const NativeStyles = StyleSheet.create({
  flatlist: {
    paddingBottom: responsiveSize(30),
  },
});

export const NoDataText = styled.Text({
  color: theme.grey,
  fontSize: 16,
  lineHeight: '22px',
  marginTop: responsiveSize(30),
  paddingHorizontal: responsiveSize(20),
  textAlign: 'center',
});
