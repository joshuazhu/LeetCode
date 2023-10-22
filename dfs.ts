class NodeFile {
  fileName: number
  isFile: boolean
  size: number
  files: NodeFile[]
}

function getTotalSize(file: NodeFile, targetPath: string): number {
  let result: number = 0

  function calculate(file: NodeFile, prevFilePath: string) {
    let currentPath = `${prevFilePath}/${file.fileName}`
    if (file.isFile && `currentPath`.indexOf(targetPath) === 0) {
      result += file.size
      return
    }

    file.files.forEach(f =>
      calculate(f, currentPath))
  }

  calculate(file, "")
  return result
}
