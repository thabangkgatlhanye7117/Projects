import Languages from './languages.json'

const LanguageList = () => {

    return(
        <section id='languages'class='p-10 font-sans mt-20 pt-[100px]'>
          <h1 class='text-center p-5 text-2xl font-semibold'>Programming Languages</h1>
          <div class ='grid  grid-cols-3  gap-10 h-[400px] p-16 relative mb-5 max-md:grid-cols-1 '>

            {
              Languages.map(language =>{
                return(
                        <div class='h-[200px] w-[380px] border-none p-10 ring-2 ring-neutral-200 rounded-lg font-san hover:shadow-2xl' key={language.id}>
                            <p>Name: {language.name}</p>
                            <p>Description: {language.decription}</p>
                            <p>Concept: {language.concepts}</p>

                        </div>
                      )
                })
            }

        </div>
            </section>
    )
}
export default LanguageList