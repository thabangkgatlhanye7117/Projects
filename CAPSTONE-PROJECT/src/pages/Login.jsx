
const Login = () => {
  return(
    <section className='m-10 p-24 font-san font-semibold'>
      <div class='shadow-2xl rounded-2xl w-[500px] h-[400px] m-auto font-san font-semibold'>
    <h1 className='text-center m-auto text-2xl'>Login!</h1>

     
        <div className='flex justify-center items-center w-full h-[300px] '>
            <form class='w-full p-10'id='sign-up' method='POST'>
                
                <label htmlFor='username'>Username</label>
                <br/>
                <input className='ring-2 ring-neutral-300 w-full h-[30px] mb-5' type='text' id='username' />
                <br/>
                <label htmlFor='password' >Password</label>
                <br/>
                <input className='ring-2 ring-neutral-300 w-full h-[30px] mb-5' type='text' id='password' />
                <br/>
                <div className='flex justify-center'>
                  <button className='bg-red-600 text-white w-[200px] h-[50px] rounded-xl '>Login</button>
                </div>
            </form>
            
        </div>
       
    </div>
  
   
</section>
  )
}
export default Login