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
import { useFetchDepts } from '@/hooks/misc/useFetchDepts';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { EnumStatus } from '@/constants/mangle';

interface DepartmentSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  description?: string;
  filter?: (department: TResource) => boolean;
  onSelectionChange?: (department: TResource | null) => void;
}

export function DepartmentSelect<T extends FieldValues>({
  control,
  name,
  label = 'Department',
  placeholder = 'Select a department',
  required = false,
  disabled = false,
  description,
  filter,
  onSelectionChange
}: DepartmentSelectProps<T>) {
  const { data: departments, isLoading, error } = useFetchDepts(disabled);

  const departmentOptions = useMemo(() => {
    if (!departments) return [];

    let filteredDepartments = departments;
    if (filter) {
      filteredDepartments = departments.filter(filter);
    }

    return filteredDepartments.map((dept) => ({
      label: dept.name,
      value: dept.uid,
      department: dept
    }));
  }, [departments, filter]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectionChange = (value: string, onChange: (value: any) => void) => {
    const selectedOption = departmentOptions.find((opt) => opt.value === value);

    const formValue = {
      label: selectedOption?.label || '',
      value: value,
      disable: false
    };

    onChange(formValue);

    if (onSelectionChange) {
      onSelectionChange(selectedOption?.department || null);
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
          Failed to load departments
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
              disabled={disabled || departmentOptions.length === 0}
              {...field}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent className="w-full">
                {departmentOptions.length === 0 ? (
                  <div>No departments available</div>
                ) : (
                  departmentOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      disabled={option.department.status === EnumStatus.IN_ACTIVE}
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
