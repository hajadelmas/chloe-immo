import React, { Children } from 'react'
import { Flex, Box } from 'theme-ui'

const styles = {
  wrapper: {
    alignItems: `center`,
    justifyContent: `space-between`,
    position: `relative`,
    zIndex: 2,
    pt: 4,
    pb: 5,
    height: '70vh'
  },
  leftColumn: {
    flexBasis: `1/3`,
    flex: 1,
    textAlign: [`center`, null, `left`]
  },
  rightColumn: {
    display: [`none`, null, `block`],
    flexBasis: `1/2`
  },
  videoEmbed : {
    width: '100%',
    height: '600px'
  },
  // videoBox: {
  //   position: 'relative',
  //   width: '100%'
  // }
}

const LeftColumn = ({ children, sx, ...props }) => (
  <Box sx={{ ...styles.leftColumn, ...sx }} {...props}>
    {children}
  </Box>
)

const RightColumn = ({ children, sx, ...props }) => (
  <Box sx={{ ...styles.rightColumn, ...sx }} {...props}>
    {children}
  </Box>
)

const Overlay = ({ children }) => children

const Wrapper = ({ children, ...props }) => {
  const childrenArray = Children.toArray(children)

  const OverlayContent = childrenArray.filter(
    ({ type }) =>
      type.displayName === Overlay.name || type.name === Overlay.name
  )

  const heroContent = childrenArray.filter(
    ({ type }) =>
      type.displayName !== Overlay.name && type.name !== Overlay.name
  )
  return (
    <>
      <Flex sx={{ ...styles.wrapper, ...props.sx }}>{heroContent}</Flex>
      {OverlayContent}
      <Box styles={styles.videoBox}>
        <iframe style={styles.videoEmbed} src="https://www.youtube.com/embed/ETtFy8QSJB4"></iframe>
      </Box>
    </>
  )
}

export default {
  Wrapper,
  LeftColumn,
  RightColumn,
  Overlay
}
