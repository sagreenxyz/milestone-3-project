import Card from "../components/Card"
import useSWR from 'swr'


export default function Home() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const { data, error } = useSWR('/api/equipment', fetcher)
  if (error) return <div>An error occured.</div>
  if (!data) return <div>Loading...</div>

  return (
    <>
      <div className=" lg bg-gray-300 inline-flex">
        <div className="grid gap-4 lg:grid-cols-4 sm:grid-cols-1">
          {data.map((item) => {
            return (
              <Card equipment={item} />
            )
          })}
        </div>
      </div>
    </>
  )
}
