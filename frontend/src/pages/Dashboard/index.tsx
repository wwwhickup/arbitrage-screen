import { FaExclamationCircle } from "react-icons/fa"
import { Tooltip } from "flowbite-react"

export default function Dashbaord (): JSX.Element {
  return (
    <>
      <div className='flex gap-2'>
        <div className='card w-full'>
          <span className='font-thin pr-3 text-base'>24H VOLUMES:</span> <b>$2.30B</b>
        </div>
        <div className='card w-full'>
          <span className='font-thin pr-3'>24H TXNS:</span> <b>2,290,594</b>
        </div>
      </div>
      <div className='flex gap-2 mt-5'>
        <div className='card w-full'>
          <span className='font-thin pr-3 text-base'>BTC:</span> <b>$2.30B</b>
        </div>
        <div className='card w-full'>
          <span className='font-thin pr-3'>ETH:</span> <b>2,290,594</b>
        </div>
        <div className='card w-full'>
          <span className='font-thin pr-3 text-base'>BNB:</span> <b>$2.30B</b>
        </div>
        <div className='card w-full'>
          <span className='font-thin pr-3'>MATIC:</span> <b>2,290,594</b>
        </div>
        <div className='card w-full'>
          <span className='font-thin pr-3 text-base'>SOL:</span> <b>$2.30B</b>
        </div>
      </div>
      <div className='mt-8'>
        <h1 className='mt-12 flex justify-center gap-1 items-center'>
          Arbitrage Windows History
          <Tooltip
            content="This is the Arbitrage history from __/__/___ more than 5% profit"
            animation="duration-150"
          >
            <FaExclamationCircle size={24} className='pt-2' />
          </Tooltip>
        </h1>
        
        <div className="border border-slate-800 rounded-2xl pt-12 pb-8 mt-12">
          <div className="table border-collapse table-auto w-full text-sm">
            <div className="table-header-group">
              <div className="table-row text-right">
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left">Pair</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Profit %</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Buy Price</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Sell Price</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">CEX</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">DEX</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Started At</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Ended At</div>
                <div className="table-cell border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200">Windows Time</div>
              </div>
            </div>
            <div className="table-row-group">
              <div className="table-row text-right">
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4 text-left">APE/USDT</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">5.7%</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">4.75</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">4.82</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">P2B</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">Uniswap</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">2/21/2023</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">2/21/2023</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">72 mins</div>
              </div>
              <div className="table-row text-right">
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4 text-left">APE/USDT</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">5.7%</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">4.75</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">4.82</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">P2B</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">Uniswap</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">2/21/2023</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">2/21/2023</div>
                <div className="table-cell border-b border-slate-200 dark:border-slate-600 p-4">72 mins</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}