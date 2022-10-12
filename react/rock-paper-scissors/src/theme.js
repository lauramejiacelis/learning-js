import { defineStyleConfig, extendTheme } from '@chakra-ui/react';

const Button = defineStyleConfig({
  variants: {
    outline: {
      border: '2px solid',
      borderColor: '#CC57C7',
      color: '#CC57C7',
      _hover: { bg: '#AA34A4', color: 'white' },
    },
    solid: {
      bg: '#CC57C7',
      color: 'white',
      _hover: { bg: '#AA34A4', color: 'white' },
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});

const theme = extendTheme({
  components: {
    Button,
  },
});
export default theme;
