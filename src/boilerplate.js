export const boilerPlate = {
    "C": "#include<stdio.h>\n\nint main()\n{\n\n}",

    "CPP": "#include<iostream>\nusing namespace std;\n\nint main()\n{\n\n}",

    "CS": "using System;\nclass HelloWorld\n{\n\tstatic void Main()\n\t{\n\n\t}\n}",

    "PYTHON": `if __name__ == "__main__":`,

    JAVA: (name) => {
        return `public class ${name}\n{\n\tpublic static void main(String[] args) {\n\n\t}\n}`
    },

    "HTML": `<html lang="en">\n<head>\n\t<meta charset="UTF - 8">\n\t<meta http-equiv="X - UA - Compatible" content="IE = edge">\n\t<meta name="viewport" content="width = device - width, initial- scale=1.0">\n\t<title>Document</title>\n</head>\n\n<body>\n\n</body>\n\n</html>`,

    "WEBSTACK": `<html lang="en">\n\n<head>\n\t<meta charset="UTF - 8">\n\t<meta http-equiv="X - UA - Compatible" content="IE = edge">\n\t<meta name="viewport" content="width = device - width, initial- scale=1.0">\n\t<script src="script.js" defer></script>\n\t<link rel="stylesheet" href="style.css">\n\t<title>Document</title>\n\n</head>\n\n<body>\n\n</body>\n\n</html>`,

    "CSS": "",

    "JS": "",

    "TS": "",

    REACT_COMPONENT_CSS: (name) => {
        return `import React from 'react'\nimport './${name}.css'\n\nfunction ${name}() {\n\treturn (\n\t\t<div>\n\n\t\t</div>\n\t)\n}\n\nexport default ${name}`
    },

    REACT_COMPONENT: (name) => {
        return `import React from 'react'\n\nfunction ${name}() {\n\treturn (\n\t\t<div>\n\n\t\t</div>\n\t)\n}\n\nexport default ${name}`
    },

    "GO": `package main\nimport "fmt"\n\nfunc main() {\n\n}`,

    "RUST": `fn main() {\n\n}`
}


export const extension = [
    ".cpp",
    ".c",
    ".cs",
    ".html",
    ".jsx",
    ".tsx",
    ".js",
    ".ts",
    ".css",
    ".go",
    ".py",
    ".java",
    ".rs"
]

export const languageCode = {
    ".cpp": "CPP",
    ".c": "C",
    ".py": "PYTHON",
    ".cs": "CS",
    ".html": "HTML",
    ".css": "CSS",
    ".js": "JS",
    ".ts": "TS",
    ".go": "GO",
    ".rs": "RUST"
}

