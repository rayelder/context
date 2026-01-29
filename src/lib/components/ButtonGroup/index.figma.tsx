import Button from '../Button';
import ButtonGroup from './index';
import Link from '../Link';
import figma from '@figma/code-connect';

figma.connect(
  ButtonGroup,
  'https://www.figma.com/design/FNVYXYuplFl2mNZi9YzuQ9?node-id=32%3A30',
  {
    props: {},
    example: (props) => (
      <ButtonGroup>
        <Button label="Sign in" isPill />
        <Link label="Browse contacts" />
      </ButtonGroup>
    ),
  },
);
