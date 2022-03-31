import React, { useState } from "react";

const ProductInformation = () => {
  const [productName, setProductName] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [tags, setTags] = useState();
  const [file, setFile] = useState();
  const AddProduct = async (e) => {
    e.preventDefault();
    console.log(
      "details",
      productName,
      category,
      subCategory,
      price,
      description,
      tags,
      file
    );
    const productData = new FormData();
    productData.append("productName", productName);
    productData.append("category", category);
    productData.append("subcategory", subCategory);
    productData.append("price", price);
    productData.append("description", description);
    productData.append("tages", tags);
    productData.append("file", file);
    const result = await fetch("http://localhost:5000/api/create/product", {
      method: "POST",
      body: productData,
    });
    console.log("my result is", result);
  };
  return (
    <div>
      <h1 className="font-bold text-lg">Add an exxisting product</h1>
      <div className="mt-10 ">
        <form action="">
          <input
            type="text"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            name="productname"
            placeholder="Product Name"
            className=" outline-none border border-gray-400 w-full py-2 px-4"
          />
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            name="category"
            className=" outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <input
            type="text"
            value={subCategory}
            onChange={(e) => setSubCategory(e.target.value)}
            placeholder="Subcategory"
            name="Subcategory"
            className=" outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <input
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            placeholder="Price"
            name="price"
            className=" outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            name="Description"
            className=" outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            placeholder="Tags"
            name="Tags"
            className=" outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <input
            type="file"
            name="productimage"
            id="product"
            // value={file}
            onChange={(e) => setFile(e.target.files[0])}
            placeholder="Product Image"
            className="outline-none border border-gray-400 w-full py-2 px-4 mt-3"
          />
          <button
            onClick={AddProduct}
            className="mt-5 mx-auto flex justify-center items-center bg-gray-400 text-white px-4 py-2 font-medium rounded"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductInformation;
