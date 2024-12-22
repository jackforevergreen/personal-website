// cleanup-dependencies.js
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Function to get all JavaScript/TypeScript files in the project
function getAllFiles(dir, fileList = []) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory() && !filePath.includes('node_modules')) {
            // Recurse into subdirectories, excluding node_modules
            getAllFiles(filePath, fileList);
        } else if (
            stat.isFile() &&
            (file.endsWith('.js') ||
             file.endsWith('.jsx') ||
             file.endsWith('.ts') ||
             file.endsWith('.tsx'))
        ) {
            fileList.push(filePath);
        }
    });

    return fileList;
}

// Function to get all dependencies from package.json
function getDependencies() {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    return {
        ...packageJson.dependencies,
        ...packageJson.devDependencies
    };
}

// Function to check if a package is used in the codebase
function isPackageUsed(packageName, files) {
    const importPatterns = [
        `import.*from.*['"]${packageName}['"]`,
        `require\\(['"]${packageName}['"]\\)`,
        `import ['"]${packageName}['"]`
    ];

    return files.some(file => {
        const content = fs.readFileSync(file, 'utf8');
        return importPatterns.some(pattern => new RegExp(pattern).test(content));
    });
}

// Main function
function findUnusedDependencies() {
    console.log('Analyzing project dependencies...\n');

    const files = getAllFiles('.');
    const dependencies = getDependencies();
    const unusedDependencies = [];

    Object.keys(dependencies).forEach(dep => {
        if (!isPackageUsed(dep, files)) {
            unusedDependencies.push(dep);
        }
    });

    if (unusedDependencies.length === 0) {
        console.log('No unused dependencies found!');
        return;
    }

    console.log('Found the following unused dependencies:');
    unusedDependencies.forEach(dep => console.log(`- ${dep}`));

    // Create uninstall command
    const uninstallCommand = `npm uninstall ${unusedDependencies.join(' ')}`;
    console.log('\nTo remove these dependencies, run:');
    console.log(uninstallCommand);
    
    // Optionally create a backup of package.json
    fs.copyFileSync('package.json', 'package.json.backup');
    console.log('\nCreated backup: package.json.backup');
}

// Run the analysis
findUnusedDependencies();