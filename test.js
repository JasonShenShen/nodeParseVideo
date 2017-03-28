#!/usr/bin/env node

var program = require('commander');

function range (val) {
    return val.split('..').map(Number);
}

function list (val) {
    return val.split(',')
}

//定义参数,以及参数内容的描述program
    .version('0.0.1')
    .usage('[options] [value ...]')
    .option('-m, --message <string>', 'a string argument')
    .option('-i, --integer <n>', 'input a integet argument.', parseInt)
    .option('-f, --float <f>', 'input a float arg', parseFloat)
    .option('-l, --list <items>', 'a list', list)
    .option('-r, --range <a>..<b>', 'a range', range)

//添加额外的文档描述program.on('help', function() {
    console.log('   Examples:')
    console.log('')
    console.log('       # input string, integer and float')
    console.log('       $ ./nodecmd.js -m \"a string\" -i 1 -f 1.01')
    console.log('')

    console.log('       # input range 1 - 3')
    console.log('       $ ./nodecmd.js -r 1..3')
    console.log('')

    console.log('       # input list: [1,2,3]')
    console.log('       $ ./nodecmd.js -l 1,2,3')
    console.log('')
});

//解析commandline arguments
program.parse(process.argv)

var index = require('./index');

//解析commandline arguments
program.parse(process.argv)
console.log(program.message);

//提供了url，直接运行node test.js
//index('http://www.iqiyi.com/v_19rrnphkz4.html','MP4',function(err,data){
//    console.log(data);
//});


index(program.message,'MP4',function(err,data){
    if(err){
        throw err;
    }
    console.log(data);
});
