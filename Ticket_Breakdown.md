# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here
1. We already have an agents table, but it doesn't have the internal IDs of agents used by facilities.
        So alter schema of agents table -> Add column custum agent ID.

        Estimate: schema change + deploy in staging DB + verify changes + testing + move to prod + verify changes
            1 - 2 days

2. Make code changes in the backend + frontend to let Facilities add custum agent ID.

         Estimate: code backend+ frontend -> deploy staging -> verify -> testing-> deploy prod -> verify
           2 - 3 days

2. Let send communication to all agents to Add custum agent id in the application.

        Estimate: Send communication to all Facilities clients
            Push notification to all Facilities 
            1 day
                        or
            Script to send email or sms communication 
            2 days

3. Take advantage of the custum agent ID in the agents table to generate reports to populate the custum agent ID.

        Estimate: Modify code in generate reports to include custum agent id
        code backend+ frontend -> deploy staging -> verify -> testing-> deploy prod -> verify
               1 - 2 days


Note: We can even combine 1 and 2.


