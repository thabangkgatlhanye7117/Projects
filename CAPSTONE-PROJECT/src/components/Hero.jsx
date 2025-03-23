const Hero = () => {

return(
<>
<section class= 'h-[400px] bg-black p-10  font-san border-t-2 border-neutral-950'>
  
    <div>
        <p class='text-white text-xl mb-10'>WELCOME!</p>
        <p class='text-white text-6xl pr-5'>KEEP UP WITH THE EVER-EVOLVING WORLD OF TECH AND SOFTWARE WITH US</p>
    </div>

    <div class='flex items-end h-[150px]   justify-between '>
      <div class='flex w-2/4 justify-around'>
       <a><p class='text-white hover:font-bold'>TUTORIAL</p></a>
       <a><p class='text-white  hover:font-bold'>ROADMAPS</p></a>
       <a><p class='text-white  hover:font-bold'>SERVICES</p></a>
      </div>
      <button class='text-white w-[200px] h-[50px] bg-red-600 rounded-lg shadow-md shadow-neutral-600'>SIGN-UP</button>
    </div>
  
  
</section>


</>
)
}

export default Hero