import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { FooterDivider } from 'flowbite-react/lib/esm/components/Footer/FooterDivider';
import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [logError, setLogError] = useState('');
    const { signIn, signWithGoogle, signWithGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                console.log(result.user);
                form.reset();

                if (from) {
                    navigate(from, { replace: true });
                }
                else {
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                setLogError(error.message);
            })
    }

    const googleSignIn = () => {
        signWithGoogle()
            .then(result => {
                if (from) {
                    navigate(from, { replace: true });
                }
                else {
                    navigate('/');
                }
            })
            .catch(error => {
                console.log(error);
                setLogError(error.message);
            })
    }

    const githubSignIn = () => {
        signWithGithub()
        .then(result => {
            if(from) {
                navigate(from, {replace: true});
            }
            else {
                navigate('/');
            }
        })
        .catch(error => {
            console.log(error);
            setLogError(error.message);
        })
    }
    return (
        <div className='w-11/12 lg:w-2/3 mx-auto border p-10 rounded my-10'>
            <h1 className='text-3xl font-bold text-center'>Login</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
                <Button className='bg-neutral-600 hover:bg-red-500' type="submit">
                    Submit
                </Button>
                <p>
                    <small>Don't Have an Account? <span className='text-orange-500'><Link to='/register'>Register!!!</Link></span></small>
                </p>
                <p>
                    <small className='text-red-700'>{logError}</small>
                </p>
                <hr className='mb-3' />
                <Button
                    outline={true}
                    gradientDuoTone="greenToBlue"
                    onClick={googleSignIn}
                >
                    Log in With Google
                </Button>
                <Button
                    outline={true}
                    gradientDuoTone="purpleToBlue"
                    onClick={githubSignIn}
                >
                    Login With GitHub
                </Button>
            </form>
        </div>
    );
};

export default Login;