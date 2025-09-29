import React from 'react'

const Cardmap = ({ item }) => {

    return (
        <div className='container mx-auto'>
            <div className='w-[270px] h-[350px] rounded-[4px]'>
                <div className='w-[270px] absolute h-[250px] bg-[#F5F5F5]'>
                    <img className='pt-[35px] pb-[35px] pl-[40px] pr-[40px]' src={item.images} alt="" />
                    <img className='relative left-55 top-3 cursor-pointer' src={item.title} alt="" />
                    <img className='relative left-55 top-5 cursor-pointer' src={item.desc} alt="" />
                </div>
                <p>{item.name}</p>
                <div className='w-[270px] h-[41px] bg-black'>
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default Cardmap
