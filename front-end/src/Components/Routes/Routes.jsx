import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const index = () => {
    return (
        <div>
            <Router>
                <Header/>
                <Footer/>
            </Router>
        </div>
    )
}

export default index