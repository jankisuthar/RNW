import {React,createContext,useContext} from 'react'; 

const Themes = {
    dark:{
        ForegroundColor : 'white',
        BackgroundColor : 'black',
    },
    light:{
        ForegroundColor : 'yellow',
        BackgroundColor : 'grey',  
    }
}

const MyTheme = createContext(Themes.light)

function UseContext(props) {
    const Theme = useContext(MyTheme)
    return (     
       <>
          <div className="container mt-5">
            
            <div className="row">
                <div className="col-4">
                    
                <div className="card p-5" style={{background:Theme.BackgroundColor,color:Theme.ForegroundColor}}>
                <h1>Login Form</h1>
                <br />
                    <form>
                        <input type="text"  placeholder='Enter Name' className='form-control'/>
                        <br />
                        <input type="password" placeholder='Enter Password' className='form-control'/>
                        <br />
                        <button className='btn btn-primary'>Login</button>
                    </form>
                </div>
                </div>
            </div>
            
           
            
          </div>
       </>
    );
}

export default UseContext;