import Link from './index';
import figma from '@figma/code-connect';

figma.connect(
  Link,
  'https://www.figma.com/design/FNVYXYuplFl2mNZi9YzuQ9?node-id=32%3A9',
  {
    props: {
      label: figma.string('label'),
    },
    example: (props) => <Link label={props.label} />,
  },
);
