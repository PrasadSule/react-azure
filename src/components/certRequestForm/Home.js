import React from "react";
import { Button } from 'reactstrap';
import { ToastContainer,toast } from 'react-toastify';

function Home() {
    const btnHandle1=()=>{
        toast.error("Failed !!! , Details are not added yet.Please contact prasad.sule@mercedes-benz.com");
     };
    return(
        <div>
            <ToastContainer/>
                <h2>Learn about Navi-Pin</h2>
                <p1>Navi-Pin is a part of UniKey.To know more about Navi-Pin click on learn more button.</p1><br/>
                <p1><Button color="warning" outline onClick={btnHandle1}>Learn More</Button></p1><br/>
                
        </div>
    );
};

export default Home;