import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';



const Contact = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSendMessage = async (e) => {
        e.preventDefault();
        await axios.post("https://my-portfolio-mern-backend.vercel.app/api/v1/message/send", {
            name,
            email,
            message,
        }, { withCredentials: true, headers: { "Content-Type": "application/json" } }
        ).then(res => {
            toast.success(res.data.message);
            setName("");
            setEmail("");
            setMessage("");
        }).catch(error => {
            toast.error(error.response.data.message);
            console.log(error);
        });
    };


    return (

        <section id='connect'>
            <div className="conn">
                <br></br><br></br><br></br><br></br><br></br><br></br>
                <form onSubmit={handleSendMessage}>
                    <div className="form">
                        <h1 className="connectHead">Contact</h1>

                        <div className="mb-3">
                            <label for="formGroupExampleInput" className='form-label'>Name :</label>
                            <input type="text" className='form-control' id='formGroupExampleInput' placeholder='Your full Name' name='name' value={name}
                                onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput" className='form-label'>Email :</label>
                            <input type="email" className='form-control' id='formGroupExampleInput2' placeholder='abc@gmail.com' name='email' value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                        </div>

                        <div className="mb-3">
                            <label for="formGroupExampleInput2" className='form-label'>Message :</label>
                            <input type="text" className='form-control' id='formGroupExampleInput2' placeholder='Your message....' name='message' value={message}
                                onChange={(e) => setMessage(e.target.value)} />
                        </div>

                        <div className='btn'>
                            <button type='submit' className='send'>Send</button>
                        </div>

                    </div>
                </form>
            </div>
        </section>


    );
};


export default Contact;
