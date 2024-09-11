import React from "react";

export default function Page({params}) {
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <h1>Profile Page</h1>
            <hr />
            <h2 className="bg-blue-400 text-white px-[20px] py-[10px] rounded">{params.id}</h2>
        </div>
    );
}