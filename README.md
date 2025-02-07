## Reminders

We want to schedule lots of emails before users hit their subscription time, thus giving them more time to think about whether they want to cancel their subscription or keep it going. For that, we’ll use Upstash

## Workflow Algorithm
### 1. Triggering the Workflow
The workflow begins whenever a user creates or submits a new subscription. We pass the created subscription ID to our workflow.
### 2. Retrieving Subscription Details
The process extracts the **subscription ID** from the context. It then searches for the corresponding subscription in the database.
### 3. Validation Checks
If the subscription **does not exist**, an error is logged, and the process terminates. If the subscription exists, its **status is checked**:
- If **inactive**, the status is logged, and the process exits.
- If **active**, the renewal date is verified.
### 4. Renewal Date Evaluation
- If the renewal date **has passed**, it logs this information and exits. 
- If the renewal date **is in the future**, the reminder loop begins.
### 5. Reminder Scheduling
For each predefined reminder: The **reminder date** is calculated. If the reminder date is in the future, the system waits until that time.
Once the reminder date arrives (or if it has already passed), the **reminder email is sent**.
### 6. Completion
The process repeats for all reminders in the list. 
After processing all reminders, the workflow concludes.