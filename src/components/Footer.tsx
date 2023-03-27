import { styled } from '@/styles'

export function Footer() {
  return (
    <FooterContainer>
      <strong>
        Created with ❤️ by{' '}
        <a
          href="https://www.linkedin.com/in/luancardosoti/"
          target="_blank"
          rel="noreferrer"
        >
          Luan cardoso
        </a>
      </strong>
    </FooterContainer>
  )
}

export const FooterContainer = styled('footer', {
  marginTop: 'auto',
  width: '100%',

  backgroundColor: '$gray800',
  padding: '.5rem',
  fontSize: '.75rem',
  fontWeight: 'normal ',
  color: '$gray100',
  textAlign: 'center',

  a: {
    textDecoration: 'none',
    color: '$gray300',

    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
