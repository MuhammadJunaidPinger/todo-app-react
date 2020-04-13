import { render } from "@testing-library/react"
import React, { Component } from 'react'

class HeroBtn extends Component {

    render() {
        const {bgColor, buttonText} = this.props
        const style = {
            background: bgColor || green,
            fontSize: buttonText || 20
        }
        return(
            
            <button style = {style}>
            Click Here                
            </button>
        )
    }
}

export default HeroBtn