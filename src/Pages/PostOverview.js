import React from 'react'
import Card from '../Components/Card'

const PostOverview = () => {
  return (
    <div className="container">
        <div className="row mt-5">
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
            <div className="col-md-4">
                <Card/>
            </div>
        </div>
    </div>
  )
}

export default PostOverview