import Link from "next/link"
import { useContext, useState } from "react"
import { AuthenticationContext, NotificationContext } from "./_app"
import { useRouter } from "next/router"
export default function Login() {
    const router = useRouter()
    const {setNType,setNMsg} = useContext(NotificationContext)
    const {setAccessToken,setUsername} = useContext(AuthenticationContext)
    const [values, setValues] = useState({ email: '', password: '' })
    const handleInputs = e => {
        const { value, name } = e.target
        setValues({ ...values, [name]: value })
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const res = await fetch('auth/login', {
            method: 'POST',
            body: JSON.stringify(values),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await res.json()
        if (!data.status) {
            setNType('error')
            return setNMsg(data.message)
        }
        setNType('success')
        setNMsg(data.message)
        setAccessToken(data.AccessToken)
        setUsername(values.username)
        router.push('/')

    }
    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Sign in to your account
                    </h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={e => handleSubmit(e)}>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    value={values.email}
                                    onChange={e => handleInputs(e)}
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <span className="font-semibold text-indigo-600 hover:text-indigo-500">
                                        <Link href={'/forgotpassword'}>
                                            Forgot password?
                                        </Link>
                                    </span>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    value={values.password}
                                    onChange={e => handleInputs(e)}
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <span className="font-meduim text-indigo-600 hover:text-indigo-500">
                        <Link href={'/register'}>
                            Sign up
                        </Link>
                    </span>

                </div>
            </div>
            <br />
            <br /><br />
        </>
    )
}