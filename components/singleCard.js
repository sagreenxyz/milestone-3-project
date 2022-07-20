import  Link  from 'next/link'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shop.slice'
import {useRouter} from 'next/router'


export default function Card(props) {
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    const router = useRouter()
    const handleDelete = async (e) => {
        await fetch(`/api/equipment/${props.equipment.id}`, {
            method: 'DELETE',
          });
          router.push('/');
    }

    return (

        <div>
            {/* <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}> */}

                <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden shadow-lg">
                <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}>
                    <img className="mx-auto" style={{ height: "250px", width: "250px", }} src={props.equipment.image} alt="Sunset in the mountains"></img>
                </Link>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.equipment.name}</div>
                        <p className="text-sm text-gray-700">
                            Manufacturer:  {props.equipment.manufacturer} <br />
                            Model:  {props.equipment.model} <br />
                            Price:  {props.equipment.price} <br />
                            Category:  {props.equipment.category} <br />
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold h-8 px-2 border border-blue-700 rounded" onClick={() => dispatch(addItem(props.equipment))}>
                            Add to cart
                        </button>
                        <button className="bg-green-500 hover:bg-green-700 text-white text-sm font-bold h-8 px-2 border border-green-700 rounded">
                            Edit
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white text-sm font-bold h-8 px-2 border border-red-700 rounded" onClick={() => handleDelete(props.equipment.id)}>
                            Delete
                        </button>
                    </div>
                </div>
             {/* </Link>  */}
        </div >
    )
}