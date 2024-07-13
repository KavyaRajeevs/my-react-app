import profilepic from './assets/Profilepic.png';
function Card(){
    return(
        <div className="card">
            <img src={profilepic} alt="profile picture"/>
            <h2>Kavya R</h2>
            <p>Computer Science Student Sophomore</p>
        </div>
    );

}
export default Card