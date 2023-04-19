import {getProjects} from "./getProjects";

describe('查询节点信息', () => {
  test("测试", async () => {
    let project = await getProjects({
      login: 'hocgin',
      first: 16,
    }, "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");
    console.log(JSON.stringify(project));
  });
});
