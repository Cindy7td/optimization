import Table from 'react-bootstrap/Table'
import Contact from './Contact'
import img1 from '../img/Harry-min.jpg'
import img2 from '../img/Heisenberg-min.png'
import img3 from '../img/Pinkman-min.jpg'
import img4 from '../img/Katniss-min.jpg'

export default function ContactList(props){

return (
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
        <th></th>
        <th>Name</th>
        <th>Address</th>
        <th>Email</th>
        <th>Phone</th>
        </tr>
    </thead>
    <tbody>
        <Contact img={img1} name = "Harry Potter" address = "Hogwarts" email="harrypotter@hogwarts.com" phone="6141232425" ></Contact>
        <Contact img={img2} name = "Walter White" address = "Albuquerque" email="heisenberg@breakingb.com" phone="6141234567" ></Contact>
        <Contact img={img3} name = "Jesse Pinkman" address = "Albuquerque" email="pinkman@breakingb.com" phone="6141233221" ></Contact>
        <Contact img={img4} name = "Katniss Everdeen" address = "District 12" email="mockingjay@hg.com" phone="6141232323" ></Contact>
    </tbody>
    </Table> 
) }