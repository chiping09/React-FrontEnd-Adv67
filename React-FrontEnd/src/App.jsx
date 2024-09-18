import Contact from './assets/Contact'
import Counter from './assets/Counter';
import Hello from './assets/Hello'

function App() {
  const helloData = [
    { name: 'Chokchai', message: 'Hi there'},
    { name: 'Tom', message: 'Hello..'}
  ];
  return (
    <div className='App'>
      < Counter />
      {helloData.map((data, index) => (
        <Hello key={index} name={data.name} message={data.message}/>
      ))}

      <Contact email="s6606022420117@email.kmutnb.ac.th" phone="0616959145" />
    </div>
  );
}

export default App
