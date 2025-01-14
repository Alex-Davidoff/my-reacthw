import { useSearchParams } from "react-router"

export const PaginationComponent = () => {
    const [searchParams, setSearchParams] = useSearchParams({skip:'0', limit: '30'});
    const skip:number = Number(searchParams.get('skip') || '0');
    const limit:number = Number(searchParams.get('limit') || '30');
    return(
        <div>
            <button onClick={() => {
                if (skip>=limit) {
                    setSearchParams({skip: (skip-limit).toString(), limit: (limit).toString()});
                }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
            >Prev</button>

            <button onClick={() => {
                if ((skip+limit)<208) {
                    setSearchParams({skip: (skip+limit).toString(), limit: (limit).toString()});
                }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
            >Next</button>

            <h2>{skip+1} - {skip+limit} / {208}</h2>
        </div>
    )
}