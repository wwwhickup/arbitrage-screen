import { FaGithub, FaTwitter, FaMedium } from 'react-icons/fa';

export default function() {
  return (
    <div className='flex justify-between p-4 px-8 fixed bottom-0 w-full'>
      <div className='flex gap-4 text-white'>
        <a>Blog</a>
        <a>FAQ</a>
        <a>Community</a>
      </div>
      <div className='flex justify-between gap-4'>
        <a href='https://www.github.com/wwwhickup/arbitrage-screen.git' target='_blank'>
          <FaGithub size={20}/>
        </a>
        <a href='https://www.github.com/wwwhickup/arbitrage-screen.git' target='_blank'>
          <FaTwitter size={20}/>
        </a>
        <a href='https://www.github.com/wwwhickup/arbitrage-screen.git' target='_blank'>
          <FaMedium size={20}/>
        </a>
      </div>
    </div>
  )
}