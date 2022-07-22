import { prototype } from "events";
import  Link  from 'next/link'
import Image from 'next/image'
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/shop.slice'


export default function Card(props) {
    //const navigate = useNavigate()
    const dispatch = useDispatch()
    return (

        <div>
            {/* <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}> */}
            
                <div className="max-w-sm mx-auto rounded content-center text-center overflow-hidden shadow-lg hover:bg-gray-400 ">
                
                    <Image className="mx-auto" height='250px' width='250px' src={props.equipment.image} alt="Sunset in the mountains"></Image>
                <Link href={`/equipment/${encodeURIComponent(props.equipment.id)}`}>
                    <div className="px-6 py-4 hover:cursor-pointer">
                        <div className="font-bold text-xl mb-2">{props.equipment.name}</div>
                        <p className="text-sm text-gray-700">
                            Manufacturer:  {props.equipment.manufacturer} <br />
                            Model:  {props.equipment.model} <br />
                            Price:  {props.equipment.price} <br />
                            Category:  {props.equipment.category} <br />
                        </p>
                    </div>
                </Link>     
                    <div className="px-6 pt-4 pb-2">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" onClick={() => dispatch(addItem(props.equipment))}>
                            Add to cart
                        </button>
                    </div>
                </div>
            
        </div >
    )
}