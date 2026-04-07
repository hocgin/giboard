import React, {FC} from "react";
import './styles/Head.css';
import classnames from "classnames";

export const Head: FC<{
  items: { label: string, value: string; }[];
  active?: number;
  title?: string;
  description?: string;
  repositories?: string[];
  repository?: string;
  onChange?: (value: any) => void;
  onRepositoryChange?: (value: string) => void;
}> = ({active = 0, title, description, repositories = [], repository, items = [], onChange, onRepositoryChange}) => {
  return <div className={'GiHead'}>
    <div className={'GiHeadTitleWrap'}>
      {title && <div className={'GiTitle'}>{title}</div>}
      {/* 标题下方展示接口返回的简要描述。 */}
      {description && <div className={'GiDescription'}>{description}</div>}
    </div>
    <div className={'GiHeadActions'}>
      {repositories.length > 1 && <div className={'GiRepositoryFilter'}>
        <select
          className={'RepositorySelector'}
          value={repository ?? repositories[0]}
          onChange={(e) => onRepositoryChange?.(e.target.value)}>
          {repositories.map((e) => <option key={e} value={e}>{e}</option>)}
        </select>
      </div>}
      {items.length > 1 && <div className={'GiSegmented'}>
        {items.map((e: any, i) => <div key={e?.value ?? i} className={classnames('SegmentedItem', {
          ['Segmented']: active === i
        })} onClick={() => onChange?.(i)}>{e?.label}</div>)}
      </div>}
    </div>
  </div>;
};
