import {Outlet} from "react-router-dom";

const Root = () => {
    return (
        <div className={'root__container'}>
            <Outlet/>
        </div>
    );
};

export default Root;
