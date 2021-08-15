import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import Routes from './routes'
import GlobalStyle from './global'

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
)
