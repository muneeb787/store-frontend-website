import { FormikProvider, useFormik, Field } from 'formik';
// import React, { useEffect } from 'react';
import * as yup from 'Yup'
import UseAxios from '../../hooks/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const loginUser = yup.object({
    email: yup.string().email("This must be an Email").required('Email is required'),
    password: yup.string().required('Password is required').min(8, "Password Must be at least 8 characters")
})

const Login = () => {

    const navigate = useNavigate()

    // useEffect(() => {
    //     if (localStorage.getItem('token') && localStorage.getItem('token') != "undefined" ) {
    //         navigate('/dashboard')
    //     }
    // }, [])

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: loginUser,
        onSubmit: (values) => {
            const axiosInstance = UseAxios();
            axiosInstance.post('/login', values)
                .then(res => {
                    console.log(res);
                    toast.success("Logged In Successfully")
                    localStorage.setItem('token', res.data.accessToken
                    );
                    navigate("/")
                    // window.location.href = '/dashboard';

                })
                .catch(err => {
                    toast.error(err.response.data.message)
                    console.log(err);
                })
        }
    })

    // const { touched, errors, values } = formik;


    return (
        <div>
            <main
                className="container mx-auto my-40 p-4 bg-white flex flex-col items-center justify-center text-gray-700"
            >
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-4">
                    <h1 className="text-4xl font-semibold ">Welcome back.</h1>
                </div>
                <div className="w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <FormikProvider value={formik}>
                        <Field
                            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                            type="text"
                            placeholder="Email"
                            name='email'
                        />
                        {formik.touched.email && formik.errors.email && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.email}</h6>}
                        <Field
                            className="mb-4 p-2 appearance-none block w-full bg-gray-200 placeholder-gray-900 rounded border focus:border-teal-500"
                            type="text"
                            placeholder="Password"
                            name='password'
                        />
                        {formik.touched.password && formik.errors.password && <h6 className='mb-2' style={{ color: "red" }}>{formik.errors.password}</h6>}
                        <div className="flex items-center">
                            <div className="w-1/2 flex items-center">
                                <input id="remember-me" type="checkbox" className="mt-1 mr-2" />
                                <label htmlFor="remember-me">Remember me!</label>
                            </div>
                            <button
                                className="ml-auto w-1/2 bg-gray-800 text-white p-2 rounded font-semibold hover:bg-gray-900"
                                type="buttob"
                                onClick={formik.handleSubmit}
                            >
                                Log In
                            </button>
                        </div>
                    </FormikProvider>
                </div>
                <div className="text-right w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mb-6">
                    <a className="text-sm font-bold text-teal-500 hover:underline cursor-pointer"
                    >Forgot your password?</a>
                </div>
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

export default Login
