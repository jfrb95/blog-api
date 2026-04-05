//this file takes all the less files in src/assets/less and turns them into
//  css files in the public folder

const { glob } = require('glob');
const fs = require('fs');
const path = require('path');

const less = require('less');

module.exports = async function() {

  //create the css output folder
  fs.mkdirSync('./public/assets/css', { recursive: true });

  //get all of the less files in an array
  const filePaths = await glob('src/assets/less/**/*.less');
  const lessFiles = filePaths.map((filePath) => ({
    path: filePath,
    content: fs.readFileSync(filePath, 'utf-8'),
  }));

  const processPromises = lessFiles.map(async (file) => {

    try {
      const filename = path.basename(file.path, path.extname(file.path));
      //create the path that the css file will be saved to
      const cssPath = `./public/assets/css/${filename}.css`;

      //This generates the CSS from the less file
      const lessOutput = await less.render(file.content, {
        filename: file.path,
        //a source map allows devtools to point to the intended line in the original less
        //  file when the css has an error. In a real project, this would not be present in
        //  production
        sourceMap: {
          outputSourceFiles: true,
          sourceMapFileInline: true,
        }
      });

      //here we would use a processor such as postcss if we were using one
      const postcssResult = lessOutput;

      //write the CSS into a file
      fs.writeFileSync(cssPath, postcssResult.css);
    } catch (error) {
      console.error(`Error processing ${file.path}:`, error);
    }
  });

  await Promise.all(processPromises);

};

