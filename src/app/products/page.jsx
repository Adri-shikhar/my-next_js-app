import React from 'react';

const Productspage = async () => {

    const api = "http://localhost:5000/products";
    const res = await fetch(api);
    const data = await res.json();


    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">Products</h1>
                <p className="text-gray-600 mb-8">Total Products: {data.length}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                            {/* Image */}
                            <div className="bg-gray-200 h-48 flex items-center justify-center overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-4">
                                {/* ID Badge */}
                                <div className="mb-2">
                                    <span className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded">
                                        ID: {product.id}
                                    </span>
                                </div>

                                {/* Name */}
                                <h2 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h2>

                                {/* Description */}
                                <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                                {/* Category */}
                                <div className="mb-3">
                                    <span className="text-xs text-gray-500">Category:</span>
                                    <p className="text-sm font-medium text-gray-700">{product.category}</p>
                                </div>

                                {/* Price & Stock */}
                                <div className="grid grid-cols-2 gap-2 mb-3">
                                    <div className="bg-green-50 p-2 rounded">
                                        <p className="text-xs text-gray-500">Price</p>
                                        <p className="text-lg font-bold text-green-600">${product.price}</p>
                                    </div>
                                    <div className="bg-orange-50 p-2 rounded">
                                        <p className="text-xs text-gray-500">Stock</p>
                                        <p className="text-lg font-bold text-orange-600">{product.stock}</p>
                                    </div>
                                </div>

                                {/* Rating */}
                                <div className="flex items-center justify-between pt-3 border-t">
                                    <div className="flex items-center">
                                        <span className="text-yellow-400 text-lg">★</span>
                                        <span className="ml-1 font-bold text-gray-900">{product.rating}</span>
                                    </div>
                                    <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded text-sm transition">
                                        View
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Productspage;