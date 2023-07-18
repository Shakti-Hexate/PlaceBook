import React , {useState} from "react";
import { Link } from "react-router-dom";
import './MainNavigation.css';
import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDrawer from "./SideDrawer";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = props => {
    const [drawerIsopen , setDrawerIsOpen] = useState(false);
    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    }
    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    }

    return (
        <React.Fragment>
        {drawerIsopen && <Backdrop onClick={closeDrawerHandler} />}

        <SideDrawer show={drawerIsopen} onClick={closeDrawerHandler}>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDrawer>

    <MainHeader>
        <button className="main-navigation__menu-btn" onClick={openDrawerHandler}>
            <span/>
            <span/>
            <span/>
        </button>
        <h1 className="main-naviagtion__title">
            <Link to="/">Your Places</Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks />
        </nav>
    </MainHeader>
    </React.Fragment>
    );
};

export default MainNavigation;