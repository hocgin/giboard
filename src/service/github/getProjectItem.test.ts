import {getProjectItem, asGetProjectItem} from "./getProjectItem";

describe('查询项目信息', () => {
  test("测试", async () => {
    let project = await getProjectItem({
      login: 'hocgin',
      number: 16,
    }, "...");
    let result = asGetProjectItem(project);
    console.log(JSON.stringify(result));
  });
});
