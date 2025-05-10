import bg from '../assets/example.jpg';
const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${bg})` }} className=" relative h-[80vh] bg-cover bg-center flex flex-col items-center justify-center text-center rounded-3xl shadow-lg">
            <div>
                <h1 className="text-3xl font-bold text-white mb-4">
                    Welcome to Your Website
                </h1>
                <p className="text-gray-100">
                    This is your landing page content.
                </p>
            </div>
            <div className="absolute top-90 left-200 w-80 h-90 rounded-xl drop-shadow-2xl">
                <div className='flex w-full h-[35%] rounded-t-xl'>
                    <div
                        style={{
                            clipPath: 'polygon(100% 0, 100% 100%, 0 100%)',
                        }}
                        className='h-full w-2/5 bg-white'>
                        
                    </div>
                    <div className='h-full w-3/5 bg-white rounded-tr-xl'>
                    </div>
                </div>
                <div className='w-full h-[65%] rounded-b-xl bg-white'>

                </div>
            </div>
        </div>
    );
}

export default Hero;