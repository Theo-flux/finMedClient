import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { calculatedAmount, ccyFormatter } from '@/utils/money';

interface IBudgetDetailsProps {
  data: TInvoiceItem;
}

const InvoiceDetails = ({ data }: IBudgetDetailsProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h1 className="text-2xl font-bold">{data.title}</h1>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Amount</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ccyFormatter(data.gross_amount)}</div>
            <div className="flex items-center justify-start space-x-1.5">
              <small>
                tax: <span className="text-green-500">+{data.tax_percent}%</span>
              </small>
              <small>
                discount: <span className="text-red-500">-{data.discount_percent}%</span>
              </small>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total payed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {ccyFormatter(
                calculatedAmount(
                  Number(data.gross_amount),
                  Number(data.tax_percent),
                  Number(data.discount_percent)
                ) - Number(data.net_amount_due)
              )}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total remaining</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{ccyFormatter(data.net_amount_due)}</div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default InvoiceDetails;
