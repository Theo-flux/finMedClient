import { ChangeEvent, useMemo, useState } from 'react';
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
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList
} from '@/components/ui/command';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import { AlertCircle, Check, ChevronsUpDown } from 'lucide-react';
import _ from 'lodash';
import { useFetchUsers } from '@/hooks/users/useFetchUsers';
import { useStore } from '@/store';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { debounce } from '@/utils/debounce';
import InputSearch from './InputSearch';
import { observer } from 'mobx-react-lite';

interface StaffSelectProps<T extends FieldValues> {
  control: Control<T>;
  name: FieldPath<T>;
  label?: string;
  placeholder?: string;
  description?: string;
  filter?: (staff: TUserInfoItem) => boolean;
}

function StaffSelect<T extends FieldValues>({
  control,
  name,
  label = 'Staff',
  placeholder = 'Select a staff',
  description,
  filter
}: StaffSelectProps<T>) {
  const {
    UserStore: { userQuery, setQSearch }
  } = useStore();
  const [open, setOpen] = useState(false);
  const { data: staff, isLoading, status } = useFetchUsers(userQuery);

  const staffOptions = useMemo(() => {
    if (!staff || isLoading) return [];

    let filteredStaff = staff.items;
    if (filter) {
      filteredStaff = staff.items.filter(filter);
    }

    return filteredStaff.map((user) => ({
      label: _.capitalize(user.first_name + ' ' + user.last_name),
      value: user.uid,
      user: user
    }));
  }, [staff, isLoading, filter]);

  const handleSearchQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQSearch(event.target.value);
  };

  const debouncedHandleSearch = debounce(handleSearchQuery);

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => {
        return (
          <FormItem className="w-full">
            <FormLabel>{label}</FormLabel>

            <DropdownMenu open={open} onOpenChange={setOpen}>
              <DropdownMenuTrigger asChild>
                <FormControl className="w-full">
                  <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className={cn(
                      'w-full justify-between',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    {staffOptions.find((datum) => datum.value === field.value)?.label ??
                      placeholder}
                    <ChevronsUpDown className="opacity-50" />
                  </Button>
                </FormControl>
              </DropdownMenuTrigger>

              <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] min-w-60">
                <Command className="w-full">
                  <InputSearch
                    placeholder="Search by name, staff ID..."
                    onChange={debouncedHandleSearch}
                  />
                  <CommandList>
                    <CommandEmpty>
                      {staffOptions.length === 0 ? 'No user found.' : null}
                    </CommandEmpty>
                    <CommandGroup>
                      {isLoading && (
                        <div className="flex w-full flex-col space-y-2 p-2">
                          <Skeleton className="h-8 w-full" />
                          <Skeleton className="h-8 w-full" />
                          <Skeleton className="h-8 w-full" />
                        </div>
                      )}

                      {status === 'error' && (
                        <div className="text-destructive flex w-full items-center space-x-2 p-2">
                          <AlertCircle />
                          <span>Failed to load staff.</span>
                        </div>
                      )}

                      {staffOptions.map((datum) => (
                        <CommandItem
                          value={datum.label}
                          key={datum.value}
                          onSelect={() => {
                            field.onChange(datum.value);
                            setOpen(false);
                          }}
                        >
                          {datum.label}
                          <Check
                            className={cn(
                              'ml-auto',
                              datum.value === field.value ? 'opacity-100' : 'opacity-0'
                            )}
                          />
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuContent>
            </DropdownMenu>

            {description && <FormDescription className="w-full">{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        );
      }}
    />
  );
}

export default observer(StaffSelect);
