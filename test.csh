#!/bin/csh
set tdate = `date +%Y%m%d -u`
set hour = `date +%H -u`
set min = `date +%M -u`
set dirname = "source_code_backup_${tdate}_${hour}${min}"
mkdir ${dirname}
cp *.json ${dirname}
cp *.html ${dirname}
cp *.js ${dirname}
cp -r public ${dirname}
cp -r src ${dirname}
chmod -R g+w ${dirname}