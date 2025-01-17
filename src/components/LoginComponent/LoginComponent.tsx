import { useForm } from "react-hook-form";
import { IUserLoginPass } from "../../models/IUserLoginDeps";
import { joiResolver } from "@hookform/resolvers/joi";
import { userValidator } from "../../validators/user.validator";

export const LoginComponent = () => {

    const {handleSubmit, register, formState: {errors}} = 
       useForm<IUserLoginPass>({mode: 'all', resolver: joiResolver(userValidator)});
    

    return(
        <div className="component_login w-screen h-screen flex justify-center items-center">
            <form action="" className="border border-black w-64 min-h-64 flex flex-col items-center gap-4 pt-8">
                <h3>DummyJSON authorization</h3>
                <input type="text" placeholder="Login" className="w-56 border border-black"/>
                <input type="text" placeholder="Password" className="w-56 border border-black"/>
                <button className="border border-black rounded w-24">Log in</button>
                <p className="errors_container"></p>
            </form>
        </div>
    )
};
