import React, {FunctionComponent} from "react";
import Sign from "../../components/sign";
import HeaderOut from "../../components/headerOut";

const Outside: FunctionComponent=()=>{

    return(
        <div>
            <HeaderOut/>
            <main className="bg-lt d-flex justify-content-center align-item-center">
                <Sign/>
            </main>
        </div>
    )
}

export default Outside;