"use client"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Spinner from '../components/spinner';
interface TransactionModalProps {
    userEmail: string
}

function AddTransactionModal({ userEmail }: TransactionModalProps) {
    const [show, setShow] = useState(false);
    const [loadingSave, setLoadingSave] = useState(false);
    const [apimessage, setApiMessage] = useState('')
    const [transref, setTransref] = useState('');
    const [amount, setAmount] = useState('');
    const [channel, setChannel] = useState('Mpesa');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const SaveTransaction = async () => {
        setLoadingSave(true)
        try {
            const response = await fetch('/api/users/transactions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ transref, amount, channel, userEmail }),
            });

            if (response.ok) {
                console.log('Transaction submitted successfully!');
                setLoadingSave(false)
                setApiMessage("Saved Success")
            } else {
                setLoadingSave(false)
                setApiMessage("Internal server error")
            }
        } catch (error) {
            setLoadingSave(false)
            setApiMessage("contact developer")
        }

    }



    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Transaction
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Save User Deposit Transaction</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="flex items-center bg-blue-500 text-white text-sm font-bold px-4 py-3" role="alert">
                        <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
                        <p>{apimessage}</p>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="transRef" className="block text-sm font-medium leading-6 text-gray-900">
                            Transaction Reference No
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="transRef"
                                value={transref} onChange={(e) => setTransref(e.target.value)}
                                id="transRef"
                                autoComplete="transRef"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="transAmmount" className="block text-sm font-medium leading-6 text-gray-900">
                            Amount in USD
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="transAmmount"
                                value={amount} onChange={(e) => setAmount(e.target.value)}
                                id="transAmmount"
                                autoComplete="transAmmount"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                    <div className="col-span-full">
                        <label htmlFor="PaymentChannel" className="block text-sm font-medium leading-6 text-gray-900">
                            Payment Channel
                        </label>
                        <div className="mt-2">
                            <input
                                type="text"
                                name="PaymentChannel"
                                value={channel} onChange={(e) => setChannel(e.target.value)}
                                id="PaymentChannel"
                                autoComplete="PaymentChannel"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:text-black focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={SaveTransaction}>
                        Save Transaction {loadingSave? <Spinner/>:''}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTransactionModal;