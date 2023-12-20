import React from 'react'
interface Left_site_sectionprops{
    children: React.ReactNode;
  }

export default function Left_site_section({children}:Left_site_sectionprops) {
  return (
    <>
        <div className="col-xxl-10 col-xl-9 col-lg-9">
                    <div className="left__site__section">
                        <div className="tab-content" id="myTabContentmain">
                            <div className="popular__events__body">
                                <div className="container-fluid p-0">
                                    <div className="row g-0">

                                        {children}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
      
    </>
  )
}
