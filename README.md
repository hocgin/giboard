# @hocgin/giboard

> Use `github project graphql api` with Board  
> [在线浏览 / Demo](https://logspot.hocgin.top/addone-rss-reader?active=feedback)

[![npm](https://img.shields.io/npm/v/@hocgin/giboard?style=flat-square)](https://www.npmjs.com/package/@hocgin/giboard)

## Screen

![img.png](https://raw.githubusercontent.com/hocgin/giboard/main/_docs/img.png)

## Usage

```shell
pnpm install @hocgin/giboard
```

> 需要创建一个只有`read:project`权限的Token。[创建 Token](https://github.com/settings/tokens/new)  
> ⚠️ 注意: 请不要将 Token 提交到公共仓库，否则 GitHub 会自动进行 Token 回收。

```tsx
<GiBoard token={'ghp_wfheNxmh0HhsxCZi...'} login="hocgin" projectId="16"
         style={{height: 400}}/>
```

如果你已经有自己的看板接口，可以直接传入 `api`，组件会优先请求该接口，并要求它返回与当前方案一致的看板数据结构。

```tsx
<GiBoard api="/api/board" token={'ghp_wfheNxmh0HhsxCZi...'} login="hocgin" projectId="16"
         style={{height: 400}}/>
```

如果你想手动覆盖标题下方的描述，可以传入 `subtitle`，它会优先于接口返回的 `shortDescription`。

```tsx
<GiBoard subtitle="自定义描述" token={'ghp_wfheNxmh0HhsxCZi...'} login="hocgin" projectId="16"
         style={{height: 400}}/>
```

如果你想把底部的说明单独覆盖掉，可以传入 `readme`，它会优先于接口返回的 `readme` 字段。

```tsx
<GiBoard readme="自定义底部说明" token={'ghp_wfheNxmh0HhsxCZi...'} login="hocgin" projectId="16"
         style={{height: 400}}/>
```

如果项目里有多个仓库，可以传入 `repositories`，右上角会显示过滤选择器；如果只传一个仓库名，组件会自动过滤但不显示选择器。

```tsx
<GiBoard repositories={['repo-a', 'repo-b']} token={'ghp_wfheNxmh0HhsxCZi...'} login="hocgin" projectId="16"
         style={{height: 400}}/>
```


| 字段          | 类型     | 描述                       |
|-------------|--------|--------------------------|
| Title       | String | 标题                       |
| Status      | Enum   | 枚举，Todo/In Progress/Done |
| Priority    | Number | 可选，优先级, Desc             |
| Description | String | 可选，描述                    |
| Complete    | Number | 可选，完成度                   |
| Assignees   | User   | 可选，用户信息                  |

## Development

```bash
# install dependencies
$ pnpm install

# develop library by docs demo
$ pnpm start

# build library source code
$ pnpm run build
```

## LICENSE

MIT
