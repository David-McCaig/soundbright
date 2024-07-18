import fs from "fs";
import path from "path";

function getFoldersRecursive(filePath) {
  const folders = [];

  function shouldIgnoreFolder(folderName) {
    const ignoredPrefixes = ["[", "(", "_", "-"];
    return ignoredPrefixes.some((prefix) => folderName.startsWith(prefix));
  }

  function traverse(currentPath) {
    const files = fs.readdirSync(currentPath, { withFileTypes: true });

    files.forEach((file) => {
      if (file.isDirectory()) {
        const folderName = file.name;
        if (!shouldIgnoreFolder(folderName)) {
          folders.push(folderName);
          traverse(path.join(currentPath, folderName));
        }
      }
    });
  }

  traverse(filePath);
  return folders;
}

// Usage example
const targetPath = path.join(process.cwd(), "src", "app");
const folderNames = getFoldersRecursive(targetPath);

export default function sitemap() {
  const sitemapData = folderNames.map((slug) => ({
    url: "https://www.volume-light.com/" + slug + "/",
    lastModified: new Date(),
  }));

  sitemapData.push({
    url: "https://www.volume-light.com/",
    lastModified: new Date(),
  });

  return sitemapData;
}