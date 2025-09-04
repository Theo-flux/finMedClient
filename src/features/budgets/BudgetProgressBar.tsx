import { Progress } from '@/components/ui/progress';
import { cn } from '@/lib/utils';

export enum EnumProgressType {
  CIRCULAR = 'circular',
  LINEAR = 'linear'
}

interface BudgetProgressBarProps {
  grossAmount: number;
  amountRemaining: number;
  type?: EnumProgressType;
  showLabel?: boolean;
}

interface CircularProgressProps {
  value: number;
  renderLabel?: (progress: number) => number | string;
  size?: number;
  strokeWidth?: number;
  circleStrokeWidth?: number;
  progressStrokeWidth?: number;
  shape?: 'square' | 'round';
  className?: string;
  progressClassName?: string;
  labelClassName?: string;
  showLabel?: boolean;
}

export const CircularProgress = ({
  value,
  renderLabel,
  className,
  progressClassName,
  labelClassName,
  showLabel,
  shape = 'round',
  size = 100,
  strokeWidth,
  circleStrokeWidth = 10,
  progressStrokeWidth = 10
}: CircularProgressProps) => {
  const radius = size / 2 - 10;
  const circumference = Math.ceil(3.14 * radius * 2);
  const percentage = Math.ceil(circumference * ((100 - value) / 100));
  const viewBox = `-${size * 0.125} -${size * 0.125} ${size * 1.25} ${size * 1.25}`;
  return (
    <div className="relative">
      <svg
        width={size}
        height={size}
        viewBox={viewBox}
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        style={{ transform: 'rotate(-90deg)' }}
        className="relative"
      >
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          fill="transparent"
          strokeWidth={strokeWidth ?? circleStrokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset="0"
          className={cn('stroke-primary/25', className)}
        />
        <circle
          r={radius}
          cx={size / 2}
          cy={size / 2}
          strokeWidth={strokeWidth ?? progressStrokeWidth}
          strokeLinecap={shape}
          strokeDashoffset={percentage}
          fill="transparent"
          strokeDasharray={circumference}
          className={cn('stroke-primary', progressClassName)}
        />
      </svg>
      {showLabel && (
        <div
          className={cn(
            'text-md absolute inset-0 flex items-center justify-center',
            labelClassName
          )}
        >
          {renderLabel ? renderLabel(value) : value}
        </div>
      )}
    </div>
  );
};

export const LinearProgress = ({
  value,
  color,
  showLabel
}: {
  value: number;
  color: string;
  showLabel: boolean;
}) => {
  return (
    <div className="flex w-full items-center gap-2">
      <Progress value={value} className={`w-full ${color}`} />
      {showLabel && <span>{value.toFixed()}%</span>}
    </div>
  );
};

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
