import './ViewPage.css';
import { Link } from 'react-router-dom';
const ViewPage=()=>{
    let userName = JSON.parse(localStorage.getItem('login')).userName;
    function HandleLogout(){
        localStorage.removeItem("login");
        alert("Logout was Successfull");
        window.location.href="/login";
    }
    return(
    <>
    <div className="page-container">
        <nav className="nav-bar" id="navBar">
            <img src="https://assets.ccbp.in/frontend/intermediate-rwd/landing-page-logo.png" alt="logo" className="nav-logo" />
        </nav>
        <ul className="items-container display" id="itemsContainer">
        <a href="/#" className="items">Features</a>
            <a href="/#" className="items">About</a>
            <a href="/#" className="items">Contacts</a>
            <div className="items">
            <Link to="/login"><button className="button" onClick={HandleLogout}>Logout</button></Link>
            </div>
        </ul>
    </div>
    <div className="bg-container">
        <h1 className="page-heading">Welcome {userName}</h1>
        <h1 className="page-sub-heading">To Student Startup Acceleration Program!</h1>
    </div>
    </>
    );
}
export default ViewPage;