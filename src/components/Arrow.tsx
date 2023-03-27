import { styled } from '@/styles'

interface ArrowProps {
  disabled: boolean
  onClick: () => void
  left?: boolean
}

export function Arrow(props: ArrowProps) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <ArrowContainer
      onClick={(e) => {
        if (e.stopPropagation) {
          e.stopPropagation()
        }
        props.onClick()
      }}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </ArrowContainer>
  )
}

export const ArrowContainer = styled('svg', {
  width: 30,
  height: 30,
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  webkitTransform: 'translateY(-50%)',
  fill: '$white',
  cursor: 'pointer',

  '&.arrow--left': {
    left: 5,
    right: 'auto',
  },

  '&.arrow--right': {
    left: 'auto',
    right: 5,
  },

  '&.arrow--disabled': {
    fill: 'rgba(255, 255, 255, 0.5)',
  },
})
