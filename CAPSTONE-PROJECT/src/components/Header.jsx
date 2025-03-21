
const Header = () => {
  return(
    <>
      <header class='bg-black h-30 flex px-10 justify-between border-b-2 border-b-white'  >

                 
          <div class='flex w-2/7 items-center'>
             <a href='#'><img class=' w-full h-auto object-contain 'src='src/assets/logo-black.png'/></a>
          </div>

          <div class= 'flex w-2/5 items-center justify-between p-3'>
              <div class= 'flex w-3/5 h-10 justify-around items-center'>
                  <input class='h-8 w-4/4 border-none rounded-md' type ='text' />
                  <img class='object-contain h-5 ' src='src/assets/search.png'/>
              </div>
              <a href='#'><p class= 'text-white hover:text-red-600 font-semibold'>LOGIN</p></a>
          </div> 
           
      </header>

      
      <nav class='flex bg-black h-10 items-center px-20 '>
            <ul class= 'flex w-full h-10 items-center justify-around '>
                <a href=''><li class='text-neutral-600 font-bold text-sm hover:text-red-600'>ABOUT</li></a>
                <a href=''><li class='text-neutral-600 font-bold text-sm hover:text-red-600'>COURSES</li></a>
                <a href=''><li class='text-neutral-600 font-bold text-sm hover:text-red-600'>BLOG</li></a>
                <a href=''><li class='text-neutral-600 font-bold text-sm hover:text-red-600'>CONTACTS</li></a>
                <a href=''><li class='text-neutral-600 font-bold text-sm hover:text-red-600'>COMMUNITY</li></a>
            </ul>
      </nav>
      </>
  );
}

export default Header