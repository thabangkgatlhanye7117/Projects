
const SignupForm = () => {

    return (

    <section id='signup-sec'className='shadow-2xl rounded-2xl m-20 p-24 font-san font-semibold'>

        <h1 className='text-center p-5 text-2xl'>Let's get started!</h1>

        <div className='flex justify-center items-center  '>
            <div className='w-1/2 h-[300px] '>
                <form id='sign-up' method='POST'>
                    
                    <label htmlFor='name' >Full Name</label>
                    <br/>
                    <input className='ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5' type='text' id='name' />
                    <br/>
                    <label htmlFor='email' >Email Address</label>
                    <br/>
                    <input className='ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5' type='text' id='email' />
                    <br/>
                    <label htmlFor='password' >Password</label>
                    <br/>
                    <input className='ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5' type='text' id='password' />
                    <br/>
                    <label htmlFor='username'>Username</label>
                    <br/>
                    <input className='ring-2 ring-neutral-300 w-3/4 h-[30px] mb-5' type='text' id='username' />

                </form>
                <input  className=''type='checkbox' id='tsandcs'/>
                <label className='ml-2' htmlFor='tsandcs'>I accept the <a href='#'><span className='text-sky-500 '>terms and conditions</span></a></label>
            </div>
            <div className='w-1/2  flex justify-end'>
                    <img className= 'h-[400px] w-3/4'src='src/assets/images-icons/formImage.jpg'/>
            </div>
        </div>
        <div className='flex justify-center py-10'>
            <button className='bg-red-600 text-white w-[200px] h-[50px] rounded-xl '>Create Profile</button>
        </div>
        
    </section>
    );


} 

export default SignupForm