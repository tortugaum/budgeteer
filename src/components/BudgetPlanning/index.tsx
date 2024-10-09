import React, { useEffect, useState } from 'react';
import {
  PlanningContainer,
  Form,
  Input,
  Button,
  BudgetList,
  BudgetItem,
} from './styles';

const BudgetPlanning = () => {
  const [budget, setBudget] = useState('');
  const [category, setCategory] = useState('');
  const [budgets, setBudgets] = useState<
    { category: string; budget: string }[]
  >([]);

  useEffect(() => {
    fetch('/api/budget')
      .then((res) => res.json())
      .then((data) =>
        setBudgets(
          data.map((item: { name: string; totalAmount: string }) => ({
            category: item.name,
            budget: item.totalAmount,
          }))
        )
      )
      .catch((error) => console.error('Error fetching budgets:', error));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    setBudgets([...budgets, { category, budget }]);

    createBudget();

    setBudget('');
    setCategory('');
  };

  const createBudget = async () => {
    const newBudget = {
      name: category,
      totalAmount: Number(budget),
    };

    const response = await fetch('/api/budget', {
      method: 'POST',
      body: JSON.stringify(newBudget),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    await response.json();

    setBudgets([...budgets, { category, budget }]);
  };

  return (
    <PlanningContainer>
      <h2>Budget Planning</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Category'
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />
        <Input
          type='number'
          placeholder='Budget Amount'
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          required
        />
        <Button type='submit'>Add Budget</Button>
      </Form>

      <BudgetList>
        {budgets.map((budgetItem, index) => (
          <BudgetItem key={index}>
            <span>{budgetItem.category}</span>
            <span>${budgetItem.budget}</span>
          </BudgetItem>
        ))}
      </BudgetList>
    </PlanningContainer>
  );
};

export default BudgetPlanning;
