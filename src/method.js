import fs from 'fs';
import chalk from 'chalk';
import { boilerPlate, extension, languageCode } from "./boilerPlate.js";
import { createSpinner } from "nanospinner";
import chalkAnimation from 'chalk-animation';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

// DISPLAY WELCOME MSG
export const welcome = async () => {
    const text = chalkAnimation.karaoke("Welcome to Lam CLI");
    text.start()
    await sleep()
    text.stop()
}


// VALIDATE COMMAND
function isValid(type, fileName, withCSS) {

    welcome()

    var result = false
    var name = ""
    var fileExt = ""

    extension.forEach(ext => {

        if (fileName.endsWith(ext)) {
            result = true

            fileExt = ext

            const fnameLength = fileName.length
            const extLength = ext.length

            const lastIndex = fnameLength - extLength

            name = fileName.substr(0, lastIndex)
        }
    })

    if (type !== 'c' && type !== 'f' && type !== 'd') {
        result = false
    }

    if (withCSS !== "w-css" && withCSS !== undefined) {
        result = false
    }

    return { result, name, fileExt }
}



// GENERATE SOURCE FILE
export const generateFiles = async (type, fileName, withCSS) => {

    const { result, name, fileExt } = isValid(type, fileName, withCSS)

    const spinner = createSpinner("generating you files ...").start()

    if (result === false) {
        await sleep()
        spinner.error({ text: "Invalid Command" })
        return
    }

    var text = "";   // FOR BOILERPLATE


    // FOR COMPONENT 
    if (type === 'c') {

        if (fileExt === '.tsx' || fileExt === '.jsx' || fileExt === '.js' || fileExt === '.ts') {

            if (withCSS === undefined) {

                text = boilerPlate.REACT_COMPONENT(name)

                // ONLY JS FILE
                fs.writeFile(fileName, text, async (err) => {
                    await sleep()
                    if (err) {
                        spinner.error({ text: "error in generating files" })
                    } else {
                        spinner.success({ text: "files generated successfully" })
                        console.log(chalk.blue("happy coding :)"))
                    }
                });
            }
            else {
                text = boilerPlate.REACT_COMPONENT_CSS(name)

                // JS FILE
                fs.writeFile(fileName, text, async (err) => {

                    await sleep()

                    if (err) {
                        spinner.error({ text: "error in generating files" })
                    } else {
                        spinner.success({ text: "files generated Successfully" })
                        console.log(chalk.blue("happy coding :)"))
                    }
                });

                //CSS FILE
                fs.writeFile(`${name}.css`, '', (err) => {
                });
            }
        }
        else {
            await sleep()
            spinner.error({ text: "invalid file extension ( try : jsx , tsx , js , ts)" })
        }
        return;
    }


    // FOR FILES
    if (type === 'f' && withCSS === undefined) {

        if (fileExt !== '.jsx' && fileExt !== '.tsx') {
            if (fileName.endsWith(".java")) {
                text = boilerPlate.JAVA(name)
            } else {
                const code = languageCode[fileExt]
                text = boilerPlate[code]
            }

            fs.writeFile(fileName, text, async (err) => {
                await sleep()
                if (err) {
                    spinner.error({ text: "error in generating files" })
                } else {
                    spinner.success({ text: "files generated Successfully" })
                    console.log(chalk.blue("happy coding :)"))
                }
            });
        }
        else {
            await sleep()
            spinner.error({ text: "invalid file extension ( try component : c)" })
        }

        return;
    }


    //FOR VANILLA WEB
    if (type === 'd' && fileExt === ".html") {

        text = boilerPlate["WEBSTACK"]

        fs.writeFile(fileName, text, async (err) => {
            await sleep()
            if (err) {
                spinner.error({ text: "error in generating files" })
            } else {
                spinner.success({ text: "files generated Successfully" })
                console.log(chalk.blue("happy coding :)"))
            }
        });

        fs.writeFile("script.js", "", (err) => {
        });

        fs.writeFile("style.css", "", (err) => {
        });

        return;
    }
    else {
        await sleep()
        spinner.error({ text: "invalid file extension ( try : .html )" })
    }
}