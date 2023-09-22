/* eslint-disable no-unused-vars */
import { FormikProvider, useFormik, Field } from 'formik';
import React, { useEffect } from 'react';
import * as yup from 'Yup'
import UseAxios from '../../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const signUpUser = yup.object({
    name: yup.string().required('Name is required'),
    email: yup.string().email('This must be an Email').required('Email is required'),
    password: yup.string().required('Password is required').min(8, 'Password must be at least 8 characters'),
    cpassword: yup.string().required('Confirm Password is required').oneOf([yup.ref('password'), null], 'Passwords must match'),
});


const Signup = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem('token') && localStorage.getItem('token') != "undefined" ) {
    //         navigate('/dashboard')
    //     }
    // }, [])

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            cpassword: '',
        },
        validationSchema: signUpUser,
        onSubmit: (values) => {
            // eslint-disable-next-line no-unused-vars
            const { cpassword, ...dataToSend } = values;

            const axiosInstance = UseAxios();
            axiosInstance.post('/register', dataToSend) // Send data without cpassword
                .then((res) => {
                    console.log(res);
                    toast.success("Sign Up Successfully");
                    navigate("/login");
                })
                .catch((err) => {
                    toast.error(err.response.data.message);
                    console.log(err);
                });
        },
    });

    useEffect(() => {
        if (localStorage.getItem('token') && localStorage.getItem('token') != "undefined" ) {
            navigate('/')
        }
    }, [])


    return (
        <div>
            <main
                className="container mx-auto my-40 p-4 bg-white flex flex-col items-center justify-center text-gray-700"
            >
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 className="text-4xl font-semibold ">Get Started</h1>
                    <p className="text-base pl-1 ">We Are Glad To You There</p>
                </div>
                <FormikProvider value={formik}>

                    {/* <form> */}
                        <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                            <Field
                                className="mb-2 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                                type="text"
                                placeholder="Name"
                                name="name"
                            />
                            {formik.touched.name && formik.errors.name && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.name}</h6>}
                            <Field
                                className="mb-2 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                                type="text"
                                placeholder="Email"
                                name='email'
                            />
                            {formik.touched.email && formik.errors.email && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.email}</h6>}
                            <Field
                                className="mb-2 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                                type="password"
                                placeholder="Password"
                                name='password'
                            />
                            {formik.touched.password && formik.errors.password && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.password}</h6>}
                            <Field
                                className="mb-2 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                                type="password"
                                placeholder="Confirm Password"
                                name='cpassword'
                            />
                            {formik.touched.cpassword && formik.errors.cpassword && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.cpassword}</h6>}

                            <div className="flex items-center">
                                {/* <div className="w-1/2 flex items-center">
                            <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                            <label htmlFor="remember-me">Remember me!</label>
                        </div> */}
                                <button
                                    className="ml-auto w-1/3 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                                    type="button"
                                    onClick={formik.handleSubmit}
                                >
                                    Sign Up
                                </button>
                            </div>
                        </div>
                    {/* </form> */}
                </FormikProvider>

                <div
                    className="flex justify-center w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12"
                >
                    {/* <p className="font-semibold text-gray-600 text-sm">
                        Ei prima conclusionemque eum. Porro vivendum eum in, eam ex homero
                        deserunt, ius ut dolorem iracundia.
                    </p> */}
                </div>
            </main>
        </div>
    )
}

export default Signup
