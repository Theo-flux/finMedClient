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
import { useFetchExpCat } from '@/hooks/misc/useFetchExpCat';
import _ from 'lodash';

interface CategorySelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  description?: string;
  filter?: (category: TResource) => boolean;
  onSelectionChange?: (category: string | null) => void;
}

export function CategorySelect<T extends FieldValues>({
  control,
  name,
  label = 'Department',
  placeholder = 'Select a category',
  disabled = false,
  description,
  filter,
  onSelectionChange
}: CategorySelectProps<T>) {
  const { data: categories, isLoading, error } = useFetchExpCat(disabled);

  const categoryOptions = useMemo(() => {
    if (!categories) return [];

    let filteredCategories = categories;
    if (filter) {
      filteredCategories = categories.filter(filter);
    }

    return filteredCategories.map((cat) => ({
      label: _.capitalize(cat.name),
      value: cat.uid,
      category: cat
    }));
  }, [categories, filter]);

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
          Failed to load categories
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
                disabled={disabled || categoryOptions.length === 0}
              >
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent className="w-full">
                  {categoryOptions.length === 0 ? (
                    <div className="text-muted-foreground px-2 py-1.5 text-sm">
                      No categories available
                    </div>
                  ) : (
                    categoryOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        disabled={option.category.status === EnumStatus.IN_ACTIVE}
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
