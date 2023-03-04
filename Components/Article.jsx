import React from 'react'
import Share from './Share'

const Article = () => {
    return (
        <>
            <div className="articlebox flex-column">
                <div className="rectangle5"></div>
                <div className="article1">✍️ Article</div>
                <div className="articlehead">What if famous brands had regular fonts? Meet RegulaBrands! <div className="dots">...</div></div>
                <div className="articleshortdec">I’ve worked in UX for the better part of a decade. From now on, I plan to rei…</div>
                <div className="author"><div className="views"></div><Share/></div>
            </div>
        </>
    )
}

export default Article