# @hocgin/giboard

> Use `github project graphql api` with Board

## Screen

![img.png](https://raw.githubusercontent.com/hocgin/giboard/main/_docs/img.png)

## Usage

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
