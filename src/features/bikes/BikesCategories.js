import React from "react";
import { useSelector } from "react-redux";

import { getAllCategores } from "./bikesSlice";

export default function Categories() {

    const categories = useSelector(getAllCategores);
    console.log('cat is ' + categories[0]);

    const renderedCategories = categories.map(category => <div>{category}</div>)

    return (
        <div>
            {renderedCategories}
        </div>
    )
}