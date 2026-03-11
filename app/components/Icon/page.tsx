import Image from 'next/image'
import ICN from '@/Assets/FullIcon.svg';



export default function ICON(){
    return(<>
    <div className="flex top-0 z-50 p-5 ">
        <Image
            src={ICN}
            alt="Search icon"
            width={280}
            height={17}/>
    </div>
    </>);
}