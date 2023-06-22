import { Button, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {
    const [regError, setRegError] = useState("");

    const {createUser, updateUser} = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        if(password.length < 6){
            setRegError("Password have to be 6 characters or more");
            return;
        }

        createUser(email, password)
        .then(result => {
            console.log(result.user);
            updateUser(name, photo)
            .then(() => {
                console.log("profile updated");
                form.reset();
                window.location.reload(false);
            })
            .catch(error => {
                console.log(error);
                setRegError(error.message);
            })
        })
        
    }
    return (
        <div className='w-11/12 lg:w-2/3 mx-auto border p-10 rounded my-10'>
            <h1 className='text-3xl font-bold text-center'>Register</h1>
            <form onSubmit={handleRegister} className="flex flex-col gap-4">
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="name" value="Your name" />
                    </div>
                    <TextInput
                        id="name"
                        type="text"
                        name='name'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="email1" value="Your email" />
                    </div>
                    <TextInput
                        id="email1"
                        type="email"
                        name='email'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="password1" value="Your password" />
                    </div>
                    <TextInput
                        id="password1"
                        type="password"
                        name='password'
                        required={true}
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                        <Label htmlFor="photo" value="Your photo URL" />
                    </div>
                    <TextInput
                        id="photo"
                        type="url"
                        name='photo'
                        required={true}
                    />
                </div>
                <Button className='bg-neutral-600 hover:bg-red-500' type="submit">
                    Submit
                </Button>
                <p>
                    <small>Already Have an Account? <span className='text-orange-500'><Link to='/login'>Login!!!</Link></span></small>
                </p>
                <p>
                    <small className='text-red-700'>{regError}</small>
                </p>
            </form>
        </div>
    );
};

export default Register;