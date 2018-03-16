export default class File {
  constructor(file) {
    this.file = file
    this.name = file.name
    this.size = file.size
    this.type = file.type
    this.relativePath = file.webkitRelativePath || file.relativePath || ''
    this.lastModified = file.lastModified
    this.lastModifiedDate = file.lastModifiedDate
    this.uploadPercent = 0
    this.uploading = 0

    if (/^image\/*/.test(file.type)) {
      this.url = this.getObjectURL(file)
    }
  }

  getObjectURL(file) {
    let url = null
    if (window.createObjectURL != undefined) {
      url = window.createObjectURL(file)
    } else if (window.URL != undefined) {
      url = window.URL.createObjectURL(file)
    } else if (window.webkitURL != undefined) {
      url = window.webkitURL.createObjectURL(file)
    }
    return url
  }

}