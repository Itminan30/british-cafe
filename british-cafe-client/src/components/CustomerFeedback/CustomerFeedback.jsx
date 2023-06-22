import React from 'react';

const CustomerFeedback = () => {
    return (
        <div className='mt-10 lg:mt-20'>
            <h2 className='text-red-600 text-center text-2xl lg:text-5xl font-bold mb-5 lg:mb-10'>
                ~ Customer Feedback ~
            </h2>

            <div className='flex flex-col lg:flex-row justify-center gap-10 items-center'>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/programmer.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Customer 1</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam, quaerat?
                    </p>
                </div>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/man.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Customer 2</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, magni?
                    </p>
                </div>
                <div className='border w-80 flex flex-col justify-center items-center rounded-lg p-5'>
                    <img className='w-40 mb-5' src="/referee.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Customer 3</h3>
                    <p className='text-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, deserunt.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CustomerFeedback;