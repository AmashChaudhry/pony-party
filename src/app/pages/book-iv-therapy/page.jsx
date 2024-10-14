import Drips from "@/components/drips";

export default function BookIVTherapy() {
    return (
        <div className="flex flex-col items-center w-full max-w-[1200px] mx-auto py-[60px]" style={{ minHeight: 'calc(100vh - 80px)' }}>
            <div className="flex flex-col items-center p-[30px]">
                <h1 className="text-[20px] font-medium tracking-widest sm:text-[24px]">VITAMIN IV THERAPY</h1>
                <p className="text-[12px] text-center text-gray-500 font-light sm:text-[14px]">Experience all the benefits of IV therapy in the comfort of your own home.</p>
            </div>
            <Drips />
        </div>
    );
}