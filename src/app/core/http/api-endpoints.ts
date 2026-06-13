export const API_VERSION = 'v1';

export const API_ENDPOINTS = {
  auth: {
    login: `/api/${API_VERSION}/auth/login`,
    verifyOtp: `/api/${API_VERSION}/auth/verify-otp`,
    register: `/api/${API_VERSION}/auth/register`,
    forgotPassword: `/api/${API_VERSION}/auth/forgot-password`,
    resetPassword: `/api/${API_VERSION}/auth/reset-password`
  },
  customers: {
    base: `/api/${API_VERSION}/Customer`,
    detail: (customerId: number | string) => `/api/${API_VERSION}/Customer/${customerId}`,
    nominees: (customerId: number | string) => `/api/${API_VERSION}/Customer/${customerId}/nominees`
  },
  products: {
    base: `/api/${API_VERSION}/Product`,
    detail: (productId: number | string) => `/api/${API_VERSION}/Product/${productId}`
  },
  quotes: {
    base: `/api/${API_VERSION}/Quote`,
    detail: (quoteId: number | string) => `/api/${API_VERSION}/Quote/${quoteId}`
  },
  premiums: {
    base: `/api/${API_VERSION}/Premium`,
    detail: (premiumId: number | string) => `/api/${API_VERSION}/Premium/${premiumId}`
  },
  underwriting: {
    base: `/api/${API_VERSION}/Underwriting`,
    detail: (caseId: number | string) => `/api/${API_VERSION}/Underwriting/${caseId}`,
    approve: (caseId: number | string) => `/api/${API_VERSION}/Underwriting/${caseId}/approve`,
    reject: (caseId: number | string) => `/api/${API_VERSION}/Underwriting/${caseId}/reject`
  },
  claims: {
    base: `/api/${API_VERSION}/Claim`,
    create: `/api/${API_VERSION}/Claim/CreateClaims`,
    list: `/api/${API_VERSION}/Claim/GetClaims`,
    detail: (claimId: number | string) => `/api/${API_VERSION}/Claim/GetClaim/${claimId}`,
    customer: `/api/${API_VERSION}/Claim/CustomerClaim`,
    byPolicy: (policyId: number | string) => `/api/${API_VERSION}/Claim/PolicyClaim/${policyId}`,
    approve: (claimId: number | string) => `/api/${API_VERSION}/Claim/ApproveClaim/${claimId}`,
    reject: (claimId: number | string) => `/api/${API_VERSION}/Claim/RejectClaim/${claimId}`
  },
  claimInvestigations: {
    base: `/api/${API_VERSION}/ClaimInvestigation`,
    create: (claimId: number | string) => `/api/${API_VERSION}/ClaimInvestigation/Investigation/${claimId}`,
    list: `/api/${API_VERSION}/ClaimInvestigation/GetInvestigation`,
    detail: (claimId: number | string) => `/api/${API_VERSION}/ClaimInvestigation/GetInvestigation/${claimId}`,
    update: (claimId: number | string) => `/api/${API_VERSION}/ClaimInvestigation/UpdateInvestigation/${claimId}`,
    delete: (investigationId: number | string) =>
      `/api/${API_VERSION}/ClaimInvestigation/DeleteInvestigation/${investigationId}`
  },
  claimSettlements: {
    base: `/api/${API_VERSION}/ClaimSettlement`,
    create: (claimId: number | string) => `/api/${API_VERSION}/ClaimSettlement/CreateSettlement/${claimId}`,
    list: `/api/${API_VERSION}/ClaimSettlement/GetAllSettlement`,
    detail: (claimId: number | string) => `/api/${API_VERSION}/ClaimSettlement/GetSettlement/${claimId}`,
    complete: (claimId: number | string) => `/api/${API_VERSION}/ClaimSettlement/CompleteSettlement/${claimId}`
  },
  documents: {
    base: `/api/${API_VERSION}/Document`,
    uploadPolicyCustomer: `/api/${API_VERSION}/Document/PolicyDoc/UploadCustomer`,
    uploadPolicyAgent: `/api/${API_VERSION}/Document/PolicyDoc/UploadAgent`,
    uploadClaimCustomer: `/api/${API_VERSION}/Document/ClaimDoc/UploadCustomer`,
    uploadClaimAgent: `/api/${API_VERSION}/Document/ClaimDoc/UploadAgent`,
    policyDocs: (policyId: number | string) => `/api/${API_VERSION}/Document/PolicyDoc/${policyId}`,
    claimDocs: (claimId: number | string) => `/api/${API_VERSION}/Document/ClaimDoc/${claimId}`,
    download: (id: number | string) => `/api/${API_VERSION}/Document/DownloadDoc/${id}`,
    approve: (id: number | string) => `/api/${API_VERSION}/Document/ApproveDoc/${id}`,
    reject: (id: number | string) => `/api/${API_VERSION}/Document/RejectDoc/${id}`,
    uploadKycCustomer: `/api/${API_VERSION}/Document/KycDoc/UploadCustomer`,
    uploadKycAgent: (customerId: number | string) => `/api/${API_VERSION}/Document/KycDoc/UploadAgent/${customerId}`,
    kycByCustomer: (customerId: number | string) => `/api/${API_VERSION}/Document/KycDoc/Customer/${customerId}`,
    kycList: `/api/${API_VERSION}/Document/GetKycDoc`,
    kycAgent: `/api/${API_VERSION}/Document/KycDoc/Agent`
  },
  agents: {
    base: `/api/${API_VERSION}/Agent`,
    detail: (agentId: number | string) => `/api/${API_VERSION}/Agent/${agentId}`,
    commissions: (agentId: number | string) => `/api/${API_VERSION}/Agent/${agentId}/commissions`
  },
  notifications: {
    base: `/api/${API_VERSION}/Notification`,
    detail: (notificationId: number | string) => `/api/${API_VERSION}/Notification/${notificationId}`
  },
  reports: {
    base: `/api/${API_VERSION}/Report`,
    detail: (reportId: number | string) => `/api/${API_VERSION}/Report/${reportId}`,
    export: (reportId: number | string) => `/api/${API_VERSION}/Report/${reportId}/export`
  },
  tickets: {
    base: `/api/${API_VERSION}/Ticket`,
    detail: (ticketId: number | string) => `/api/${API_VERSION}/Ticket/${ticketId}`
  },
  payments: {
    base: `/api/${API_VERSION}/Payment`,
    createOrder: `/api/${API_VERSION}/Payment/create-order`,
    verify: `/api/${API_VERSION}/Payment/verify`,
    history: (customerId: number | string) => `/api/${API_VERSION}/Payment/history/${customerId}`,
    detail: (paymentId: number | string) => `/api/${API_VERSION}/Payment/${paymentId}`
  },
  policies: {
    base: `/api/${API_VERSION}/Policy`,
    create: `/api/${API_VERSION}/Policy/CreatePolicy`,
    createByAgent: `/api/${API_VERSION}/Policy/Agent/CreatePolicy`,
    detail: (policyId: number | string) => `/api/${API_VERSION}/Policy/GetPolicy/${policyId}`,
    customer: `/api/${API_VERSION}/Policy/CustomerPolicy`,
    agent: `/api/${API_VERSION}/Policy/AgentPolicy`,
    approve: (policyId: number | string) => `/api/${API_VERSION}/Policy/ApprovePolicy/${policyId}`,
    reject: (policyId: number | string) => `/api/${API_VERSION}/Policy/RejectPolicy/${policyId}`,
    renew: (policyId: number | string) => `/api/${API_VERSION}/Policy/RenewPolicy/${policyId}`,
    list: `/api/${API_VERSION}/Policy/GetPolicies`
  },
  premiumSchedules: {
    base: `/api/${API_VERSION}/PremiumSchedule`,
    generate: `/api/${API_VERSION}/PremiumSchedule/generate`,
    byPolicy: (policyId: number | string) => `/api/${API_VERSION}/PremiumSchedule/policy/${policyId}`,
    detail: (scheduleId: number | string) => `/api/${API_VERSION}/PremiumSchedule/${scheduleId}`,
    markPaid: (scheduleId: number | string) => `/api/${API_VERSION}/PremiumSchedule/${scheduleId}/paid`,
    update: (scheduleId: number | string) => `/api/${API_VERSION}/PremiumSchedule/${scheduleId}`,
    installmentsByPolicy: (policyId: number | string) => `/api/${API_VERSION}/policies/${policyId}/installments`,
    installment: (scheduleId: number | string) => `/api/${API_VERSION}/installments/${scheduleId}`
  },
  reminders: {
    base: `/api/${API_VERSION}/premium-reminders`,
    send: `/api/${API_VERSION}/premium-reminders/send`
  }
} as const;
