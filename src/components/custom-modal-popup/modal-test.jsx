import { useState } from "react";
import Modal from './modal';
import './modal.css';

export default function ModalTest() {
    const [showModalPopup, setShowModalPopup] = useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup);
    }

    function onClose() {
        setShowModalPopup(false);
    }

    return (
        <div class="modal-container">
            <button onClick={handleToggleModalPopup}>Open Modal Popup</button>
            {
                showModalPopup && (
                    <Modal 
                        id={"custom-id"}
                        header={<h1>Golden Hamster!</h1>}
                        footer={<h1>Thanks for your reading!</h1>}
                        onClose={onClose}
                        body={<div>
                            <ul>
                                <li>Golden hamsters, also known as Syrian hamsters, originate from the arid regions of Syria, Turkey, and surrounding areas in the Middle East.</li>
                                <li>
                                They typically inhabit dry, desert-like environments where they burrow underground to escape the heat and find food.
                                </li>
                            </ul>
                        </div>}
                    />
                )
            }
        </div>
    );
}