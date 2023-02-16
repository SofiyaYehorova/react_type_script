import React, {FC} from 'react';

import {CarDetails, CarForm} from "../components";
import {Outlet} from "react-router-dom";

const CarsPage:FC = () => {
    return (
        <div>
            <CarForm/>
            <hr/>
            <Outlet/>
            <hr/>
            <CarDetails/>
        </div>
    );
};

export {
    CarsPage
};