import React, { useContext } from 'react'
import '../styles/Navbar.css'
import Card from './Card/Card'
import ContentCategoryContext from '../context/ContentCategoryContext'
const PageContent = () => {
    const { currentContent } = useContext(ContentCategoryContext)
    return (
        <>
            {/* Start Page content holder */}
            <div className="page-content p-2" id="content">


                {/* Content Header */}

                <div className="row text-white content-container container">

                    {/* content */}

                    {
                        currentContent.map((content) => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center align-items-center" style={{ marginTop: '1rem' }} >
                                    <Card content={content} />

                                </div>
                            )
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default PageContent