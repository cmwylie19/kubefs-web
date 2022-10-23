# Kubefs-Web

- [build](#build)

## Build

```bash
docker build -t cmwylie19/kubefs-web .
# or
docker build -t cmwylie19/kubefs-web . -f Dockerfile-first
docker push cmwylie19/kubefs-web
```
docker run -d -p 3000:3000 cmwylie19/kubefs-web

