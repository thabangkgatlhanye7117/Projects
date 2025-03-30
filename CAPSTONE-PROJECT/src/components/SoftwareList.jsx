import Softwares from './softwares.json'

const SoftwareList = () => {


    return(
      <section id='popular-software'class='p-10 font-sans mt-20 pt-[100px]'>
          <h1 class='text-center p-5 text-2xl font-semibold'>Popular Softwares</h1>
          <div class ='grid  grid-cols-3  gap-10 h-[400px] p-16 relative mb-5 max-md:grid-cols-1 '>

               {
                  Softwares.map(software =>{
                      return(
              
                            <div class='h-[200px] w-[380px] border-none p-10 ring-2 ring-neutral-200 rounded-lg font-san hover:shadow-2xl'key={software.id}>
 
                                  <p><span className='font-medium'>Name:</span> {software.name}</p>
                                  <br/>
                                  <p><span className='font-medium'>Description:</span> {software.description}</p>
                                  <p><span className='font-medium'>Number of modules:</span> {software.modules}</p>
                                  <p><span className='font-medium'>Duration:</span> {software.duration}</p>
                                  

                            </div>

                            )
                            })
                }

    
 
      </div> 
    
    </section>
  
      )


}


export default SoftwareList