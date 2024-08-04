import * as Icon from 'react-bootstrap-icons'
import Form from './form'
const  Contact = () => {
  return(
    <div className="container">
        <div className="form-design">
           <div className="overlay1"></div>
           <div className="overlay2"></div>
           <div className="details">
            <h2 className='icon'><Icon.SendArrowUpFill /></h2>
            <h3>Contact us</h3>
           </div>
        </div>
        <Form />

    </div>
  )
}
export default Contact