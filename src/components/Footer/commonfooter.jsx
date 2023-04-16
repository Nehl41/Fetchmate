import CopyrightIcon from '@mui/icons-material/Copyright';


const CommonFooter=() => {

   return(
    <div className="d-flex justify-content-center position-relative" 
        style={{marginTop: '0.5rem', backgroundColor: 'black', paddingTop: '0.7rem'}}>
        <CopyrightIcon/><p>Minor Project@ Fetchmate.com All rights reserved</p>
    </div>
   ); 
   
}

export default CommonFooter