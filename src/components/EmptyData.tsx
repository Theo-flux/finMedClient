import { Paragraph, SubHeader } from '@/features/components/typography';
import { DatabaseIcon } from 'lucide-react';

interface IEmptyEventProps {
  title: string;
  desc: string;
  children?: React.ReactNode;
}

const EmptyData = ({ children, title, desc }: IEmptyEventProps) => {
  return (
    <div className="mx-auto flex h-2/4 w-full max-w-full flex-col items-center justify-center space-y-2 py-14">
      <DatabaseIcon size={60} />

      <div className="w-full text-center text-sm">
        <SubHeader>{title}</SubHeader>
        <Paragraph>{desc}</Paragraph>
      </div>

      {children}
    </div>
  );
};

export default EmptyData;
