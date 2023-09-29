import React from "react";

const Rank = ({name, entries}) => {
    return (
        <>
            <div className="text-white text-xl">
                {`${name}, your current rank is...`}
            </div>
            <div className="text-white text-4xl font-bold">
                {`#2 with ${entries} entries`}
            </div>
        </>
    )
}

export default Rank;