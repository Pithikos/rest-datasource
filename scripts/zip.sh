#! /bin/bash
basename=$(basename $PWD)
latest_version=$(git describe $(git rev-list --tags --max-count=1))
zip_name="${basename}-${latest_version}.zip"

# Create temp dir and copy files
tempdir=$(mktemp -d)
srcpath="${tempdir}/${basename}"
mkdir "$srcpath"
cp -r src/ dist/ LICENSE README.md package.json "$srcpath"

# Zip
echo "Building ${zip_name} from ${srcpath}.."
7z a "${zip_name}" "$srcpath" > /dev/null
