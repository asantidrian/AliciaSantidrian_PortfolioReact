import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../utils/helpers';

function Form() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and password
        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
        }
        if (!name) {
            setErrorMessage('Name is required');
            return;
        }
        if (!message) {
            setErrorMessage('Message is required');
            return;
        }
        alert(`Hello ${name}, you meassage has been recieved!`);

        // If everything goes according to plan, we want to clear out the input after a successful registration.
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="card-body col-12 min-vh-100 p-4">
            <h2 className="mt-1 mb-2 text-center">Contact Me</h2>
            <div className="row justify-content-center">
                <div className="col-sm-6 ">
                    <div className="card d-flex justify-content-center flex-column proficiencies">
                        <div className="card-body">

                            <form action="https://formsubmit.co/asantidrian83@gmail.com" method="POST">
                                <div className="form-group">
                                    <label for="formControlInput1">Name</label>
                                    <input
                                        className="col-12 mb-2"
                                        value={name}
                                        name="name"
                                        onChange={handleInputChange}
                                        type="text"
                                        placeholder="name" />
                                </div><div class="form-group">
                                    <label for="formControlInput2">Email</label>
                                    <input
                                        className="col-12  mb-2"
                                        value={email}
                                        name="email"
                                        onChange={handleInputChange}
                                        type="email"
                                        placeholder="email" />
                                </div><div class="form-group">
                                    <label for="formControlInput2">Message</label>

                                    <textarea
                                        className="col-12  mb-2"
                                        value={message}
                                        name="message"
                                        onChange={handleInputChange}
                                        type="textarea"
                                        rows="10"
                                        placeholder="Write you message here"
                                    ></textarea>
                                </div><button className="justify-content-left p-2 mb-2" type="button" onClick={handleFormSubmit}> Submit </button>
                            </form>
                            {errorMessage && (
                                <div>
                                    <p className="error-text">{errorMessage}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Form;
