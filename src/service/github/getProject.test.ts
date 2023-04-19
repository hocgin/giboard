import {getProject} from "./getProject";

describe('查询项目信息', () => {
  test("测试", async () => {
    let project = await getProject({
      login: 'hocgin',
      number: 16,
      type: 'user'
    }, "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");
    console.log(JSON.stringify(project));
  });
});
