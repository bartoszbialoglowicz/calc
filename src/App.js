import Calculator from './components/Calculator/Calculator';
import Card from './components/UI/Card';
import CalcProvider from './store/CalcProvider';

function App() {
  return (
    <div className="App">
      <CalcProvider>
        <Card>
          <Calculator />
        </Card>
      </CalcProvider>
    </div>
  );
}

export default App;
