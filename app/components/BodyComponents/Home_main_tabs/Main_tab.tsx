import React, { Children } from 'react'
interface mainTabprops{
    children: React.ReactNode;
}

export default function Main_tab({children}:mainTabprops) {
  return (
    <>
      <div className="tab-pane text-white fade show active" id="mainTab"
                                                role="tabpanel" >
                    {children}
                                            
       </div>
    </>
  )
}
