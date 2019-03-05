import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { rhythm, scale } from "../utils/typography"

const H1 = styled.h1`
  ${{...scale(1.5)}};
  margin-bottom: ${rhythm(1.5)};
  margin-top: 0;
`
const H3 = styled.h3`
  font-family: Montserrat, sans-serif;
  margin-top: 0;
  margin-bottom: ${rhythm(-1)};
`
const StyledLink = styled(Link)`
  box-shadow: none;
  text-decoration: none;
  color: inherit;
`
const Container = styled.div`
  max-width: ${rhythm(24)};
  padding: ${rhythm(1.5)} ${rhythm(3 / 4)};
  margin-left: auto;
  margin-right: auto;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <H1>
          <StyledLink to={'/'}>
            {title}
          </StyledLink>
        </H1>
      )
    } else {
      header = (
        <H3>
          <StyledLink to={'/'} >
            {title}
          </StyledLink>
        </H3>
      )
    }
    return (
      <Container>
        {header}
        {children}
        <footer>
          © {new Date().getFullYear()}, Built with ❤️。
        </footer>
      </Container>
    )
  }
}

export default Layout
