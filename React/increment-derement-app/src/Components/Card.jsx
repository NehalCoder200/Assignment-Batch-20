import { useState } from "react"

function Card() {
    let [incre, setCount] = useState(0)

    function increment() {
        setCount(incre + 1, 'run')
    }

    return <>
        <div className='w-[450px] h-[250px] text-3xl rounded-xl flex flex-col items-center  gap-[40px] bg-[#343F4F] pt-12 m-auto mt-[100px]'>
            <h1 className="text-[#05C2E9] font-bold">Increment And Decrement</h1>

            <div className="bg-white text-[#343F4F] rounded-xl font-bold text-5xl text flex items-center gap h-[66px] px-4">
                <span className="border-r-3 border-gray px-3 h-[100%] cursor-pointer py-1" onClick={increment}>-</span>
                <span className="px-5 border-r-3 border-gray h-[100%] cursor-pointer py-1">0</span>
                <span className="px-3 h-[100%] py-1 cursor-pointer" onClick={increment}>+</span>
                <button onClick={increment}>clink</button>
            </div>

        </div>

    </>
}

export default Card