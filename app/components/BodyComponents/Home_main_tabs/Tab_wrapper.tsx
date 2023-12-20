import React from 'react'
interface tabProps{
    children: React.ReactNode;
}

export default function Tab_wrapper({children}:tabProps) {
    
  return (
    <>
      <div className="col-xxl-10 col-xl-9 col-lg-9">
        {children}
      </div>
    </>
  )
}
