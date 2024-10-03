'use client'
import React, { useState, useEffect } from "react";

export default function Blog({ params }) {
    const { blogId } = params;
    return(
        <div>
            <p>{blogId}</p>
        </div>
    );
}