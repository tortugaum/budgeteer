
# Budgeteer 💰

Budgeteer is a financial management application that helps users manage and monitor their expenses, earnings, and budgets efficiently. 📊

## Features ✨

- **Expense Tracking:** Monitor your spending habits by categorizing your expenses. 💸
- **Earnings Tracking:** Keep an eye on your income sources. 💼
- **Budget Planning:** Set budgets and plan your financial goals. 📝
- **Visual Reports:** View your financial information with easy-to-understand charts and graphs. 📈

## Screenshots 📸

_(Place screenshots here)_

---

## Getting Started 🚀

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd budgeteer
   ```

2. **Install dependencies:**

   We recommend using Yarn for package management:

   ```bash
   yarn install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory with the following variables:

   ```bash
   DATABASE_URL=your-database-url
   ```

4. **Run database migrations:**

   ```bash
   yarn prisma migrate dev
   ```

5. **Run the development server:**

   ```bash
   yarn dev
   ```

   The app will be available at `http://localhost:3000`. 🌐

---

## API Routes 🔌

- **POST /api/login:** Logs in the user with email and password.
- **GET /api/expenses:** Retrieves the list of expenses.
- **POST /api/expenses:** Adds a new expense.
- **GET /api/earnings:** Retrieves the list of earnings.
- **POST /api/earnings:** Adds a new earning.
- **GET /api/expenses/group:** Retrieves a grouped breakdown of expenses by category.

---

## Technologies Used 🛠️

- **Next.js** - React framework for server-side rendering and static site generation.
- **Prisma** - Database ORM for managing the database schema.
- **Styled Components** - For styling the application with theme support.
- **Recharts** - Library for visualizing financial data.

---

## License 📜

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
