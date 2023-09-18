import React from "react";

const Ordering = ({ handleOrder }) => {
    return (
        <div>
            <select className="border border-2 p-2" onChange={handleOrder}>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </div>
    );
};

export default Ordering;
