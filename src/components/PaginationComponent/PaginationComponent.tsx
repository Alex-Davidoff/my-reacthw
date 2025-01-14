import { useSearchParams } from "react-router"

interface IPaginationParams{
    ucount: number;
    utotal: number;
}

export const PaginationComponent = ({ucount, utotal}:IPaginationParams) => {
    const [searchParams, setSearchParams] = useSearchParams({skip:'0', limit: '30'});
    const skip:number = Number(searchParams.get('skip') || '0');
    const limit:number = Number(searchParams.get('limit') || '30');
    return(
        <div className="pag_panel">
            <button onClick={() => {
                if (skip>=limit) {
                    setSearchParams({skip: (skip-limit).toString(), limit: (limit).toString()});
                }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
            >Prev</button>

            <button onClick={() => {
                if ((skip+limit)<utotal) {
                    setSearchParams({skip: (skip+limit).toString(), limit: (limit).toString()}); 
                }
            }}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" 
            >Next</button>

            <h2>{skip+1} - {skip+ucount} / {utotal}</h2>
        </div>
    )
}