import { Outlet } from 'react-router';

const MainLayout = () => {
    return(
        <div className='layout_main'>
            <Outlet/>
        </div>
    )
};

export default MainLayout;
