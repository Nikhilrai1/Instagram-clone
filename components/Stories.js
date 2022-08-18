import React, { useState,useEffect } from 'react'
import { faker } from '@faker-js/faker';



const Stories = () => {
    const [profile,setProfile] = useState([]);
    useEffect(() => {
        getProfile()
    }, [])
    const getProfile = async () => {
        const res = await fetch('https://dummyapi.io/data/v1', {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                "app-id": "62fc465cfec0d7de119f59b7"
            },
        })
        let data = await res.json()
        console.log(data)
        setProfile(data)
    }
    return (
        <div>
            {/* story */}
        </div>
    )
}

export default Stories