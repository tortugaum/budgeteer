# Budgeteer

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <https://github.com/tortugaum/budgeteer.git>
   cd budgeteer
   ```

2. **Install the dependencies:**

   ```bash
   yarn install
   ```

3. **Set up your environment variables.** Create a `.env` file in the root directory and add the following:

   ```
   DATABASE_URL="sqlite://./dev.db"
   JWT_SECRET="your-secret-key" # Change this to a strong secret
   ```

4. **Run the database migrations:**

   ```bash
   npx prisma migrate dev --name init
   ```

5. **Start the development server:**

   ```bash
   yarn dev
   ```

6. **Open your browser and go to** [http://localhost:3000](http://localhost:3000).

## Usage

1. **Login:** Use the credentials to log in to the application.
   - ![Login Screen](![image](https://github.com/user-attachments/assets/d238a37e-3f56-4182-b23e-5be35630de16)
)

2. **Dashboard:** Once logged in, you will see an overview of your financial data.
   - ![Dashboard](![image](https://github.com/user-attachments/assets/aa76a1de-cc84-4924-b70b-f730491186f5)
)

3. **Add Expenses:** You can add expenses through the provided form.
   - ![Add Expense Screen](![image](https://github.com/user-attachments/assets/b9563264-bbe6-4aa1-b6c7-c1954916cf83)
)

4. **Spending Breakdown:** Visualize your spending habits through pie charts.
   - ![Spending Breakdown](![image](https://github.com/user-attachments/assets/4e52739c-47bb-4b5a-b4e3-650ac456307b)
)

## API Endpoints

### User Authentication

- **POST** `/api/auth/login`
  - Request body: `{ "email": "user@example.com", "password": "your-password" }`
  - Response: `{ "token": "your-auth-token", "user": { "id": "user-id", "email": "user@example.com" } }`

### Expenses

- **GET** `/api/expenses` - Fetch all expenses.
- **POST** `/api/expenses` - Create a new expense.
- **PUT** `/api/expenses` - Update an existing expense.
- **DELETE** `/api/expenses` - Delete an expense.

### Earnings

- **GET** `/api/earnings` - Fetch all earnings.
- **POST** `/api/earnings` - Create a new earning.
- **PUT** `/api/earnings` - Update an existing earning.
- **DELETE** `/api/earnings` - Delete an earning.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the Next.js and Prisma teams for their excellent documentation and tools.
