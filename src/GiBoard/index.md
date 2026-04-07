# GiBoard

This is an example component.

```jsx
import {GiBoard} from '@hocgin/giboard';

export default () => <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16" style={{height: 400}}/>
  <GiBoard repositories={['giboard', 'repo-b']} 
           api="https://public-api.hocgin.workers.dev/api/board" login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard token={'ghp_wfheNxmh0HhsxCZi3ApJf2...'} title={null} login="hocgin" projectId="16"
           style={{height: 400}}/>
</div>
```
