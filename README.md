# lam-boilr-cli

cli-tool for generating source file and boilerplates for popular programming language.

## Install

```
$ npm i lam-boilr-cli
```

## Usage

```
$ npx lam-boilr-cli g <Type> <FileName> [withCSS]
```

# help

- `g`\
  generate command

- `Type`\
  possible values ( f , c , d )\
  f : single files \
  c : component \
  d : directory for vanilla website ( html , css , js )

- `FileName`\
  name of file with .extension

- `withCSS`\
  default : discard CSS \
  w-css : include CSS

## Examples

- generate a c++ file

```
$ npx lam-boilr-cli g f code.cpp
```

- generate a React component App.tsx and App.css

```
$ npx lam-boilr-cli g c App.tsx w-css
```

- generate website. html , script.js , style.css linked together

```
$ npx lam-boilr-cli g d website.html
```

## Supported Languages

- C++ (.cpp)
- C (.c)
- Java (.java)
- Python (.py)
- Go (.go)
- Rust (.rs)
- C# (.cs)
- JavaScript (.js , .jsx)
- TypeScript (.ts , .tsx)
- CSS (.css)
- HTML (.html)
