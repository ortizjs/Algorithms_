"""In this project, we'll build a basic calendar that the user will be able to interact with from the command line. The user should be able to choose to:

View the calendar
Add an event to the calendar
Update an existing event
Delete an existing event
The program should behave in the following way:

Print a welcome message to the user
Prompt the user to view, add, update, or delete an event on the calendar
Depending on the user's input: view, add, update, or delete an event on the calendar
The program should never terminate unless the user decides to exit
"""

from time import sleep, strftime

name = "Jonnatan"

calendar = {}

def welcome():
  print "Welcome, %s!" %(name)
  print "The calendar is opening..."
  sleep(1)
  print "The current date is: " + strftime("%A %B %d %Y")
  print "The current time is: " + strftime("%H:%M:%S")
  print "What would you like to do next? "

def start_calendar():
  welcome()
  start = True
  while start:
    user_choice = raw_input("A to Add, U to Update, V to View, D to Delete, X to Exit: ")
    user_choice = user_choice.upper()
    if user_choice == "V":
      if len(calendar.keys()) == 0:
        print "The calendar is currently empty..."
      else:
        print calendar
    elif user_choice == "U":
      date = raw_input("What date? ")
      update = raw_input("Enter the update: ")
      print "The calendar is updating..."
      calendar[date] = update
      sleep(1)
      print "The calendar has updated successfully!"
      print calendar
    elif user_choice == "A":
      event = raw_input("Enter Event: ")
      date = raw_input("Enter date(MM/DD/YYYY): ")
      if len(date) > 10 or (int(date[6:] < int(strftime("%Y")))):
        print "The date provided is not in the accepted format!"
        try_again =  raw_input("Would you like to try again? Y for Yes, N for No: ")
        try_again = try_again.upper()
        if try_again == "Y":
          continue
        else:
          start = False
      else:
        calendar[date] = event
        print "The event was successfully added to the calendar! "
    elif user_choice == "D":
      if len(calendar.keys()) == 0:
        print "The calendar is empty and there is nothing to delete! "
      else:
        event = raw_input("What event? ")
        
        for date in calendar.keys():
          if event == calendar[date]:
            del calendar[date]
            print "The event was successfully deleted!"

            print calendar
          else:
            print "The event provided is incorrect"
    elif user_choice == "X":
      start = False
    else:
      print "Invalid command was entered! "

start_calendar()


      
