import React from 'react'
import { Heading, Box } from 'theme-ui'

/**
 * Shadow me to add your own content
 */

const styles = {
  wrapper: {
    ml: 3
  },
  heading: {
    color: `alpha`
  },
  running: {
    color: `omegaDark`,
    fontWeight: `body`
  }
}

export default () => (
  <Box sx={styles.wrapper}>
    <Heading variant='h1' sx={styles.heading}>
      Prendre le temps de vendre vite.
    </Heading>
    <Heading variant='h3' sx={styles.running}>
      "When I got out of university, I couldn't get a job. But now, I have a job
      and I am in love with computer science because of Academy."
    </Heading>
    <Heading variant='h3'>Aubree Joyce</Heading>
  </Box>
)
