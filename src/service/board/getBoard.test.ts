import {buildBoardApiUrl, getBoard} from "./getBoard";

describe('自定义看板接口', () => {
  test('拼接查询参数', () => {
    const url = buildBoardApiUrl('/api/board', {
      login: 'hocgin',
      number: 16,
    });

    expect(url).toContain('/api/board?');
    expect(url).toContain('login=hocgin');
    expect(url).toContain('number=16');
    expect(url).toContain('projectId=16');
  });

  test('优先请求自定义接口', async () => {
    const fetchSpy = jest.spyOn(global, 'fetch' as any).mockResolvedValue({
      json: async () => ({
        url: 'https://example.com/board',
        title: 'Custom Board',
        views: [],
      }),
    } as any);

    await expect(getBoard({
      login: 'hocgin',
      number: 16,
    }, 'token', '/api/board')).resolves.toEqual({
      url: 'https://example.com/board',
      title: 'Custom Board',
      views: [],
    });

    expect(fetchSpy).toHaveBeenCalledTimes(1);
    expect(fetchSpy.mock.calls[0][0]).toContain('/api/board?');
    fetchSpy.mockRestore();
  });
});
