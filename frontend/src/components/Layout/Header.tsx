import Logo from '../../assets/img/logo-dark.png'

export default function Header() {
  return (
    <div className='p-4 px-8 flex justify-between'>
      <div className='flex gap-2 items-center'>
        <img src={Logo} width={30} height={30}/>
        <h1 className='text-white uppercase text-xl'>Arbitrage Screener</h1>
      </div>
      <div>
        <button>Launch App</button>
      </div>
    </div>
  )
}