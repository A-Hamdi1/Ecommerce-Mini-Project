import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddPersonnel() {
    const [personnelData, setPersonnelData] = useState({
        name: '',
        position: '',
        department: '',
        salary: '',
        image: '',
    });
    const router = useRouter();

    const handleChange = (e) => {
        setPersonnelData({ ...personnelData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/addPersonnel', personnelData);
            router.push('/personnel');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <br /><br />
            <br /><br /><br />
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-7s00">
                            Add Personnel
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label
                                htmlFor="name"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Nom
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={personnelData.name}
                                onChange={handleChange}
                                placeholder="Nom"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="position"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Poste
                            </label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={personnelData.position}
                                onChange={handleChange}
                                placeholder="Poste"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="department"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Département
                            </label>
                            <input
                                type="text"
                                id="department"
                                name="department"
                                value={personnelData.department}
                                onChange={handleChange}
                                placeholder="Département"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="salary"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Salaire
                            </label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                value={personnelData.salary}
                                onChange={handleChange}
                                placeholder="Salaire"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="image"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Image
                            </label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                value={personnelData.image}
                                onChange={handleChange}
                                placeholder="Image"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <br /><br />
                        <center>
                            <button
                                className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg text-white relative overflow-hidden"
                                type="submit"
                            >
                                Ajouter
                                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl"></div>
                            </button>
                        </center>
                    </form>
                </div>
            </div>
            <br /><br />
            <br /><br />
        </>
    );
}