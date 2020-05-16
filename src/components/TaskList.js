import React from 'react'

export const TaskList = (props) => {
  return (
    <div className='row'>
      {props.allTasks.map((task) => {
        return (
          <div className='col-md-6 col-sm-12'>
            <div className='card mb-4 shadow-sm'>
              <svg
                className='bd-placeholder-img card-img-top'
                width='100%'
                height='225'
                xmlns='http://www.w3.org/2000/svg'
                preserveAspectRatio='xMidYMid slice'
                focusable='false'
                role='img'
                aria-label='Placeholder: Thumbnail'
              >
                <title>Placeholder</title>
                <rect width='100%' height='100%' fill='#55595c'></rect>
                <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
                  Thumbnail
                </text>
              </svg>
              <div className='card-body'>
                <p className='card-text'>
                  This is a wider card with supporting text below as a natural lead-in to additional
                  content. This content is a little bit longer.
                </p>
                <div className='d-flex justify-content-end'>
                  <h4>
                    <span className='badge badge-info'>Workout</span>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
