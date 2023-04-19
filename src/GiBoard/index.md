# GiBoard

This is an example component.

```jsx
import {GiBoard} from '@hocgin/giboard';

export default () => <div style={{display: 'flex', flexDirection: 'column', gap: 20}}>
  <GiBoard token={'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'} login="hocgin" projectId="16"
           style={{height: 400}}/>
  <GiBoard token={'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'} title={null} login="hocgin" projectId="16"
           style={{height: 400}}/>
</div>
```
