class BankAccount(object):
  balance = 0

  def __init__(self, name):
    self.name = name

  def __repr__(self):
    return "This account belongs to %s and the current balance is:  ${:.2f}.".format(self.balance) % (self.name)

  def show_balance(self):
    print "Current balance: ${:.2f}".format(self.balance)

  def deposit(self, amount):
    # self.amount = amount
    if amount <= 0:
      print "Deposit amount should be more than $0.00"
      return
    else:
      print "Deposited amount is:$ {:.2f}".format(amount)
      self.balance += amount
      # print "New available balance: $ d:2.f" %(self.balance)
      self.show_balance()

  def withdraw(self, amount):
    if amount > self.balance:
      print "The amount entered is greater than the availanle balance..."
      return
    else:
      print "widthdrawing ${:.2f}" % (amount)
      self.balance -= amount
      self.show_balance()


my_account = BankAccount("Jonnatan")

print my_account
my_account.show_balance()
my_account.deposit(200)
my_account.withdraw(1000)
print my_account
