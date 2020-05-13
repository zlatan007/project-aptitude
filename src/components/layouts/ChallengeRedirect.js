import React, {useEffect} from 'react';
import { useHistory } from "react-router-dom";

function ChallengeRedirect(props){

    const history = useHistory();
    // console.log(props)

    useEffect(() => {
        history.push("/challenge/"+props.match.params.challenge_slug+"/problem");
    }, [history, props])
    
    return(
        <div>

        </div>
    )
}
export default ChallengeRedirect;