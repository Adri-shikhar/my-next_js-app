
"use server";
import { revalidatePath } from "next/cache";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "db.json");

const getDbData = () => {
    delete require.cache[require.resolve('../../../db.json')];
    return require('../../../db.json');
}

export const getProducts = async () => {
    const products = getDbData();
    return products.products;
}

export const CreateATask = async (formData) => {
    const products = getDbData();

    // 1. Create the object
    const newProduct = {
        id: products.products.length + 1,
        name: formData.get('name'),
        description: formData.get('description'),
        price: formData.get('price'),
        category: formData.get('category'),
        image: formData.get('image'),
        stock: formData.get('stock'),
        rating: formData.get('rating'),
    };
    console.log(newProduct);

    // 2. Just push it to temporary memory!
    products.products.push(newProduct);

    // 3. Save to file
    fs.writeFileSync(dbPath, JSON.stringify(products, null, 2));

    revalidatePath('/products');
    return { success: true }
}
