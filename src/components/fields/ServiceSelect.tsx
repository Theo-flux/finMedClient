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
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle } from 'lucide-react';
import { EnumStatus } from '@/constants/mangle';
import { useFetchServices } from '@/hooks/misc/useFetchServices';
import _ from 'lodash';

interface ServiceSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  description?: string;
  filter?: (service: TResource) => boolean;
  onSelectionChange?: (service: string | null) => void;
}

export function ServiceSelect<T extends FieldValues>({
  control,
  name,
  label = 'Service',
  placeholder = 'Select a service',
  disabled = false,
  description,
  filter,
  onSelectionChange
}: ServiceSelectProps<T>) {
  const { data: services, isLoading, error } = useFetchServices(disabled);

  const serviceOptions = useMemo(() => {
    if (!services) return [];

    let filteredServices = services;
    if (filter) {
      filteredServices = services.filter(filter);
    }

    return filteredServices.map((ser) => ({
      label: _.capitalize(ser.name),
      value: ser.uid,
      service: ser
    }));
  }, [services, filter]);

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
          Failed to load services
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
                disabled={disabled || serviceOptions.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {serviceOptions.length === 0 ? (
                    <div className="text-muted-foreground px-2 py-1.5 text-sm">
                      No services available
                    </div>
                  ) : (
                    serviceOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.service.status === EnumStatus.IN_ACTIVE}
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
