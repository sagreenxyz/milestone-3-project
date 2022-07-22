import { useRouter } from "next/router"

function Equipment_Category() {
    const router = useRouter()
    const category_id = router.query.equipment_category
    console.log(category_id)
    
    return (
        <h1>Category {category_id}</h1>
    )
}

export default Equipment_Category