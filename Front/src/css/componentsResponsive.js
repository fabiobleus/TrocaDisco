import styled, { css } from "styled-components"
import { breakpoints } from "./responsive"

function ResponsiveProp(prop, callback) {
    if (prop) {
        return breakpoints.map((breakpoint) => {
            if (prop[breakpoint.name]) {
                return css`
                    @media (max-width; ${breakpoint.media}px) {
                      ${callback(breakpoint)}
                     
                     
                    }
                
                `
            }
        })
    }
}

const MagicSquare = styled.div`
    width: 300px
    heigt: 300px
    border: 2px solid black

   ${({ squareSize }) => {
        return ResponsiveProp(squareSize, (breakpoint) => css`
            width: ${squareSize[breakpoint.name]}px;
            height: ${squareSize[breakpoint.name]}px;
        `)
    }}

`
export default MagicSquare



