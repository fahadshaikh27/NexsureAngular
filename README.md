# NexSure Angular Frontend

Angular shell and module structure for consuming the NexSure API.

## Module Ownership

- `features/auth` - login and OTP verification
- `features/customers` - customer details, nominees, and customer profile workflows
- `features/products` - insurance product/type setup
- `features/quotes` - quote generation and quote review
- `features/premiums` - premium management workflows
- `features/underwriting` - risk evaluation and underwriting decisions
- `features/policies` - policy creation, approval, renewal, and listing
- `features/claims` - claim creation, review, approval, and rejection
- `features/claim-investigations` - investigation workflows
- `features/claim-settlements` - settlement workflows
- `features/documents` - policy, claim, and KYC document upload/review/download
- `features/agents` - agent details and commission workflows
- `features/notifications` - notification workflows
- `features/reports` - report dashboards and exports
- `features/raise-ticket` - support ticket creation and tracking
- `features/payments` - order creation, payment verification, history, and details
- `features/premium-schedules` - premium installment schedules
- `features/reminders` - premium reminder send/history screens

## Shared Areas

- `core` contains API endpoint constants, HTTP helpers, token storage, and interceptors.
- `layout` contains the application shell used after login.
- `shared` contains reusable UI components and simple shared types.

## Start

```bash
npm install
npm start
```

Set the API base URL in `src/environments/environment.ts`.
