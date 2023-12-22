import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Modal_nav from './tabsNav';

function SignUpModal() {
    const [show, setShow] = useState(false);
    const [isActive, setIsActive] = useState(true);
    const [isSignInActive, setIsSignInActive] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        //let msg =''// await signUp(email,password,firstname,lastname);

        const fetchData = async () => {
            try {
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ email,password,firstname,lastname }),
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch balance');
                }

                const data = await response.json();
                const msg = data.message;
                setMessage(msg)
            } catch (error) {
                console.error('Error fetching balance:', error);
            }
        };
        
        
    };


    return (
        <>
            <a className="cmn--btn" onClick={handleShow}
               ><span>Join</span></a>
            
            <Modal 
                show={show}
                 onHide={handleClose}
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
                                    <div className="tab-content" id="myTabContent2">
                                        <div className="tab-pane fade " id="home2 " role="tabpanel">
                                            <div className="form__tabs__wrap">
                                                
                                                <form action="#0">
                                                    <div className="form__grp"><label htmlFor="emailsign">Email</label><input
                                                            type="email" id="emailsign" placeholder="Email Your" />
                                                    </div>
                                                    <div className="form__grp"><label
                                                            htmlFor="toggle-password3">Password</label><input
                                                            id="toggle-password3" type="password"
                                                            placeholder="Your Password" /><span id="#toggle-password3"
                                                            className="fa fa-fw fa-eye field-icon toggle-password3"></span>
                                                    </div>
                                                    <div className="login__signup">
                                                        <div className="form-check"><input className="form-check-input"
                                                                type="checkbox" id="remem" /><label
                                                                className="form-check-label" htmlFor="remem">Remember me</label>
                                                        </div><a href="URL:void(0)">Forgot Password</a>
                                                    </div>
                                                    <div className="create__btn"><a className="cmn--btn"
                                                            href="URL:void(0)"><span>Sign Up</span></a></div>
                                                    <p>Do you have an account?<a
                                                            href="URL:void(0)">Registration</a></p>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade show active" id="contact2" role="tabpanel">
                                            <div className="form__tabs__wrap">
                                                
                                                <form action="#0">
                                                <div className="form__grp">
                                                    <label htmlFor="firstName">First Name</label>
                                                    <input type="text" id="firstName" placeholder="First Name"  value={firstname} onChange={(e) => setFirstname(e.target.value)}/>
                                                    </div>
                                                    <div className="form__grp">
                                                    <label htmlFor="firstName">Last Name</label>
                                                    <input type="text" id="lastname" placeholder="Last Name"  value={lastname} onChange={(e) => setLastname(e.target.value)}/>
                                                    </div>

                                                    <div className="form__grp">
                                                        <label htmlFor="email34">Email</label>
                                                        <input type="email" id="email34" placeholder="Your Email "  value={email} onChange={(e) => setEmail(e.target.value)}/>
                                                    </div>
                                                    <div className="form__grp"><label
                                                            htmlFor="toggle-password10">Password</label>
                                                            <input id="toggle-password10" type="password"placeholder="Your Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                                            <span id="#toggle-password10" className="fa fa-fw fa-eye field-icon toggle-password10"></span>
                                                    </div>
                                                    <div className="form__grp"><label
                                                            htmlFor="toggle-password9">Confrim</label>
                                                            <input id="toggle-password9" type="password" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                                                            <span id="#toggle-password9" className="fa fa-fw fa-eye field-icon toggle-password9"></span>
                                                    </div>
                                                    <div className="create__btn" onClick={handleSubmit}><a className="cmn--btn"
                                                            href="#"><span>Sign Up</span></a></div>
                                                    <p>Do you have an account?<a href="#">Login</a>
                                                    </p>
                                                    <p>{message}</p>
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

export default SignUpModal;