export enum Mangle {
  ACCESS_TOKEN = '_fat',
  REFRESH_TOKEN = '_frt',
  AUTH_USER = '_fu'
}

export enum EnumUserType {
  NEW_USER = 'new_user',
  OLD_USER = 'old_user'
}

export enum EnumRoles {
  ADMIN = 'admin',
  SUB_ADMIN = 'subadmin',
  MANAGER = 'manager',
  IT = 'technician'
}

export enum EnumStatus {
  ACTIVE = 'ACTIVE',
  IN_ACTIVE = 'IN_ACTIVE',
  SUSPENDED = 'SUSPENDED'
}

export enum EnumResourceType {
  ROLE = 'role',
  SERVICE = 'service',
  CATEGORY = 'expense category',
  DEPT = 'department'
}

export enum EnumBudgetStatus {
  APPROVED = 'APPROVED',
  PENDING = 'PENDING',
  REJECTED = 'REJECTED'
}

export enum EnumBudgetAvailability {
  AVAILABLE = 'AVAILABLE',
  FROZEN = 'FROZEN',
  DEPLETED = 'DEPLETED',
  RESERVED = 'RESERVED'
}

export enum EnumInvoiceStatus {
  PAID = 'PAID',
  PARTIALLY_PAID = 'PARTIALLY_PAID',
  UNPAID = 'UNPAID',
  OVERPAID = 'OVERPAID'
}

export enum EnumInvoiceType {
  SERVICE = 'SERVICE',
  PRODUCT = 'PRODUCT',
  SUBSCRIPTION = 'SUBSCRIPTION',
  MAINTENANCE = 'MAINTENANCE',
  PATIENT = 'PATIENT',
  INSURANCE = 'INSURANCE',
  GOVERMENT_GRANT = 'GOVERMENT_GRANT',
  DONATION = 'DONATION',
  OTHERS = 'OTHERS'
}

export enum EnumPaymentMethod {
  CARD = 'CARD',
  BANK_TRANSFER = 'BANK_TRANSFER',
  CASH = 'CASH',
  CHEQUE = 'CHEQUE',
  MOBILE_MONEY = 'MOBILE_MONEY'
}

export enum EnumExpenseStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED'
}

export enum EnumGender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export enum EnumPatientType {
  IN_PATIENT = 'IN_PATIENT',
  OUT_PATIENT = 'OUT_PATIENT'
}
