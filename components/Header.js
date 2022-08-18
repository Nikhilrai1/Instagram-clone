import React from 'react';
import { HeartIcon, MenuIcon, PaperAirplaneIcon, PlusCircleIcon, SearchIcon, UserGroupIcon } from "@heroicons/react/outline"
import { HomeIcon } from "@heroicons/react/solid"



const Header = () => {
    return (
        <div className="shadow:sm border-b bg-white sticky top-0 z-50">
            <div className="flex justify-between items-center bg-white max-w-6xl mx-5 lg:mx-auto p-1">
                {/* left */}
                <div className="relative hidden lg:inline-grid w-24 cursor-pointer">
                    <img src="./logo.png" alt="logo" className='contain' />
                </div>
                <div className="relative  lg:hidden w-10 flex-shrink-0 cursor-pointer">
                    <img src="https://Links.papareact.com/jjm" alt="logo" className='contain' />
                </div>

                {/* middle searchbar */}
                <div className="max-w-xs">
                    <div className='relative p-3'>
                        <div className="absolute p-3 inset-y-0 flex items-center pointer-events-none">
                            <SearchIcon className="h-5 w-5 text-gray-500" />
                        </div>
                        <input
                            type="text"
                            placeholder='Search'
                            className='bg-gray-50 border focus:ring-black focus:border-black border-gray-300 block w-full pl-10' />
                    </div>
                </div>

                {/* right icons container */}
                <div className="flex items-center justify-end space-x-4">
                    <MenuIcon className='navBtn cursor-pointer h-6 md:hidden' />
                    <HomeIcon className='navBtn cursor-pointer h-6 hidden md:block' />
                    <div className="relative navBtn">
                        <PaperAirplaneIcon className='rotate-45 cursor-pointer h-6' />
                        <div className="absolute -top-1 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full flex justify-center items-center animate-pulse text-white">
                            3
                        </div>
                    </div>
                    <PlusCircleIcon className='navBtn' />
                    <UserGroupIcon className='navBtn' />
                    <HeartIcon className='navBtn' />
                    <img
                        src="https://Links.papareact.com/3ke"
                        alt="profile"
                        className='h-10 w-10 rounded-full cursor-pointer'
                    />
                </div>
            </div>
        </div>
    )
}

export default Header