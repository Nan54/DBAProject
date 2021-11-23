import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
	return (
		<Container>
			<Section 
				title="Alfa Romeo" 
				description="Order Online"
				backgroundImg="alfa_romeo-home.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
			<Section 
				title="Aston Martin" 
				description="Order Online"
				backgroundImg="aston-martin-home.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
			<Section 
				title="Audi" 
				description="Order Online"
				backgroundImg="Audi-home.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
			<Section 
				title="Model Y" 
				description="Order Online fro Touchless Delivery"
				backgroundImg="model-y.jpg"
				leftBtnText="Custom order"
				rightBtnText="Exisiting inventory"
			/>
			<Section
				title="Lowerst Cost Solar Panels in America"
				description="Money-back guarantee"
				backgroundImg="solar-panel.jpg"
				leftBtnText="Oder now"
				rightBtnText="Learn more"
			>
			</Section>
			<Section
				title="Solar for New Roofs"
				description="Solar Roof Costs Less Than a New"
				backgroundImg="solar-roof.jpg"
				leftBtnText="Oder now"
				rightBtnText="Learn more"
			>
			</Section>
			<Section
				title="Accessories"
				description=""
				backgroundImg="accessories.jpg"
				leftBtnText="Shop now"
			>
			</Section>
		</Container>
	)
}

export default Home

const Container = styled.div `
	height: 200vh;	
`