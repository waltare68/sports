import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modal_nav from './tabsNav';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';



function LoginModal() {
    const router = useRouter();
    const {status} = useSession();
    const [show, setLoginShow] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [isSignInActive, setIsSignInActive] = useState(false);
    const handleLoginClose = () => setLoginShow(false);
    const handleLoginShow = () => setLoginShow(true);
    const [activetab,setActiveTab] = useState('login')

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [message, setMessage] = useState('');
    
    const handleTabClick = (tabName: string) => {
        setActiveTab(tabName);
      };
    
    const handleSubmit = async () => {
        setMessage('signing in...')
        try {
            const signInResponse = await signIn('credentials', {
                email,
                password,
                redirect: false,
            })

            if(!signInResponse || signInResponse.ok !== true) {
                setMessage("Invalid credentials");
            } else {
                router.refresh();
                handleLoginClose();
            }
        } catch (error) {
            
        }
        
    };
    useEffect(() =>{
        if(status === 'authenticated'){
            router.refresh();
            router.push('/');
        }
    } ,[status])

    

    return (
        <>
            <a className="cmn--btn" onClick={handleLoginShow}
               ><span>Sign In</span></a>
            
            <Modal 
                show={show}
                 onHide={handleLoginClose}
                 size="xl"
                 className='register__modal backdrop-blur-sm'
                 centered 
                 scrollable
                 >
                <Modal.Header closeButton >
                    
                </Modal.Header>
                <Modal.Body>
                <div className="container">
                        <div className="row align-items-center g-4">
                            <div className="col-lg-6">
                                <div className="modal__left"><img alt="modal" loading="lazy" width="424" height="533"
                                        decoding="async" data-nimg="1" style={{color:'transparent'}}
                                        srcSet="/img/modal/modal.png"
                                        src="/img/modal/modal.png"/>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="modal__right">
                                <ul className="nav nav-tabs" id="myTab2" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${activetab === 'signup' ? 'active' : ''}`} onClick={() => handleTabClick('signup')} id="home-tab1" data-bs-toggle="tab" data-bs-target="#home2"  type="button"
                                                    role="tab" aria-selected="true">Sign Up
                                            </button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className={`nav-link ${activetab === 'login' ? 'active' : ''}`} onClick={() => handleTabClick('login')}  id="contact-tab3" data-bs-toggle="tab" data-bs-target="#contact2"
                                                type="button" role="tab" aria-selected="false">Sign In
                                            </button>
                                        </li>
                                        </ul>
                                    <div className="tab-content " id="myTabContent2">
                                        <div className={`tab-pane fade ${activetab === 'login' ? 'show active' : ''}`}  id="home2 " role="tabpanel">
                                        
                                            <div className="form__tabs__wrap">
                                                <div className="focus__icon">
                                                    
                                                </div>
                                                <form action="#0">
                                                    <div className="form__grp">
                                                        <label htmlFor="emailsign">Email</label>
                                                        <input  type="email" id="emailsign" placeholder="Your Email "value={email} onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                    <div className="form__grp"><label
                                                            htmlFor="toggle-password3">Password</label>
                                                            <input id="toggle-password3" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your Password" />
                                                            <span id="#toggle-password3" className="fa fa-fw fa-eye field-icon toggle-password3"></span>
                                                    </div>
                                                    <div className="login__signup">
                                                        <div className="form-check">
                                                            <input className="form-check-input"  type="checkbox" id="remem" />
                                                            <label className="form-check-label" htmlFor="remem">Remember me</label>
                                                        </div>
                                                        <a href="URL:void(0)">Forgot Password</a>
                                                    </div>
                                                    <div className="create__btn" onClick={handleSubmit}>
                                                        <a className="cmn--btn" href="#"><span>Sign in</span></a>
                                                    </div>
                                                    <p>Don't you have an account?<a href="#">Register</a></p>
                                                    <p>{message}</p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className={`tab-pane fade ${activetab === 'signup' ? 'show active' : ''}`} id="contact2" role="tabpanel">
                                            <div className="form__tabs__wrap">
                                                <div className="focus__icon">
                                                    <p>or registration via social media accounts</p>
                                                    <div className="social__head">
                                                        <ul className="social">
                                                            <li><a href="URL:void(0)"><i
                                                                        className="fa-brands fa-facebook-f"></i></a></li>
                                                            <li><a href="URL:void(0)"><i className="fab fa-twitter"></i></a>
                                                            </li>
                                                            <li><a href="URL:void(0)"><i
                                                                        className="fa-brands fa-linkedin-in"></i></a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <form action="#0">
                                                    <div className="form__grp"><label htmlFor="email34">Email</label>
                                                    <input type="email" id="email34" placeholder="Email Your" value={email} onChange={(e) => setEmail(e.target.value)} /></div>
                                                    <div className="form__grp">
                                                        <label htmlFor="toggle-password10">Password</label>
                                                            <input id="toggle-password10" type="password" placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)}  />
                                                            <span id="#toggle-password10" className="fa fa-fw fa-eye field-icon toggle-password10"></span>
                                                    </div>
                                                    <div className="form__grp"><label
                                                            htmlFor="toggle-password9">Confrim</label><input
                                                            id="toggle-password9" type="password"
                                                            placeholder="Password" /><span id="#toggle-password9"
                                                            className="fa fa-fw fa-eye field-icon toggle-password9"></span>
                                                    </div>
                                                    <div className="create__btn" onClick={handleSubmit}><a className="cmn--btn"
                                                            href="#"><span>Sign Up</span></a></div>
                                                    <p>Do you have an account?<a href="#">Login</a>
                                                    </p>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
                
                
            </Modal>
            
        </>
    );
}

export default LoginModal;