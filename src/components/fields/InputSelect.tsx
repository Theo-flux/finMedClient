import { forwardRef, ReactNode } from 'react';
import {
  FormControl,
  FormDescription,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import { SelectProps } from '@radix-ui/react-select';

interface ISelectFormProps extends SelectProps {
  name: string;
  label: string;
  items: Array<Option>;
  placeholder?: string;
  description?: ReactNode;
}

const InputSelect = forwardRef<HTMLInputElement, ISelectFormProps>(
  ({ description, label, items, placeholder, ...props }, ref) => {
    return (
      <FormItem className="w-full">
        <FormLabel>{label}</FormLabel>
        <Select {...{ ref }} {...props}>
          <FormControl className="w-full">
            <SelectTrigger>
              <SelectValue placeholder={placeholder ?? ''} />
            </SelectTrigger>
          </FormControl>
          <SelectContent className="w-full">
            {items.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <FormDescription className="w-full">{description}</FormDescription>
        <FormMessage />
      </FormItem>
    );
  }
);

InputSelect.displayName = 'InputSelect';
export default InputSelect;
