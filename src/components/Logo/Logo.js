import { Fragment } from "react"
import logo from '../../logo.svg';

export function Logo () 
{
    return (
        <Fragment>
        <img src={logo} className="App-logo" alt="logo" />
        </Fragment>
    )
}