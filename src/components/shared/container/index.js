import styled from 'styled-components'

/**
 * margin, padding, maxWitdh, centered
 * <Container padding = "20px" margin = "20px" witdh = "100px">
 */

export default styled.div`
box-sizing: border-box;
${({ margin }) => margin && `margin: ${margin};`}
${({ centered }) => centered && `margin: 0 auto;`}
${({ maxWitdh }) => maxWitdh && `maxWitdh: ${maxWitdh}px;`}
${({ padding }) => padding && `padding: ${padding};`}
${({ width }) => width && `width: ${width};`}
`
