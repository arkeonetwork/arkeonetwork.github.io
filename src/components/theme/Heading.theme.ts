export const HeadingStyle = {
  // Styles for the base style
  baseStyle: {
    lineHeight: '1.2',
    letterSpacing: '-0.03em',
    fontWeight: 'black',
  },
  // Styles for the size variations
  sizes: {},
  // Styles for the visual style variations
  variants: {
    purple: {
      backgroundImage: 'linear-gradient(180deg, #CAC1FF 0%, #988FCE 100%)',
      backgroundClip: 'text',
    },
  },
  // The default `size` or `variant` values
  defaultProps: {
    size: 'inherit',
  },
}
