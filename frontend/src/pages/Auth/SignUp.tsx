import logo from '../../assets/img/logo-dark.png'

export default function() {
  return (
    <div>
      <div className='flex justify-center items-center gap-4'>
        <img src={logo} width={50}/>
        <p className='text-white text-xl uppercase'>Arbitrage Screener</p>
      </div>
      <div className='pt-12'>
        <form>
          <div className='mb-6'>
            <label className='block mb-2'>Email address</label>
            <input className='w-full rounded-md px-2 py-2 text-black'/>
          </div>
          <div className='mb-6'>
            <label className='block mb-2'>Password</label>
            <input className='w-full rounded-md px-2 py-2 text-black' type='password'/>
          </div>
          <div className='mb-8'>
            <label className='block mb-2'>Password Confirm</label>
            <input className='w-full rounded-md px-2 py-2 text-black' type='password'/>
          </div>
          <button type='submit' className='w-full rounded-md p-2 bg-indigo-500 text-white'>Create an account</button>
          <div className='mt-6 text-center'>
            <a href='signin'>Have an account already?</a>
          </div>
        </form>
      </div>
    </div>
  )
}