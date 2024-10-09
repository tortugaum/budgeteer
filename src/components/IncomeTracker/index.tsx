import React, { useEffect, useState } from 'react';
import {
  TrackerContainer,
  Form,
  Input,
  Button,
  IncomeList,
  IncomeItem,
} from './styles';

const IncomeTracker = () => {
  const [amount, setAmount] = useState('');
  const [source, setSource] = useState('');
  const [date, setDate] = useState('');
  const [incomes, setIncomes] = useState<
    { amount: string; source: string; date: string }[]
  >([]);

  useEffect(() => {
    fetch('/api/earnings')
      .then((res) => res.json())
      .then((data) => setIncomes(data))
      .catch((error) => console.error('Error fetching earnings:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add the new income to the list
    setIncomes([...incomes, { amount, source, date }]);
    createEarning();

    setAmount('');
    setSource('');
    setDate('');
  };

  async function createEarning() {
    const earning = {
      amount: Number(amount),
      source,
      date,
    };
    const res = await fetch('/api/earnings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(earning),
    });

    await res.json();
  }

  return (
    <TrackerContainer>
      <h2>Add Income</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type='number'
          placeholder='Amount'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <Input
          type='text'
          placeholder='Source'
          value={source}
          onChange={(e) => setSource(e.target.value)}
          required
        />
        <Input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Button type='submit'>Add Income</Button>
      </Form>

      <IncomeList>
        {incomes.map((income, index) => (
          <IncomeItem key={index}>
            <span>
              {income.source} - R${income.amount}
            </span>
            <span>{income.date}</span>
          </IncomeItem>
        ))}
      </IncomeList>
    </TrackerContainer>
  );
};

export default IncomeTracker;
