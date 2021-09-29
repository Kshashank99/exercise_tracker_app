import React from 'react'
import { Redirect } from 'react-router'
import { signout } from '../auth'
import { withRouter } from 'react-router'
const Signout = ({history}) => {

    return (
        <div>
        {signout(()=>history.push("/"))}
               
        </div>
    )
}

export default withRouter(Signout)
