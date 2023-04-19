import React, {type FC, useMemo, useState} from 'react';
import {asGetProjectItem, getProjectItem} from "@hocgin/giboard/service/github/getProjectItem";
import {useRequest} from "ahooks";
import {Head} from "@hocgin/giboard/GiBoard/Head";
import {AsGetProjectItemType} from "@hocgin/giboard/types";
import {View} from "@hocgin/giboard/GiBoard/View";
import classnames from "classnames";
import './styles/index.css';

export const GiBoard: FC<{
  login: string;
  projectId: number;
  token: string;
  title?: any;
  className?: string;
  style?: any;
}> = ({login, style, className, title, projectId, token}) => {
  let [data, setData] = useState<AsGetProjectItemType>();
  let [active, setActive] = useState<number>(0);
  useRequest(async () => {
    return asGetProjectItem((await getProjectItem({
      login,
      number: projectId,
    }, token)) as any);
  }, {
    onSuccess: setData,
  });
  let {views, view} = useMemo(() => {
    let views = data?.views ?? [];
    let view = views?.[active] ?? [];
    console.log('view', active)
    return {
      views: views?.map(e => ({label: e?.name, value: e?.id})),
      view: view,
    };
  }, [data, active]);
  return <div className={classnames(`GiBoard`, className)} style={style}>
    <Head title={title ?? data?.title}
          items={views} active={active} onChange={setActive}/>
    <View view={view}/>
  </div>;
};

