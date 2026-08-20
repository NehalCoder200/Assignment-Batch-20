import React, { useEffect, useState } from "react";
import axios from "axios";

import Card from "../Card";
let Home = () => {

    let [storeData, setStoreData] = useState([])

    let getApi = async () => {
        let result = await axios.get('https://dummyjson.com/users')

        setStoreData(result.data.users);
    }



    useEffect(() => {
        getApi()
    }, [])

    return <>
    <div className="flex flex-wrap justify-around gap-10 mb-5">

        {storeData.map((user) => <Card key={user.id} usersData={user} /> )}
    </div>

    </>
}

export default Home