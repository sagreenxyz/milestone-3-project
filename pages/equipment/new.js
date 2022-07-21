import { useState } from "react";
import {useRouter} from 'next/router'

export default function new_equipment() {
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const router = useRouter()

  const handleNew = async (e) => {
    const body = {name, manufacturer, model, category, price, description };
    await fetch(`/api/equipment/new`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    await router.push("/");
  };

  return (
    <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden">
      <form
        onSubmit={handleNew}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
            value={name}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Model
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setModel(e.target.value)}
            type="text"
            placeholder="Model"
            value={model}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Manufacturer
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setManufacturer(e.target.value)}
            type="text"
            placeholder="Manufacturer"
            value={manufacturer}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Category
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setCategory(e.target.value)}
            placeholder="Category"
            value={category}
            required
            size="3"
          >
                <option value="Lawn, Landscape, and Tree">Lawn, Landscape, and Tree</option>
                <option value="Air Compressor And Air Tools">Air Compressor And Air Tools</option>
                <option value="Concrete">Concrete</option>
                <option value="Heating, Ventilation, And Air Conditioning">Heating and Ventilation</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Price
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setPrice(e.target.value)}
            type="text"
            placeholder="$Price"
            value={price}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Description
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => setDescription(e.target.value)}
            type="text"
            placeholder="Description"
            value={description}
            required
          />
        </div>
        <div>
          <button
            className="bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold h-8 px-2 border border-orange-700 rounded"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
