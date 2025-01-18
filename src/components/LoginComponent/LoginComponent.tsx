import { useForm } from "react-hook-form";
import { IUserLoginPass } from "../../models/IUserLoginProps";
import { joiResolver } from "@hookform/resolvers/joi";
import { userValidator } from "../../validators/user.validator";
import { userLogin } from "../../services/dummy.api.service";
import { useNavigate } from "react-router";

export const LoginComponent = () => {

    const {handleSubmit, register, formState: {errors}} = 
       useForm<IUserLoginPass>({mode: 'all', resolver: joiResolver(userValidator)});
       const navigate = useNavigate();
       const goToUrl = () => { navigate('/auth/user') };

       const customHandler = async (formDataProps: IUserLoginPass): Promise<void> => {
          await userLogin(formDataProps)
          .then(({data: {accessToken}, data: {refreshToken}}) => 
            localStorage.setItem('dummy_user', JSON.stringify({accessToken, refreshToken})))
          .then(() => goToUrl());
       }

    return(
        <div className="component_login w-screen h-screen flex justify-center items-center">
            <form onSubmit={handleSubmit(customHandler)} className="border border-black w-64 min-h-64 flex flex-col items-center gap-4 pt-8">
                <h3>DummyJSON authorization</h3>
                <span>michaelw michaelwpass</span>
                <input type="text" {...register('username')} placeholder="Login" className="w-56 border border-black"/>
                <input type="text" {...register('password')} placeholder="Password" className="w-56 border border-black"/>
                <button className="border border-black rounded w-24">Log in</button>
                <span className="errors_container">
                    <p>{errors?.username?.message}</p>
                    <p>{errors?.password?.message}</p>
                </span>
            </form>
        </div>
    )
};
