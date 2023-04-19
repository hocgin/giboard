import {getProjectItem, asGetProjectItem} from "./getProjectItem";

describe('查询项目信息', () => {
  test("测试", async () => {
    let project = await getProjectItem({
      login: 'hocgin',
      number: 16,
    }, "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");
    let result = asGetProjectItem(project);
    console.log(JSON.stringify(result));
  });
});
