import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const Container = styled.header`
	background: rebeccapurple;
	margin-bottom: 1.45rem;
`

const Content = styled.div`
	margin: 0 auto;
	max-width: 960px;
	padding: 1.45rem 1.0875rem;
`

const Heading = styled.h1`
	margin: 0;
`

const HeaderLink = styled(Link)`
	color: white;
	text-decoration: none;
`

const Header = ({ siteTitle }) => (
	<Container>
		<Content>
			<Heading>
				<HeaderLink to="/">{siteTitle}</HeaderLink>
			</Heading>
		</Content>
	</Container>
)

export default Header
