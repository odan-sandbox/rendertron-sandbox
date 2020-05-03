# rendertron-sandbox
## Setup

```bash
$ docker-compose build
$ docker-compose up
```

## Usage
### without rendertron
```bash
$ curl http://localhost:8080/
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app"></div>

  <script>
    document.querySelector("#app").textContent = "poyo"
  </script>
</body>
</html>
```

### with rendertron
```bash
$ curl -A "googlebot" http://localhost:8080/
<html lang="en"><head><base href="http://web">
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <div id="app">poyo</div>

  

</body></html>
```