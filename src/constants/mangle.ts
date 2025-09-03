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
