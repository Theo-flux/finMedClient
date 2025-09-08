import { CircularProgress, EnumProgressType, LinearProgress } from '@/components/Progress';

interface InvoiceProgressBarProps {
  totalAmount: number;
  paidAmount: number;
  type?: EnumProgressType;
  showLabel?: boolean;
}

export function InvoiceProgressBar({
  totalAmount,
  paidAmount,
  showLabel = false,
  type = EnumProgressType.LINEAR
}: InvoiceProgressBarProps) {
  if (totalAmount === 0) {
    return <span className="text-sm text-gray-500">N/A</span>;
  }

  const progress = Math.round(Math.min((paidAmount / totalAmount) * 100, 100));
  const isFullyPaid = progress === 100;
  const isPartiallyPaid = progress > 50 && progress < 100;

  const getProgressColor = () => {
    if (isFullyPaid) return '[&>div]:bg-green-500';
    if (isPartiallyPaid) return '[&>div]:bg-yellow-500';
    return '[&>div]:bg-red-500';
  };

  return (
    <div className="flex w-full items-center gap-2">
      {type === EnumProgressType.CIRCULAR && (
        <CircularProgress value={progress} showLabel={showLabel} />
      )}
      {type === EnumProgressType.LINEAR && (
        <LinearProgress value={progress} color={getProgressColor()} showLabel={showLabel} />
      )}
    </div>
  );
}
