// import React, { useState } from 'react';
import Image from 'next/image'
import searchIcon from '@/Assets/Searchb.svg';
import searchIconw from '@/Assets/Search-w.svg';
import BrowseIcon from '@/Assets/Browse-s.svg';


export default function Search(){
    return(<>
    <div className="flex top-0 min-w-[30vw] h-15 z-50 p-2 justify-between items-center bg-(--color-GreyB) rounded-full">
        <div className="flex p-2 justify-arround items-center">
            <Image
            src={searchIcon}
            alt="Search icon"
            width={17}
            height={17}/>
            <h1 className="text p-4 font-bold">Search with freedom</h1>
        </div>
        <div>
            <Image
            src={BrowseIcon}
            alt="Browseing"
            width={36}
            height={36}/>
        </div>
    </div>
    </>);
}