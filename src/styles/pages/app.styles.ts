import { styled } from '..'

export const AppContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  minHeight: '100vh',

  '@bp3': {
    justifyContent: 'center',
  },
})

export const HeaderContainer = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  '@bp1': {
    padding: '2rem 1rem',
  },
})
