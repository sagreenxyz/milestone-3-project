import { prototype } from "events";
import  Link  from 'next/link'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shop.slice'


export default function Card(props) {
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    return (

        <div>
            {/* <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}> */}

                <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden shadow-lg">
                <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}>
                    <img className="mx-auto" style={{ height: "250px", width: "250px", }} src={props.equipment.image} alt="Sunset in the mountains"></img>
                </Link>
                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{props.equipment.name}</div>
                        <p className="text-sm text-gray-700 text-base">
                            Manufacturer:  {props.equipment.manufacturer} <br />
                            Model:  {props.equipment.model} <br />
                            Price:  {props.equipment.price} <br />
                            Category:  {props.equipment.category} <br />
                        </p>
                    </div>
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => dispatch(addItem(props.equipment))}>
                            Add to cart
                        </button>
                    </div>
                </div>
             {/* </Link>  */}
        </div >
    )
}