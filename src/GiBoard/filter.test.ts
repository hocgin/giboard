import {filterBoardByRepository} from "./filter";

describe('按仓库过滤看板数据', () => {
  test('未传仓库时不做过滤', () => {
    const data: any = {
      views: [
        {
          name: 'Main',
          items: [
            {id: '1', repository: {name: 'repo-a'}},
          ],
        },
      ],
    };

    expect(filterBoardByRepository(data)).toEqual(data);
  });

  test('按 repository.name 过滤 items', () => {
    const data: any = {
      views: [
        {
          name: 'Main',
          items: [
            {id: '1', repository: {name: 'repo-a'}},
            {id: '2', repository: {name: 'repo-b'}},
            {id: '3'},
          ],
        },
      ],
    };

    expect(filterBoardByRepository(data, 'repo-a')).toEqual({
      views: [
        {
          name: 'Main',
          items: [
            {id: '1', repository: {name: 'repo-a'}},
          ],
        },
      ],
    });
  });
});

