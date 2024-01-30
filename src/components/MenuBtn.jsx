import React from "react";
import { Link } from 'react-router-dom';

export function MenuBtn() {
    return (
        <div>
            <Link to="/menu">
                <button type="button" className="btn btn-primary btn-lg" style={{width:200}}><b>Our Blog</b></button>
            </Link>
        </div>
    )
}