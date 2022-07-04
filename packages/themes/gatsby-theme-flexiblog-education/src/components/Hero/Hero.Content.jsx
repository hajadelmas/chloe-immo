import React from 'react'
import { Link } from 'gatsby'
import { Box, Heading, Button } from 'theme-ui'
import Section from '@components/Section'

/**
 * Shadow me to add your own content
 */

const styles = {
  heading: {
    fontSize: '2rem',
    mb: 4,
    span: {
      color: `yellowImmo`
    }
  },
  running: {
    color: `omegaDark`,
    fontWeight: `body`,
    width: `5/6`
  },
  

}

export default () => (
  <>
    <Section>
      <Heading variant='h2' sx={styles.heading}>
        Ensemble main dans la main, concrétions votre transaction à <span>coût</span> sûr !
      </Heading>
      {/* <Heading variant='h3' sx={styles.running}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et.
      </Heading> */}
    </Section>
    <Box variant='buttons.group' sx={styles.buttons}>
      <Button as={Link} to='/'>
        Nos biens
      </Button>
      <Button variant='white' as={Link} to='/authors'>
        Blog
      </Button>
    </Box>
  </>
)
