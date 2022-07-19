import {useRouter} from 'next/router'
import useSWR from "swr"
import Card from '../../components/Card'

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function equipment_id () {
    const router = useRouter()
    const id = router.query.equipment_id
    const { data, error } = useSWR(`/api/equipment/${id}`, fetcher)
    if (error) return <div>An error occured.</div>
    if (!data) return <div>Loading...</div>
    return (
        <div>
            <Card equipment={data}/>
        </div>

    )
}