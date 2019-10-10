import * as React from 'react';
import './App.css';
import Card from './components/Card';
import Container from './components/Container';

class App extends React.Component {
  public render() {
    return (
      <Container>
        <Card>
          Lala
        </Card>
      </Container>
      
    );
  }
}

export default App;
