// import React, { useState } from 'react';
import Image from 'next/image'
import HomeB from '@/Assets/Home-b.svg';
import HomeW from '@/Assets/Home-w.svg';



export default function HomeBut(){
    return(<>
    <div className="flex top-0 z-50 p-5 justify-between items-center bg-white rounded-full">
        <Image
            src={HomeB}
            alt="Search icon"
            width={17}
            height={17}/>
    </div>
    </>);
}