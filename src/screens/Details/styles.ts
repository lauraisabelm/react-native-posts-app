// REACT NATIVE
import { StyleSheet } from 'react-native';

// LIBS
import styled from 'styled-components/native';

// UTILS
import { theme } from '../../utils/theme';
import { isIos, responsiveSize } from '../../utils/responsive';

export const ActivityContainer = styled.View({
  alignItems: 'center',
  marginVertical: responsiveSize(30),
  width: '100%',
});

export const CommentsBar = styled.View({
  backgroundColor: isIos ? theme.titanWhite : theme.gray91,
  marginTop: responsiveSize(30),
  paddingHorizontal: responsiveSize(15),
});

export const CommentTitle = styled.Text({
  color: isIos ? theme.nero : theme.suvaGrey,
  fontSize: 18,
  fontWeight: isIos ? 'bold' : 'normal',
  paddingBottom: isIos ? responsiveSize(2) : 0,
  paddingTop: isIos ? responsiveSize(5) : 0,
});

type ContentProps = {
  isCommentsContent?: boolean;
};

export const Content = styled.View(({ isCommentsContent }: ContentProps) => ({
  paddingHorizontal: responsiveSize(isCommentsContent ? 30 : 15),
  width: '100%',
}));

export const CustomText = styled.Text({
  color: theme.suvaGrey,
  flex: 1,
  fontSize: 16,
  lineHeight: isIos ? '22px' : '30px',
  paddingBottom: responsiveSize(5),
});

export const MainContainer = styled.SafeAreaView({
  backgroundColor: isIos ? theme.whiteSmoke : theme.gray98,
  flex: 1,
  width: '100%',
});

export const NativeStyles = StyleSheet.create({
  flatlist: {
    paddingBottom: responsiveSize(50),
  },
});

export const NoDataMessage = styled.Text({
  color: theme.suvaGrey,
  fontSize: 16,
  lineHeight: isIos ? '22px' : '30px',
  marginTop: responsiveSize(25),
  textAlign: 'center',
});

export const TitleField = styled.Text({
  color: theme.suvaGrey,
  fontSize: 16,
  width: responsiveSize(100),
});

export const TitleText = styled.Text({
  color: theme.nero,
  fontSize: 20,
  fontWeight: 'bold',
  marginBottom: responsiveSize(13),
  marginTop: responsiveSize(20),
});

export const UserRow = styled.View({
  alignItems: 'center',
  flexDirection: 'row',
  width: '100%',
});
