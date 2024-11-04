import React from 'react'

const AfterCrm = () => {
  return (
    <div className="p-4">
      <div className="flex flex-col w-full justify-center items-center">
        <div className="">
          <h2
            id="homepage_stats_heading"
            className="text-2xl font-mono"
          >
            Crm customer’s results after 1 year:
          </h2>
        </div>
        <div className="mt-3">
          <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
            <li className=" bg-secondary flex flex-col justify-center items-center p-4 rounded min-w-[300px] ">
              <div className="">
                <img
                  className="rounded"
                  src="/assets/artış.webp"
                  alt=""
                  height="200"
                  width="200"
                  loading="lazy"
                />
              </div>
              <div className="my-2">
                <h3 className="text-xl font-mono ">114%</h3>
                <div className="font-mono">
                  More web traffic
                </div>
              </div>
            </li>
             <li className=" bg-secondary flex flex-col justify-center items-center p-4 rounded min-w-[300px] ">
              <div className="wf-stats-card-image-wrapper -square">
                <img
                  className="rounded"
                  src="/assets/deals.jpeg"
                  alt=""
                  height="200"
                  width="200"
                  loading="lazy"
                />
              </div>
              <div className="my-2">
                <h3 className="text-xl font-mono ">55%</h3>
                <div className="font-mono">
                  More deals
                </div>
              </div>
            </li>
            <li className=" bg-secondary flex flex-col justify-center items-center p-4 rounded min-w-[300px] ">
              
              <div className="wf-stats-card-image-wrapper -square">
                <img
                  className="rounded"
                  src="/assets/tickets.jpeg"
                  alt=""
                   height="200"
                  width="200"
                  loading="lazy"
                />
              </div>
              <div className="my-2">
                <h3 className="text-xl font-mono ">43%</h3>
                <div className="font-mono">
                  More tickets resolved
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default AfterCrm
