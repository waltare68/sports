import React from 'react'

export default function Footer() {
  return (
    <div>
      <ul className="footer__menu d-lg-none">
            <li><a className="d-grid justify-content-center" href="/"><span><i className="fas fa-table-tennis"></i></span><span
                        className="texta">Sports</span></a></li>
            <li><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#eventsp"
                    href="URL:void(0)"><span><i className="fa-solid fa-gift"></i></span><span
                        className="texta">Events</span></a></li>
            <li className="header-bartwo d-lg-none"><span className="bars"><i className="fas fa-bars"></i></span><span
                    className="cros"><i className="fa-solid fa-xmark"></i></span></li>
            <li><a className="d-grid justify-content-center" data-bs-toggle="modal" data-bs-target="#betsp"
                    href="URL:void(0)"><span><i className="fas fa-ticket-alt"></i></span><span className="texta">My
                        Bet</span></a></li>
            <li><a className="d-grid justify-content-center" href="/dashboard"><span><i
                            className="far fa-user-circle"></i></span><span className="texta"> Account</span></a></li>
        </ul>
    </div>
  )
}
