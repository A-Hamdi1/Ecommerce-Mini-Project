import { useRouter } from 'next/router';
import axios from 'axios';
import { FiTrash2 } from 'react-icons/fi';
import Link from 'next/link';
import { FaPen } from 'react-icons/fa';

export default function Personnel({ data }) {

    const router = useRouter();

    const handleDeletePersonnel = async (personnelId) => {
        try {
            await axios.delete(`http://localhost:5000/api/deletePersonnel/${personnelId}`);
            router.push('/personnel');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <br />
            <div className="container mx-auto my-4">
                <div className="flex justify-center">
                    <Link href="/AddPersonnel">
                        <button className="group rounded-2xl h-12 w-48 bg-blue-500 font-bold text-lg text-white relative overflow-hidden" type="submit">
                            + Add Personnel
                            <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                        </button>
                    </Link>
                </div>
            </div>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {Object.keys(data).map((title, i) => {
                            const personnel = data[title];
                            return (
                                <div key={i} className="p-4 lg:w-1/4 md:w-1/2">
                                    <div className="h-full flex flex-col items-center text-center">
                                        <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={personnel.image} />
                                        <div className="w-full">
                                            <h2 className="title-font font-medium text-lg text-gray-900">{personnel.name}</h2>
                                            <h3 className="text-gray-500 mb-3">{personnel.department}</h3>
                                            <p className="mb-4">Salare :  ${personnel.salary}</p>
                                            <span className="inline-flex">
                                                <a className="text-gray-500">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                                    </svg>
                                                </a>
                                                <a className="ml-2 text-gray-500">
                                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-5 h-5" viewBox="0 0 24 24">
                                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                                    </svg>
                                                </a>
                                            </span>
                                            <div className="mt-4">
                                                <Link href={`/modifyPersonnel?personnelId=${personnel._id}`}>
                                                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                                                        <FaPen />

                                                    </button>
                                                </Link>
                                                <button onClick={() => handleDeletePersonnel(personnel._id)} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                                                    <FiTrash2 />
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}

export async function getServerSideProps() {
    try {
        const res = await fetch('http://localhost:5000/api/getPersonnel');
        const data = await res.json();
        return {
            props: {
                data,
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                data: {},
            },
        };
    }
}
