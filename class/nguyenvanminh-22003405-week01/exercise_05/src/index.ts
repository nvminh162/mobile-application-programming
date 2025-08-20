function author(name: string): string {
  return `Hello, ${name}!`;
}

console.log(
  author(
    "5. Create a class BankAccount with balance. Add methods deposit() and withdraw()."
  )
);

class BankAccount {
  balance: number;

  constructor(balance: number) {
    this.balance = balance >= 0 ? balance : 0;
  }

  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount: number): void {
    if (amount > 0) {
      if (amount <= this.balance) {
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
      } else {
        console.log("Insufficient funds. Cannot withdraw more than current balance.");
      }
    } else {
      console.log("Withdrawal amount must be positive.");
    }
  }

  getBalance(): number {
    return this.balance;
  }

  displayBalance(): void {
    console.log(`Current balance: $${this.balance}`);
  }
}

console.log("\n--- Bank Account Demo ---");
const account = new BankAccount(1000);
account.displayBalance();

account.deposit(500);
account.deposit(-100); // Invalid deposit

account.withdraw(200);
account.withdraw(2000); // Insufficient funds
account.withdraw(-50); // Invalid withdrawal

account.displayBalance();
