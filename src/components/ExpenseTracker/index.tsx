import React, { useEffect, useState } from 'react';
import {
  TrackerContainer,
  Form,
  Input,
  Button,
  ExpenseList,
  ExpenseItem,
} from './styles';

const ExpenseTracker = () => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [date, setDate] = useState('');
  const [expenses, setExpenses] = useState<
    { amount: string; category: string; date: string }[]
  >([]);

  useEffect(() => {
    fetch('/api/expenses')
      .then((res) => res.json())
      .then((data) => setExpenses(data))
      .catch((error) => console.error('Error fetching expenses:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setExpenses([...expenses, { amount, category, date }]);

    createExpense();

    setAmount('');
    setCategory('');
    setDate('');
  };

  async function createExpense() {
    const expense = {
      amount: Number(amount),
      category,
      date,
      userId: 1,
    };
    const res = await fetch('/api/expenses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(expense),
    });

    await res.json();
  }

  return (
    <TrackerContainer>
      <h2>Add Expense</h2>
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
          placeholder='Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Input
          type='date'
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />
        <Button type='submit'>Add Expense</Button>
      </Form>

      <ExpenseList>
        {expenses.map((expense, index) => (
          <ExpenseItem key={index}>
            <span>
              {expense.category} - R${expense.amount}
            </span>
            <span>{expense.date}</span>
          </ExpenseItem>
        ))}
      </ExpenseList>
    </TrackerContainer>
  );
};

export default ExpenseTracker;
