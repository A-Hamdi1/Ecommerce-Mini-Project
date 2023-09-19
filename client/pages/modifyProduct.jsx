import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function ModifyProduct() {
    const router = useRouter();
    const { productId } = router.query;

    const [product, setProduct] = useState({});
    const [title, setTitle] = useState('');
    const [des, setDes] = useState('');
    const [qty, setQty] = useState(1);
    const [price, setPrice] = useState(0);
    const [color, setColor] = useState('');
    const [size, setSize] = useState('');
    const [image, setImage] = useState('');
    const [category, setCategory] = useState('');
    const [isModifiable, setIsModifiable] = useState(true);

    useEffect(() => {
        if (productId) {
            fetchProduct(productId);
        }
    }, [productId]);

    const fetchProduct = async (productId) => {
        try {
            const res = await axios.get(`http://localhost:5000/api/getProduct/${productId}`);
            const productData = res.data;
            setProduct(productData);
            setTitle(productData.title);
            setDes(productData.des);
            setQty(productData.qty);
            setPrice(productData.price);
            setColor(productData.color);
            setSize(productData.size);
            setImage(productData.image);
            setCategory(productData.category);
            setIsModifiable(productData.isModifiable);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModifyProduct = async () => {
        try {
            const updatedProductData = {
                title,
                des,
                qty,
                price,
                color,
                size,
                image,
                category,
                isModifiable,
            };

            await axios.put(`http://localhost:5000/api/modifyProduct/${productId}`, updatedProductData);
            router.push('/shop');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className="container mx-auto my-4">
            <h1 className="text-2xl font-bold mb-4">Modify Product</h1>
            <form>
                <div className="mb-4">
                    <label htmlFor="title" className="block font-bold text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="des" className="block font-bold text-gray-700">
                        Description
                    </label>
                    <textarea
                        id="des"
                        value={des}
                        onChange={(e) => setDes(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="qty" className="block font-bold text-gray-700">
                        Quantity
                    </label>
                    <input
                        type="number"
                        id="qty"
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block font-bold text-gray-700">
                        Price
                    </label>
                    <input
                        type="number"
                        id="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="color" className="block font-bold text-gray-700">
                        Color
                    </label>
                    <input
                        type="text"
                        id="color"
                        value={color}
                        onChange={(e) => setColor(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="size" className="block font-bold text-gray-700">
                        Size
                    </label>
                    <input
                        type="text"
                        id="size"
                        value={size}
                        onChange={(e) => setSize(e.target.value)}
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
                <div className="mb-4">
                    <label htmlFor="category" className="block font-bold text-gray-700">
                        Category
                    </label>
                    <input
                        type="text"
                        id="category"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="mt-1 px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:border-blue-500"
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="isModifiable" className="block font-bold text-gray-700">
                        Is Modifiable
                    </label>
                    <input
                        type="checkbox"
                        id="isModifiable"
                        checked={isModifiable}
                        onChange={(e) => setIsModifiable(e.target.checked)}
                        className="mt-1 form-checkbox h-5 w-5 text-blue-500 focus:outline-none focus:border-blue-500"
                    />
                </div>
                <button
                    type="button"
                    onClick={handleModifyProduct}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Modify Product
                </button>
            </form>
        </div>
    );
}
