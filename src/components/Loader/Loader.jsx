import './Loader.css'
import DogLoader from '../../assets/Image/loaderDog.gif'
import { Box } from '@mui/material'
const Loader=()=>{

    return (
        <div className="loader-container">
        {/* <div className="spinner"></div> */}
        <Box component="img" src={DogLoader} alt="Pet Loader" />
    </div>
    )


}

export default Loader;