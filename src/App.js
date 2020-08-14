import React from 'react';
import Total from './components/total/Total';
import History from './components/history/History';
import Operation from './components/operation/Operation';

class App extends React.Component {

  state = {
    transactions: [],
    description: '',
    amount: '',
  }

  addTransaction = add => {

    const transactions = [...this.state.transactions];

    const transaction = {
      id: `cmr${(+new Date()).toString(16)}`,
      description: this.state.description,
      amount: this.state.amount,
      add
    }

    transactions.push(transaction);

    this.setState({
      transactions,
      description: '',
      amount: '',
    })
  }

  addAmount = el => {
    this.setState({ amount: el.target.value });
  }

  addDescription = el => {
    this.setState({ description: el.target.value });
  }

  render() {
    return (
      <>
        <header>
          <h1>Кошелек</h1>
          <h2>Калькулятор расходов</h2>
        </header>

        <main>
          <div className="container">
            <Total />
            <History transactions={this.state.transactions} />
            <Operation
              addTransaction={this.addTransaction}
              addDescription={this.addDescription}
              addAmount={this.addAmount}
              description={this.state.description}
              amount={this.state.amount}
            />
          </div>
        </main>
      </>
    );
  }
};

export default App;
