


const Sign = () => {
    function talk(e){
        e.preventDefault();
        alert("Ok we will notify you soon");
    }
    return ( 
        <div className="signup-con container">
            <h2>Sign up for the BETA to see more</h2>
            <form action="">
                <input type="text" placeholder="Business Name" id="input-first" />
                <input type="email" placeholder="Email" id="input-second" />
                <div className="form-btn">
                <button onClick={talk}>Notify me</button>
                </div>
               



            </form>
            <button className="freelancer-btn"><a href="http://">Sign up as a freelancer partner</a></button>
           
        </div>
     );
}
 
export default Sign;