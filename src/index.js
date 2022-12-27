#!/usr/bin/env node

import { program } from "commander";
import { generateFiles } from './method.js'

program
    .version('1.0.0')
    .parse(process.argv);

program
    .command('g')
    .argument('<Type>', 'f - file , c - component , d - directory')
    .argument('<FileName>', 'Name of file with extension. Example - App.ts')
    .argument('[withCSS]', 'Include CSS with Component')
    .description("Generate Files, Folder and Web Directory")
    .action((type, fname, withCSS) => generateFiles(type, fname, withCSS))

program.parse();