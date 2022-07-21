import  Link  from 'next/link'
import Image from "next/image"
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shop.slice'
import { useRouter} from 'next/router'
import { useState } from 'react'


export default function Card(props) {
    
    const dispatch = useDispatch()
    const router = useRouter()

    const [manufacturer, setManufacturer] = useState('');
    const [model, setModel] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const handleDelete = async (e) => {
        await fetch(`/api/equipment/${props.equipment.id}`, {
            method: 'DELETE',
          });
          await router.push('/');
    }

    const handleEdit = async (e) => {
        const body = { manufacturer, model, price, description }
        await fetch(`/api/equipment/${props.equipment.id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body)
          });
        await router.push('/');
    }

    return (

        <div>
                <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden shadow-lg">
                    <Image className="mx-auto" height="250px" width="250px" src={props.equipment.image} alt="Sunset in the mountains"></Image>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.equipment.name}</div>
                        <p className="text-sm text-gray-700">
                            Manufacturer:  {props.equipment.manufacturer} <br />
                            Model:  {props.equipment.model} <br />
                            Price:  {props.equipment.price} <br />
                            Category:  {props.equipment.category} <br />
                            Description: {props.equipment.description}
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold h-8 px-2 border border-blue-700 rounded" onClick={() => dispatch(addItem(props.equipment))}>
                            Add to cart
                        </button>
                        <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden">
                            <form onSubmit={handleEdit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Manufacturer
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    onChange={(e) => setManufacturer(e.target.value)} 
                                    type="text"
                                    placeholder={props.equipment.manufacturer} 
                                    value={manufacturer}
                                    required/>
                                </div>
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Model
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    onChange={(e) => setModel(e.target.value)} 
                                    type="text" 
                                    placeholder={props.equipment.model}
                                    value={model}
                                    required/>
                                </div>
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Price
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    onChange={(e) => setPrice(e.target.value)} 
                                    type="text" 
                                    placeholder={props.equipment.price}
                                    value={price}
                                    required/>
                                </div>
                                <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2">
                                    Description
                                </label>
                                <input 
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
                                    onChange={(e) => setDescription(e.target.value)} 
                                    type="text" 
                                    placeholder={props.equipment.description}
                                    value={description}
                                    required/>
                                </div>
                                <div>
                                <button className="bg-orange-500 hover:bg-orange-700 text-white text-sm font-bold h-8 px-2 border border-orange-700 rounded" type="submit">
                                    Update
                                </button>
                                </div>
                            </form>
                            </div>
                        <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold h-8 px-2 border border-red-700 rounded" onClick={() => handleDelete(props.equipment.id)}>
                            Delete
                        </button>
                    </div>
                </div>
        </div >
    )
}