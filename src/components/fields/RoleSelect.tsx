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
  disabled?: boolean;
  description?: string;
  filter?: (role: TResource) => boolean;
  onSelectionChange?: (role: string | null) => void;
}

export function RoleSelect<T extends FieldValues>({
  control,
  name,
  label = 'Role',
  placeholder = 'Select a role',
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

  if (isLoading) {
    return (
      <div className="w-full">
        <FormLabel>{label}</FormLabel>
        <Skeleton className="mt-2 h-10 w-full" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full">
        <FormLabel>{label}</FormLabel>
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
      render={({ field }) => {
        return (
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>
            <FormControl className="w-full">
              <Select
                value={field.value || ''}
                onValueChange={(selectedValue) => {
                  field.onChange(selectedValue);
                  if (onSelectionChange) {
                    onSelectionChange(selectedValue || null);
                  }
                }}
                disabled={disabled || roleOptions.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {roleOptions.length === 0 ? (
                    <div className="text-muted-foreground px-2 py-1.5 text-sm">
                      No roles available
                    </div>
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
            {description && <FormDescription className="w-full">{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}
