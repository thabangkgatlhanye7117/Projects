

function Header(props){

    return(
          <header>
                <h1 className='heading'>Our First React Website</h1>
                <nav>
                  <ul>
                      <li>Name : {props.name}</li>
                      <li>Age : {props.age}</li>
                      <li>Country</li>
                      

                  </ul>

                </nav>

          </header>
          
    );

}

export default Header