import { Paragraph } from '@/components/typographys';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ccyFormatter } from '@/utils/money';
import { BudgetProgressBar, EnumProgressType } from '../../BudgetProgressBar';

interface IBudgetDetailsProps {
  data: TSingleBudgetResponse;
}
const BudgetDetails = ({ data }: IBudgetDetailsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <Paragraph>{data.short_description}</Paragraph>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ccyFormatter(data.gross_amount)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total spent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {ccyFormatter(Number(data.gross_amount) - Number(data.amount_remaining))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ccyFormatter(data.amount_remaining)}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Consumption</CardTitle>
          </CardHeader>

          <CardContent>
            <BudgetProgressBar
              {...{
                grossAmount: Number(data.gross_amount),
                amountRemaining: Number(data.amount_remaining),
                type: EnumProgressType.LINEAR,
                ShowLabel: true
              }}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default BudgetDetails;
