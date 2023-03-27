import { styled } from '..'

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    padding: '0 1rem',
    gridTemplateColumns: '1fr',
    gap: '2rem',
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },

  '@bp3': {
    height: '75vh',
  },

  '@bp1': {
    width: '100%',
    height: '50vh',

    img: {
      width: '100%',
      height: 360,
    },
  },
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$2xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$2xl',
    color: '$green300',
  },

  p: {
    marginTop: '2.5rem',
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    textTransform: 'uppercase',

    transition: 'all 0.2s',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  },

  '@bp1': {
    height: '70vh',

    h1: {
      fontSize: '$xl',
    },

    span: {
      marginTop: '.5rem',
      fontSize: '$xl',
    },

    button: {
      margin: '1.5rem 0',
    },

    p: {
      margin: '0',
    },

    ':nth-child(1)': { order: 1 },
    ':nth-child(2)': { order: 2 },
    ':nth-child(3)': { order: 4 },
    ':nth-child(4)': { order: 3 },
  },
})
