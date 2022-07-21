import { useRouter } from "next/router"
import useSWR from "swr"
import Card from "../../components/Card"

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function EquipmentCategory () {
    
    const router = useRouter()
    const equipment_category = router.query.equipment_category
    const { data, error } = useSWR(`/api/category/${equipment_category}`, fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading...</div>
    
    return (
        <div className="text-center">
            <h1 className="font-bold text-3xl mb-2">{equipment_category}</h1>
            <div className="grid gap-4 grid-cols-4 ">
                {data.map((item, index) => {
                    return (
                        <Card equipment={item} key={index}/>
                    )
                })}
            </div>
        </div>
    )
}