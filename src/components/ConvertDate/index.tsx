import { parseISO, format } from 'date-fns';
import { ja } from 'date-fns/locale/ja';

type ConvertDate = {
  dateISO: string;
};

export default function ConvertDate({ dateISO }: ConvertDate) {
  return (
    <time dateTime={dateISO}>
      {format(parseISO(dateISO), 'yyyy年MM月dd日', { locale: ja })}
    </time>
  );
}
