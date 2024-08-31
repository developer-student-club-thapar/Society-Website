import React from 'react';
import bg from '../../assets/FormBg.png';
import formimage from '../../assets/formImage.png';
import { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorMessage, setErrorMessage] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Clear previous messages
        setErrorMessage(null);
        setSuccessMessage(null);

        try {
            const response = await axios.post("https://api-gdsc-main.vercel.app/api/v1/user/signup", {
                firstName,
                lastName,
                email,
                phoneNumber,
            });

            // Handle successful response
            if (response.status === 200) {
                setSuccessMessage("Successfully signed up to the newsletter!");
                setFirstName("");
                setLastName("");
                setEmail("");
                setPhoneNumber("");
            } else {
                throw new Error("Something went wrong. Please try again later.");
            }
        } catch (error) {
            // Handle different error scenarios
            if (error.response) {
                // Server responded with a status other than 200 range
                setErrorMessage(error.response.data.message || "Failed to sign up. Please try again.");
            } else if (error.request) {
                // Request was made but no response was received
                setErrorMessage("No response from server. Please check your internet connection and try again.");
            } else {
                // Something happened in setting up the request
                setErrorMessage("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className='bg-cover flex justify-center items-center w-full h-[120vh] lg:h-[80vh]'>
            <img src={bg} alt="" className='h-[100vh]  absolute -z-50  formAnim1' />
            <div className="bg-[#F5F5F5] rounded-3xl w-[90%] lg:w-[80%] p-10 lg:grid grid-cols-2 gap-10 formAnim">
                <div>
                    <h1 className=' text-2xl lg:text-6xl font-bold mb-4'>Sign up to our Newsletter</h1>
                    
                    <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-6">
                        <div className="lg:flex w-full gap-10">
                            <div>
                                <label className='text-md ml-2 font-medium text-gray-700' htmlFor="firstName">First Name</label>
                                <input
                                    value={firstName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className='mt-1 p-3 w-full rounded-3xl focus:ring-2 focus:ring-gray-500'
                                    required
                                />
                            </div>
                            <div className='lg:mt-0 mt-3'>
                                <label className='text-md ml-2 font-medium text-gray-700' htmlFor="lastName">Last Name</label>
                                <input
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className='mt-1 p-3 w-full rounded-3xl focus:ring-2 focus:ring-gray-500'
                                    required
                                />
                            </div>
                        </div>
                        <div>
                            <label className='block text-md ml-2 font-medium text-gray-700' htmlFor="email">Email</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                id="email"
                                name="email"
                                className='mt-1 p-3 w-full rounded-3xl focus:ring-2 focus:ring-gray-500'
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-md ml-2 font-medium text-gray-700' htmlFor="phone">Phone</label>
                            <input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                type="tel"
                                id="phone"
                                name="phone"
                                className='mt-1 p-3 w-full rounded-3xl focus:ring-2 focus:ring-gray-500'
                                required
                            />
                        </div>
                        {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
                    {successMessage && <div className="text-green-500 mb-4">{successMessage}</div>}
                        <button type="submit" className='px-20 bg-black text-white py-3 rounded-3xl font-semibold hover:bg-white border-2 border-black hover:text-black transition-all'>
                            SUBMIT
                        </button>
                    </form>
                </div>
                <div className="hidden lg:flex justify-center items-center">
                    <img src={formimage} alt="Newsletter" className='hidden lg:block' />
                </div>
            </div>
        </div>
    );
}

export default Form;