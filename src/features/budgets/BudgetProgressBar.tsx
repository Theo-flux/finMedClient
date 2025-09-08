import { CircularProgress, EnumProgressType, LinearProgress } from '@/components/Progress';

interface BudgetProgressBarProps {
  grossAmount: number;
  amountRemaining: number;
  type?: EnumProgressType;
  showLabel?: boolean;
}

export function BudgetProgressBar({
  grossAmount,
  amountRemaining,
  showLabel = false,
  type = EnumProgressType.LINEAR
}: BudgetProgressBarProps) {
  if (grossAmount === 0) {
    return <span className="text-sm text-gray-500">N/A</span>;
  }

  const amountSpent = grossAmount - amountRemaining;
  const progress = Math.round(Math.min((amountSpent / grossAmount) * 100, 100));
  const isOverBudget = amountSpent > grossAmount;
  const isNearLimit = progress >= 80 && !isOverBudget;

  const getProgressColor = () => {
    if (isOverBudget) return '[&>div]:bg-red-500';
    if (isNearLimit) return '[&>div]:bg-yellow-500';
    return '[&>div]:bg-green-500';
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
