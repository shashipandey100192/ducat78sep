import React, { Fragment } from 'react'
const imgpath = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpsar4g7_BvYEHmqwMKx1-kTkhM89-kSYCveeYjykjMQZMjRoHj22PRvXQfTULxvO9snM&usqp=CAU";

function Contactus() {
  return (
    <Fragment>
      <div className='first'>Contactus using git access </div>
      <div className='first'>Contactus using git access </div>
      <div className='first'>Contactus using git access </div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-3'>
            <div className="card">
              <img src={imgpath} className="card-img-top" alt="kjsdhfhsd" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
              <img src={imgpath} className="card-img-top" alt="kjsdhfhsd" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
              <img src={imgpath} className="card-img-top" alt="kjsdhfhsd" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
          <div className='col-md-3'>
            <div className="card">
              <img src={imgpath} className="card-img-top" alt="kjsdhfhsd" />
              <div className="card-body">
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>

  )
}

export default Contactus