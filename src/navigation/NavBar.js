import React from "react";

import './NavBar.scss';

export default function NavBar() {


    return (
        <header>
            <nav>
                <ul className="menu menu_theme-top-level">
                    <li className="menu__item">
                        <ul className="menu menu_theme-inner">
                            <InnerMenuItem link="bikes" text='bikes' />
                            <InnerMenuItem link="bike-comparison" text='bikes comparison' />
                        </ul>
                    </li>

                    <li className="menu__item">
                        <ul className="menu menu_theme-inner">
                            <InnerMenuItem text='tracks' />
                            <InnerMenuItem text='bounty table' />
                        </ul>
                    </li>
                    <li className="menu__item">
                        <ul className="menu menu_theme-inner">
                            <InnerMenuItem text="password calculator" />
                        </ul>
                    </li>
                    <li className="menu__item">
                        <ul className="menu menu_theme-inner">
                            <InnerMenuItem text="hints & more" />
                            <InnerMenuItem text="speedrunning" />
                            <InnerMenuItem text="contacts" />
                        </ul>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

const InnerMenuItem = ({ text, link }) => (
    <a className="menu__inner-item" href={`#${link}`}> <li >{text}</li></a>
)