// import React from 'react'
// import { Box } from 'theme-ui'
// import MemphisPattern from '@components/MemphisPattern'
// import Stats from '@widgets/Stats'
// import HeroBoxed from '@widgets/HeroBoxed'
// import Content from './Hero.Content'
// import Photo from './Hero.Photo'

// const styles = {
//   stats: {
//     display: [`none`, null, `block`],
//     borderRadius: `left`,
//     overflow: `hidden`,
//     position: `absolute`,
//     right: 0,
//     bottom: 5,
//     mb: -3
//   },
//   pattern: {
//     width: `1/4`,
//     opacity: 0.1,
//     left: `auto`,
//     right: 0,
//     bottom: 0
//   }
// }

// export default () => (
//   <HeroBoxed.Wrapper>
//     <HeroBoxed.LeftColumn>
//       <Content />
//     </HeroBoxed.LeftColumn>
//     <HeroBoxed.RightColumn>
//       <Photo />
//     </HeroBoxed.RightColumn>
//     <Box sx={styles.stats}>
//       {/* <Stats /> */}
//     </Box>import React from 'react'


import HeroWide from '@widgets/HeroWide'
import Content from './Hero.Content'
import Photo from './Hero.Photo'

const Hero = props => {
  // const {
  //   location: { pathname },
  //   pageContext: { basePath }
  // } = props

  // if (pathname !== basePath) return null

  return (
    <HeroWide.Wrapper>
      <HeroWide.LeftColumn>
        <Content />
      </HeroWide.LeftColumn>
      <HeroWide.RightColumn>
        <Photo />
      </HeroWide.RightColumn>
    </HeroWide.Wrapper>
    
  )
}

export default Hero

//     <MemphisPattern sx={styles.pattern} />
//   </HeroBoxed.Wrapper>
// )


