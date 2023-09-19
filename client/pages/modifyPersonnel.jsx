import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ModifyPersonnel() {
    const router = useRouter();
    const { personnelId } = router.query;

    const [personnel, setPersonnel] = useState({});
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [department, setDepartment] = useState('');
    const [salary, setSalary] = useState(0);
    const [image, setImage] = useState('');

    useEffect(() => {
        if (personnelId) {
            fetchPersonnel(personnelId);
        }
    }, [personnelId]);

    const fetchPersonnel = async (personnelId) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/getPersonnel/${personnelId}`);
            const personnelData = res.data;
            setPersonnel(personnelData);
            setName(personnelData.name);
            setPosition(personnelData.position);
            setDepartment(personnelData.department);
            setSalary(personnelData.salary);
            setImage(personnelData.image);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModifyPersonnel = async () => {
        try {
            const updatedPersonnelData = {
                name,
                position,
                department,
                salary,
                image,
            };

            await axios.put(`http://localhost:5000/api/modifyPersonnel/${personnelId}`, updatedPersonnelData);
            router.push('/personnel');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container mx-auto my-4">
            <h1 className="text-2xl font-bold mb-4">Modify Personnel</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="name" className="block font-bold text-gray-700">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="position" className="block font-bold text-gray-700">
                        Position
                    </label>
                    <input
                        type="text"
                        id="position"
                        value={position}
                        onChange={(e) => setPosition(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="department" className="block font-bold text-gray-700">
                        Department
                    </label>
                    <input
                        type="text"
                        id="department"
                        value={department}
                        onChange={(e) => setDepartment(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="salary" className="block font-bold text-gray-700">
                        Salary
                    </label>
                    <input
                        type="number"
                        id="salary"
                        value={salary}
                        onChange={(e) => setSalary(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="image" className="block font-bold text-gray-700">
                        Image URL
                    </label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleModifyPersonnel}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Modify Personnel
                </button>
            </form>
        </div>
    );
}
