import styled from 'styled-components'

const Container = styled.div`
    max-width: 1140px;
    padding: 0 15px;
    margin: 0 auto;
    @media (max-width: 1200px) {
        & {
            max-width: 960px;
        }
    }
    @media (max-width: 992px) {
        & {
            max-width: 720px;
        }
    }
    @media (max-width: 768px) {
        & {
            max-width: 540px;
        }
    }
`

export default Container
