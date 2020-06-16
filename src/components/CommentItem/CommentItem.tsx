// REACT NATIVE
import React from 'react';

// STYLES
import { Body, Item, Separator } from './styles';

interface Props {
  body: string;
}

const CommentItem = ({ body }: Props) => (
  <>
    <Item>
      <Body>{body}</Body>
    </Item>
    <Separator />
  </>
);

export default CommentItem;
