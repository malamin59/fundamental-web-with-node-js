const fs = require("fs");
const path = require("path");

const sourceDir = path.join(__dirname, "output", "my-files");
const organizerDir = path.join(__dirname, "output", "organizer");

const fileTypes = {
  images: [".jpg", ".jpeg", ".png", ".gif", ".svg", ".webp", ".bmp", ".tiff"],

  documents: [".pdf", ".doc", ".docx", ".txt", ".rtf", ".odt", ".md"],

  audio: [".mp3", ".wav", ".ogg", ".flac", ".aac", ".m4a", ".wma"],

  video: [".mp4", ".mkv", ".mov", ".avi", ".wmv", ".flv", ".webm", ".m4v"],

  code: [
    ".js",
    ".ts",
    ".jsx",
    ".tsx",
    ".html",
    ".css",
    ".scss",
    ".php",
    ".py",
    ".java",
    ".c",
    ".cpp",
    ".cs",
    ".rb",
    ".go",
    ".kt",
    ".swift",
    ".sql",
    ".sh",
  ],

  compressed: [".zip", ".rar", ".7z", ".tar", ".gz", ".iso"],

  spreadsheets: [".xls", ".xlsx", ".csv", ".ods"],

  presentations: [".ppt", ".pptx", ".key", ".odp"],

  fonts: [".ttf", ".otf", ".woff", ".woff2"],

  database: [".db", ".sqlite", ".sql", ".mdb", ".accdb", ".json"],

  design: [".psd", ".ai", ".xd", ".fig", ".sketch"],
};

const testFile = [".db", ".sqlite", ".sql", ".mdb", ".accdb", ".json"];

function initializeDirectory() {

  // Create source directory
  if (!fs.existsSync(sourceDir)) {
    fs.mkdirSync(sourceDir, { recursive: true });
  }

  // Create example test files
  testFile.forEach(file => {
    fs.writeFileSync(path.join(sourceDir, file), `Content of ${file}`);
  });

  console.log("my file created!!!!!");

  // Create organizer directory (Fix applied here)
  if (!fs.existsSync(organizerDir)) {
    fs.mkdirSync(organizerDir, { recursive: true });
  }

  // Create sub-category folders inside organizer
  Object.keys(fileTypes).forEach(category => {
    const categoryPath = path.join(organizerDir, category);

    if (!fs.existsSync(categoryPath)) {
      fs.mkdirSync(categoryPath, { recursive: true });
    }
  });

}
initializeDirectory();


function getCategory(filename) {
    const ext  = path.extname(filename).toLowerCase();
    // for(const [category, existsSync] of Object.entries(category))
}