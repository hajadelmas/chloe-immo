import React from 'react'
import { Container, Box, Flex } from 'theme-ui'
import Navigation from '@components/Navigation'
import useSiteMetadata from '@helpers-blog/useSiteMetadata'
import attachSocialIconsW from '@helpers/attachSocialIconsW'

const styles = {
  wrapper: {
    position: `fixed`,
    right: '0',
    top: '300px',
    boxShadow: '-17px 1px 42px -9px rgba(134,134,134,0.97)'
  }
}

export const SocialBar = () => {
    const { social } = useSiteMetadata()

    return (
        <>
            <Box sx={styles.wrapper}>
                <Navigation
                    items={attachSocialIconsW(social)}
                    variant={[`horizontal`, `vertical`]}
                    wrapperStyle={styles.social}
                />
            </Box>
        </>
        
    )
}


