import { useMemo } from 'react';
import { Control, FieldPath, FieldValues } from 'react-hook-form';
import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormDescription
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { useFetchRoles } from '@/hooks/misc/useFetchRoles';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { EnumStatus } from '@/constants/mangle';

interface RoleSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  filter?: (role: TResource) => boolean;
  onSelectionChange?: (role: TResource | null) => void;
}

export function RoleSelect<T extends FieldValues>({
  control,
  name,
  label = 'Role',
  placeholder = 'Select a role',
  required = false,
  disabled = false,
  description,
  filter,
  onSelectionChange
}: RoleSelectProps<T>) {
  const { data: roles, isLoading, error } = useFetchRoles(disabled);

  const roleOptions = useMemo(() => {
    if (!roles) return [];

    let filteredRoles = roles;
    if (filter) {
      filteredRoles = roles.filter(filter);
    }

    return filteredRoles.map((role) => ({
      label: role.name,
      value: role.uid,
      role: role
    }));
  }, [roles, filter]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectionChange = (value: string, onChange: (value: any) => void) => {
    const selectedOption = roleOptions.find((opt) => opt.value === value);

    const formValue = {
      label: selectedOption?.label || '',
      value: value,
      disable: false
    };

    onChange(formValue);

    if (onSelectionChange) {
      onSelectionChange(selectedOption?.role || null);
    }
  };

  if (isLoading) {
    return (
      <div className="w-full">
        <FormLabel>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
        <Skeleton className="mt-2 h-10 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <FormLabel>
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </FormLabel>
        <div className="text-destructive mt-2 flex items-center gap-2 text-sm">
          <AlertCircle className="h-4 w-4" />
          Failed to load roles
        </div>
      </div>
    );
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field: { value, onChange, ...field } }) => (
        <FormItem className="w-full">
          <FormLabel>{label}</FormLabel>
          <FormControl className="w-full">
            <Select
              value={value?.value || ''}
              onValueChange={(selectedValue) => handleSelectionChange(selectedValue, onChange)}
              disabled={disabled || roleOptions.length === 0}
              {...field}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="w-full">
                {roleOptions.length === 0 ? (
                  <div>No roles available</div>
                ) : (
                  roleOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.role.status === EnumStatus.IN_ACTIVE}
                    >
                      {option.label}
                    </SelectItem>
                  ))
                )}
              </SelectContent>
            </Select>
          </FormControl>
          <FormDescription className="w-full">{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
