import { ModeToggle } from "@/components/ui/modetoggle";

export default function Dashboard (){
return (  
<>
<ModeToggle />
<div>
    <h1 className="text-4xl font-semibold">Dashboard</h1>
    <p className="mb-4">Welcome to your dashboard</p>
</div>
<div className="flex flex-row space-x-4 mb-6">
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
    <div className="card border-2 rounded-2xl p-4 flex-1">
        <h1 className="font-bold text-2xl">Total Waste Sorted</h1>
        <p className="text-2xl font-bold">0 kg</p>
    </div>
</div>
<div className="Quick Actions mb-6">
    <h1 className="mb-2">Quick Actions</h1>
    <div className="flex flex-row space-x-4">
                <div className="btn flex flex-col flex-1 bg-emerald-400 w-96 h-48 rounded-2xl p-10 m-2 items-center justify-center cursor-pointer hover:scale-105 shadow-2xl transition-all duration-300 hover:shadow-amber-800 ">
            <div className="icon mb-2"></div>
            <h1 className="text-2xl font-bold">Scan Waste</h1>
        </div>
                <div className="btn flex flex-col flex-1 bg-emerald-400 w-96 h-48 rounded-2xl p-10 m-2 items-center justify-center cursor-pointer hover:scale-105 shadow-2xl transition-all duration-300 hover:shadow-amber-800 ">
            <div className="icon mb-2"></div>
            <h1 className="text-2xl font-bold">Learn And Earn</h1>
        </div>
    </div>
    </div>
</>
);
}
