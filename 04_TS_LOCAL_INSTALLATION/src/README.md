# Installing Dependencies

`npm i some-library`

```typescript
// here you will see a squigle linle below the `AxiosResponse` , so to get rid of that you have to install the type of that library
import { AxiosResponse } from 'axios'
```

`npm i -D @types/some-library`

```typescript
import type { AxiosResponse } from 'axios'
import axios from 'axios'
```
