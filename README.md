
# Budgeteer 💰

Budgeteer is a financial management application that helps users manage and monitor their expenses, earnings, and budgets efficiently. 📊

## Features ✨

- **Expense Tracking:** Monitor your spending habits by categorizing your expenses. 💸
- **Earnings Tracking:** Keep an eye on your income sources. 💼
- **Budget Planning:** Set budgets and plan your financial goals. 📝
- **Visual Reports:** View your financial information with easy-to-understand charts and graphs. 📈


## 📸 Screenshots

Here are some screenshots showcasing the Login, Expenses, and Graphs in the Budgeteer app:

### 🖼️ Login Page:
![Login Screenshot](https://github.com/user-attachments/assets/2d092eba-f6f7-4859-9740-cda2428eaf16)
)

### 💸 Expenses Page:
![Expenses Screenshot](https://github.com/user-attachments/assets/3422dffd-9eba-4dcd-b72d-5e6f11195fd6)


### 📊 Graphs Overview:
![Graphs Screenshot](https://github.com/user-attachments/assets/317f8e66-bafc-4efa-b251-9d101f2d3eb0)


These screenshots help visualize the user interface and key features of the Budgeteer app.

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
