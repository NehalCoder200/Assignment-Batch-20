import Nav from "./Components/Nav";
import Card from "./Components/Card";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {

    let [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    let [limit, setLimit] = useState(8);


    let getData = async () => {
        try {
            const result = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=${limit}`);
            setData(result.data);
        }
        catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <>
            <div className="mainContainer h-full bg-[#2C2C2C] text-white ">

                <Nav />

                <div className="h-[calc(100vh-150px)] ">

                    <div className="CardMain w-[92%] flex justify-around gap-5 flex-wrap rounded  bg-[#101011] border border-gray-700 rounded-md m-auto align-center p-5">

                        {data.length > 0 ? (data.map((item) => <Card key={item.id} data={item} />)) :
                            (<p className="font-bold text-2xl pt-20">No images to display</p>)}

                        <div className="flex justify-center w-[100%]">
                            <div className="flex gap-8">
                                {data.length > 0 && <button className="bg-[#AA57FC] px-4 py-2 rounded-md" onClick={() => { setPage(page - 1); getData() }}>Prev</button>}
                                {data.length > 0 && <button className="bg-[#AA57FC] px-4 py-2 rounded-md" onClick={() => { setPage(page + 1); getData() }}>Next</button>}
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    );
}

export default App;
