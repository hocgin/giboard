import React, {type FC, useMemo, useState} from 'react';
import {useRequest} from "ahooks";
import {Head} from "@hocgin/giboard/GiBoard/Head";
import {AsGetProjectItemType} from "@hocgin/giboard/types";
import {View} from "@hocgin/giboard/GiBoard/View";
import classnames from "classnames";
import {getBoard} from "@hocgin/giboard/service/board/getBoard";
import {filterBoardByRepository} from "@hocgin/giboard/GiBoard/filter";
import './styles/index.css';

export const GiBoard: FC<{
  login: string;
  projectId: number;
  token: string;
  api?: string;
  title?: any;
  subtitle?: any;
  readme?: any;
  repositories?: string[];
  className?: string;
  style?: any;
}> = ({login, style, className, title, subtitle, readme, repositories, projectId, token, api}) => {
  let [data, setData] = useState<AsGetProjectItemType>();
  let [active, setActive] = useState<number>(0);
  let [repository, setRepository] = useState<string>();
  useRequest(async () => {
    return getBoard({
      login,
      number: projectId,
    }, token, api);
  }, {
    onSuccess: setData,
    refreshDeps: [login, projectId, token, api],
  });
  let selectedRepository = useMemo(() => {
    if (!repositories?.length) {
      return undefined;
    }
    if (repository && repositories.includes(repository)) {
      return repository;
    }
    return repositories[0];
  }, [repository, repositories]);
  let {views, view} = useMemo(() => {
    let board = filterBoardByRepository(data, selectedRepository);
    console.log('board', board);
    let views = board?.views ?? [];
    let view = views?.[active] ?? [];
    return {
      views: views?.map(e => ({label: e?.name, value: e?.id})),
      view: view,
    };
  }, [data, active, selectedRepository]);
  return <div className={classnames(`GiBoard`, className)} style={style}>
    <Head title={title ?? data?.title}
          description={subtitle ?? data?.shortDescription}
          repositories={repositories}
          repository={selectedRepository}
          onRepositoryChange={setRepository}
          items={views} active={active} onChange={setActive}/>
    <View view={view as any}/>
    {/* 底部展示接口返回的 README 内容，也支持外部传入覆盖。 */}
    {(readme ?? data?.readme?.length) && <div className={'GiReadme'}>
      <div className={'GiReadmeTitle'}>README</div>
      <div className={'GiReadmeBody'}>{readme ?? data?.readme}</div>
    </div>}
  </div>;
};
