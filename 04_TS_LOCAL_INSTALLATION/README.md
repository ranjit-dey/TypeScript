# TypeScript Local Installation

```bash
npm init -y
```

```bash
npm i typescript
```

```bash
npx tsc --init
```

Uncomment these lines -

```json
"rootDir": "./src",
"outDir": "./dist",
```

Create two folders : src and dist

```bash
mkdir src dist
```

create one file in `src`.
Output folder is `dist` folder

Run entire in src folder.

```bash
npx tsc
```

Run single file

```bash
npx tsc example.ts
```
