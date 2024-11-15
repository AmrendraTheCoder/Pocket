import React from 'react'

function Hero() {
  return (
    <section className="bg-white-50">
        <div className="mx-auto max-w-screen-xl px-4 pt-32 pb-32 lg:flex lg:h-screen lg:items-center">
            <div className="mx-auto max-w-xl text-center">
                <h1 className="text-5xl font-extrabold sm:text-5xl">
                    Track Shared Expenses. 
                    <strong className="font-extrabold text-gray-500 sm:block"> Simplify Settlements.</strong>
                </h1>

                <p className="mt-4 sm:text-l/relaxed">
                    Easily manage and split finances with friends. Keep track of every expense and never miss a payment!
                </p>

                 <div className="mt-8 flex flex-wrap justify-center gap-4">
                    <a
                       className="block w-full rounded bg-gray-700 px-12 py-3 text-sm font-medium text-white shadow hover:bg-gray-500 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                       href="#"
                    >
                         Get Started
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero