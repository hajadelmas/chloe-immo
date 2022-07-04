// import React from 'react'
// import { graphql, useStaticQuery } from 'gatsby'
// import { Box } from 'theme-ui'

// const styles = {
//   image: image => ({
//     display: [`none`, null, `block`],
//     height: `120%`,
//     // width: `1/2`,
//     minWidth: 380,
//     maxHeight: 514,
//     borderRadius: `default`,
//     backgroundImage: `url(${image})`,
//     backgroundRepeat: `no-repeat`,
//     // filter: `grayscale(1)`,
//     overflowX: `hidden`,
//     position: `absolute`,
//     bottom: 0,
//     right: 0,
//     zIndex: 2
//   })
// }

// export default () => {
//   const data = useStaticQuery(heroQuery)
//   const { publicURL } = (data && data.file) || {}

//   if (!publicURL) return ''

//   return <Box sx={styles.image(publicURL)}></Box>
// }

// const heroQuery = graphql`
//   query HeroQuery {
//     file(absolutePath: { regex: "/hero3.(jpeg|jpg|gif|png)/" }) {
//       publicURL
//     }
//   }
// `


import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { Box } from 'theme-ui'
import Avatar from '@components/Avatar'

const styles = {
  wrapper: {
    display: [`none`, null, `block`],
    position: `relative`,
    textAlign: `center`
  },
  pattern: {
    height: `1/2`,
    transform: `translate(0, 50%)`
  }
}

export default () => {
  const data = useStaticQuery(heroQuery)
  const image = data && data.avatar && data.avatar.childImageSharp

  return (
    <Box sx={styles.wrapper}>
      <Avatar
        avatar={image}
        
        loading='eager'
      />
    </Box>
  )
}

const heroQuery = graphql`
  query HeroQuery {
    avatar: file(absolutePath: { regex: "/hero5.(jpeg|jpg|gif|png)/" }) {
      childImageSharp {
        regular: gatsbyImageData(
          width: 320
          height: 320
          transformOptions: { cropFocus: NORTH }
          placeholder: TRACED_SVG
        )
      }
    }
  }
`
