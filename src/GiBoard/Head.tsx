import React, {FC} from "react";
import './styles/Head.css';
import classnames from "classnames";

export const Head: FC<{
  items: { label: string, value: string; }[];
  active?: number;
  title?: string;
  onChange?: (value: any) => void;
}> = ({active = 0, title, items = [], onChange}) => {
  return <div className={'GiHead'}>
    {title && <div className={'GiTitle'}>{title}</div>}
    {items.length > 1 && <div className={'GiSegmented'}>
      {items.map((e: any, i) => <div className={classnames('SegmentedItem', {
        ['Segmented']: active === i
      })} onClick={() => onChange?.(i)}>{e?.label}</div>)}
    </div>}
  </div>;
};
