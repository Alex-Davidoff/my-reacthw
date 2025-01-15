import { Link } from "react-router"

export const MenuComponent = () => {
    return(
        <div className="main_menuc_omponent flex gap-4">
            <h1 className="text-5xl">CarsAPI v1</h1>
            <ul className="flex gap-8 items-center">
                <li className="bg-orange-200 rounded-xl py-1 px-2 hover:bg-orange-400">
                    <Link to="/carslist">List page</Link></li>
                <li className="bg-orange-200 rounded-xl py-1 px-2 hover:bg-orange-400">
                    <Link to="/carscreate">Create page</Link></li>
            </ul>
        </div>
    )
}