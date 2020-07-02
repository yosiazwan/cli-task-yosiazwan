#!/usr/bin/env node

const {program} = require('@caporal/core')

// Simplest program ever: this program does only one thing
program
    .command("lowercase", "Lowercase a sentences")
    .argument("<text>", "Text yang akan di lowercase")
    .action(({ logger, args }) => {
        let text = args.text 
        logger.info(text.toLowerCase())
    })

program
    .command("uppercase", "Uppercase a sentences")
    .argument("<text>", "Text yang akan di uppercase")
    .action(({ logger, args }) => {
        let text = args.text 
        logger.info(text.toUpperCase())
    })

program
    .command("capitalize", "Uppercase a sentences")
    .argument("<text>", "Text yang akan di uppercase")
    .action(({ logger, args }) => {
        let text = args.text
        let capText = text.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();}) 
        logger.info(capText)
    })
// always run the program at the end
program.run()