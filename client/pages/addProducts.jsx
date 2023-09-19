import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function AddProducts() {
    const [productData, setProductData] = useState({
        title: '',
        des: '',
        price: '',
        color: '',
        size: '',
        image: '',
        category: ''
    });
    const router = useRouter();
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/addProducts', productData);
            router.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
        <br /><br /><br /><br />
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <div className="!z-5 relative rounded-[20px] max-w-[300px] md:max-w-[400px] bg-white bg-clip-border shadow-3xl shadow-shadow-500 flex flex-col w-full !p-6 3xl:p-![18px] undefined">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-7s00">
                            Add Product
                        </h2>
                    </div>
                    <form onSubmit={handleSubmit}>

                        <div className="mb-3">
                            <label
                                htmlFor="title"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Title
                            </label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={productData.title}
                                onChange={handleChange}
                                placeholder="Title"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="des"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Description
                            </label>
                            <textarea
                                id="des"
                                name="des"
                                value={productData.des}
                                onChange={handleChange}
                                placeholder="Description"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            ></textarea>
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="price"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Price
                            </label>
                            <input
                                type="number"
                                id="price"
                                name="price"
                                value={productData.price}
                                onChange={handleChange}
                                placeholder="Price"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="color"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Color
                            </label>
                            <input
                                type="text"
                                id="color"
                                name="color"
                                value={productData.color}
                                onChange={handleChange}
                                placeholder="Color"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="size"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Size
                            </label>
                            <input
                                type="text"
                                id="size"
                                name="size"
                                value={productData.size}
                                onChange={handleChange}
                                placeholder="size"
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
                                value={productData.image}
                                onChange={handleChange}
                                placeholder="image"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <div className="mb-3">
                            <label
                                htmlFor="category"
                                className="text-sm text-navy-700 text-gray font-bold"
                            >
                                Category
                            </label>
                            <input
                                type="text"
                                id="category"
                                name="category"
                                value={productData.category}
                                onChange={handleChange}
                                placeholder="category"
                                className="mt-2 flex h-12 w-full items-center justify-center rounded-xl border bg-white/0 p-3 text-sm outline-none border-gray-200"
                            />
                        </div>
                        <br /><br />
                        <center>
                            <button className="group rounded-2xl h-12 w-48 bg-green-500 font-bold text-lg
                         text-white relative overflow-hidden " type="submit">
                                Ajouter
                                <div className="absolute duration-300 inset-0 w-full h-full transition-all scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-2xl">
                                </div>
                            </button></center>
                    </form>
                </div>
            </div>
            <br /><br />
            <br /><br />
        </>
    );
}