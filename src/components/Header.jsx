export default function Header(){
    const data = [
        'Skills',
        'Experience',
        'Achievements',
        'Projects',
        'Profiles',
        'Contact'

    ]
    return <div className="w-full h-16 bg-blue-800 flex flex-row p-4 text-white font-sans">
            <h1 className="flex basis-1/2 text-2xl font-bold text-justify">Guna Vardhan</h1>
            <div className="text-lg font-semibold flex basis-1/2 flex-row justify-around items-center">
            {data.map(item=>(
                <div className="text-white hover:underline hover:text-green-400 " key={item}>
                    {item}
                </div>
            ))}
           </div>
    </div>
}