import { InputHTMLAttributes, forwardRef } from 'react';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';

const InputSearch = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  (props, ref) => {
    return (
      <div
        className={cn(
          'selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-8 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base transition-[color] outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-within:border-ring focus-within:ring-ring/50 focus-within:ring-[3px]',
          'flex items-center justify-start space-x-1'
        )}
      >
        <Search size={15} />
        <input
          ref={ref}
          {...props}
          value={props.value}
          className="placeholder:text-muted-foreground w-full border-none outline-none"
          type="search"
        />
      </div>
    );
  }
);

InputSearch.displayName = 'InputSearch';
export default InputSearch;
