import React from 'react'
import Footercontent from '../Footercontent'
interface Tabprops {
    selectedTab: string
}
export default function MainTabtwo({ selectedTab }: Tabprops) {
    const className = selectedTab === 'live' ? 'tab-pane text-white fade show active' : 'tab-pane text-white fade';

    return (
        <>
            <div className="tab-pane text-white fade" id="mainTab2" role="tabpanel">
                <div className="virtuals__ongoing__empty empty">
                    <span className="empty__message">Not available at the moment</span>
                </div>
                <div className="main__body__wrap left__right__space">
                    <div className="footer__content__section pt-60 pb-60">
                        <div className="footer__content__items">
                            <h5>Sports Betting at Sportingbet</h5>
                            <p>Join our community of soccer betting fans with the zikani online sports betting
                                site that allows you to bet on all your favourite football teams

                                Whether you call it soccer or football, the lovely game draws crowds
                                and punters from around the globe. Now you can join in the spirit of Betika football from the comfort of your own home
                                by placing an online bet on almost any professional football league in the world. Follow us for more great soccer
                                betting tips and all the latest football
                                news and soccer predictions. Our expert information could make you the next big online sports betting winner!</p>
                            
                        </div>
                        <div className="footer__content__items">
                            <h5>Bet online at Sportingbet</h5>
                            <p>You can’t win it if you’re not in it. Sign-up and be part of this exciting and fulfilling adventure.
                                 Ardent fans who fancy themselves a bit of a soccer score prediction whizz will have so much fun. 
                                 Register for a betting account with Betika and you stand the chance to win big and bag the 
                                 bragging rights with your sports-loving friends.
                                 Our safe and secure online soccer betting portal is fully registered and offers instant deposits and withdrawals.</p>
                        </div>
                        <div className="footer__content__items">
                            <h5>Bet on Football</h5>
                            <p>
                            Are you an English Premier League fan? We bet you are! Take your pick of Manchester United,
                             Chelsea, Arsenal, Liverpool or Tottenham Hotspur to stay in the international
                             soccer betting game and you could make a name for yourself, not to mention a few welcome winnings in your pocke
                            </p>
                        </div>
                    </div>
                </div>
                <Footercontent />

            </div>
        </>
    )
}
