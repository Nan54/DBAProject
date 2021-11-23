import React from 'react'
import styled from 'styled-components'
import Section from './Section'
//import {audi} from './query'

function AudiHome() {
    return (
        <Container>
            
            <Section
             model='R8' 
             backgroundImg='model-s.jpg' 
             description='cool car'
             leftBtn='Buy Now'
             rightBtn='Existing Inventory'
             />
            <Section 
            model='A8' 
            backgroundImg='model-y.jpg' 
            description='Order Online for touchless delivery'
            leftBtn='Custom Order'
             rightBtn='Existing Inventory'
            />
            <Section 
            model='Model 3' 
            backgroundImg='model-3.jpg' 
            description='Order Online for touchless delivery'
            leftBtn='Custom Order'
             rightBtn='Existing Inventory'
            />
            <Section 
            model='Model X' 
            backgroundImg='model-x.jpg' 
            description='Order Online for touchless delivery'
            leftBtn='Custom Order'
             rightBtn='Existing Inventory'
            />
            <Section 
            model='Solar Panels' 
            backgroundImg='solar-panel.jpg' 
            description='Lowest Cost Solar Panels in America'
            leftBtn='Order now'
             rightBtn='Learn more'
            />
            <Section 
            model='Solar Roof' 
            backgroundImg='solar-roof.jpg' 
            description='Produce Clean Energy From Your Roof'
            leftBtn='Order now'
             rightBtn='Learn more'
            />
            <Section 
            model='Accessories' 
            backgroundImg='accessories.jpg' 
            leftBtn='Order now'
            />
        </Container>
    )
}

export default AudiHome

const Container = styled.div`
    height: 100vh;

`
