import React, {FC, useMemo} from "react";
import {ViewItemType, ViewType} from "@hocgin/giboard/types";
import {LangKit} from "@hocgin/hkit";
import classnames from 'classnames';
import './styles/View.css';
import {useBoolean} from "ahooks";

export const List: FC<{
  title: React.ReactElement | string;
  description?: string;
  items?: ViewItemType[];
}> = ({title, description, items = []}) => {
  return <div className={'List'}>
    <div className={'ListHead'}>
      <div>{title}</div>
      {description && <div className={'Description'}>{description}</div>}
    </div>
    <div className={'Body'}>
      {items.map((e: ViewItemType) => <Item item={e}/>)}
    </div>
  </div>;
};

export const Item: FC<{
  item: ViewItemType
}> = ({item}) => {
  let [open, {toggle: toggleOpen, setFalse}] = useBoolean(false);
  let assigness = item?.Assignees ?? [];
  let description = item?.Description ?? item?.Title;
  let title = item?.Title ?? description;
  let hasContent = !!description;
  return <div className={classnames('Item', 'Progress')} style={{
    "--percentage": percentage(item?.Complete)
  } as any}>
    <div className={'ItemHead'} onClick={toggleOpen} style={{
      cursor: hasContent ? 'pointer' : 'not-allowed'
    }}>
      <ProgressBadge hasContent={hasContent}/> <span className={'ItemHeadTitle'}>{title}</span>
      {assigness.length > 0 && <div className={'Avatars'}>
        {assigness.map(e => <Avatar src={e?.avatarUrl} login={e?.login}/>)}
      </div>}
    </div>
    {(open && hasContent) && <div className={'ItemDescription'}>{description}</div>}
  </div>;
};

export const View: FC<{
  view: ViewType;
}> = ({view}) => {
  let {InProgress = [], Todo = [], Done = []} = useMemo(() => {
    let group = LangKit.toGroup((view?.items ?? []).sort((a, b) => LangKit.sortDesc(a?.Priority ?? 0, b?.Priority ?? 0)), e => e?.Status);
    console.log('group', group, view)
    return ({
      InProgress: group.get("In Progress") ?? [],
      Todo: group.get('Todo') ?? [],
      Done: group.get('Done') ?? [],
    })
  }, [view?.items]);
  return <div className={`View`}>
    <List title={<Badge className={'Todo'} count={Todo.length}>Todo</Badge>} items={Todo}
          description={'This item hasn\'t been started'}/>
    <List title={<Badge className={'InProgress'} count={InProgress.length}>In Progress</Badge>} items={InProgress}
          description={'This is actively being worked on'}/>
    <List title={<Badge className={'Done'} count={Done.length}>Done</Badge>} items={Done}
          description={'This has been completed'}/>
  </div>;
};

export const Badge: FC<{
  className?: string,
  children?: any;
  count?: number;
}> = ({className, count = 0, children}) => {
  return <div className={'Badge'}>
    <div className={classnames(`BadgeIcon`, className)}/>
    {children && <span className={'Title'}>{children}</span>}
    {(count > 0) && <span className={'Count'}>{count}</span>}
  </div>
};

export const ProgressBadge: FC<{
  hasContent: boolean
}> = ({hasContent}) => {
  return <span className={classnames({
    ['HasContent']: hasContent,
  })}>
    <svg focusable="false" aria-label="Draft issue" role="img"
         className="StyledOcticon-sc-1lhyyr-0 lnFpuJ" viewBox="0 0 16 16" width="16" height="16"
         fill="currentColor"
         style={{
           display: 'inline-block',
           userSelect: 'none',
           verticalAlign: 'text-bottom',
           overflow: 'visible',
           color: 'rgb(87, 96, 106)'
         }}>
      <path
        d="M14.307 11.655a.75.75 0 0 1 .165 1.048 8.05 8.05 0 0 1-1.769 1.77.75.75 0 0 1-.883-1.214 6.552 6.552 0 0 0 1.44-1.439.75.75 0 0 1 1.047-.165Zm-2.652-9.962a.75.75 0 0 1 1.048-.165 8.05 8.05 0 0 1 1.77 1.769.75.75 0 0 1-1.214.883 6.552 6.552 0 0 0-1.439-1.44.75.75 0 0 1-.165-1.047ZM6.749.097a8.074 8.074 0 0 1 2.502 0 .75.75 0 1 1-.233 1.482 6.558 6.558 0 0 0-2.036 0A.751.751 0 0 1 6.749.097ZM.955 6.125a.75.75 0 0 1 .624.857 6.558 6.558 0 0 0 0 2.036.75.75 0 1 1-1.482.233 8.074 8.074 0 0 1 0-2.502.75.75 0 0 1 .858-.624Zm14.09 0a.75.75 0 0 1 .858.624c.13.829.13 1.673 0 2.502a.75.75 0 1 1-1.482-.233 6.558 6.558 0 0 0 0-2.036.75.75 0 0 1 .624-.857Zm-8.92 8.92a.75.75 0 0 1 .857-.624 6.558 6.558 0 0 0 2.036 0 .75.75 0 1 1 .233 1.482c-.829.13-1.673.13-2.502 0a.75.75 0 0 1-.624-.858Zm-4.432-3.39a.75.75 0 0 1 1.048.165 6.552 6.552 0 0 0 1.439 1.44.751.751 0 0 1-.883 1.212 8.05 8.05 0 0 1-1.77-1.769.75.75 0 0 1 .166-1.048Zm2.652-9.962A.75.75 0 0 1 4.18 2.74a6.556 6.556 0 0 0-1.44 1.44.751.751 0 0 1-1.212-.883 8.05 8.05 0 0 1 1.769-1.77.75.75 0 0 1 1.048.166Z">
      </path>
    </svg>
  </span>
};

export const Avatar: FC<{
  login?: string
  src?: string
}> = ({src, login}) => {
  return <a className={'Avatar'} href={`https://github.com/${login}`}>
    <img src={src} alt={login}/>
  </a>
};

function percentage(number: number = 0) {
  let val = Math.min(Math.max(number, 0), 100);
  return val.toFixed(2) + "%"
}
