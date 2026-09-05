function Card({ data }) {

    // console.log(data);
    return (

        <div className="Card w-[240px] border border-gray-700 shadow-2xl flex gap-5 flex-col h-[280px] rounded-md">

            <img className="w-[100%] rounded h-[200px]" src={data.download_url} alt="" />

            <div className="flex align-center justify-center ">

                <p className="font-bold text-2xl">{data.author}</p>
            </div>


        </div>
    );
}

export default Card;

<div className="Card w-[240px] border border-gray-700 shadow-2xl flex gap-5 flex-col h-[280px] rounded-md">

    <img className="w-[100%] rounded h-[200px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRThxV1YNmT2iKVW5Rf0M3f9sEUCh97LKXaBPhmqaLWbg&s" alt="" />

    <div className="flex align-center justify-center ">

        <p className="font-bold text-2xl">Nehal Ali</p>
    </div>


</div>