import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ContactList from './components/ContactList';
import AddContact from './components/AddContact';
import Button from 'react-bootstrap/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Contacts: <Button>Add</Button></h1>
        <AddContact></AddContact>
        <ContactList></ContactList>
      </header>
    </div>
  );
}

export default App;
