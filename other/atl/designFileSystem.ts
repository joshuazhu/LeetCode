class FileSystem {
  pathSet: Set<string>
  pathValueMap: Map<string, number>

  constructor() {
    this.pathSet = new Set<string>()
    this.pathValueMap = new Map<string, number>()
  }

  createPath(path: string, value: number): boolean {
    if (this.pathSet.has(path)) return false

    let paths = path.split("/")
    let parentPath = `${paths.length > 2 ? "" : "/"}${paths.slice(0, paths.length - 1).join('/')}`

    if (this.pathSet.has(parentPath) || parentPath === "/") {
      this.pathSet.add(path)
      this.pathValueMap.set(path, value)
      return true
    }

    return false
  }

  get(path: string): number {
    if (this.pathValueMap.get(path) === undefined) return -1

    return this.pathValueMap.get(path) || -1
  }
}
