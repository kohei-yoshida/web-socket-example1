# web-socket-demo

## Environment

- macos: monterey 12.6
- node.js: 18.10.0
- docker desktop: 4.12.0
- docker engine: 20.10.17
- docker compose: 2.10.2

## Directory

```txt
./a-frame-demo1
├── node_modules
├── .dockerignore
├── .gitignore
├── docker-compose.yaml
├── package-lock.json
├── package.json
├── README.md
└── src
    ├── index.html  # A-Frame描画用のHTML
    └── index.js      # nodeのmainスクリプト
```

## Usage with docker

start: docker container

```bash
% docker-compose up -d
```

end: docker container

```bash
% docker-compose down
```

## Usage without docker

start: When specifying from the root directory

```bash
% node ./src/index.js 
# > Node.js is listening to PORT:3000
```

end: (control + c)

```bash
# > Node.js is listening to PORT:3000
^C
```

## View in browser, After Start

```blowser
http://localhost:3000
```
