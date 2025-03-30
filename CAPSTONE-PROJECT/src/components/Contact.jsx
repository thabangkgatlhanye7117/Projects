
const Contact = () => {

    return(
      <section id='contact' class='flex justify-center h-[400px] p-10 contain-content '>
      
          
          <div class=' p-10 w-[500px] h-[300px] shadow-2xl ring-neutral-500'>
            <div>
            <p class='text-lg text-center font-bold'>Social Media</p>
            <div class='flex gap-10 mt-5 justify-center'>
                <img class='w-10 h-10 ' src ='src/assets/fonts/facebook-brands-solid.svg'/>
                <img class='w-10 h-10 ' src ='src/assets/fonts/linkedin.png'/>
                <img class='w-10 h-10 ' src ='src/assets/fonts/instagram-brands-solid.svg'/>
                <img class='w-10 h-10 ' src ='src/assets/fonts/twitter-brands-solid.svg'/>
            </div>
            </div>
            <div class='pt-10'>
            <p class='text-lg font-bold mt-5'>Email:   <span class='font-medium'>bullasoft7117@gmail.com</span> </p>
          
            <p class='text-lg font-bold '>Tel:   <span class='font-medium'>011-990-3943</span></p>
            
            </div>
          </div>

  </section>
    )
}
export default Contact