import { prototype } from "events";


export default function Card(props) {
    return (
        <div>
            <div class="max-w-sm mx-auto rounded content-center text-center overflow-hidden shadow-lg">
                <img class="mx-auto" style={{height: "250px",width:"250px",}} src={props.equipment.image} alt="Sunset in the mountains"></img>
                <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{props.equipment.name}</div>
                    <p class="text-sm text-gray-700 text-base">
                        Manufacturer:  {props.equipment.manufacturer} <br/>
                        Model:  {props.equipment.model} <br/>
                    </p>
                </div>
                <div class="px-6 pt-4 pb-2">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}