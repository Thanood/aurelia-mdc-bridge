// tslint:disable-next-line:no-var-requires
const project = require('../aurelia.json');
import * as gulp from 'gulp';
import * as path from 'path';
import * as minimatch from 'minimatch';
import * as changedInPlace from 'gulp-changed-in-place';

export default function copyFiles(done) {
  if (typeof project.build.copyFiles !== 'object') {
    done();
    return;
  }

  const instruction = getNormalizedInstruction();
  const files = Object.keys(instruction);

  return gulp.src(files)
    .pipe(changedInPlace({ firstPass: true }))
    .pipe(gulp.dest(x => {
      const filePath = prepareFilePath(x.path);
      const key = files.find(f => minimatch(filePath, f));
      return instruction[key];
    }));
}

function getNormalizedInstruction() {
  const files = project.build.copyFiles;
  const normalizedInstruction = {};

  for (const key in files) {
    if (files.hasOwnProperty(key)) {
      normalizedInstruction[path.posix.normalize(key)] = files[key];
    }
  }

  return normalizedInstruction;
}

function prepareFilePath(filePath) {
  let preparedPath = filePath.replace(process.cwd(), '').substring(1);

  // if we are running on windows we have to fix the path
  if (/^win/.test(process.platform)) {
    preparedPath = preparedPath.replace(/\\/g, '/');
  }

  return preparedPath;
}
